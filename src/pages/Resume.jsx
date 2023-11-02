import { Card, Col, Row, Timeline, Button, Space, Typography } from 'antd';
import { CloudDownloadOutlined } from '@ant-design/icons';

const { Text } = Typography;

export default function Resume() {
  const timelineItems = [
    {
      color: 'green',
      children: 'HTML',
    },
    {
      color: 'green',
      children: 'CSS',
    },
    {
      color: 'green',
      children: 'APIs',
    },
    {
      color: 'green',
      children: 'Javascript',
    },
    {
      color: 'green',
      children: 'Node.js',
    },
    {
      color: 'green',
      children: 'JQuery',
    },
    {
      color: 'green',
      children: 'MySql',
    },
    {
      color: 'green',
      children: 'Responsive design',
    },
    {
      color: 'green',
      children: 'MongoDB',
    },
    {
      color: 'green',
      children: 'React',
    },
    {
      color: 'green',
      children: 'REST',
    },
    {
      color: 'green',
      children: 'Bootstrap',
    },
    {
      color: 'green',
      children: 'GraphQL',
    },
  ];

  return (
    <Card
      hoverable
      style={{
        width: '100%',
        padding: '2%',
        margin: '1% 1% 5% 1%',
        overflowY: 'auto',
      }}
      bodyStyle={{
        padding: '1%',
      }}
    >
      <Row>
        <Col span={16} offset={5}>
          <Card hoverable>
            <h1>Resume</h1>
            <Timeline mode='alternate' items={timelineItems}></Timeline>
          </Card>
        </Col>
        <Col span={16} offset={5} style={{ marginTop: '1%' }}>
          <Space direction='vertical'>
            <Text code style={{ fontSize: '20px' }}>
              Link to Resume
            </Text>
          </Space>
          <Button
            type='dashed'
            icon={<CloudDownloadOutlined />}
            size='large'
            href='https://drive.google.com/file/d/1r2N3Io9aWNUNZ6N1WAU6sssMtF0DBlIW/view?usp=drive_link'
          >
            Download Resume
          </Button>
        </Col>
      </Row>
    </Card>
  );
}
