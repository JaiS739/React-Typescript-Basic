import React from "react";
type GreetProps = {
  name: string;
  count?: number;
  isLoggedIn: boolean;
};
const Greet = (props: GreetProps) => {
  const {count=0} = props;
  return (
    <div>
      <h1>
        Hi! from{" "}
        {props.isLoggedIn ? `${props.name} count = ${count}` : "Guest"}
      </h1>
    </div>
  );
};

export default Greet;
