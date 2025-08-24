import React, {createContext, useState} from 'react';
import Navigation from './Src/Screens/Navigation';
import {mystore} from './Src/redux/store/Store';
import {Provider} from 'react-redux';
import TestScreen from './Src/Screens/TestScreen';
import CameraScreen from './Src/Screens/CameraScreen';

// export const ProductContext = createContext(); // for context api

export default function App() {
  // const [products, setProducts] = useState(0); // for context api
  return (
    // <TestScreen />
    <CameraScreen />
    // <Provider store={mystore}>
    //   <Navigation />
    // </Provider>
  );
}
