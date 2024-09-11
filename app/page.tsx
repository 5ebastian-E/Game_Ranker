"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const gameData = [
    {
      id: 1,
      name: "The Legend of Zelda: Breath of the Wild",
      image: "./zeldabotw.jpg",
      rating: 8.4,
      tags: ["open world", "action-adventure", "exploration"],
      prominentTags: ["open world", "action-adventure"],
      description: "An epic adventure in a massive open world, where players explore and discover mysteries in the land of Hyrule.",
    },
    {
      id: 2,
      name: "God of War",
      image: "./gow2014.jpg",
      rating: 9.2,
      tags: ["story-driven", "action", "hack-and-slash", "mythology"],
      prominentTags: ["action", "mythology"],
      description: "A story-driven game that follows Kratos as he faces challenges inspired by Norse mythology.",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showInfoId, setShowInfoId] = useState<number | null>(null);

  const handleTagSelect = (tags: string[]) => {
    setSelectedTags(tags);
  };

  const filteredGames = gameData
    .filter((game) =>
      game.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((game) =>
      selectedTags.length > 0
        ? selectedTags.every((tag) => game.tags.includes(tag))
        : true
    )
    .sort((a, b) => b.rating - a.rating);

  const allTags = [...new Set(gameData.flatMap((game) => game.tags))];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center justify-center mb-6">
        <h1 className="text-3xl font-bold">Video Game Rankings</h1>
      </div>

      <Autocomplete availableTags={allTags} onSelectTags={handleTagSelect} />

      <input
        type="text"
        placeholder="Search games..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded-lg p-2 mb-4 w-64 text-black"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <div
              key={game.id}
              className="relative border rounded-lg p-4 flex flex-col items-center"
            >
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

              {/* Show prominent tags below the image */}
              <div className="mt-2">
                {game.prominentTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Info Button */}
              <button
                onClick={() => setShowInfoId(game.id)}
                className="absolute top-2 right-2 p-2 bg-blue-500 text-white rounded-full text-sm"
              >
                i
              </button>

              {/* Show full game info when info button is clicked */}
              {showInfoId === game.id && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
                    <h3 className="text-2xl font-bold mb-4">{game.name}</h3>
                    <p className="mb-4">{game.description}</p>

                    <div className="mt-2">
                      <h4 className="font-bold">All Tags:</h4>
                      {game.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setShowInfoId(null)}
                      className="mt-4 bg-red-500 text-white p-2 rounded"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
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

const Autocomplete: React.FC<AutocompleteProps> = ({
  availableTags,
  onSelectTags,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [filteredTags, setFilteredTags] = useState<string[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    const lastTag = value.split(",").pop()?.trim() || "";

    if (lastTag.length > 0) {
      const filtered = availableTags.filter((tag) =>
        tag.toLowerCase().includes(lastTag.toLowerCase())
      );
      setFilteredTags(filtered);
    } else {
      setFilteredTags([]);
    }

    const tags = value
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);
    onSelectTags(tags);
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.trim()) {
      event.preventDefault();

      const tags = inputValue
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0);

      onSelectTags(tags);
      setInputValue("");
      setFilteredTags([]);
    }
  };

  const handleTagClick = (tag: string) => {
    const currentTags = inputValue.split(",").map((t) => t.trim());

    if (currentTags.length > 0) {
      currentTags[currentTags.length - 1] = tag;
    }

    const updatedInputValue = currentTags.join(", ") + ", ";
    setInputValue(updatedInputValue);

    onSelectTags(currentTags.filter((t) => t.length > 0));
    setFilteredTags([]);
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
              onClick={() => handleTagClick(tag)}
              className={`text-black px-3 py-2 cursor-pointer ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              } hover:bg-gray-200`}
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
Key Changes:
Added prominentTags and description properties to the gameData object. You can fill in these values.
Displaying prominentTags under the game image: Only the prominent tags (up to 3) are shown initially.
Added an info button (i) on the top-right of each game card, which toggles a modal displaying the full tags and description of the game.
Modal: When clicking the info button, a modal appears with the full game details, and it can be closed by clicking the "Close" button.
You can now fill the prominentTags








