import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:"Maldives",
    media:"https://img.freepik.com/free-psd/girl-character-with-baggage-coffee-cup_23-2149838731.jpg",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comment:[],
    firstName: "John",
    lastName: "Deo",
    avatar:"https://img.freepik.com/free-psd/3d-female-character-working-laptop-while-sitting-chair_23-2148938889.jpg",
    username: "jo@0128",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:"Goa Trip",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comment:["Wow","amazing"],
    firstName: "John",
    lastName: "Deo",
    avatar:"https://img.freepik.com/free-psd/3d-female-character-working-laptop-while-sitting-chair_23-2148938889.jpg",
   
    username: "jo@0128",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }, {
    _id: uuid(),
    content:"Bali trip",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comment:[],
    firstName: "John",
    lastName: "Deo",
    avatar:"https://img.freepik.com/free-psd/3d-female-character-working-laptop-while-sitting-chair_23-2148938889.jpg",
    username: "jo@0128",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }, {
    _id: uuid(),
    content:
      "offbeat placss",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    comment:[],
    firstName: "Jane",
    lastName: "Deo",
    avatar:"https://img.freepik.com/free-vector/strong-man-with-muscles-confetti-background_1308-90834.jpg",
    username: "Jane123_",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:"Goa",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comment:[],
    firstName: "Kirti",
    lastName: "Singh",
    avatar:"https://cdn.pixabay.com/photo/2022/07/08/18/51/female-7309755_1280.png",
    username: "Kittu@0128",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:"Cafe Explore",
    likes: {
      likeCount: 1,
      likedBy: ["Kittu@0128"],
      dislikedBy: [],
    },
    comment:[],
    firstName: "John",
    lastName: "Deo",
    avatar:"https://img.freepik.com/free-psd/3d-female-character-working-laptop-while-sitting-chair_23-2148938889.jpg",
    username: "jo@0128",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
