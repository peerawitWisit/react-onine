import Footer from './components/Footer';
import Header from './components/Header';
import Logo from './components/Logo';
import './App.css';
import Sidebar from './components/Sidebar';
import Menu from './components/Menu';

function App() {
  return (
    <div className="logo">
      <Logo/>
      <Header/>
      <Footer title="TNI" website="www.google.com" address="bangkok" postcode={12369} isOpen/>
      <Sidebar/>
      <Menu/>
      <Logo/>
    </div>
  );
}

export default App;
