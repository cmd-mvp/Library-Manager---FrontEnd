import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainBook from "./pages/Book/MainBook";
import User from "./pages/User/MainUser";
import UserRegister from "./pages/User/Register";
import GetUser from "./pages/User/GetUser";
import PutUser from "./pages/User/PutUser";
import Redirect from "./pages/User/Redirect";
import DeleteUser from "./pages/User/DeleteUser";
import GetBookId from "./pages/Book/GetBookId";
import PostBook from "./pages/Book/PostBook";
import RedirectBook from "./pages/Book/RedirectBook";
import PutBook from "./pages/Book/PutBook";
import DeleteBook from "./pages/Book/DeleteBook";
import MainCopy from "./pages/Copy/MainCopy";
import GetCopy from "./pages/Copy/GetCopy";
import PostCopy from "./pages/Copy/PostCopy";
import DeleteCopy from "./pages/Copy/DeleteCopy";
import MainRent from "./pages/Rent/MainRent";
import GetRent from "./pages/Rent/GetRent";
import PostRent from "./pages/Rent/PostRent";
import DeleteRent from "./pages/Rent/DeleteRent";

function AppRoutes(){
 return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element = { <Home/> }> </Route>
            <Route path="/book" element = { <MainBook/> }> </Route>
            <Route path="/copy" element = { <MainCopy/> }> </Route>
            <Route path="/getcopy" element = { <GetCopy/> }> </Route>
            <Route path="/deletecopy" element = { <DeleteCopy/> }> </Route>
            <Route path="/postcopy" element = { <PostCopy/> }> </Route>
            <Route path="/getbookid" element = { <GetBookId/> }> </Route>
            <Route path="/postbook" element = { <PostBook/> }> </Route>
            <Route path="/putbook/:id" element = { <PutBook/> }> </Route>
            <Route path="/redirectbook" element = { <RedirectBook/> }> </Route>
            <Route path="/deletebook" element = { <DeleteBook/> }> </Route>
            <Route path="/user" element = { <User/> }> </Route>
            <Route path="/getuser" element = { <GetUser/> }> </Route>
            <Route path="/putuser/:cpf" element = { <PutUser/> }> </Route>
            <Route path="/redirect" element = { <Redirect/> }> </Route>
            <Route path="/register" element = { <UserRegister/> }> </Route>
            <Route path="/deleteuser" element = { <DeleteUser/> }> </Route>
            <Route path="/rent" element = { <MainRent/> }> </Route>
            <Route path="/getrent" element = { <GetRent/> }> </Route>
            <Route path="/postrent" element = { <PostRent/> }> </Route>
            <Route path="/deleterent" element = { <DeleteRent/> }> </Route>
            </Routes>
        </BrowserRouter>
 );   
}

export default AppRoutes;

//ROTAS PARA USAR DEPOIS DE CRIAR AS ENTIDADES QUE EU PRECISO E SEUS RESPECTIVOS COMPONENTES
/*<Route path="/user" element = { <User/> }> </Route>
            <Route path="/rent" element = { <Rent/> }> </Route>
            <Route path="/copy" element = { <Copy/> }> </Route>*/