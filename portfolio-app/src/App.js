import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { createHashRouter,RouterProvider } from 'react-router-dom';
import Myprofile from './Components/Myprofile';
import { Accordion } from '@radix-ui/react-accordion';
function App() {
  const router=createHashRouter([
    {path:"/",
      element:<>
      <Navbar/>
      <Home/>
      </>
    },
    {path:"/myprofile",
      element:<>
      <Navbar/>
      <Myprofile/>
      </>
    }
  ])
  return (
   <>
 <RouterProvider router={router}/>
 {/* <Navbar/>
      <Home/> */}
   </>

  );
}

export default App;
