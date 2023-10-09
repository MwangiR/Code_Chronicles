import { Menu } from 'antd';
import { HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <Menu
      mode='horizontal'
      theme='dark'
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        top: 0,
      }}
    >
      <Menu.Item key='logo' style={{ color: 'white', alignSelf: 'flex-start' }}>
        Logo
      </Menu.Item>

      <Menu.Item key='settings' icon={<SettingOutlined />} style={{ float: 'right' }}>
        Settings
      </Menu.Item>
      <Menu.Item key='profile' icon={<UserOutlined />} style={{ float: 'right' }}>
        Profile
      </Menu.Item>
      <Menu.Item key='home' icon={<HomeOutlined />}>
        Home
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
