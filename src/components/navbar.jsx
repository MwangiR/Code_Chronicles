import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, UserOutlined, BarcodeOutlined } from '@ant-design/icons';

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

      <Menu.Item key='about' icon={<BarcodeOutlined />} style={{ float: 'right' }}>
        <Link to='/'>About</Link>
      </Menu.Item>

      <Menu.Item key='portfolio' icon={<HomeOutlined />}>
        <Link to='/Portfolio'>Portfolio</Link>
      </Menu.Item>

      <Menu.Item key='Contact' icon={<UserOutlined />} style={{ float: 'right' }}>
        <Link to='/Contact'>Contact</Link>
      </Menu.Item>

      <Menu.Item key='resume' icon={<UserOutlined />} style={{ float: 'right' }}>
        <Link to='/Resume'>Resume</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
