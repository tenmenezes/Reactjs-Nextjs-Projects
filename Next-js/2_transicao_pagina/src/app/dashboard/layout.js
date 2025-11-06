import React from "react";

const DahsboardLayout = ({ children }) => {
  return (
    <div>
          <nav className="text-center">Links do dashboard</nav>
          <div>{children}</div>
    </div>
  );
};

export default DahsboardLayout;
