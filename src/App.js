import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

import AppHeader from './components/common/header';
import AppFooter from './components/common/footer';

import { Layout } from 'antd';
import AppHome from './views/appHome';
const { Header, Content, Footer } = Layout;


function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader/>        
      </Header>
      <Content>
        <AppHome/>        
      </Content>
      <Footer>
        <AppFooter/>
      </Footer>
    </Layout>
  );
}

export default App;
