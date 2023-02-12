import React from "react";
import { Link } from "react-router-dom";
import { BiAddToQueue, BiCartAlt } from 'react-icons/bi'
// import {login, logout, onUserStateChange} from  '../api/firebase'
import User from "./User";
import Button from "./ui/Button";
import { useAuthContext } from "../context/AuthContext";

export default function NavBar() {

  const {user, login, logout } = useAuthContext();

  return (
    <header className="flex justify-between border-b border-gray-300 p-4">
      <Link to='/' className="flex items-center text-4xl text-brand">
        <h1>Shoppy</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to='/products'>products</Link>
        {user && <Link to='/cart' className="text-2xl"><BiCartAlt /></Link>}
        {user && user.isAdmin && <Link to='/products/new' className="text-2xl"><BiAddToQueue /></Link>}
        {user && <User user={user} />}
        {user ? <Button onClick={logout} text={'Logout'} /> : <Button onClick={login} text={'Login'} />}
      </nav>
    </header>
  )
}