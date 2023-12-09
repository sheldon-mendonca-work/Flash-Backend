import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Fiction",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "Development",
    description:
      "A developmental book is one that is written with the intention to instruct its readers on solving personal problems. ",
  },
  {
    _id: uuid(),
    categoryName: "Crime",
    description:
      "Meant to cause discomfort and fear for both the character and readers, crime writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
  {
    _id: uuid(),
    categoryName: "Educational",
    description:
      "Educational Books means Books that, when published, were intended primarily for sale to educational markets (i.e., K-12, higher education, continuing education, vocational, professional, self-study, and similar educational markets) for use in educational programs.",
  },
];
