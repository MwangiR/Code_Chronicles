import { Card, Col, Row, Timeline, Button, Space, Typography } from 'antd';
import { CloudDownloadOutlined } from '@ant-design/icons';

const { Text } = Typography;

export default function Resume() {
  return (
    <Row>
      <Col span={16} offset={5}>
        <Card style={{ marginTop: '1%' }}>
          <h1>Resume</h1>
          <Timeline
            items={[
              {
                color: 'green',
                children: 'React',
              },
              {
                color: 'green',
                children: 'Graphql',
              },
            ]}
          ></Timeline>
        </Card>
      </Col>
      <Col span={16} offset={5}>
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
  );
}
