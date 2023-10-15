import { Avatar, Card, Col, Typography } from 'antd';
import { LinkOutlined, GithubOutlined } from '@ant-design/icons';
const { Text } = Typography;
const { Meta } = Card;

export default function PortfolioList(props) {
  return (
    <Col span={18}>
      <Card
        hoverable
        cover={<img alt='example' src='https://picsum.photos/800/400?grayscale' />}
        actions={[
          <a href={props.gitURL} target='_blank' rel='noopener noreferrer' key='github'>
            <GithubOutlined />
          </a>,
          <a href={props.liveURL} target='_blank' rel='noopener noreferrer' key='liveServer'>
            <LinkOutlined />
          </a>,
        ]}
      >
        {/* <img src={props.image} alt='' style={{ display: 'block' }} /> */}
        <Meta
          avatar={<Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel' />}
          title={props.title}
          description='Project'
        />
        <Text
          type='secondary'
          style={{
            marginTop: '1%',
          }}
        >
          {props.description}
        </Text>
      </Card>
    </Col>
  );
}
