import { Card, Col, Row, Space } from 'antd';
import PortfolioList from '../components/PortfolioList';
import { Typography } from 'antd';

const { Title } = Typography;

export default function Home() {
  return (
    <Row>
      <Col span={20} offset={2} style={{ marginTop: '1%' }}>
        <Card>
          <Row>
            <Col offset={3} span={20}>
              <Title level={3}>Portfolio</Title>
              <Card>
                <Row gutter={10}>
                  <PortfolioList message={'Tent'} />
                  <PortfolioList message={'Test'} />
                </Row>

                <Row gutter={10} style={{ marginTop: '1%' }}>
                  <PortfolioList message={'Tent'} />
                  <PortfolioList message={'Test'} />
                </Row>
              </Card>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
