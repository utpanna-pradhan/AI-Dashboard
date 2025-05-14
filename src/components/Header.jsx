import React from "react";

function Header({ username }) {
  return (
    <div>
      <header className="p-4 text-center bg-sky-950 text-white shadow-md">
        <h1 className="text-2xl font-bold">AI Dashboard</h1>
        <p className="mt-1">Welcome back, <i class="fa-solid fa-user ps-2 pe-2"></i> {username} </p>
      </header>
    </div>
  );
}

export default Header;
