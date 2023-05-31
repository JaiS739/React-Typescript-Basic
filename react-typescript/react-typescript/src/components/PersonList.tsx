type personList = {
  name: {
    id: number;
    first: string;
    last: string;
  }[];
};

const PersonList = (props: personList) => {
  return (
    <div>
      {props.name.map((item) => (
        <div key={item.id}>
          <h3>
            {item.first} {item.last}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default PersonList;
