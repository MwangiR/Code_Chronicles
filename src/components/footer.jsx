import { Layout, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Footer } = Layout;
const { Text } = Typography;

function AppFooter() {
  return (
    <Footer style={{ textAlign: 'center', backgroundColor: '#f0f2f5' }}>
      <div>
        <Text>© 2023 Renny Mwangi</Text>
        <br />
        <a href='https://github.com/MwangiR' style={{ marginRight: '10px' }}>
          <GithubOutlined />
          <Text>GitHub</Text>
        </a>
        <a href='https://www.linkedin.com/in/renny-mwangi/' style={{ marginRight: '10px' }}>
          <LinkedinOutlined />
          <Text>LinkedIn</Text>
        </a>
        <Link to='/contact-us'>Contact Us</Link>
      </div>
    </Footer>
  );
}

export default AppFooter;
