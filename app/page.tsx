"use client";
import { useState, ChangeEvent, KeyboardEvent } from 'react';
import Image from 'next/image';

export default function Home() {
  const gameData = [
    `game data ....`
  ];
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showInfo, setShowInfo] = useState(false);

  const handleTagSelect = (tags: string[]) => {
    setSelectedTags(tags);
  };

  const filteredGames = gameData
    .filter(game => 
      game.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(game =>
      selectedTags.length > 0
        ? selectedTags.every(tag => game.tags.includes(tag))
        : true
    )
    .sort((a, b) => b.rating - a.rating);

  const allTags = [...new Set(gameData.flatMap(game => game.tags))];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center justify-center mb-6">
        <h1 className="text-3xl font-bold">Video Game Rankings</h1>
        <button 
          onClick={() => setShowInfo(true)} 
          className="ml-2 p-1 bg-blue-500 text-white rounded-full"
        >
          i
        </button>
      </div>

      {showInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
            <p className="text-black">{`
            10-9 Best Games I have played
            9-8 Extremely good 
            8-7 Very good 
            7-6 Good 
            5-6 Ok 
            4-5 Meh
            3-4 Not good
            2-3 Bad
            1-2 Very bad
            `}</p>
            <button 
              onClick={() => setShowInfo(false)} 
              className="mt-4 bg-red-500 text-white p-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Autocomplete availableTags={allTags} onSelectTags={handleTagSelect} />

      <input
        type="text"
        placeholder="Search games..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded-lg p-2 mb-4 w-64 text-black"
      />

      <div className="mb-4">
        <button 
          onClick={() => setSelectedTags([])} 
          className={`border p-2 mr-2 ${selectedTags.length === 0 ? 'bg-gray-300' : ''}`}
        >
          Clear Tags
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredGames.length > 0 ? (
          filteredGames.map(game => (
            <div key={game.id} className="border rounded-lg p-4 flex flex-col items-center">
              <Image
                src={game.image}
                alt={game.name}
                width={200}
                height={300}
                style={{ objectFit: "cover" }}
                className="mb-4"
              />
              <h2 className="text-xl font-bold">{game.name}</h2>
              <p className="text-lg">Rating: {game.rating}</p>
              <div className="mt-2">
                {game.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-lg">No games found.</p>
        )}
      </div>
    </main>
  );
}

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
