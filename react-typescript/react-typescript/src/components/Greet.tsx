import React from "react";
type GreetProps = {
  name: string;
  count?: number;
  isLoggedIn: boolean;
};
const Greet = ({name, count=0, isLoggedIn}: GreetProps) => {
  
  return (
    <div>
      <h1>
        Hi! from{" "}
        {isLoggedIn ? `${name} count = ${count}` : "Guest"}
      </h1>
    </div>
  );
};

export default Greet;
