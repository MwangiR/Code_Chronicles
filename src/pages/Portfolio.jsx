import { Card, Col, Row } from 'antd';

export default function Home() {
  return (
    <Row>
      <Col span={20} offset={2} style={{ marginTop: '1%' }}>
        <Card>
          hello
          <Row>
            <Col offset={3} style={{ position: 'absolute', zIndex: 1, width: '600px' }}>
              <Card>
                <h1>Portfolio</h1>
              </Card>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
