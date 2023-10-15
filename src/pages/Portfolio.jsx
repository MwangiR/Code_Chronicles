import { Card, Col, Row } from 'antd';
import PortfolioList from '../components/PortfolioList';
// import { Typography } from 'antd';

// const { Text, Title } = Typography;

export default function Home() {
  return (
    <Card
      hoverable
      style={{
        width: '100%',
        padding: '2%',
        margin: '2% 2% 5% 2%',
      }}
      bodyStyle={{
        padding: 0,
      }}
    >
      <Row gutter={16}>
        <Col className='gutter-row' span={8}>
          <div>
            <PortfolioList />
          </div>
        </Col>
        <Col className='gutter-row' span={8}>
          <div>
            <PortfolioList />
          </div>
        </Col>
        <Col className='gutter-row' span={8}>
          <div>
            <PortfolioList />
          </div>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: '1%' }}>
        <Col className='gutter-row' span={8}>
          <div>
            <PortfolioList />
          </div>
        </Col>
        <Col className='gutter-row' span={8}>
          <div>
            <PortfolioList />
          </div>
        </Col>
        <Col className='gutter-row' span={8}>
          <div>
            <PortfolioList />
          </div>
        </Col>
      </Row>
    </Card>
  );
}
