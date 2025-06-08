// import React from 'react';
// import { AiOutlineSearch } from 'react-icons/ai';
// import { BsFilter } from 'react-icons/bs';

// const SearchBar = ({ querys, setQuerys, handleSearch }) => {
//   return (
//     <div className="relative flex justify-center items-center bg-white py-4 px-3">
//       <input
//         className="border-none outline-none bg-slate-200 rounded-md w-[93%] pl-9 py-3"
//         type="text"
//         placeholder="Search or Start new chat"
//         onChange={(e) => {
//           setQuerys(e.target.value);
//           handleSearch(e.target.value);
//         }}
//         value={querys}
//       />
//       <AiOutlineSearch className="left-5 top-8 absolute" />
//       <div>
//         <BsFilter className="ml-4 text-3xl" />
//       </div>
//     </div>
//   );
// };

// export default SearchBar;



import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";

const SearchBar = ({ querys, setQuerys, handleSearch }) => {
  return (
    <div className="relative flex justify-center items-center py-4 px-3 rounded-md
      bg-gradient-to-r from-blue-500 via-violet-600 to-pink-500 shadow-md"
    >
      <input
        className="border-none  outline-none bg-white rounded-md w-[93%] pl-10 py-3
          placeholder:text-gray-500 placeholder:italic text-gray-800 font-medium"
        type="text"
        placeholder="Search or Start new chat"
        onChange={(e) => {
          setQuerys(e.target.value);
          handleSearch(e.target.value);
        }}
        value={querys}
      />
      <AiOutlineSearch
        className="absolute left-4 text-blue-700"
        size={22}
      />
      <div>
        <BsFilter className="ml-4 text-pink-500 cursor-pointer" size={24} />
      </div>
    </div>
  );
};

export default SearchBar;
