import React, {createContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './Src/navigation/AppNavigator';
import Navigation from './Src/Screens/Navigation';
import MyProfile from './Src/Screens/MyProfile';
import AddToCart from './Src/Screens/AddToCart';
import FullProductScreen from './Src/Screens/FullProductScreen';
import ProductSmallScreen from './Src/Screens/ProductSmallScreen';
import TestScreen from './Src/Screens/TestScreen';
import Notifications from './Src/Screens/Notifications';
import FavoriteScreen from './Src/Screens/FavouriteScreen';
import { mystore } from './Src/redux/store/Store';
import {Provider} from 'react-redux'; 

// export const ProductContext = createContext(); // for context api

export default function App() {
  // const [products, setProducts] = useState(0); // for context api
  return (
    // <ProductContext.Provider value={{ products, setProducts }}> // for context api
      //  <Navigation/>
  //  </ProductContext.Provider>// for context api

<Provider store={mystore}>
  <Navigation/>
</Provider>
  );
}
