















// // src/SearchBox.js
// import  { useState } from 'react';

// // eslint-disable-next-line react/prop-types
// const Searchbox = ({ onSearch }) => {
//   const [query, setQuery] = useState('');

//   const handleChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSearch(query);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mb-3">
//       <input
//         type="text"
//         value={query}
//         onChange={handleChange}
//         placeholder="Search for news..."
//         className="form-control"
//       />
//       <button type="submit" className="btn btn-primary">Search</button>
//     </form>
//   );
// };

// export default Searchbox;
