import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserProfile from "./components/UserProfile";
import UserActivity from "./components/UserActivity";

export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/userprofile/:id" element={<UserProfile></UserProfile>}></Route>
      <Route path="/useractivity/:id" element={<UserActivity></UserActivity>}></Route>
    </Routes>
    </BrowserRouter>
  )
}