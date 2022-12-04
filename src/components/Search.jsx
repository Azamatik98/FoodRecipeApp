import { useState } from "react";

function Search({ callback = Function.prototype }) {
  const [value, setValue] = useState("");

  const handleKey = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    callback(value);
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          id="search-field"
          placeholder="search"
          onKeyDown={handleKey}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          value={value}
        />
        <button
          className="btn red darken-2"
          onClick={handleKey}
          style={{ position: "absolute", top: 0, right: 0 }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
