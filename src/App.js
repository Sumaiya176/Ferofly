import logo from './logo.svg';
import './App.css';
import Navbar from './components/HomePage/Navbar/Navbar';
import About from './components/HomePage/About/About';
import Services from './components/HomePage/Services/Services';
import Todo from './components/HomePage/Todo/Todo';
import Home from './components/HomePage/Home/Home';
import OurRoom from './components/HomePage/OurRoom/OurRoom';
import Review from './components/HomePage/Review/Review';
import Map from './components/HomePage/Map/Map';
import Schedule from './components/HomePage/Schedule/Schedule';
import Gallery from './components/HomePage/Gallery/Gallery';
import Footer from './components/HomePage/Footer/Footer';
import Contact from './components/HomePage/Contact/Contact';
import Sidebar from './components/HomePage/Sidebar/Sidebar';
import LiveChat from './components/HomePage/LiveChat/LiveChat';

function App() {
  return (
    <div>
   <Navbar></Navbar>
   <LiveChat></LiveChat>
   <Sidebar></Sidebar>
   <Home></Home>
   <Schedule></Schedule>
   <About></About>
   <OurRoom></OurRoom>
   <Services></Services>
   <Gallery></Gallery>
   <Todo></Todo>
   <Review></Review>
   <Contact></Contact>
   <Map></Map>
   <Footer></Footer>
    </div>
  );
}

export default App;
