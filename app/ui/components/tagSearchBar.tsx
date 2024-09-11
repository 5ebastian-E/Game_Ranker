import React, { useState, ChangeEvent, KeyboardEvent } from 'react';

interface AutocompleteProps {
  availableTags: string[];
  onSelectTags: (tags: string[]) => void;
}

const Autocomplete: React.FC<AutocompleteProps> = ({ availableTags, onSelectTags }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [filteredTags, setFilteredTags] = useState<string[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
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

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const tags = inputValue.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
      onSelectTags(tags);
      setInputValue('');
      setFilteredTags([]);
    }
  };

  return (
    <div className="relative w-80">
      <input
        type="text"
        placeholder="Search tags..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        className="text-black w-full px-3 py-2 border border-gray-300 rounded-lg"
      />

      {filteredTags.length > 0 && (
        <ul className="absolute top-10 left-0 w-full bg-white border border-gray-300 rounded-lg z-10 max-h-52 overflow-y-auto list-none p-0 m-0">
          {filteredTags.map((tag, index) => (
            <li
              key={index}
              onClick={() => {
                const tags = inputValue.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
                if (!tags.includes(tag)) {
                  tags.push(tag);
                }
                onSelectTags(tags);
                setInputValue('');
                setFilteredTags([]);
              }}
              className={`text-black px-3 py-2 cursor-pointer ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-200`}
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
