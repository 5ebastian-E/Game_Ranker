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
      rating: 9.1,
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
      tags: ['Action', 'FPS', 'Strategy'],
    },
    {
      id: 7,
      name: 'Elden Ring',
      image: './zeldabotw.jpg',
      rating: 9.5,
      tags: ['Adventure', 'Open World'],
    },
    {
      id: 8,
      name: 'CS:GO',
      image: './gow2014.jpg',
      rating: 8.3,
      tags: ['Action', 'Story Driven'],
    },
    {
      id: 9,
      name: 'Cyberpunk 2077',
      image: './reddead2.png',
      rating: 8.8,
      tags: ['Adventure', 'Open World', 'Western'],
    },
    {
      id: 10,
      name: 'Inscryption',
      image: './minecraft.jpg',
      rating: 9.2,
      tags: ['Adventure', 'Open World'],
    },
    {
      id: 11,
      name: 'The Witcher 3',
      image: './subnautica.jpg',
      rating: 8.8,
      tags: ['Open World', 'Story Driven'],
    },
    {
      id: 12,
      name: 'Dark Souls 3',
      image: './valorant.jpg',
      rating: 7.3,
      tags: ['Action', 'FPS', 'Strategy'],
    },
    {
      id: 13,
      name: 'For Honor',
      image: './zeldabotw.jpg',
      rating: 8.3,
      tags: ['Adventure', 'Open World'],
    },
    {
      id: 14,
      name: 'Hollow Knight',
      image: './gow2014.jpg',
      rating: 8,
      tags: ['Action', 'Story Driven'],
    },
    {
      id: 15,
      name: 'Path of Exile',
      image: './reddead2.png',
      rating: 7.8,
      tags: ['Adventure', 'Open World', 'Western'],
    },
    {
      id: 16,
      name: 'Dont Starve Together',
      image: './minecraft.jpg',
      rating: 8.1,
      tags: ['Adventure', 'Open World'],
    },
    {
      id: 17,
      name: 'Warhammer Total War 3',
      image: './subnautica.jpg',
      rating: 8.7,
      tags: ['Open World', 'Story Driven'],
    },
    {
      id: 18,
      name: 'League of Legends',
      image: './valorant.jpg',
      rating: 8.5,
      tags: ['Action', 'FPS', 'Strategy'],
    },
    {
      id: 19,
      name: 'Once Human',
      image: './zeldabotw.jpg',
      rating: 6.9,
      tags: ['Adventure', 'Open World'],
    },
    {
      id: 20,
      name: 'Warframe',
      image: './gow2014.jpg',
      rating: 8.3,
      tags: ['Action', 'Story Driven'],
    },
    {
      id: 21,
      name: 'Portal',
      image: './reddead2.png',
      rating: 9,
      tags: ['Adventure', 'Open World', 'Western'],
    },
    {
      id: 22,
      name: 'Portal 2',
      image: './minecraft.jpg',
      rating: 9.3,
      tags: ['Adventure', 'Open World'],
    },
    {
      id: 23,
      name: 'Age of Mythology',
      image: './subnautica.jpg',
      rating: 9.7,
      tags: ['Open World', 'Story Driven'],
    },
    {
      id: 24,
      name: 'Chained Together',
      image: './valorant.jpg',
      rating: 5,
      tags: ['Action', 'FPS', 'Strategy'],
    },
    {
      id: 25,
      name: 'Baldurs Gate 3',
      image: './zeldabotw.jpg',
      rating: 9.4,
      tags: ['Adventure', 'Open World'],
    },
    {
      id: 26,
      name: 'Apex Legends',
      image: './gow2014.jpg',
      rating: 8.1,
      tags: ['Action', 'Story Driven'],
    },
    {
      id: 27,
      name: 'Brawlhalla',
      image: './reddead2.png',
      rating: 7.1,
      tags: ['Adventure', 'Open World', 'Western'],
    },
    {
      id: 28,
      name: 'Dark and Darker',
      image: './minecraft.jpg',
      rating: 7.6,
      tags: ['Adventure', 'Open World'],
    },
    {
      id: 29,
      name: 'Death must Die',
      image: './subnautica.jpg',
      rating: 7.5,
      tags: ['Open World', 'Story Driven'],
    },
    {
      id: 30,
      name: 'Dishonored',
      image: './valorant.jpg',
      rating: 9,
      tags: ['Action', 'FPS', 'Strategy'],
    },
    {
      id: 31,
      name: 'Green Hell',
      image: './zeldabotw.jpg',
      rating: 8.2,
      tags: ['Adventure', 'Open World'],
    },
    {
      id: 32,
      name: 'Lost in Random',
      image: './gow2014.jpg',
      rating: 9.7,
      tags: ['Action', 'Story Driven'],
    },
    {
      id: 33,
      name: 'SCP Secret Laboratory',
      image: './reddead2.png',
      rating: 9.2,
      tags: ['Adventure', 'Open World', 'Western'],
    },
    {
      id: 34,
      name: 'GTA 5',
      image: './minecraft.jpg',
      rating: 8.8,
      tags: ['Adventure', 'Open World'],
    },
    {
      id: 35,
      name: 'Bioshock',
      image: './subnautica.jpg',
      rating: 8.9,
      tags: ['Open World', 'Story Driven'],
    },
    {
      id: 36,
      name: 'Skyrim',
      image: './valorant.jpg',
      rating: 7.6,
      tags: ['Action', 'FPS', 'Strategy'],
    },
    {
      id: 37,
      name: 'The Legend of Zelda: Twilight Princess',
      image: './zeldabotw.jpg',
      rating: 8.2,
      tags: ['Adventure', 'Open World'],
    },
    {
      id: 38,
      name: 'Overwatch',
      image: './gow2014.jpg',
      rating: 7.9,
      tags: ['Action', 'Story Driven'],
    },
    {
      id: 39,
      name: 'Civisisation 6',
      image: './reddead2.png',
      rating: 7.2,
      tags: ['Adventure', 'Open World', 'Western'],
    },
    {
      id: 40,
      name: 'Slay the Princess',
      image: './minecraft.jpg',
      rating: 8.5,
      tags: ['Adventure', 'Open World'],
    },
    {
      id: 41,
      name: 'Class of 09',
      image: './subnautica.jpg',
      rating: 7.5,
      tags: ['Open World', 'Story Driven'],
    },
    {
      id: 42,
      name: 'The Coffin of Andy and Leyley',
      image: './valorant.jpg',
      rating: 9.5,
      tags: ['Action', 'FPS', 'Strategy'],
    },
    {
      id: 43,
      name: 'Undertale',
      image: './zeldabotw.jpg',
      rating: 8.3,
      tags: ['Adventure', 'Open World'],
    },
    {
      id: 44,
      name: 'Satisfactory',
      image: './gow2014.jpg',
      rating: 7.9,
      tags: ['Action', 'Story Driven'],
    },
    {
      id: 45,
      name: 'Hades',
      image: './reddead2.png',
      rating: 9.1,
      tags: ['Adventure'],
    },
    {
      id: 46,
      name: 'Stardew Valley',
      image: './minecraft.jpg',
      rating: 8.7,
      tags: ['Adventure', 'Open World'],
    },
    {
      id: 47,
      name: 'Fortnite',
      image: './subnautica.jpg',
      rating: 7.8,
      tags: ['FPS', 'Action'],
    },
    {
      id: 48,
      name: 'Rocket League',
      image: './valorant.jpg',
      rating: 8,
      tags: ['Action'],
    },
    {
      id: 49,
      name: 'Only Up',
      image: './gow2014.jpg',
      rating: 5,
      tags: ['Rage'],
    },
    {
      id: 50,
      name: 'It takes two',
      image: './reddead2.png',
      rating: 8.2,
      tags: ['Story Driven', 'Coop'],
    },
    {
      id: 51,
      name: 'Grounded',
      image: './minecraft.jpg',
      rating: 9.4,
      tags: ['Survival', 'Open World'],
    },
    {
      id: 52,
      name: 'Ark',
      image: './subnautica.jpg',
      rating: 7.2,
      tags: ['Open World', 'Survival'],
    },
    {
      id: 53,
      name: 'Dying Light 2',
      image: './valorant.jpg',
      rating: 8.9,
      tags: ['Open World', 'Action', 'Survival', 'Story Driven'],
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
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
    width={200}      // Set the desired width
    height={300}     // Set the desired height
    style={{ objectFit: "cover" }}  // Adjust the image scaling behavior
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
        ))}
      </div>
    </main>
  );
}
