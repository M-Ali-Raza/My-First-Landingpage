import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './components/Banner';
import Serivces from './components/Serivces';
import Suit from './components/Suit';
import Header from './components/header';
import Location from './components/Location';
import Galary from './components/Galary';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Suit />
      <Serivces />
      <Location />
      <Galary />
      <News />
      <Footer />
    </>
  );
}

export default App;
