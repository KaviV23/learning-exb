// JS implementation
// const Pizza = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, props.name),
//     React.createElement("p", {}, props.description),
//   ]);
// };

// JSX implementation
const Pizza = (props) => {
  return (
    <div className="pizza">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default Pizza;
