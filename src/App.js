import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Auth"
import { AddUserComponent } from './Component/AddUserComponent';
import { ListUserComponent } from './Component/ListAllUsersComponent';
function App() {
  return (
    <BrowserRouter>
          <div>

      <Routes>

        <Route path="/auth" element={<Auth/>}></Route>
        <Route path="/adduser" element={<AddUserComponent/>}  ></Route>
        <Route path="/list" component={ListUserComponent}></Route>
      </Routes>
      </div>
    </BrowserRouter>
  )}

export default App;
