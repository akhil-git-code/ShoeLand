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
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const TestScreen = () => {
  const [data, setData] = useState([]);
  const getAPIData = async () => {
    try {
      // api call
      const url = 'https://jsonplaceholder.typicode.com/posts/';
      let result = await fetch(url);
      result = await result.json();
      setData(result);
      // console.warn(result);
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
        <Text style={{fontSize: 30}}>List with API Call</Text>
        {data.length
          ? data.map(item => (
            <View
            key={item.id}
            style={{
              padding: 20,
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}>
                <Text style={{fontSize: 20}}>Id: {item.id}</Text>
                <Text style={{fontSize: 20}}>User Id: {item.userId}</Text>
                <Text style={{fontSize: 10}}>Title: {item.title}</Text>
                <Text style={{fontSize: 10}}>Body: {item.body}</Text>
              </View>
            ))
          : null}
      </View>
    </ScrollView>
  );
};

export default TestScreen;

const styles = StyleSheet.create({});
