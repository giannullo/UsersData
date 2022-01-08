import react from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { About } from "./Routs/About";
import { Home } from "./Routs/Home";
import { Users } from "./Routs/Users";
import { User } from "./Routs/User";
import {styles} from "./index.css"

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path="users" element={<Users/>}>
            <Route index element={<div>seleccione un usuario</div>} />
            <Route path=":userId" element={<User/>} />
            
            </Route>
            
            <Route path="about" element={<About/>} />
            <Route path="*" element={<Navigate replace to="/" />} />
            </Route> 

    </Routes>
     </BrowserRouter>,document.getElementById("root"));


