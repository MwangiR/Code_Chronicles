import { Row, Col, Typography } from 'antd';
const { Paragraph, Text } = Typography;

export default function About() {
  return (
    <div className='aboutContent'>
      <Row justify='center'>
        <Col span={20} flex={3} style={{ marginTop: '5%' }}>
          <Row>
            <Col span={18} push={6} style={{ padding: '1%' }}>
              <Row>
                <Col>
                  <Typography.Title level={3}>
                    <Text code>Discover</Text>
                  </Typography.Title>

                  <Typography.Title style={{ fontFamily: 'DM Mono, monospace' }}>
                    Hello, I&apos;m a Software developer
                  </Typography.Title>
                  <Paragraph style={{ textAlign: 'justify', lineHeight: '30px' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime officiis
                    explicabo corporis magni id esse voluptas eveniet! Magnam itaque pariatur at
                    quae quam, dolores fugiat fugit provident veritatis eius ex? Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Ipsam tempore exercitationem neque vero
                    in delectus, commodi illum, sapiente minima adipisci rem provident, repellendus
                    officia? Veritatis facere obcaecati est odio delectus? Rem unde saepe suscipit
                    facere, quo non corporis libero ut ipsum dignissimos nihil facilis corrupti
                    numquam harum illo quas exercitationem. Tempora laudantium pariatur nulla vitae
                    eum quas quidem impedit explicabo! Tenetur, quidem, eveniet saepe eligendi
                    repudiandae asperiores mollitia tempora aliquam ratione ullam accusamus eum
                    nobis suscipit laboriosam iste exercitationem, alias ipsam neque veritatis?
                    Vitae vel ex, officia sequi earum ducimus?
                  </Paragraph>
                </Col>
              </Row>
            </Col>
            <Col span={6} pull={18}>
              <section className='profilePhoto'></section>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
