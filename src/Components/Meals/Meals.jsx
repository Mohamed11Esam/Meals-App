import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { IoEarth } from "react-icons/io5";
import styles from './Meals.module.css'
function Meals() {
  const [catecories, setCatecories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/list.php?c=list`
      );
      setCatecories(data.meals);
    } catch (error) {
      console.log(error);
    }
  };
  const getMeals = async (selectedCategory) => {
    try {
        setLoading(true);
      const { data } = await axios.get(
        `${selectedCategory === 'ALL'? 'https://www.themealdb.com/api/json/v1/1/search.php?s=':`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`}`
      );
      setMeals(data.meals)
      console.log(meals)
    } catch (error) {
      console.log(error);
    }
    finally{
        setLoading(false);
    }
  };
  useEffect(() => {
    getAllCategories();
  }, []);
  useEffect(() => {
    getMeals(selectedCategory);
  }, [selectedCategory]);

  return (
    <div>
      <h1 className="text-6xl pb-2 font-bold bg-gradient-to-r from-[#F19624] to-[#E1663F] bg-clip-text text-transparent">
        Learn, Cook, Eat Your Food
      </h1>

      <div>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select Category
          </label>
          <select
            id="tabs"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            onChange={()=>{setSelectedCategory(event.target.value)}}
          >
            <option >All</option>
            {catecories.map((cat, index) => (
              <option  key={index}>{cat.strCategory}</option>
            ))}
          </select>
        </div>
        <ul className="hidden text-xl font-medium text-center text-gray-500   sm:flex gap-5 flex-wrap dark:divide-gray-700 dark:text-gray-400 h-fit border-b-1 border-dotted">
          <li className={`${selectedCategory === 'ALL' && 'active '}inline-block catLink px-4 py-2 cursor-pointer border transition-all hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300`} onClick={()=>{setSelectedCategory('ALL')}}>

              All
          </li>
          {catecories.map((cat, index) => (
            <li key={index} className={`${selectedCategory === cat.strCategory && 'active '}inline-block catLink cursor-pointer px-4 py-2  border transition-all hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300`} onClick={()=>{setSelectedCategory(cat.strCategory)}}>
              
                {cat.strCategory}
            </li>
          ))}
        </ul>
      </div>
      <div className="py-10">

      {loading === true ? <ClipLoader color="#F19624" className='mx-auto' /> : <div className="flex flex-wrap">
       {meals.map((meal)=>(
        <div key={meal.idMeal} className="sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-8">

        
            <div className=" text-center meal hover:shadow-xl group  hover:scale-105 duration-300 transition-all bg-white p-12   rounded-[35px]">
                <div>

                <img src={meal.strMealThumb} alt={meal.strMeal} className="w-Full rounded-full mx-auto  group-hover:rotate-[360deg] duration-700 transition-all  drop-shadow-xl  -translate-y-20  shadow-2xl"/>
                </div>
                <h2 className="text-2xl font-bold">{meal.strMeal.split(" ",3).join(" ")}</h2>
                {meal.strArea&&<h3 className="text-green-400"><IoEarth className="inline mr-2" />{meal.strArea}</h3>}
                <Link to={`/mealdetails/${meal.idMeal}`} className="text-white bg-emerald-500 mt-4 bg-secondary hover:bg-emerald-600 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300  px-8 py-2 rounded-full block my-2">View Recipe</Link>
            </div>
            </div>
))}
      </div>
       }
      </div>
    </div>
  );
}

export default Meals;
