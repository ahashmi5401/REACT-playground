import React from "react";
import Cards from "./Cards.jsx";

const Card = ({task, deleteNote }) => {
  return (
    <Cards task={task} deleteNote={deleteNote} />
  );
};

export default Card;
