import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Ingrediants from "./../Ingrediants/Ingrediants";

function MealDetails() {
  const { id } = useParams();
  console.log(id);
  const [mealDetails, setMealDetails] = useState([]);
  const [errorMSG, setErrorMSG] = useState("");
  const getMealDetails = async (id) => {
    try {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      setMealDetails(data.meals);
      console.log(data.meals);
      if (data.meals === "Invalid ID") {
        throw new Error("No Meal With This ID!");
      }
    } catch (error) {
      setErrorMSG(error.message);
    }
  };
  useEffect(() => {
    getMealDetails(id);
  }, []);

  return (
    <>
      <div>
        {errorMSG && (
          <h2 className="text-4xl text-center font-bold">{errorMSG}</h2>
        )}
        <h2 className="text-3xl font-bold">{mealDetails[0]?.strMeal}</h2>
        <div className="flex flex-wrap min-h-dvw w-full">
          <div className="w-1/3 p-2">
            <div>
              <img
                className="w-full rounded-3xl"
                src={mealDetails[0]?.strMealThumb}
                alt={mealDetails[0]?.strMeal}
              />
              <div className="flex justify-center items-center pt-5">
                {mealDetails[0]?.strYoutube && (
                  <Link
                    to={mealDetails[0]?.strYoutube}
                    target="blank"
                    class="text-white w-fit inline   bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    YouTube
                  </Link>
                )}
                {mealDetails[0]?.strSource && (
                  <Link
                    to={mealDetails[0]?.strSource}
                    target="blank"
                    class="text-white w-fit inline  bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2 "
                  >
                    Source
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-1/3 p-2 ">
            <p className="font-bold text-xl">
              {mealDetails[0]?.strInstructions}
            </p>
          </div>
          <div className="w-1/3 p-2 bg-white rounded-2xl h-fit">
            <h3 className="text-3xl">Ingrediants</h3>
            <hr className="border-gray-300 my-4 border-2" />
            <div className="flex justify-between">
              <p>{mealDetails[0]?.strIngredient1}</p>
              <p>{mealDetails[0]?.strMeasure1}</p>
            </div>
            <div className="flex justify-between">
              <p>{mealDetails[0]?.strIngredient2}</p>
              <p>{mealDetails[0]?.strMeasure2}</p>
            </div>
            <div className="flex justify-between">
              <p>{mealDetails[0]?.strIngredient3}</p>
              <p>{mealDetails[0]?.strMeasure3}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MealDetails;
