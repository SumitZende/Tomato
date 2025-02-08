import Navbar from "./components/navbar";
import Sidebar from './components/sidebar';
import {Route, Routes} from 'react-router-dom'
import AddItem from './pages/AddItem'
import List from "./pages/List";
import Order from "./pages/Order";
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="flex ">
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<AddItem/>}/>
          <Route path='/List' element={<List/>}/>
          <Route path='/order' element={<Order/>}/>
        </Routes>
      </div>
    </div>
  )
}
