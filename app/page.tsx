"use client"
import { useState } from 'react';
import Image from 'next/image';
import Autocomplete from './ui/components/tagSearchBar'

export default function Home() {
  const gameData = [
    {
      id: 1,
      name: 'The Legend of Zelda: Breath of the Wild',
      image: './zeldabotw.jpg',
      rating: 8.3,
      tags: ['open world', 'action-adventure', 'exploration'],
    },
    {
      id: 2,
      name: 'God of War',
      image: './gow2014.jpg',
      rating: 9.2,
      tags: ['story-driven', 'action', 'hack-and-slash', 'mythology'],
    },
    {
      id: 3,
      name: 'Red Dead Redemption 2',
      image: './reddead2.png',
      rating: 8.2,
      tags: ['open world', 'story-driven', 'western', 'action'],
    },
    {
      id: 4,
      name: 'Minecraft',
      image: './minecraft.jpg',
      rating: 7.5,
      tags: ['sandbox', 'survival', 'creative', 'multiplayer'],
    },
    {
      id: 5,
      name: 'Subnautica',
      image: './subnautica.jpg',
      rating: 8.1,
      tags: ['open world', 'survival', 'exploration', 'underwater'],
    },
    {
      id: 6,
      name: 'Valorant',
      image: './valorant.jpg',
      rating: 5.8,
      tags: ['multiplayer', 'shooter', 'FPS', 'competitive'],
    },
    {
      id: 7,
      name: 'Elden Ring',
      image: './eldenring.jpg',
      rating: 9.5,
      tags: ['open world', 'souls-like', 'RPG', 'fantasy'],
    },
    {
      id: 8,
      name: 'CS:GO',
      image: './csgo.jpg',
      rating: 7.2,
      tags: ['shooter', 'multiplayer', 'FPS', 'competitive'],
    },
    {
      id: 9,
      name: 'Cyberpunk 2077',
      image: './cyberpunk.jpg',
      rating: 7.6,
      tags: ['open world', 'RPG', 'futuristic', 'story-driven'],
    },
    {
      id: 10,
      name: 'Inscryption',
      image: './inscryption.jpg',
      rating: 9.0,
      tags: ['card game', 'horror', 'puzzle', 'roguelike'],
    },
    {
      id: 11,
      name: 'The Witcher 3',
      image: './witcher3.jpg',
      rating: 7.9,
      tags: ['open world', 'RPG', 'fantasy', 'story-driven'],
    },
    {
      id: 12,
      name: 'Dark Souls 3',
      image: './ds3.jpg',
      rating: 6.5,
      tags: ['souls-like', 'RPG', 'action', 'fantasy'],
    },
    {
      id: 13,
      name: 'For Honor',
      image: './forhonor.jpg',
      rating: 6.4,
      tags: ['multiplayer', 'action', 'melee combat', 'historical'],
    },
    {
      id: 14,
      name: 'Hollow Knight',
      image: './hollowknight.jpg',
      rating: 7.5,
      tags: ['metroidvania', 'platformer', 'action', 'indie'],
    },
    {
      id: 15,
      name: 'Path of Exile',
      image: './poe.jpg',
      rating: 6.8,
      tags: ['RPG', 'action', 'hack-and-slash', 'multiplayer'],
    },
    {
      id: 16,
      name: 'Dont Starve Together',
      image: './dst.jpg',
      rating: 6.5,
      tags: ['survival', 'multiplayer', 'indie', 'crafting'],
    },
    {
      id: 17,
      name: 'Warhammer Total War 3',
      image: './whtw3.jpg',
      rating: 8.6,
      tags: ['strategy', 'RPG', 'fantasy', 'tactical'],
    },
    {
      id: 18,
      name: 'League of Legends',
      image: './lol.jpg',
      rating: 7.0,
      tags: ['MOBA', 'multiplayer', 'competitive', 'strategy'],
    },
    {
      id: 19,
      name: 'Once Human',
      image: './oncehuman.jpg',
      rating: 6.2,
      tags: ['survival', 'RPG', 'horror', 'multiplayer'],
    },
    {
      id: 20,
      name: 'Warframe',
      image: './warframe.png',
      rating: 7.3,
      tags: ['RPG', 'action', 'multiplayer', 'sci-fi'],
    },
    {
      id: 21,
      name: 'Portal',
      image: './portal.jpg',
      rating: 8.1,
      tags: ['puzzle', 'sci-fi', 'first-person'],
    },
    {
      id: 22,
      name: 'Portal 2',
      image: './portal2.jpg',
      rating: 8.2,
      tags: ['puzzle', 'co-op', 'sci-fi', 'first-person'],
    },
    {
      id: 23,
      name: 'Age of Mythology',
      image: './aom.jpg',
      rating: 8.9,
      tags: ['strategy', 'mythology', 'RTS'],
    },
    {
      id: 24,
      name: 'Chained Together',
      image: './chainedtogether.jpg',
      rating: 5,
      tags: ['puzzle', 'indie', 'co-op'],
    },
    {
      id: 25,
      name: 'Baldurs Gate 3',
      image: './bg3.jpg',
      rating: 9.4,
      tags: ['RPG', 'fantasy', 'story-driven', 'co-op'],
    },
    {
      id: 26,
      name: 'Apex Legends',
      image: './apex.jpg',
      rating: 5,
      tags: ['battle royale', 'shooter', 'multiplayer', 'FPS'],
    },
    {
      id: 27,
      name: 'Brawlhalla',
      image: './brawlhalla.jpg',
      rating: 4.9,
      tags: ['fighting', 'multiplayer', 'platformer'],
    },
    {
      id: 28,
      name: 'Dark and Darker',
      image: './dnd.jpg',
      rating: 6.4,
      tags: ['RPG', 'fantasy', 'dungeon crawler', 'multiplayer'],
    },
    {
      id: 29,
      name: 'Death must Die',
      image: './dmd.jpg',
      rating: 5.9,
      tags: ['RPG', 'action', 'roguelike'],
    },
    {
      id: 30,
      name: 'Dishonored',
      image: './dishonored.jpg',
      rating: 7.8,
      tags: ['stealth', 'action', 'RPG', 'story-driven'],
    },
    {
      id: 31,
      name: 'Green Hell',
      image: './gh.jpg',
      rating: 6.8,
      tags: ['survival', 'open world', 'multiplayer'],
    },
    {
      id: 32,
      name: 'Lost in Random',
      image: './lir.jpg',
      rating: 8.9,
      tags: ['adventure', 'action', 'indie', 'story-driven'],
    },
    {
      id: 33,
      name: 'SCP Secret Laboratory',
      image: './scp.jpg',
      rating: 8.1,
      tags: ['horror', 'multiplayer', 'survival'],
    },
    {
      id: 34,
      name: 'GTA 5',
      image: './gta.jpg',
      rating: 7.1,
      tags: ['open world', 'action', 'multiplayer', 'story-driven'],
    },
    {
      id: 35,
      name: 'Bioshock',
      image: './bioshock.jpg',
      rating: 8.5,
      tags: ['shooter', 'sci-fi', 'story-driven', 'horror'],
    },
    {
      id: 36,
      name: 'Skyrim',
      image: './skyrim.jpg',
      rating: 6.1,
      tags: ['open world', 'RPG', 'fantasy', 'story-driven'],
    },
    {
      id: 37,
      name: 'The Legend of Zelda: Twilight Princess',
      image: './tloztp.jpg',
      rating: 6.2,
      tags: ['action-adventure', 'fantasy', 'story-driven'],
    },
    {
      id: 38,
      name: 'Overwatch',
      image: './overwatch.jpg',
      rating: 6.5,
      tags: ['shooter', 'multiplayer', 'FPS', 'team-based'],
    },
    {
      id: 39,
      name: 'Civisisation 6',
      image: './civ6.jpg',
      rating: 5,
      tags: ['strategy', 'turn-based', 'historical'],
    },
    {
      id: 40,
      name: 'Slay the Princess',
      image: './stp.jpg',
      rating: 7.2,
      tags: ['visual novel', 'horror', 'story-driven'],
    },
    {
      id: 41,
      name: 'Class of 09',
      image: './co09.jpg',
      rating: 6,
      tags: ['visual novel', 'comedy', 'indie'],
    },
    {
      id: 42,
      name: 'The Coffin of Andy and Leyley',
      image: './tcoaal.jpg',
      rating: 8.6,
      tags: ['visual novel', 'horror', 'story-driven'],
    },
    {
      id: 43,
      name: 'Undertale',
      image: './undertale.jpg',
      rating: 7,
      tags: ['RPG', 'indie', 'story-driven', 'retro'],
    },
    {
      id: 44,
      name: 'Satisfactory',
      image: './satisfactory.jpg',
      rating: 6,
      tags: ['sandbox', 'simulation', 'building', 'multiplayer'],
    },
    {
      id: 45,
      name: 'Hades',
      image: './hades.jpg',
      rating: 8.5,
      tags: ['roguelike', 'action', 'RPG', 'indie'],
    },
    {
      id: 46,
      name: 'Stardew Valley',
      image: './sdv.jpg',
      rating: 6.6,
      tags: ['simulation', 'farming', 'indie', 'multiplayer'],
    },
    {
      id: 47,
      name: 'Fortnite',
      image: './fortnite.png',
      rating: 7.1,
      tags: ['battle royale', 'multiplayer', 'shooter', 'building'],
    },
    {
      id: 48,
      name: 'Rocket League',
      image: './rl.png',
      rating: 6.3,
      tags: ['sports', 'multiplayer', 'action', 'competitive'],
    },
    {
      id: 49,
      name: 'Only Up',
      image: './onlyup.jpg',
      rating: 4,
      tags: ['platformer', 'indie', 'adventure'],
    },
    {
      id: 50,
      name: 'It takes two',
      image: './ittakestwo.jpg',
      rating: 7.6,
      tags: ['co-op', 'platformer', 'adventure', 'puzzle'],
    },
    {
      id: 51,
      name: 'Grounded',
      image: './grounded.jpg',
      rating: 7.9,
      tags: ['survival', 'multiplayer', 'open world'],
    },
    {
      id: 52,
      name: 'Ark',
      image: './ark.jpg',
      rating: 5.9,
      tags: ['survival', 'open world', 'multiplayer', 'dinosaurs'],
    },
    {
      id: 53,
      name: 'Dying Light 2',
      image: './dl2.jpg',
      rating: 8.1,
      tags: ['open world', 'action', 'survival', 'zombies'],
    },
  ];
const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [showInfo, setShowInfo] = useState(false);

  const handleTagSelect = (tag: string) => {
    setSelectedTag(tag);
  };

  const filteredGames = gameData
    .filter(game => 
      game.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(game =>
      selectedTag ? game.tags.includes(selectedTag) : true
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
            10-9 Best Games i have played
            9-8 extremely good 
            8-7 very good 
            7-6 good 
            5-6 ok 
            4-5 meh
            3-4 not good
            2-3 bad
            1-2 very bad
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

      <Autocomplete availableTags={allTags} onSelectTag={handleTagSelect} />

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
        ))}
      </div>
    </main>
  );
}
