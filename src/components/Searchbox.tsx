import { ChangeEventHandler } from "react";

import "./searchbox.css";

type SearchboxProps = {
  className?: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const Searchbox = ({ onChangeHandler }: SearchboxProps) => {
  return (
    <input
      type="search"
      className="search-box"
      placeholder="search monsters"
      onChange={onChangeHandler}
    />
  );
};

export default Searchbox;
