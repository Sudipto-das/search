import React, { useState } from "react";

const SearchExample = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const data = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Jackfruit",
  ];

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filteredArray = data.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filteredArray);
  };

  return (
    <div>
      <h2>Search Example</h2>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearch}
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchExample;
