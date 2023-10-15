import { Card, Col, Row, Timeline, Button, Space, Typography } from 'antd';
import { CloudDownloadOutlined } from '@ant-design/icons';

const { Text } = Typography;

export default function Resume() {
  return (
    <Card
      hoverable
      style={{
        width: '100%',
        padding: '2%',
        margin: '2% 2% 5% 2%',
      }}
      bodyStyle={{
        padding: '1%',
      }}
    >
      <Row>
        <Col span={16} offset={5}>
          <Card hoverable>
            <h1>Resume</h1>
            <Timeline>
              <Timeline.Item className='timeline-item' color='green'>
                React
              </Timeline.Item>
              <Timeline.Item className='timeline-item' color='green'>
                Graphql
              </Timeline.Item>
            </Timeline>
          </Card>
        </Col>
        <Col span={16} offset={5} style={{ marginTop: '1%' }}>
          <Space direction='vertical'>
            <Text code style={{ fontSize: '20px' }}>
              Link to Resume
            </Text>
          </Space>
          <Button type='dashed' icon={<CloudDownloadOutlined />} size='large'>
            Download Resume
          </Button>
        </Col>
      </Row>
    </Card>
  );
}
