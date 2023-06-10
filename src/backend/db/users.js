import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Kirti",
    lastName: "Singh",
    username: "Kittu@0128",
    password: "aspoghmz.",
    logged:true,
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Deo",
    username: "Kittu@0128",
    password: "aspoghmz.",
    logged:false,
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
