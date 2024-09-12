"use client";
import { useState, ChangeEvent, KeyboardEvent } from 'react';
import Image from "next/image";
export default function Home() {
  const gameData = [
    {
      "id": 1,
      "name": "The Legend of Zelda: Breath of the Wild",
      "image": "./zeldabotw.jpg",
      "rating": 8.4,
      "tags": ["open world", "action-adventure", "exploration", "fantasy", "RPG", "puzzle-solving", "combat", "sandbox"],
      "prominentTags": ["open world", "action-adventure", "exploration"],
      "description": "An epic adventure set in a breathtaking open world. Players explore vast landscapes, solve puzzles, and engage in dynamic combat while uncovering the mysteries of Hyrule."
},
{
      "id": 2,
      "name": "God of War",
      "image": "./gow2014.jpg",
      "rating": 9.2,
      "tags": ["story-driven", "action", "hack-and-slash", "mythology", "adventure", "RPG", "combat", "narrative", "fantasy"],
      "prominentTags": ["action", "mythology", "story-driven"],
      "description": "Follow Kratos as he battles mythological creatures and gods in this intense, story-driven action game inspired by Norse legends."
},
{
      "id": 3,
      "name": "Red Dead Redemption 2",
      "image": "./reddead2.png",
      "rating": 8.2,
      "tags": ["open world", "story-driven", "western", "action", "adventure", "exploration", "shooter", "survival"],
      "prominentTags": ["open world", "western", "story-driven"],
      "description": "A cinematic journey through the American frontier, where players experience life as an outlaw in a vast open world full of rich stories and action-packed gameplay."
},
{
      "id": 4,
      "name": "Minecraft",
      "image": "./minecraft.jpg",
      "rating": 7.5,
      "tags": ["sandbox", "survival", "creative", "multiplayer", "crafting", "building", "exploration", "indie", "open world"],
      "prominentTags": ["sandbox", "survival", "creative"],
      "description": "A sandbox survival game where players build, mine, and explore an infinite world, crafting tools and fighting to survive in both single and multiplayer modes."
},
{
      "id": 5,
      "name": "Subnautica",
      "image": "./subnautica.jpg",
      "rating": 8.1,
      "tags": ["open world", "survival", "exploration", "underwater", "crafting", "adventure", "indie", "story-driven", "sandbox"],
      "prominentTags": ["survival", "exploration", "underwater"],
      "description": "Explore the depths of an alien ocean in this underwater survival game, where players gather resources, craft gear, and uncover the secrets of a submerged world."
},
{
      "id": 6,
      "name": "Valorant",
      "image": "./valorant.jpg",
      "rating": 5.8,
      "tags": ["multiplayer", "shooter", "FPS", "competitive", "team-based", "eSports", "tactical", "strategy"],
      "prominentTags": ["multiplayer", "FPS", "competitive"],
      "description": "A tactical, team-based FPS where players compete in high-stakes matches using unique character abilities and precise gunplay in a competitive multiplayer setting."
},
{
      "id": 7,
      "name": "Elden Ring",
      "image": "./eldenring.jpg",
      "rating": 9.5,
      "tags": ["open world", "souls-like", "RPG", "fantasy", "action", "exploration", "story-driven", "combat", "adventure"],
      "prominentTags": ["open world", "souls-like", "RPG"],
      "description": "A dark and challenging RPG set in an expansive, interconnected open world where players battle brutal enemies, solve mysteries, and shape the fate of a mythical land."
},
{
      "id": 8,
      "name": "CS:GO",
      "image": "./csgo.jpg",
      "rating": 7.2,
      "tags": ["shooter", "multiplayer", "FPS", "competitive", "tactical", "eSports", "team-based", "strategy"],
      "prominentTags": ["multiplayer", "shooter", "competitive"],
      "description": "A fast-paced competitive FPS where teams face off in tactical matches, requiring skillful gunplay and strategic coordination to succeed."
},
{
      "id": 9,
      "name": "Cyberpunk 2077",
      "image": "./cyberpunk.jpg",
      "rating": 7.6,
      "tags": ["open world", "RPG", "futuristic", "story-driven", "action", "sci-fi", "adventure", "exploration", "shooter"],
      "prominentTags": ["RPG", "futuristic", "story-driven"],
      "description": "Set in a dystopian future, Cyberpunk 2077 lets players explore a sprawling open world filled with cybernetic enhancements, high-tech weaponry, and a deep, branching narrative."
},
{
      "id": 10,
      "name": "Inscryption",
      "image": "./inscryption.jpg",
      "rating": 9.0,
      "tags": ["card game", "horror", "puzzle", "roguelike", "indie", "narrative", "strategy", "mystery"],
      "prominentTags": ["card game", "horror", "puzzle"],
      "description": "A mind-bending card game that blends horror, roguelike mechanics, and intricate puzzles, taking players on a dark, mysterious narrative journey."
},
    {
      "id": 11,
      "name": "The Witcher 3",
      "image": "./witcher3.jpg",
      "rating": 7.9,
      "tags": ["open world", "RPG", "fantasy", "story-driven", "action", "adventure", "exploration", "combat", "mythology"],
      "prominentTags": ["RPG", "fantasy", "story-driven"],
      "description": "Follow Geralt of Rivia, a monster hunter, on a journey through a massive open world filled with rich stories, complex characters, and intense combat."
},
{
      "id": 12,
      "name": "Dark Souls 3",
      "image": "./ds3.jpg",
      "rating": 6.5,
      "tags": ["souls-like", "RPG", "action", "fantasy", "difficult", "combat", "exploration", "story-driven", "adventure"],
      "prominentTags": ["souls-like", "RPG", "action"],
      "description": "A challenging action RPG where players explore a dark fantasy world, battling fierce enemies and uncovering deep lore in a brutal, interconnected world."
},
{
      "id": 13,
      "name": "For Honor",
      "image": "./forhonor.jpg",
      "rating": 6.4,
      "tags": ["multiplayer", "action", "melee combat", "historical", "competitive", "PvP", "tactical", "fighting"],
      "prominentTags": ["multiplayer", "melee combat", "historical"],
      "description": "A brutal melee combat game where players engage in tactical, close-quarters combat as knights, samurai, and vikings in both single-player and multiplayer modes."
},
{
      "id": 14,
      "name": "Hollow Knight",
      "image": "./hollowknight.jpg",
      "rating": 7.5,
      "tags": ["metroidvania", "platformer", "action", "indie", "exploration", "adventure", "fantasy", "combat", "puzzle"],
      "prominentTags": ["metroidvania", "platformer", "indie"],
      "description": "An action-packed metroidvania set in a hauntingly beautiful underground kingdom, where players explore, fight, and solve puzzles in a handcrafted world."
},
{
      "id": 15,
      "name": "Path of Exile",
      "image": "./poe.jpg",
      "rating": 6.8,
      "tags": ["RPG", "action", "hack-and-slash", "multiplayer", "fantasy", "loot", "PvE", "indie", "free-to-play"],
      "prominentTags": ["action", "RPG", "hack-and-slash"],
      "description": "A dark and gritty action RPG where players battle hordes of enemies, customize their character builds, and collect powerful loot in a vast multiplayer world."
},
{
      "id": 16,
      "name": "Don't Starve Together",
      "image": "./dst.jpg",
      "rating": 6.5,
      "tags": ["survival", "multiplayer", "indie", "crafting", "sandbox", "co-op", "exploration", "adventure", "strategy"],
      "prominentTags": ["survival", "multiplayer", "crafting"],
      "description": "A multiplayer survival game where players must work together to gather resources, build shelters, and fend off monsters in a dark and whimsical world."
},
{
      "id": 17,
      "name": "Warhammer Total War 3",
      "image": "./whtw3.jpg",
      "rating": 8.6,
      "tags": ["strategy", "RPG", "fantasy", "tactical", "RTS", "war", "turn-based", "multiplayer", "army-building"],
      "prominentTags": ["strategy", "fantasy", "tactical"],
      "description": "A massive strategy game set in the Warhammer universe, where players command vast armies and engage in tactical battles across a richly detailed fantasy world."
},
{
      "id": 18,
      "name": "League of Legends",
      "image": "./lol.jpg",
      "rating": 7.0,
      "tags": ["MOBA", "multiplayer", "competitive", "strategy", "team-based", "eSports", "PvP", "fantasy", "action"],
      "prominentTags": ["MOBA", "multiplayer", "competitive"],
      "description": "A highly competitive team-based MOBA where players control unique champions and work together to destroy the enemy's base in intense, strategic battles."
},
{
      "id": 19,
      "name": "Once Human",
      "image": "./oncehuman.jpg",
      "rating": 6.2,
      "tags": ["survival", "RPG", "horror", "multiplayer", "crafting", "PvE", "sci-fi", "open world", "exploration"],
      "prominentTags": ["survival", "RPG", "horror"],
      "description": "A survival horror RPG where players explore a post-apocalyptic world, battling mutated creatures, scavenging resources, and crafting to survive."
},
{
      "id": 20,
      "name": "Warframe",
      "image": "./warframe.png",
      "rating": 7.3,
      "tags": ["RPG", "action", "multiplayer", "sci-fi", "shooter", "space", "loot", "PvE", "exploration"],
      "prominentTags": ["action", "multiplayer", "sci-fi"],
      "description": "A fast-paced multiplayer action RPG set in a futuristic universe where players control powerful warriors, engage in space battles, and complete missions across the solar system."
},
{
      "id": 21,
      "name": "Portal",
      "image": "./portal.jpg",
      "rating": 8.1,
      "tags": ["puzzle", "sci-fi", "first-person", "platformer", "single-player", "narrative", "adventure", "strategy"],
      "prominentTags": ["puzzle", "sci-fi", "first-person"],
      "description": "A first-person puzzle game where players use a portal gun to solve intricate challenges and navigate a mysterious facility while unraveling a dark story."
},
{
      "id": 22,
      "name": "Portal 2",
      "image": "./portal2.jpg",
      "rating": 8.2,
      "tags": ["puzzle", "co-op", "sci-fi", "first-person", "adventure", "strategy", "platformer", "narrative"],
      "prominentTags": ["puzzle", "co-op", "sci-fi"],
      "description": "A mind-bending co-op puzzle game that expands upon the original with new mechanics and a witty, story-driven experience set in a futuristic facility."
},
{
      "id": 23,
      "name": "Age of Mythology",
      "image": "./aom.jpg",
      "rating": 8.9,
      "tags": ["strategy", "mythology", "RTS", "fantasy", "war", "multiplayer", "tactical", "history", "army-building"],
      "prominentTags": ["strategy", "mythology", "RTS"],
      "description": "An RTS set in a world of myth and legend, where players control ancient civilizations and harness the power of the gods to wage war and conquer opponents."
},
{
      "id": 24,
      "name": "Chained Together",
      "image": "./chainedtogether.jpg",
      "rating": 5,
      "tags": ["puzzle", "indie", "co-op", "platformer", "adventure", "strategy", "multiplayer"],
      "prominentTags": ["puzzle", "co-op", "indie"],
      "description": "A co-op puzzle platformer where two players must work together while chained together, using their unique abilities to solve puzzles and navigate tricky levels."
},
{
      "id": 25,
      "name": "Baldur's Gate 3",
      "image": "./bg3.jpg",
      "rating": 9.4,
      "tags": ["RPG", "fantasy", "story-driven", "co-op", "turn-based", "adventure", "exploration", "combat", "dungeons"],
      "prominentTags": ["RPG", "fantasy", "story-driven"],
      "description": "An epic RPG set in the Dungeons & Dragons universe, where players engage in deep storytelling, tactical combat, and exploration in a fantasy world."
},
{
      "id": 26,
      "name": "Apex Legends",
      "image": "./apex.jpg",
      "rating": 5,
      "tags": ["battle royale", "shooter", "multiplayer", "FPS", "team-based", "eSports", "tactical", "competitive"],
      "prominentTags": ["battle royale", "FPS", "multiplayer"],
      "description": "A fast-paced battle royale where teams of players drop into a map, loot weapons, and compete to be the last squad standing using unique character abilities."
},
{
      "id": 27,
      "name": "Brawlhalla",
      "image": "./brawlhalla.jpg",
      "rating": 4.5,
      "tags": ["fighting", "multiplayer", "platformer", "action", "competitive", "eSports", "indie", "PvP"],
      "prominentTags": ["fighting", "multiplayer", "platformer"],
      "description": "A free-to-play platform fighting game where players battle it out in fast-paced matches, each controlling unique characters with special abilities."
},
    {
      "id": 28,
      "name": "Dark and Darker",
      "image": "./dnd.jpg",
      "rating": 6.4,
      "tags": ["RPG", "fantasy", "dungeon crawler", "multiplayer"],
      "prominentTags": ["RPG", "dungeon crawler", "multiplayer"],
      "description": "A fantasy dungeon crawler where players delve into dark dungeons, battle monsters, and collect loot, all while engaging with other players in a multiplayer experience."
},
{
      "id": 29,
      "name": "Death Must Die",
      "image": "./dmd.jpg",
      "rating": 5.9,
      "tags": ["RPG", "action", "roguelike"],
      "prominentTags": ["action", "roguelike", "RPG"],
      "description": "A roguelike action RPG where players fight against waves of enemies, enhance their skills, and try to defeat the ultimate foe: Death itself."
},
{
      "id": 30,
      "name": "Dishonored",
      "image": "./dishonored.jpg",
      "rating": 7.8,
      "tags": ["stealth", "action", "RPG", "story-driven"],
      "prominentTags": ["stealth", "action", "story-driven"],
      "description": "A first-person stealth action game where players control a supernatural assassin on a quest for revenge, using a mix of stealth, combat, and magic."
},
{
      "id": 31,
      "name": "Green Hell",
      "image": "./gh.jpg",
      "rating": 6.8,
      "tags": ["survival", "open world", "multiplayer"],
      "prominentTags": ["survival", "open world", "multiplayer"],
      "description": "A survival game set in the Amazon rainforest, where players must fend off hunger, disease, and predators while exploring a vast, dangerous world."
},
{
      "id": 32,
      "name": "Lost in Random",
      "image": "./lir.jpg",
      "rating": 8.9,
      "tags": ["adventure", "action", "indie", "story-driven"],
      "prominentTags": ["adventure", "indie", "story-driven"],
      "description": "An action-adventure game where players navigate a gothic fantasy world ruled by chance, using dice-based mechanics to determine their fate."
},
{
      "id": 33,
      "name": "SCP: Secret Laboratory",
      "image": "./scp.jpg",
      "rating": 8.1,
      "tags": ["horror", "multiplayer", "survival"],
      "prominentTags": ["horror", "multiplayer", "survival"],
      "description": "A multiplayer horror game where players take on roles in an SCP facility and must either escape, contain anomalies, or survive against other players."
},
{
      "id": 34,
      "name": "GTA 5",
      "image": "./gta.jpg",
      "rating": 7.1,
      "tags": ["open world", "action", "multiplayer", "story-driven"],
      "prominentTags": ["open world", "action", "multiplayer"],
      "description": "An open-world action game where players live out criminal careers in a sprawling, dynamic world filled with missions, heists, and multiplayer mayhem."
},
{
      "id": 35,
      "name": "Bioshock",
      "image": "./bioshock.jpg",
      "rating": 8.5,
      "tags": ["shooter", "sci-fi", "story-driven", "horror"],
      "prominentTags": ["shooter", "sci-fi", "horror"],
      "description": "A first-person shooter set in the underwater dystopia of Rapture, blending horror, storytelling, and dynamic combat in a unique retro-futuristic setting."
},
{
      "id": 36,
      "name": "Skyrim",
      "image": "./skyrim.jpg",
      "rating": 6.1,
      "tags": ["open world", "RPG", "fantasy", "story-driven"],
      "prominentTags": ["open world", "RPG", "fantasy"],
      "description": "An epic open-world RPG where players explore a vast fantasy world, engage in combat, magic, and crafting, and follow an extensive main questline."
},
{
      "id": 37,
      "name": "The Legend of Zelda: Twilight Princess",
      "image": "./tloztp.jpg",
      "rating": 6.2,
      "tags": ["action-adventure", "fantasy", "story-driven"],
      "prominentTags": ["action-adventure", "fantasy", "story-driven"],
      "description": "An action-adventure game where players follow Link on a quest to save the kingdom of Hyrule from dark forces, filled with puzzles, combat, and exploration."
},
{
      "id": 38,
      "name": "Overwatch",
      "image": "./overwatch.jpg",
      "rating": 6.5,
      "tags": ["shooter", "multiplayer", "FPS", "team-based"],
      "prominentTags": ["shooter", "FPS", "team-based"],
      "description": "A fast-paced multiplayer team-based shooter where players control unique heroes, each with special abilities, and work together to complete objectives."
},
{
      "id": 39,
      "name": "Civilization 6",
      "image": "./civ6.jpg",
      "rating": 5,
      "tags": ["strategy", "turn-based", "historical"],
      "prominentTags": ["strategy", "turn-based", "historical"],
      "description": "A turn-based strategy game where players build and expand civilizations, manage resources, and engage in diplomacy and warfare to become the dominant power."
},
{
      "id": 40,
      "name": "Slay the Princess",
      "image": "./stp.jpg",
      "rating": 7.2,
      "tags": ["visual novel", "horror", "story-driven"],
      "prominentTags": ["visual novel", "horror", "story-driven"],
      "description": "A narrative-driven visual novel where players face moral choices in a haunting tale involving a princess, with branching paths and disturbing outcomes."
},
{
      "id": 41,
      "name": "Class of 09",
      "image": "./co09.jpg",
      "rating": 6,
      "tags": ["visual novel", "comedy", "indie"],
      "prominentTags": ["visual novel", "comedy", "indie"],
      "description": "A comedic visual novel that takes players through the absurd and often hilarious scenarios of high school life, filled with quirky characters and unexpected twists."
},
{
      "id": 42,
      "name": "The Coffin of Andy and Leyley",
      "image": "./tcoaal.jpg",
      "rating": 8.6,
      "tags": ["visual novel", "horror", "story-driven"],
      "prominentTags": ["visual novel", "horror", "story-driven"],
      "description": "A dark and emotionally charged visual novel where players uncover a disturbing narrative about two characters, Andy and Leyley, trapped in a grim fate."
},
{
      "id": 43,
      "name": "Undertale",
      "image": "./undertale.jpg",
      "rating": 7,
      "tags": ["RPG", "indie", "story-driven", "retro"],
      "prominentTags": ["RPG", "indie", "story-driven"],
      "description": "An indie RPG where players navigate a world of monsters, making choices that affect the story and its characters in unique and emotional ways."
},
{
      "id": 44,
      "name": "Satisfactory",
      "image": "./satisfactory.jpg",
      "rating": 6,
      "tags": ["sandbox", "simulation", "building", "multiplayer"],
      "prominentTags": ["sandbox", "simulation", "building"],
      "description": "A factory-building simulation game where players construct and optimize production lines on an alien planet, expanding their factories with automation and exploration."
},
{
      "id": 45,
      "name": "Hades",
      "image": "./hades.jpg",
      "rating": 8.5,
      "tags": ["roguelike", "action", "RPG", "indie"],
      "prominentTags": ["roguelike", "action", "RPG"],
      "description": "A fast-paced roguelike where players take on the role of Zagreus, the son of Hades, battling through the underworld in a quest to escape, with fluid combat and storytelling."
},
{
      "id": 46,
      "name": "Stardew Valley",
      "image": "./sdv.jpg",
      "rating": 6.6,
      "tags": ["simulation", "farming", "indie", "multiplayer"],
      "prominentTags": ["simulation", "farming", "multiplayer"],
      "description": "A farming simulation game where players can grow crops, raise animals, and engage with the local community, all while building and managing their own farm."
},
{
      "id": 47,
      "name": "Fortnite",
      "image": "./fortnite.png",
      "rating": 7.1,
      "tags": ["battle royale", "multiplayer", "shooter", "building"],
      "prominentTags": ["battle royale", "shooter", "building"],
      "description": "A fast-paced battle royale game where players fight to be the last person standing while constructing defensive structures and engaging in combat."
},
{
      "id": 48,
      "name": "Rocket League",
      "image": "./rl.png",
      "rating": 6.3,
      "tags": ["sports", "multiplayer", "action", "competitive"],
      "prominentTags": ["sports", "multiplayer", "competitive"],
      "description": "A high-octane, competitive sports game where players control rocket-powered cars to score goals in a soccer-like arena, combining action and strategy."
},
{
      "id": 49,
      "name": "Only Up",
      "image": "./onlyup.jpg",
      "rating": 4,
      "tags": ["platformer", "indie", "adventure"],
      "prominentTags": ["platformer", "indie", "adventure"],
      "description": "A challenging platformer where players ascend ever-taller obstacles, aiming to reach the top while overcoming physics-based puzzles and hazards."
},
{
      "id": 50,
      "name": "It Takes Two",
      "image": "./ittakestwo.jpg",
      "rating": 7.6,
      "tags": ["co-op", "platformer", "adventure", "puzzle"],
      "prominentTags": ["co-op", "platformer", "puzzle"],
      "description": "A cooperative platformer where two players work together to solve puzzles, traverse diverse environments, and overcome challenges to save a relationship."
},
{
      "id": 51,
      "name": "Grounded",
      "image": "./grounded.jpg",
      "rating": 7.9,
      "tags": ["survival", "multiplayer", "open world"],
      "prominentTags": ["survival", "multiplayer", "open world"],
      "description": "A multiplayer survival game where players are shrunk to the size of insects and must work together to survive in a dangerous backyard environment."
},
{
      "id": 52,
      "name": "Ark",
      "image": "./ark.jpg",
      "rating": 5.9,
      "tags": ["survival", "open world", "multiplayer", "dinosaurs"],
      "prominentTags": ["survival", "open world", "dinosaurs"],
      "description": "An open-world survival game where players tame dinosaurs, build bases, and explore a vast, prehistoric world, all while surviving environmental hazards."
},
{
      "id": 53,
      "name": "Dying Light 2",
      "image": "./dl2.jpg",
      "rating": 8.1,
      "tags": ["open world", "action", "survival", "zombies"],
      "prominentTags": ["open world", "action", "survival"],
      "description": "A fast-paced open-world action game set in a zombie apocalypse, where players use parkour and combat skills to survive and explore a decaying city."
},
    {
      id: 54,
      name: 'Might and Magic Heroes 6',
      image: './noimage.png',
      rating: 5,
      tags: ['strategy', 'turn-based', 'RPG', 'fantasy'],
      prominentTags: ['strategy', 'RPG', 'fantasy'],
      description: 'A turn-based strategy game set in a fantasy world where players command armies and explore the vast world in strategic campaigns.'
    },
    {
      id: 55,
      name: 'Warhammer 40k Boltgun',
      image: './noimage.png',
      rating: 5,
      tags: ['shooter', 'action', 'warhammer', 'sci-fi'],
      prominentTags: ['shooter', 'warhammer', 'sci-fi'],
      description: 'An action-packed shooter set in the grim Warhammer 40k universe, featuring futuristic weapons and intense combat.'
    },
    {
      id: 56,
      name: 'PvZ Garden Warfare',
      image: './noimage.png',
      rating: 5,
      tags: ['shooter', 'multiplayer', 'tower defense', 'comedy'],
      prominentTags: ['shooter', 'multiplayer', 'tower defense'],
      description: 'A quirky third-person shooter where players battle in gardens with plants and zombies in a fun and competitive multiplayer mode.'
    },
    {
      id: 57,
      name: 'Kingdom 2 Crowns',
      image: './noimage.png',
      rating: 5,
      tags: ['strategy', 'pixel art', 'indie', 'co-op'],
      prominentTags: ['strategy', 'pixel art', 'co-op'],
      description: 'A beautiful pixel-art strategy game where players build and defend their kingdom, with co-op gameplay at its core.'
    },
    {
      id: 58,
      name: 'Sims 4',
      image: './noimage.png',
      rating: 5,
      tags: ['simulation', 'life simulation', 'building', 'sandbox'],
      prominentTags: ['simulation', 'life simulation', 'building'],
      description: 'A life simulation game where players create and control characters, building homes, relationships, and careers in an open sandbox environment.'
    },
    {
      id: 59,
      name: 'Team Fortress 2',
      image: './noimage.png',
      rating: 5,
      tags: ['shooter', 'multiplayer', 'team-based', 'comedy'],
      prominentTags: ['shooter', 'multiplayer', 'team-based'],
      description: 'A team-based multiplayer shooter with a quirky cast of characters, offering fast-paced combat in a variety of unique game modes.'
    },
    {
      id: 60,
      name: 'Spore',
      image: './noimage.png',
      rating: 5,
      tags: ['simulation', 'sandbox', 'evolution', 'creative'],
      prominentTags: ['simulation', 'sandbox', 'evolution'],
      description: 'A simulation game where players guide the evolution of a species from microscopic organisms to spacefaring civilizations.'
    },
    {
      id: 61,
      name: 'Starwars Battlefront 2',
      image: './noimage.png',
      rating: 5,
      tags: ['shooter', 'multiplayer', 'star wars', 'sci-fi'],
      prominentTags: ['shooter', 'star wars', 'multiplayer'],
      description: 'A large-scale multiplayer shooter set in the Star Wars universe, featuring iconic locations, heroes, and intense space and ground battles.'
    },
    {
      id: 62,
      name: 'Minecraft Dungeons',
      image: './noimage.png',
      rating: 5,
      tags: ['dungeon crawler', 'action', 'multiplayer', 'fantasy'],
      prominentTags: ['dungeon crawler', 'action', 'multiplayer'],
      description: 'An action-packed dungeon crawler set in the Minecraft universe, with cooperative multiplayer gameplay and procedurally generated levels.'
    },
    {
      id: 63,
      name: 'Divinity 2',
      image: './noimage.png',
      rating: 5,
      tags: ['RPG', 'fantasy', 'story-driven', 'action'],
      prominentTags: ['RPG', 'fantasy', 'story-driven'],
      description: 'An epic fantasy RPG with deep storytelling, tactical combat, and a rich world filled with quests and character development.'
    },
    {
      id: 64,
      name: 'Dauntless',
      image: './noimage.png',
      rating: 5,
      tags: ['RPG', 'action', 'multiplayer', 'fantasy'],
      prominentTags: ['RPG', 'action', 'multiplayer'],
      description: 'A multiplayer RPG where players team up to hunt down massive Behemoths in a fantasy world filled with dangerous creatures.'
    },
    {
      id: 65,
      name: 'Dungeon Defender 2',
      image: './noimage.png',
      rating: 5,
      tags: ['tower defense', 'RPG', 'multiplayer', 'fantasy'],
      prominentTags: ['tower defense', 'RPG', 'multiplayer'],
      description: 'A blend of action RPG and tower defense where players defend their dungeons from waves of enemies with strategic building and combat.'
    },
    {
      id: 66,
      name: 'Terraria',
      image: './noimage.png',
      rating: 5,
      tags: ['sandbox', 'adventure', 'survival', 'building'],
      prominentTags: ['sandbox', 'adventure', 'survival'],
      description: 'A 2D sandbox adventure game where players explore, build, and survive in a procedurally generated world filled with enemies and treasures.'
    },
    {
      id: 67,
      name: 'The Forest',
      image: './noimage.png',
      rating: 5,
      tags: ['survival', 'horror', 'open world', 'multiplayer'],
      prominentTags: ['survival', 'horror', 'open world'],
      description: 'A survival horror game where players must scavenge and build to survive against hostile creatures in a dangerous forest.'
    },
    {
      id: 68,
      name: 'Sons of the Forest',
      image: './noimage.png',
      rating: 5,
      tags: ['survival', 'horror', 'open world', 'multiplayer'],
      prominentTags: ['survival', 'horror', 'multiplayer'],
      description: 'The sequel to The Forest, this game continues the survival horror experience, with improved mechanics and multiplayer features.'
    }
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
                <div className="z-50 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md">
                    <h3 className="text-2xl font-bold mb-4">{game.name}</h3>
                    <p className="mb-4">{game.description}</p>
                    <p className="mb-4">This Description was AI Generated</p>

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
