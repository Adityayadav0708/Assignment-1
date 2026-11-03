import { memo } from "react";

//props - compo reveive data from its parent as props 
function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search by author name..."
      className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
    />
  );
}

//makes react skip re rendering (memo - stops needless re-renders )
export default memo(SearchBar);