import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: 'b9c1aee7-b812-4885-a1ce-7b5696f27082',
    firstName: "Kirti",
    lastName: "Singh",
    username: "Kittu@0128",
    password: "aspoghmz.",
    bookmarks: [],
    bio:"",
    backgroundImage:"https://img.freepik.com/free-psd/people-characters-taking-selfie-with-camera_23-2149840190.jpg",
    avatar:"https://cdn.pixabay.com/photo/2022/07/08/18/51/female-7309755_1280.png",
    logged:true,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "2af663d3-2faf-4f04-bd87-82237edf728c",
    firstName: "John",
    lastName: "Deo",
    username: "jo@0128",
    password: "aspoghmz.",
    backgroundImage:"https://img.freepik.com/free-psd/travel-background-composition-with-airplane_23-2149603178.jpg",
    bio:"",
    avatar:"https://img.freepik.com/free-psd/3d-female-character-working-laptop-while-sitting-chair_23-2148938889.jpg",
    logged:false,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id:"2c02b9d6-7d4c-48a4-be5e-50fcabc51dbe",
    firstName: "Jane",
    lastName: "Deo",
    username: "Jane123_",
    password: "aspoghmz.",
    backgroundImage:"https://img.freepik.com/free-psd/happy-traveler-man-riding-luggage-isolated-background-travel-vacation-concept-3d-illustration-cartoon-characters_1150-63048.jpg",
    bio:"",
    avatar:"https://img.freepik.com/free-vector/strong-man-with-muscles-confetti-background_1308-90834.jpg",
    logged:false,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },{
    _id:"2c02b9d6-7d4c-48a4-be5e-50fcabc51rty",
    firstName: "Soli",
    lastName: "Taye",
    username: "tay!23_",
    password: "aspoghmz.",
    backgroundImage:"https://img.freepik.com/free-psd/travel-background-composition-with-backpack_23-2149603154.jpg",
    bio:"",
    avatar:"https://img.freepik.com/free-psd/3d-rendering-backpack-travel-icon_23-2149389097.jpg",
    logged:false,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id:"2c02b9d6-7d4c-48a4-be5e-50fcabc513e4t",
    firstName: "Michel",
    lastName: "T",
    username: "Tuk!23_",
    password: "aspoghmz.",
    backgroundImage:"https://img.freepik.com/free-psd/travel-sales-background_23-2150350125.jpg",
    bio:"",
    avatar:"https://img.freepik.com/free-psd/girl-character-with-baggage-coffee-cup_23-2149838731.jpg",
    logged:false,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
