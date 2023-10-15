import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, UserOutlined, BarcodeOutlined } from '@ant-design/icons';

const menuItems = [
  {
    key: 'about',
    icon: <BarcodeOutlined />,
    text: 'About',
    link: '/',
  },
  {
    key: 'portfolio',
    icon: <HomeOutlined />,
    text: 'Portfolio',
    link: '/Portfolio',
  },
  {
    key: 'contact',
    icon: <UserOutlined />,
    text: 'Contact',
    link: '/Contact',
  },
  {
    key: 'resume',
    icon: <UserOutlined />,
    text: 'Resume',
    link: '/Resume',
  },
];

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
        <Link to='/'>Renny</Link>
      </Menu.Item>

      {menuItems.map((item) => (
        <Menu.Item key={item.key} icon={item.icon} style={{ float: 'right' }}>
          <Link to={item.link}>{item.text}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default Navbar;
