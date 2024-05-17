import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Bagues from './components/Bagues/Bagues';
import Colliers from './components/Colliers/Colliers';
import Montres from './components/Montres/Montres';
import Bracelet from './components/Bracelet/Bracelet';
import BoucleDoreille from './components/BoucleDoreille/BoucleDoreille';
import LoginPage from './components/LoginPage/LoginPage';
import Cart from './components/Cart/Cart';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Category from './components/Category/Category';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', 
      element:<NavBar/>,
      errorElement:<Error/>,
      children:[
        {path: '', element:<Home/>},

        {path: '/productDetail/:id', element:<ProductDetail/>},

        // Au lieu de faire en fct d'une catégorie
        // {path: '/rings/:Ring', element:<Bagues/>},
        // {path: '/bracelet/:Bracelet', element:<Bracelet/>},
        // {path: '/watch/:Watch', element:<Montres/>},
        // {path: '/necklace/:Necklace', element:<Colliers/>},
        // {path: '/earring/:Earring', element:<BoucleDoreille/>},
        {path:'/category/:category', element:<Category/>},

        {path: '/login', element:<LoginPage/>},
        {path: '/cart', element:<Cart/>},
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
