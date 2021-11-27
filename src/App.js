import Footer from './components/Footer';
import Header from './components/Header';
import Logo from './components/Logo';

function App() {
  return (
    <>
      <Logo/>
      <Header/>
      <Footer title="TNI" website="www.google.com" address="bangkok" postcode={12369} isOpen/>
      <Logo/>
    </>
  );
}

export default App;
