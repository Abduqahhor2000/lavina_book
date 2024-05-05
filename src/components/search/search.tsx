import { SearchProps } from "./search.props";
import { InputDiv } from "./search.styles";

const Search = ({ value, setValue, ...props }: SearchProps): JSX.Element => {
  const clearField = () => {
    setValue("");
  };

  return (
    <InputDiv>
      <div className={`${value ? "valid" : ""}`}>
        <img className="search" src="whitesearch.svg" />
        <input
          id="search"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="Search for any training you want"
          {...props}
        ></input>
        <img onClick={clearField} className={`exit`} src="exit.svg" />
      </div>
    </InputDiv>
  );
};

export default Search;
