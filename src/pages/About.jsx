import { useState, useEffect } from 'react';
import { Card, Row, Col, Typography, Avatar, Divider, Input, Button } from 'antd';
import axios from 'axios';

const { Paragraph, Text } = Typography;

export default function About() {
  const [fadeIn, setFadeIn] = useState(false);
  const [bio, setBio] = useState('');
  const [isBioVisible, setBioVisible] = useState(false);
  const [questionAnswer, setQuestionAnswer] = useState('');
  const [riddle, setRiddle] = useState('');
  const [answer, setAnswer] = useState('');
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const bioParagraph = `I am Renny Mwangi, a dedicated Full Stack Software Developer with a master's degree in Computer Science. My skill set includes proficiency in NoSQL, React, Express.js, Node.js, JavaScript, SQL, HTML, and CSS, along with various development tools. I've actively contributed to projects like Advertir, where I leveraged these skills, along with Java and Firebase technologies, to create innovative solutions. I'm a passionate lifelong learner, always eager to explore new horizons in the world of software development.`;

  useEffect(() => {
    const fetchRiddleSync = async () => {
      try {
        const fetchRiddle = await axios.get('https://riddles-api.vercel.app/random');
        const { riddle, answer } = fetchRiddle.data;
        setRiddle(riddle);
        setAnswer(answer);
        console.log('Answer: ', answer);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRiddleSync();
  }, []);

  const shuffleString = (text) => {
    const shuffledText = text
      .split('')
      .sort(() => 0.5 - Math.random())
      .join('');
    setBio(shuffledText);
  };

  const handleQuestion = () => {
    if (questionAnswer.toLocaleLowerCase() === answer.toLocaleLowerCase()) {
      setBioVisible(true);
    }
  };

  useEffect(() => {
    shuffleString(bioParagraph);
    setFadeIn(true);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsAnswerVisible(true);
      setBioVisible(true);
    }, 10000);
    return () => clearTimeout(timeoutId);
  }, [questionAnswer]);

  return (
    <Card
      hoverable
      style={{
        width: '100%',
        padding: '2%',
        margin: '2% 2% 5% 2%',
        opacity: fadeIn ? 1 : 0,
        transition: 'opacity 1s ease-in',
      }}
      bodyStyle={{
        padding: 0,
      }}
    >
      <Row gutter={[16, 16]}>
        <Col xs={{ span: 24 }} sm={{ span: 8 }}>
          <Avatar className='profilePhoto' size={400} />
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 16 }}>
          <Typography.Title level={3}>
            <Text code>/Discover </Text>
          </Typography.Title>

          <Typography.Title style={{ fontFamily: 'DM Mono, monospace' }}>
            / Hello, Im a Software developer /
          </Typography.Title>

          {isBioVisible ? (
            <Paragraph style={{ textAlign: 'justify', lineHeight: '30px' }}>
              {bioParagraph}
            </Paragraph>
          ) : (
            <Paragraph style={{ textAlign: 'justify', lineHeight: '30px' }}>{bio}</Paragraph>
          )}

          <Divider />
          <Col>
            <Typography.Title style={{ fontFamily: 'DM Mono, monospace' }}>
              Unscramble the Bio
            </Typography.Title>
            <Paragraph style={{ textAlign: 'justify', lineHeight: '30px' }}>
              <Text mark>Solve the following to unscramble the bio</Text>
              <br />
              <Text code>Riddle:</Text> {riddle}
            </Paragraph>

            <Input type='text' onChange={(e) => setQuestionAnswer(e.target.value)} />
            <Button
              type='primary'
              shape='round'
              onClick={handleQuestion}
              style={{
                marginTop: '10px',
              }}
            >
              Submit
            </Button>
            <br />
            {isAnswerVisible && <Text code>Answer: {answer}</Text>}
          </Col>
        </Col>
      </Row>
    </Card>
  );
}
