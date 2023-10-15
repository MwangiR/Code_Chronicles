import { useState, useEffect } from 'react';
import { Card, Row, Col, Typography, Avatar } from 'antd';
const { Paragraph, Text } = Typography;

export default function About() {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setFadeIn(true);
  }, []);
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
            / Hello, I&apos;m a Software developer /
          </Typography.Title>

          <Paragraph style={{ textAlign: 'justify', lineHeight: '30px' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime officiis explicabo
            corporis magni id esse voluptas eveniet! Magnam itaque pariatur at quae quam, dolores
            fugiat fugit provident veritatis eius ex? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsam tempore exercitationem neque vero in delectus, commodi illum,
            sapiente minima adipisci rem provident, repellendus officia? Veritatis facere obcaecati
            est odio delectus? Rem unde saepe suscipit facere, quo non corporis libero ut ipsum
            dignissimos nihil facilis corrupti numquam harum illo quas exercitationem. Tempora
            laudantium pariatur nulla vitae eum quas quidem impedit explicabo! Tenetur, quidem,
            eveniet saepe eligendi repudiandae asperiores mollitia tempora aliquam ratione ullam
            accusamus eum nobis suscipit laboriosam iste exercitationem, alias ipsam neque
            veritatis? Vitae vel ex, officia sequi earum ducimus?
          </Paragraph>
        </Col>
      </Row>
    </Card>
  );
}
