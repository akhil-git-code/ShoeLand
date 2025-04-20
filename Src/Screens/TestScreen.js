// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   ActivityIndicator,
//   StyleSheet,
// } from 'react-native';
// import axios from 'axios';

// const TestScreen = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // useEffect(() => {
//   //   axios
//   //     .get('https://jsonplaceholder.typicode.com/posts')
//   //     .then(response => {
//   //       setData(response.data.slice(0, 10)); // Fetch first 10 posts
//   //       setLoading(false);
//   //     })
//   //     .catch(error => {
//   //       console.error(error);
//   //       setLoading(false);
//   //     });
//   // }, []);
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(json => {
//         setData(json);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Fetch error:', error);
//         setLoading(false);
//       });
//   }, []);
//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <ActivityIndicator size="large" color="#0000ff" />
//       ) : (
//         <FlatList
//           data={data}
//           keyExtractor={item => item.id.toString()}
//           renderItem={({item}) => (
//             <View style={styles.item}>
//               <Text style={styles.title}>{item.title}</Text>
//               <Text>{item.body}</Text>
//             </View>
//           )}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {flex: 1, padding: 20},
//   item: {
//     marginBottom: 10,
//     padding: 10,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 5,
//   },
//   title: {fontWeight: 'bold', fontSize: 16},
// });

// export default TestScreen;
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios

const TestScreen = () => {
  const [data, setData] = useState([]);

  // Use axios for API call
  const getAPIData = async () => {
    try {
      // API call with axios
      const url = 'https://api.first.org/data/v1/countries';
      let result = await axios.get(url); 
      // console.log(result.data); 
      setData(Object.entries(result.data.data)); // here we can convert object to array with Object.entries
    } catch (error) {
      console.warn('API fetch error:', error.message); 
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <ScrollView>
      <View>
        <Text style={{ fontSize: 30 }}>List with API Call</Text>
        {data.length ? (
          data.map(([code, item]) => (
            <View
              key={code}
              style={{
                padding: 20,
                borderBottomColor: 'black',
                borderBottomWidth: 1,
              }}>
              <Text style={{ fontSize: 20 }}>Country: {item.country}</Text>
              <Text style={{ fontSize: 20 }}>Region: {item.region}</Text>

              {/* If there's an image (flag) URL, display it */}
              {item.flag && (
                <Image
                  source={{ uri: item.flag }}
                  style={{ width: 100, height: 60, borderRadius: 5, marginTop: 10 }}
                />
              )}
            </View>
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default TestScreen;

const styles = StyleSheet.create({});
