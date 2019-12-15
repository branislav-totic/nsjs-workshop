import React from "react";

const Layout = ({ children, title }) => {
  return (
    <div
      style={{
        marginTop: "10px",
        borderTop: "3px solid black"
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
