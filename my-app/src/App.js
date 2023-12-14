
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/loginPages/Home';
import CarouselPage from './components/Carousels.js';
import Container2 from './components/Container2.js';
import Container3 from './components/Container3.js';
import Container4 from './components/Container4.js';
import { Contact } from './components/Enquire.js';
import Subscribe from './components/Subscribe.js';
import Footer from './components/Footer.js';
import Updates from './components/loginPages/Updates.js';
import PathLand from './components/loginPages/PathLand.js';
import Contactme from './components/loginPages/Contactme.js';
import Media from './components/loginPages/Media.js';
import News from './components/loginPages/News.js';
import Morepages from './components/loginPages/Morepages.js';
import Allpages from './components/loginPages/Allpages.js';
import SignIn from './components/loginPages/SignIn.js';
import Sidebar from './components/Sidebar.js';
import Container from 'react-bootstrap/esm/Container.js';
import Row from 'react-bootstrap/esm/Row.js';
import Col from 'react-bootstrap/esm/Col.js';

function App() {
  return (
   
    <div className='App'>
    <Container>
    <BrowserRouter>
    <Row>
    <Col xs={12} md={12} lg={12} ><Sidebar/></Col>
    <Col xs={12} md={12} lg={12} ><CarouselPage/></Col>
    <Col xs={12} md={12} lg={12} > <Container2/></Col>
    <Col xs={12} md={12} lg={12} ><Container3/></Col>
    <Col xs={12} md={12} lg={12} ><Container4/></Col>
    <Col xs={12} md={12} lg={12} ><Contact/></Col>
    <Col xs={12} md={12} lg={12} ><Subscribe /></Col>
    <Col xs={12} md={12} lg={12} > <Footer/></Col>
    </Row>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/updates' element={<Updates/>}></Route>
    <Route path='/pathLandProjects' element={<PathLand/>}/>
    <Route path='/contact' element={<Contactme/>}/>
    <Route path='/media' element={<Media/>}/>
    <Route path='/news' element={<News/>}/>
    <Route path='/morePages' element={<Morepages/>}/>
    <Route path='/allPages' element={<Allpages/>}/>
    <Route path='/SignIn' element={<SignIn/>}></Route>
    </Routes>
    </BrowserRouter>
    </Container>
    </div>
  );
}

export default App;
