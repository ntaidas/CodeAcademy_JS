import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/UI/header/Header';
import Main from './components/pages/main/Main';
import AllGames from './components/pages/allGames/AllGames';
import OneGame from './components/pages/oneGame/OneGame';
import AddGame from './components/pages/addGame/AddGame';
import EditGame from './components/pages/editGame/EditGame';
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Main />}/>
        <Route path="/games">
          <Route path="allGames" element={<AllGames />}/>
          <Route path=":id" element={<OneGame />}/>
          <Route path="addNew" element={<AddGame />}/>
          <Route path="edit/:id" element={<EditGame />}/>
        </Route>
        <Route path="/user">
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;