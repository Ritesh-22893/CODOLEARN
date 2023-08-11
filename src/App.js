import { useState } from 'react';
import './App.css';
import Toolbar from './Components/navigation/Toolbar';
import Sidebar from './Components/navigation/Sidebar';
import Footer from './Components/navigation/Footer';
// import { NavData } from './Components/navigation/NavData';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Contactus from './Pages/Contactus';
import Aboutus from './Pages/Aboutus';
import Courses from './Pages/courses';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [SidebarShow,setSidebarShow]=useState(false)

  return (
    <>
    <Router>
      <div className="">
        <Toolbar setSidebarShow={() => {
          setSidebarShow(!SidebarShow);
        } } />
        {/* <Sidebar SiderbarShow={siderbarshow} setSiderbarshow={set*SiderbarShow} /> */}
        <Sidebar setSidebarShow={() => {
          setSidebarShow(prev => !prev);
        } } title={"new side bar"} SidebarShow={SidebarShow}>
          {/* }}title={"new side bar"} SidebarShow = {SidebarShow}> */}

          Ritesh
        </Sidebar>
      </div>
      {/* Routing */}
      <div>
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Aboutus" element={<Aboutus />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/Courses" element={<Courses />}></Route>
          <Route path="/Contactus" element={<Contactus />}></Route>
        </Routes>
      </div>
    </Router>
    <Footer />
    </>
  );
}

export default App;

// import { useState } from 'react';
// import './App.css';
// import Toolbar from './Components/navigation/Toolbar';
// import Sidebar from './Components/navigation/Sidebar';

// function App() {
//   const [SidebarShow, setSidebarShow] = useState(false);

//   return (
//     <div className="">
//       <Toolbar />
//       <Sidebar
//         setSidebarShow={() => {
//           setSidebarShow(!SidebarShow); // Use ! to toggle the SidebarShow state
//         }}
//         title={"new side bar"}
//         SidebarShow={SidebarShow}
//       >
//         Ritesh
//       </Sidebar>
//     </div>
//   );
// }

// export default App;

