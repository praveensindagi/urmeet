// import logo from './logo.svg';
import './App.css';
import Navabar from './commponets/Navbar/Appbar';
import Course from './commponets/course/Course';
import Footer from './commponets/Footers/Footer';
import Banner from './commponets/Banners/Banner';
import Team from './commponets/Banners/Team';
import Subscription from './commponets/Banners/Subscription';
// import Banner from './commponets/Banners/Banner';


function App() {
  return (
    <>
    <Navabar/>
    <Banner/>
    <Course/>
    <Team/>
    <Subscription/>
    <Footer/>
    
    </>
  );
}

export default App;
