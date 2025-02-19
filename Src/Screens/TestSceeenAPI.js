// import React, { useState, useEffect } from 'react';
//     import { FlatList, TouchableOpacity, Text, View, StyleSheet, Image, ActivityIndicator } from 'react-native';
//     import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// const TestSceeenAPI = () => {

//         const [data, setData] = useState([]);
//         const [loading, setLoading] = useState(true);
//         const [error, setError] = useState(null);

//         useEffect(() => {
//             fetch('https://api.sampleapis.com/movies/drama')
//                 .then((response) => response.json())
//                 .then((fetchedData) => {
//                     setData(fetchedData);
//                     setLoading(false);
//                 })
//                 .catch((err) => {
//                     setError(err);
//                     setLoading(false);
//                 });
//         }, []);

//         if (loading) {
//             return (
//                 <View style={styles.container}>
//                     <ActivityIndicator size="large" color="#0000ff" />
//                 </View>
//             );
//         }

//         if (error) {
//             return (
//                 <View style={styles.container}>
//                     <Text style={styles.errorText}>Failed to load data: {error?.message}</Text>
//                 </View>
//             );
//         }
//         const renderItem = ({ item }) => (
//             <TouchableOpacity style={styles.itemContainer}>
//                 {item.posterURL ? (
//                     <Image source={{ uri: item.posterURL }} style={styles.poster} />
//                 ) : (
//                     <Text style={{ color: 'red', fontSize: hp(1.2) }}>No image available</Text>
//                 )}
//                 {/* <Image source={require('../Assests/shoe.jpg')} style={styles.itemImage} /> */}
//                 <Text style={styles.itemText}>
//                     {/* {item.title.length > 10 ? ${item.title.slice(0, 10)}... : item.title} */}
//                 </Text>
//                 <Text style={{ color: '#000' }}>
//                     {item.actors}
//                 </Text>
//             </TouchableOpacity>
//         );

//         return (
//             <View style={styles.container}>
//                 <FlatList
//                     horizontal
//                     data={data}
//                     keyExtractor={(item) => item.id.toString()}
//                     renderItem={renderItem}
//                 />
//             </View>
//         );
//     };

//     const styles = StyleSheet.create({
//         itemContainer: {
//             alignItems: 'center',
//             marginTop: hp(2),
//             marginHorizontal: 7,
//         },
//         itemText: {
//             fontSize: wp('4%'), // Font size based on screen width
//             color: '#fff',
//             fontWeight: 'bold'
//         },
//         errorText: {
//             fontSize: hp(2),
//             color: 'red',
//             textAlign: 'center',
//         },
//         poster: {
//             width: wp(29),
//             height: hp(25),
//             borderRadius: 20,
//             borderWidth: 1,
//             borderColor: '#FF5733',

//         }
//     });

//     export default TestSceeenAPI;

// import React, {useState} from 'react';
// import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
// // import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

// const App = () => {

//   const [modalVisible, setModalVisible] = useState(false);

//   return (
//     <View>
//       <View style={styles.centeredView}>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => {
//             Alert.alert('Modal has been closed.');
//             setModalVisible(!modalVisible);
//           }}>
//           <View style={styles.centeredView}>
//             <View style={styles.modalView}>
//               <Text style={styles.modalText}>Hello Akhil!</Text>
//               <Pressable
//                 style={[styles.button, styles.buttonClose]}
//                 onPress={() => setModalVisible(!modalVisible)}>
//                 <Text style={styles.textStyle}>Hide Modal</Text>
//               </Pressable>
//             </View>
//           </View>
//         </Modal>

//         {/* button */}
//         <Pressable
//           style={[styles.button, styles.buttonOpen]}
//           onPress={() => setModalVisible(true)}>
//           <Text style={styles.textStyle}>Show Modal</Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     // flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: '#F194FF',
//   },
//   buttonClose: {
//     backgroundColor: '#2196F3',
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
// });

// export default App;

// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, Text, Button, ActivityIndicator } from 'react-native';

// const App = () => {
//   const [quote, setQuote] = useState('');
//   const [loading, setLoading] = useState(false);

//   // Function to fetch a random quote
//   const fetchQuote = async () => {
//     setLoading(true); // Show loading spinner
//     try {
//       const response = await fetch('https://api.thecatapi.com/v1/images/search');
//       const data = await response.json();
//       setQuote(data.content); // Save the quote
//     } catch (error) {
//       setQuote('Failed to fetch a quote. Try again!');
//     } finally {
//       setLoading(false); // Hide loading spinner
//     }
//   };

//   // Fetch a quote when the app loads
//   useEffect(() => {
//     fetchQuote();
//   }, []);

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <ActivityIndicator size="large" color="blue" />
//       ) : (
//         <Text style={styles.quoteText}>{quote}</Text>
//       )}
//       <Button title="Get Another Quote" onPress={fetchQuote} />
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//     padding: 20,
//   },
//   quoteText: {
//     fontSize: 18,
//     fontStyle: 'italic',
//     textAlign: 'center',
//     marginBottom: 20,
//     color: '#333',
//   },
// });


import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Button, ActivityIndicator } from 'react-native';

const App = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to fetch an image from the API
  const fetchImage = () => {
    setLoading(true); // Start loading
     fetch('https://api.thecatapi.com/v1/images/search')
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => {
        setImageUrl(data[0].url); // Update state with the image URL
      })
      .finally(() => setLoading(false)); // Stop loading
  };

  // Fetch an image when the app starts
  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />
      )}
      <Button title="Load Another Image" onPress={fetchImage} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
});
