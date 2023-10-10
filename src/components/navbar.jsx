import { Link } from 'react-router-dom';
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
        alignItems: 'center',
        top: 0,
      }}
    >
      <Menu.Item
        key='logo'
        style={{ color: 'white', alignSelf: 'flex-start', marginRight: 'auto' }}
      >
        Logo
      </Menu.Item>

      <Menu.Item key='home' icon={<HomeOutlined />}>
        <Link to='/'>Home</Link>
      </Menu.Item>

      <Menu.Item key='settings' icon={<SettingOutlined />} style={{ float: 'right' }}>
        Settings
      </Menu.Item>

      <Menu.Item key='profile' icon={<UserOutlined />} style={{ float: 'right' }}>
        <Link to='/Profile'>Profile</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
