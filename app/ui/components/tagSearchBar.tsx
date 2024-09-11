import { useState } from 'react';

export default function Autocomplete(availableTags: string[]) {
  const [inputValue, setInputValue] = useState('');
  const [filteredTags, setFilteredTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value.length > 0) {
      const filtered = availableTags.filter(tag =>
        tag.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredTags(filtered);
    } else {
      setFilteredTags([]);
    }
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    setInputValue(tag);
    setFilteredTags([]);
  };

  return (
    <div className="relative w-80">
      <input
        type="text"
        placeholder="Search tags..."
        value={inputValue}
        onChange={handleInputChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
      />

      {filteredTags.length > 0 && (
        <ul className="absolute top-10 left-0 w-full bg-white border border-gray-300 rounded-lg z-10 max-h-52 overflow-y-auto list-none p-0 m-0">
          {filteredTags.map((tag, index) => (
            <li
              key={index}
              onClick={() => handleTagClick(tag)}
              className={`px-3 py-2 cursor-pointer ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-200`}
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      {selectedTag && (
        <div className="mt-2 text-green-600">
          <strong>Selected Tag: </strong>{selectedTag}
        </div>
      )}
    </div>
  );
}
