import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: "76e04bd5-fa42-427c-9574-147dbc7e7a4f",
    title: "The Monk Who Sold His Ferrari",
    author: "Robin Sharma",
    imgLink: '/images/DatabaseImage/61Iz2yy2CKL.jpg',
    price: "1780",
    categoryName: "Development", 
    description: "Curabitur pulvinar nisi sed augue congue, id maximus risus sollicitudin. Nulla accumsan orci nec sodales ullamcorper."
  },
  {
    _id: uuid(),
    title: "Traitors Gate (William Warwick Novels)",
    author: "Jeffrey Archer",
    imgLink: '/images/DatabaseImage/714JNsODlGL.jpg',
    price: "5000",
    categoryName: "Crime",
    description: "Etiam non dui sit amet magna blandit mattis ut at turpis. Duis vehicula enim et diam euismod, non fringilla libero efficitur."
  },
  {
    _id: uuid(),
    title: "Sudoku",
    author: "Wonder House Books",
    imgLink: '/images/DatabaseImage/81AmIToXvnL.jpg',
    price: "3990",
    description: "Aliquam pulvinar nunc quis elit aliquam malesuada.Nulla mollis nibh consequat mauris varius, eget vehicula arcu commodo."
  },
  {
    _id: uuid(),
    title: "Object-Oriented Programming with C++ | 8th Edition",
    author: " E Balagurusamy",
    imgLink: '/images/DatabaseImage/61ynRHlKuML.jpg',
    price: "6370",
    categoryName: "Educational",
    description: "Cras quis velit imperdiet, cursus purus quis, luctus est. Cras vitae neque sit amet lorem fermentum dapibus."
  },
  {
    _id: uuid(),
    title: "Enemy At The Gates",
    author: "Vince Flynn and Kyle Mills ",
    imgLink: '/images/DatabaseImage/81ZTSrbHimL.jpg',
    price: "3320",
    categoryName: "Crime",
    description: "Nullam sed dui ut dui ultrices tincidunt. Nullam condimentum lorem eu tellus pellentesque pellentesque."
  },
  {
    _id: uuid(),
    title: "Pride & Prejudice (Deluxe Hardbound Edition)",
    author: "Jane Austen",
    imgLink: '/images/DatabaseImage/81WF2uHdxiS.jpg',
    price: "4790",
    categoryName: "Fiction",
    description: "Curabitur accumsan tellus bibendum, posuere arcu sit amet, rutrum purus. Donec non tortor sed risus sodales efficitur."
  },
  {
    _id: uuid(),
    title: "Think Straight: Change your thoughts, Change your life",
    author: " Darius Foroux",
    imgLink: '/images/DatabaseImage/71Yb9hJXocL.jpg',
    price: "1090",
    categoryName: "Development",
    description: "Quisque consequat risus id dapibus tincidunt. Praesent consectetur arcu id ornare eleifend."
  },
  {
    _id: uuid(),
    title: "GATE 2024 Electrical Engineering",
    author: "ACE Engineering Academy",
    imgLink: '/images/DatabaseImage/51jc5F0iz4L.jpg',
    price: "6800",
    categoryName: "Educational",
    description: "Nam imperdiet lacus a porta facilisis. Etiam semper ante sed metus aliquet cursus."
  },
  {
    _id: uuid(),
    title: "Harry Potter Box Set: The Complete Collection",
    author: "J.K. Rowling",
    imgLink: '/images/DatabaseImage/81zqe4fNdlL.jpg',
    price: "10000",
    categoryName: "Fiction",
    description: "Curabitur fringilla sem eu nisi tincidunt scelerisque. Nulla ut sapien vel urna facilisis placerat ac id enim."
  },
  {
    _id: uuid(),
    title: "The Complete Novels of Sherlock Holmes",
    author: "Arthur Conan Doyle",
    imgLink: '/images/DatabaseImage/71WZEX98qdL.jpg',
    price: "2500",
    categoryName: "Fiction",
    description: "Fusce faucibus est vitae dictum blandit. Ut porttitor lacus a augue suscipit, id egestas eros rutrum."
  },
  {
    _id: uuid(),
    title: "JAVA: THE COMPLETE REFERENCE ,12TH EDITION",
    author: "Herbert Schildt ",
    imgLink: '/images/DatabaseImage/71AF8eZ5A5L.jpg',
    price: "10000",
    categoryName: "Educational",
    description: "Quisque vitae ipsum nec sapien facilisis volutpat eu at est. In rhoncus libero eu egestas rhoncus."
  },
  {
    _id: uuid(),
    title: "Don't Believe Everything You Think",
    author: " Joseph Nguyen",
    imgLink: '/images/DatabaseImage/716w5Xpj8L.jpg',
    price: "2900",
    categoryName: "Development",
    description: "Pellentesque consectetur felis eu libero condimentum commodo quis sit amet purus."
  },
  {
    _id: uuid(),
    title: "Death Beyond Forbidding Gates",
    author: "Sarah Pinborough ",
    imgLink: '/images/DatabaseImage/51j6rhjFL6S.jpg',
    price: "5930",
    categoryName: "Crime",
    description: "Nulla vitae metus id mauris iaculis lacinia ut semper augue. Proin et velit eget leo tempor bibendum."
  },
  {
    _id: uuid(),
    title: "Rich Dad Poor Dad",
    author: " Robert T. Kiyosaki",
    imgLink: '/images/DatabaseImage/81BE7eeKzAL.jpg',
    price: "6000",
    categoryName: "Development",
    description: "Suspendisse vulputate justo ut lorem rutrum, sed mollis quam ultrices."
  },
  {
    _id: uuid(),
    title: "Night Train at Deoli and Other Stories",
    author: "Ruskin Bond ",
    imgLink: '/images/DatabaseImage/81APABLp4wS.jpg',
    price: "4050",
    categoryName: "Fiction",
    description: "In viverra diam vitae consectetur iaculis."
  },
  {
    _id: uuid(),
    title: "Gates' Bookstore: 1",
    author: "Jamila A Stone",
    imgLink: '/images/DatabaseImage/61DWEmqBkeL.jpg',
    price: "9000",
    categoryName: "Crime",
    description: "Vivamus porttitor orci in justo faucibus congue."
  },
];
