import React from "react";

const RecipeView = ({ recipe, deleteRecipe }) => {
  const { name, cuisine, photo, ingredients, preparation } = recipe;
  return (
    <tr>
      <td>{name}</td>
      <td>{cuisine}</td>
      <td>{photo && <img src={photo} />}</td>
      <td className="content_td">
        <p>{ingredients}</p>
      </td>
      <td className="content_td">
        <p>{preparation}</p>
      </td>
      <td>
        <button name="delete" onClick={deleteRecipe}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default RecipeView;
