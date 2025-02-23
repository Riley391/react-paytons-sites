import PokemonQuizThumbnail from "./assets/thumbnails/pokemon-quiz-thumbnail.png";
import FreeCodeCampThumbnail from "./assets/thumbnails/freecodecamp.jpg";
import RandomDailyColorThumbnail from "./assets/thumbnails/random-daily-color.jpg";

const siteList = [
  {
    id: 0,
    title: "Pokémon Quiz",
    routed: false,
    link: "https://pokemonquiz.me",
    thumbnail: PokemonQuizThumbnail,
    year: "2022",
  },
  {
    id: 1,
    title: "freecodecamp",
    routed: false,
    link: "https://freecodecamp.org",
    thumbnail: FreeCodeCampThumbnail,
    year: "2022",
  },
  {
    id: 2,
    title: "Daily Random Color",
    routed: true,
    link: "/daily-random-color",
    thumbnail: RandomDailyColorThumbnail,
    year: "2025",
  },
];

export default siteList;
