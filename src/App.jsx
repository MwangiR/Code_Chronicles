import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import Navbar from './components/navbar';
import BottomNav from './components/footer';
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className='container'>
      <Header>
        <Navbar />
      </Header>

      <Content>
        <section>
          <Outlet />
        </section>
      </Content>

      <Footer>
        <BottomNav />
      </Footer>
    </Layout>
  );
}

export default App;
