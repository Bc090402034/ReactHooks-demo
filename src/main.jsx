import { StrictMode } from 'react'
import {createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App1 from './App1.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Home, {About, Contact} from './components/Home';
import NotFound from './components/NotFoundError.jsx'
import Layout from './Layout.jsx'

createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<Layout />}>
  //       <Route index element={<Home />} />  {/* Idex make default page to show at <Outlet />  tag in Layout */}
  //       <Route path="about" element={<About />} />
  //       <Route path="contact" element={<Contact />} />
  //       {/*If the route is not correct thent it will show the Page not Found 404 Error*/ }
  //       <Route path="*" element={<NotFound />} />
  //     </Route>
  //   </Routes>
  // </BrowserRouter>



  // <BrowserRouter>
  // <Routes>
  //   <Route path="/" element={<App1 />} />
  // </Routes>
  // </BrowserRouter>

  <StrictMode>
    <App />
    {/* <App1 /> */}
  </StrictMode>,
)
