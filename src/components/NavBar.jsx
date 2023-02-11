import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { BiAddToQueue, BiCartAlt } from 'react-icons/bi'
import {login, logout, onUserStateChange} from  '../api/firebase'
import User from "./User";

export default function NavBar() {

  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user)=>{
      setUser(user);
    })
  }, []);

  const handleLogin = () => {
    login().then(setUser);
  };

  const handleLogout = () => {
    logout().then(setUser);
  };

  return (
    <header className="flex justify-between border-b border-gray-300 p-4">
      <Link to='/' className="flex items-center text-4xl text-brand">
        <h1>홈</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to='/products'>products</Link>
        <Link to='/products/new' className="text-2xl"><BiAddToQueue /></Link>
        <Link to='/cart' className="text-2xl"><BiCartAlt /></Link>
        {user && <User user={user} />}
        {user ? <button onClick={handleLogout}>Logout</button> : <button onClick={handleLogin}>Login</button>}
      </nav>
    </header>
  )
}