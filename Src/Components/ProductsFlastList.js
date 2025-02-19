// import {StyleSheet, Text, View, Image, FlatList, Dimensions, TouchableOpacity} from 'react-native';
// import React from 'react';

// const {width, height} = Dimensions.get('window');

// // Sample product data
// const productData = [
//   {
//     id: '1',
//     name: 'Nike Dunk Low Retro',
//     rating: '4.7',
//     description: "Men's Shoes, 1 Color",
//     image: require('../Assets/nikeduck.png'),
//     locationIcon: require('../Assets/locationicon.png'),
//     starIcon: require('../Assets/star.png'),
//   },
//   {
//     id: '2',
//     name: 'Adidas Ultraboost',
//     rating: '4.5',
//     description: "Men's Running Shoes",
//     image: require('../Assets/nikeduck.png'),
//     locationIcon: require('../Assets/locationicon.png'),
//     starIcon: require('../Assets/star.png'),
//   },
//   {
//     id: '3',
//     name: 'Puma RS-X',
//     rating: '4.2',
//     description: "Stylish Sneakers",
//     image: require('../Assets/nikeduck.png'),
//     locationIcon: require('../Assets/locationicon.png'),
//     starIcon: require('../Assets/star.png'),
//   },
// ];

// const ProductsSmallScreen = () => {
//   const renderProduct = ({item}) => (
//     <TouchableOpacity>
//     <View style={styles.ProductScreen}>
//       <Image style={styles.myprofileicon} source={item.image} />
//       <View style={styles.ProductInfo}>
//         <Text style={styles.ProductNameText}>{item.name}</Text>
//         <View style={styles.RatingIconAndText}>
//           <Image style={styles.starIcon} source={item.starIcon} />
//           <Text style={styles.RatingText}>{item.rating}</Text>
//         </View>
//       </View>
//       <View style={styles.ProductDescription}>
//         <Image style={styles.LocationIcon} source={item.locationIcon} />
//         <Text style={styles.ProductDescriptionText}>{item.description}</Text>
//       </View>
//     </View>
//     </TouchableOpacity>

//   );

//   return (
//     <View style={styles.mainHead}>
//       <FlatList
//       horizontal
//         data={productData}
//         renderItem={renderProduct}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={styles.flatListContent}
//         showsVerticalScrollIndicator={false}
//       />
//     </View>
//   );
// };

// export default ProductsSmallScreen;

// const styles = StyleSheet.create({
//   mainHead: {
//     flex: 1,
//     // backgroundColor: 'lightblue',
//     paddingVertical: 10,
//   },
//   flatListContent: {
//     // paddingBottom: 20,
//     // marginHorizontal:12
//   },
//   ProductScreen: {
//     alignSelf: 'center',
//     padding: 10,
//     height: height * 0.43,
//     width: width * 0.7,
//     borderRadius: 30,
//     backgroundColor: 'white',
//     marginBottom: 15,
//     marginHorizontal:5
//   },
//   myprofileicon: {
//     height: height * 0.3,
//     width: 'auto',
//     resizeMode: 'cover',
//     borderRadius: 20,
//   },
//   ProductInfo: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 8,
//     marginTop: 10,
//   },
//   ProductNameText: {
//     fontSize: 17,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   RatingIconAndText: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     color: 'black',
//   },
//   starIcon: {
//     height: 25,
//     width: 25,
//   },
//   RatingText: {
//     color: 'black',
//   },
//   ProductDescription: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 5,
//   },
//   LocationIcon: {
//     height: 25,
//     width: 25,
//   },
//   ProductDescriptionText: {
//     fontSize: 16,
//     fontWeight: '400',
//     marginLeft: 2,
//   },
// });

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Image, ActivityIndicator } from 'react-native';

const App = () => {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch shoe data from the API
  const fetchShoes = () => {
    fetch('https://fakestoreapi.com/products/category/men\'s%20shoes')
      .then((response) => response.json())
      .then((data) => {
        setShoes(data); // Save the shoe data
      })
      .finally(() => setLoading(false)); // Stop loading
  };

  // Fetch shoes data when the component mounts
  useEffect(() => {
    fetchShoes();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.title}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={shoes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          numColumns={2} // Display as a grid
          columnWrapperStyle={styles.row}
        />
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#333',
  },
});
