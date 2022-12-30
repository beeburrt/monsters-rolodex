import "./searchbox.css";

const Searchbox = (props) => {
  return (
    <input
      type="search"
      className="search-box"
      placeholder="search monsters"
      onChange={props.onChangeHandler}
    />
  );
};

export default Searchbox;
