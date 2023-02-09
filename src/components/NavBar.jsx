import React from "react";
import { Link } from "react-router-dom";
import { BiAddToQueue, BiCartAlt } from 'react-icons/bi'

export default function NavBar() {
  return (
    <header className="flex justify-between border-b border-gray-300 p-4">
      <Link to='/' className="flex items-center text-4xl text-brand">
        <h1>홈</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to='/products'>products</Link>
        <Link to='/products/new' className="text-2xl"><BiAddToQueue /></Link>
        <Link to='/cart' className="text-2xl"><BiCartAlt /></Link>
        <button>Lonin</button>
      </nav>
    </header>
  )
}