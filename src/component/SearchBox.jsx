import { useState } from "react";
import { IoSearch } from "react-icons/io5";
// eslint-disable-next-line react/prop-types
function SearchBox({ onSearch }) {
  const [query, setQuery] = useState("");

  const changeHandle = (event) => {
    let data = event.target.value;
    setQuery(data);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    onSearch(query);
  };
  return (
    <div className="w-full  justify-center flex  h-[100px] ">
      <form className=" " onSubmit={submitHandler}>
        <input
          className="w-[340px] relative text-center h-[40px] rounded-lg border border-3 border-black"
          type="text"
          value={query}
          placeholder="search news"
          onChange={changeHandle}
        />
        <div
          onClick={submitHandler}
          className="cursor-pointer font-bold absolute top-[7rem] sm:top-[7.4rem] left-[20rem] sm:left-[56rem] bg-none h-[40px] w-12 text-black text-2xl"
        >
          <IoSearch className="text-2xl" />
        </div>
      </form>
    </div>
  );
}

export default SearchBox;
