import React from "react";
function Title({ children, style }) {
  return (
    <>
      {/* <h1 style={{...style}}>{children}</h1> */}
      <h1 style={{ ...style }} dangerouslySetInnerHTML={{ __html: children }} />
    </>
  );
}

export default Title;
