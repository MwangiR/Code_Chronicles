import { Avatar, Card, Col } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;

export default function PortfolioList() {
  return (
    <Col span={18}>
      <Card
        hoverable
        cover={
          <img
            alt='example'
            src='http://www.shadowsphotography.co/wp-content/uploads/2017/12/photography-01-800x400.jpg'
          />
        }
        actions={[
          <SettingOutlined key='setting' />,
          <EditOutlined key='edit' />,
          <EllipsisOutlined key='ellipsis' />,
        ]}
      >
        {/* <img src={props.image} alt='' style={{ display: 'block' }} /> */}
        <Meta
          avatar={<Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel' />}
          title='Card title'
          description='This is the description'
        />
      </Card>
    </Col>
  );
}
