import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TestScreen from './TestScreen'
const Dummy = ({navigation}) => {
  return (
    <View>
<Button title='click me ' onPress={()=>navigation.navigate('TestScreen')}/>
    </View>
  )
}

export default Dummy

const styles = StyleSheet.create({})





// import React, { useState, useEffect } from 'react';
// import { Image, StyleSheet, Text, View, ScrollView, Dimensions, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';

// const { width, height } = Dimensions.get('window');

// const HomePage = () => {
//   const [searchText, setSearchText] = useState('');
//   const [productData, setProductData] = useState([]);
//   const [loading, setLoading] = useState(true);

  // Fetching product data (e.g., from an API)
  // const fetchProducts = async () => {
  //   try {
  //     const response = await fetch('https://fakestoreapi.com/products');
  //     const data = await response.json();
  //     setProductData(data); // Access the products array
  //   } catch (error) {
  //     console.error('Error fetching products:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

//   const renderProduct = ({ item }) => (
//     <View style={styles.productCard}>
//       <Image style={styles.productImage} source={{ uri: item.image }} />
//       <Text style={styles.productName}>{item.title}</Text>
//       <Text style={styles.productPrice}>${item.price}</Text>
//       <TouchableOpacity style={styles.addButton}>
//         <Text style={styles.addButtonText}>Add to Cart</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <View style={styles.profileSection}>
//           <Image
//             style={styles.profileImage}
//             source={require('../Assets/myprofileicon.png')} // Replace with your image path
//           />
//           <Text style={styles.profileName}>Akhil React</Text>
//         </View>
//         <TouchableOpacity style={styles.notificationButton}>
//           <Image
//             style={styles.notificationIcon}
//             source={require('../Assets/notificationicon.png')} // Replace with your notification icon path
//           />
//         </TouchableOpacity>
//       </View>

//       {/* Search Box */}
//       <View style={styles.searchBox}>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search for products..."
//           placeholderTextColor="#888"
//           value={searchText}
//           onChangeText={(text) => setSearchText(text)}
//         />
//       </View>

//       {/* Scrollable Product List */}
//       <ScrollView style={styles.productList}>
//         {/* {loading ? (
//           <ActivityIndicator size="large" color="blue" />
//         ) : ( */}
//           <FlatList
//             data={productData}
//             renderItem={renderProduct}
//             keyExtractor={(item) => item.id.toString()}
//             horizontal
//             showsHorizontalScrollIndicator={false}
//           />
//         )}
//       </ScrollView>

//       {/* Footer */}
//       <View style={styles.footer}>
//         <Text style={styles.footerText}>© 2025 Shoe Land</Text>
//         <Text style={styles.footerSubText}>All Rights Reserved</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 15,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   profileSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   profileImage: {
//     height: 45,
//     width: 45,
//     borderRadius: 30,
//   },
//   profileName: {
//     fontSize: 18,
//     marginLeft: 10,
//   },
//   notificationButton: {
//     backgroundColor: '#d7d9db',
//     borderRadius: 30,
//     padding: 10,
//   },
//   notificationIcon: {
//     height: 30,
//     width: 30,
//   },
//   searchBox: {
//     marginTop: 20,
//     borderRadius: 30,
//     backgroundColor: '#fff',
//     paddingHorizontal: 15,
//     paddingVertical: 8,
//     elevation: 5,
//   },
//   searchInput: {
//     fontSize: 16,
//     color: '#000',
//     paddingVertical: 5,
//   },
//   productList: {
//     marginTop: 20,
//   },
//   productCard: {
//     backgroundColor: '#fff',
//     padding: 15,
//     borderRadius: 15,
//     marginRight: 15,
//     width: width * 0.6,
//     alignItems: 'center',
//     elevation: 5,
//   },
//   productImage: {
//     width: width * 0.5,
//     height: width * 0.5,
//     resizeMode: 'contain',
//     borderRadius: 15,
//   },
//   productName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   productPrice: {
//     fontSize: 14,
//     color: '#555',
//   },
//   addButton: {
//     backgroundColor: '#ff5c5c',
//     paddingVertical: 8,
//     paddingHorizontal: 25,
//     borderRadius: 20,
//     marginTop: 10,
//   },
//   addButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   footer: {
//     height:height*0.1,
//     backgroundColor: 'grey',
//     paddingVertical: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   footerText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   footerSubText: {
//     color: '#ccc',
//     fontSize: 12,
//   },
// });

// export default HomePage;