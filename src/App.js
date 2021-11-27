import Footer from './components/Footer';
import Header from './components/Header';
import Logo from './components/Logo';
import './App.css';

function App() {
  return (
    <div className="logo">
      <Logo/>
      <Header/>
      <Footer title="TNI" website="www.google.com" address="bangkok" postcode={12369} isOpen/>
      <Logo/>
    </div>
  );
}

export default App;
