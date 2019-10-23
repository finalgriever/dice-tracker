import React from "react";

function Layout({ children }) {
  let incrementor = 0;
  return (
    <div>
      {children.map(child => (
        <div key={incrementor}>{child}</div>
      ))}
    </div>
  );
}

export default Layout;
