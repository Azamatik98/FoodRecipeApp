import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getFilteredCategory } from "../api";
import MealList from "../components/MealList";
import Preloader from "../components/Preloader";

function Category() {
  const [meals, setMeals] = useState([]);
  const { name } = useParams();
  const { goBack } = useHistory();

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <button className="btn red darken-2" onClick={goBack}>
        Go Back
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
}

export default Category;
