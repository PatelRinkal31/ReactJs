// import 'bootstrap/dist/css/bootstrap.min.css';

// API Call and CRUD operation
// import CallApi from './APIData/CallApi';
// import Fetchdata from './APIData/Fetchdata';


// import Counter from './component/Counter.js';
// import Hello from "./component/Hello";
// import Profile from "./component/Profile";
// import Message from "./component/Message";
// import Resume from './component/Resume.js';
// import FunctionEvent from './component/FunctionEvent.js';
// import ClassEvent from "./component/ClassEvent";
// import FunctionCounter from './component/FunctionCounter.js';
// import ConditionComponent from "./component/ConditionComponent";
// import ConditionComponent1 from "./component/ConditionComponent1";
// import InputData from "./component/InputData"; //Ineterview Q and A from Parth Soni
// import Product from "./component/Product";
// import Product1 from "./component/Product1";
// import ArrayFruitsLIst from "./ArrayFruitsList";
// import APICall from "./component/APICall";
// import NestedArrayListMap33 from "./component/NestedArrayListMap33";
// import ArrayMapList33 from "./component/ArrayMapList33";
// import BootStrapTable from "./component/BootStrapTable";
// import Form from "./component/Form";

// React Router start
import {BrowserRouter, Route, Routes,Navigate} from 'react-router-dom';
import Home from './RouterComponent/Home';
import About from './RouterComponent/About';
import NavBar from './RouterComponent/NavBar';
import ContactUs from './RouterComponent/ContactUs';
import PhotoGallary from './RouterComponent/PhotoGallary';
import Page404 from './RouterComponent/Page404';
import User from './RouterComponent/User';
import Filter from './RouterComponent/Filter';
import Company1 from './RouterComponent/Company1';
import Contact1 from './RouterComponent/Contact1';
import Chanel1 from './RouterComponent/Chanel1';
import Login from './RouterComponent/Login';
import CallApi from './APIData/CallApi';

// React Router End
export default function App() {
  return ( 
    <div className="App">
     {/* <Hello/> */}
      {/* <h1>Hello</h1>   */}
      {/* <Message messagecontent ='This is props in functional '/> */}
      {/* <h2>Start editing to see some magic happen!</h2> */}
      {/* <Profile name='Rinkal' city='Junagadh' age = '30'>
        <h1>This is Children Elemnt</h1>
      </Profile> */}
      {/* <Counter></Counter> */}
      {/* <Resume name='Jay DwarikaDhish'/> */}
      {/* <FunctionEvent/> */}
      {/* <ClassEvent/> */}
      {/* <FunctionCounter/> */}
      {/* <ConditionComponent/> */}
      {/* <ConditionComponent1/> */}
      {/* <Product/> */}
      {/* <InputData/> */}
      {/* <Product1/> */}
      {/* <ArrayFruitsLIst/> */}
      {/* <Form/> */}
      {/* <ArrayMapList33/> */}
      {/* <NestedArrayListMap33/> */}
      {/* <APICall/> */}
      {/* <BootStrapTable/> */}
      {/* <CallApi/> */}

      <BrowserRouter> 
      <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path="/About" element={<About/>}></Route>
          <Route path='/User/:id/:name/:city/:country' element={<User/>}/>
       
          <Route path='/ContactUs/' element={<ContactUs/>}>
              <Route path='Company1' element={<Company1/>}/>
              <Route path='Chanel1' element={<Chanel1/>}/>
              <Route path='Contact1' element={<Contact1/>}/>
          </Route>
          <Route path='/PhotoGallary' element={<PhotoGallary/>}></Route> 
         <Route path='/*' element={<Page404/>}></Route> 
          <Route path='/Filter' element={<Filter/>}></Route>
          <Route path='/*' element={<Navigate to="/"></Navigate>}></Route>
        </Routes>
       </BrowserRouter> 

       {/* API Call Start */}
       {/* <CallApi/> */}
       {/* <Fetchdata/>  */}
    </div>
  );
}
