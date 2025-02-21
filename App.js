import React, {createContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './Src/navigation/AppNavigator';
import Navigation from './Src/Screens/Navigation';
import MyProfile from './Src/Screens/MyProfile';
import AddToCart from './Src/Screens/AddToCart';
import FullProductScreen from './Src/Screens/FullProductScreen';
import ProductSmallScreen from './Src/Screens/ProductSmallScreen';

export const ProductContext = createContext();

export default function App() {
  const [products, setProducts] = useState(1);
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      <Navigation />
    </ProductContext.Provider>

    // <MyProfile/>
    // <AddToCart/>
  );
}
