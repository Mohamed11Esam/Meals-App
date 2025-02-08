
import Layout from './Components/Layout/Layout';
import Meals from './Components/Meals/Meals';
import Area from './Components/Area/Area';
import Ingrediants from './Components/Ingrediants/Ingrediants';
import MealDetails from './Components/MealDetails/MealDetails';
import NotFound from './Components/NotFound/NotFound';
import { RouterProvider } from 'react-router-dom';
import { createHashRouter } from 'react-router-dom';


let routes = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Meals /> },
      { path: "area", element: <Area /> },
      { path: "ingrediants", element: <Ingrediants /> },
      { path: "mealdetails/:id", element: <MealDetails /> },
      { path: "notfound", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes}></RouterProvider>;

}

export default App;
