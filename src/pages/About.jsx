import { Row, Col } from 'antd';

export default function About() {
  return (
    <div className='aboutContent'>
      <Row justify='center'>
        <Col span={20} flex={3}>
          <h1 style={{ fontFamily: 'DM Mono, monospace' }}>Hello, I&apos;m a Software developer</h1>
        </Col>
      </Row>
    </div>
  );
}
