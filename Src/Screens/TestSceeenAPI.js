// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, Image, Button, ActivityIndicator } from 'react-native';

// const App = () => {
//   const [imageUrl, setImageUrl] = useState('');
//   const [loading, setLoading] = useState(false);

//   // Function to fetch an image from the API
//   const fetchImage = () => {
//     setLoading(true); // Start loading
//      fetch('https://api.thecatapi.com/v1/images/search')
//       .then((response) => response.json()) // Convert response to JSON
//       .then((data) => {
//         setImageUrl(data[0].url); // Update state with the image URL
//       })
//       .finally(() => setLoading(false)); // Stop loading
//   };

//   // Fetch an image when the app starts
//   useEffect(() => {
//     fetchImage();
//   }, []);

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <ActivityIndicator size="large" color="blue" />
//       ) : (
//         imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />
//       )}
//       <Button title="Load Another Image" onPress={fetchImage} />
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
//   },
//   image: {
//     width: 300,
//     height: 300,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
// });
import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const TestSceeenAPI = () => {
  const [data, setData] = useState([]);
  const getAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <View>
      <Text style={{fontSize: 30}}>API Call with FlatList</Text>
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View>
              <Text style={{fontSize: 20}}>Id: {item.id}</Text>
              <Text style={{fontSize: 20}}>UserId: {item.userId}</Text>
            </View>
          )}
        />
      ) : null}
    </View>
  );
};

export default TestSceeenAPI;

const styles = StyleSheet.create({});
