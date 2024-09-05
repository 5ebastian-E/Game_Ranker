"use client"
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const gameData = [
    {
      id: 1,
      name: 'The Legend of Zelda: Breath of the Wild',
      image: './zeldabotw.jpg',
      rating: 8.5,
      tags: ['Adventure', 'Open World'],
    },
    {
      id: 2,
      name: 'God of War',
      image: './gow2014.jpg',
      rating: 9.2,
      tags: ['Action', 'Story Driven'],
    },
    {
      id: 3,
      name: 'Red Dead Redemption 2',
      image: './reddead2.png',
      rating: 9.3,
      tags: ['Adventure', 'Open World', 'Western'],
    },
    {
      id: 4,
      name: 'Minecraft',
      image: './minecraft.jpg',
      rating: 8.5,
      tags: ['Adventure', 'Open World'],
    },
    {
      id: 5,
      name: 'Subnautica',
      image: './subnautica.jpg',
      rating: 8.3,
      tags: ['Open World', 'Story Driven'],
    },
    {
      id: 6,
      name: 'Valorant',
      image: './valorant.jpg',
      rating: 6,
      tags: ['Action'],
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
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
      <h1 className="text-3xl font-bold mb-6">Video Game Rankings</h1>

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
          All
        </button>
        {allTags.map(tag => (
          <button 
            key={tag} 
            onClick={() => toggleTag(tag)} 
            className={`border p-2 mr-2 ${selectedTags.includes(tag) ? 'bg-gray-300' : ''}`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredGames.map(game => (
          <div key={game.id} className="border rounded-lg p-4 flex flex-col items-center">
            <Image
              src={game.image}
              alt={game.name}
              width={200}
              height={300}
              className="mb-4"
            />
            <h2 className="text-xl font-bold">{game.name}</h2>
            <p className="text-lg">Rating: {game.rating}</p>
            <div className="mt-2">
              {game.tags.map(tag => (
                <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
