import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  // const [rating, setRating] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe({ name, cuisine, photo, ingredients, preparation });
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              ></input>
            </td>
            <td>
              <input
                name="cuisine"
                placeholder="Cuisine"
                value={cuisine}
                onChange={(event) => setCuisine(event.target.value)}
              />
            </td>
            <td>
              <input
                name="photo"
                type="url"
                placeholder="URL"
                value={photo}
                onChange={(event) => setPhoto(event.target.value)}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                value={ingredients}
                placeholder="Ingredients"
                onChange={(event) => setIngredients(event.target.value)}
              />
            </td>
            <td>
              <textarea
                name="preparation"
                value={preparation}
                placeholder="Preparation"
                onChange={(event) => setPreparation(event.target.value)}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
