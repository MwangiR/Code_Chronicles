import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

import Navbar from './components/navbar';
import BottomNav from './components/footer';
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className='container' id='app'>
      <Header>
        <Navbar />
      </Header>

      <Content className='pageContent'>
        <Outlet />
      </Content>

      <Footer>
        <BottomNav />
      </Footer>
    </Layout>
  );
}

export default App;
