// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FullProductScreen from './FullProductScreen';
// import ForgotPassword from './ForgotPassword';
// import SignUp from './SignUp';

// const Tab = createBottomTabNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       {/* <Tab.Navigator
//         // screenOptions={({route}) => ({
//         //   tabBarIcon: ({focused, color, size}) => {
//         //     let iconName;

//         //     if (route.name === 'Home') {
//         //       iconName = focused ? 'home' : 'home-outline';
//         //     } else if (route.name === 'Settings') {
//         //       iconName = focused ? 'settings' : 'settings-outline';
//         //     }

//         //     return <Ionicons name={iconName} size={size} color={color} />;
//         //   },
//         // })}
//         // tabBarOptions={{
//         //   activeTintColor: 'tomato',

//         //   inactiveTintColor: 'gray',
//         // }}
//         > */}
//         <Tab.Navigator>
//         <Tab.Screen
//           name="FullProductScreen"
//           component={FullProductScreen}
//           options={{headerShown: false}}
//         />
//         <Tab.Screen
//           name="ForgotPassword"
//           component={ForgotPassword}
//           options={{headerShown: false}}
//         />
//         <Tab.Screen
//           name="SignUp"
//           component={SignUp}
//           options={{headerShown: false}}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProductScreen = () => {
  const [selectedColor, setSelectedColor] = useState('blue');

  const [selectedSize, setSelectedSize] = useState(41.5);
  const sizes = [38.5, 40.5, 41.5, 42.5];
  const colors = ['blue', 'red', 'yellow', 'green'];
  

  
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="heart-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Product Info */}
      <View style={styles.productContainer}>
        <Text style={styles.title}>Nike Shoes Sneakers</Text>
        <Text style={styles.subtitle}>Men's shoes</Text>
        <Image
          source={require('../Assets/nikeblue.png')} // Replace with your shoe image URL
          style={styles.shoeImage}
        />
      </View>

      {/* Price and Options */}
      <View style={styles.optionsContainer}>
        <View style={styles.priceSection}>
          <Text style={styles.priceLabel}>PRICE</Text>
          <Text style={styles.price}>$189.99</Text>
        </View>
        <View style={styles.colorsSection}>
          <Text style={styles.colorsLabel}>COLORS</Text>
          <View style={styles.colorsContainer}>
            {colors.map((color, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.colorOption,
                  {
                    backgroundColor: color,
                    borderWidth: selectedColor === color ? 2 : 0,
                  },
                ]}
                onPress={() => setSelectedColor(color)}
              />
            ))}
          </View>
        </View>
      </View>

      {/* Size Selection */}

      <View style={styles.sizeContainer}>
      {sizes.map((size, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.sizeOption,
            {
              borderColor: selectedSize === size ? '#000' : 'transparent',
            },
          ]}
          onPress={() => setSelectedSize(size)}>
          <Text style={styles.sizeText}>{size}</Text>
        </TouchableOpacity>
      ))}
    </View>
      {/* Add to Cart */}
      <TouchableOpacity style={styles.cartButton}>
        <Text style={styles.cartButtonText}>Add to cart</Text>
        <Icon name="cart" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a5f09f', // Green background
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
  },
  productContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginBottom: 10,
  },
  shoeImage: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  priceSection: {
    alignItems: 'center',
  },
  priceLabel: {
    fontSize: 14,
    color: '#777',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  colorsSection: {
    alignItems: 'center',
  },
  colorsLabel: {
    fontSize: 14,
    color: '#777',
  },
  colorsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  colorOption: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 5,
    borderColor: '#000',
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  sizeOption: {
    width: 60,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  sizeText: {
    fontSize: 16,
  },
  cartButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 20,
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
});
