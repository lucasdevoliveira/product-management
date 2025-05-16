import React from "react";
import * as T from "./types";

const Header: React.FC<T.HeaderProps> = () => {
  return (
    <header className="w-full bg-blue-500 p-4">
      <div>
        <h1 className="text-white font-semibold text-2xl">Minha loja</h1>
      </div>
    </header>
  );
};

export default Header;
