type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

export const Person = ({name}:PersonProps) => {
  
  return (
    <div>
      {" "}
      <h1>
        {name.first} {name.last}
      </h1>
    </div>
  );
};
