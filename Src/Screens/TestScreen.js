// import {Image, StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// const HomePage = () => {
//   return (
//     <View style={styles.mainHead}>
//       <View style={styles.Header}>
//         <View style={styles.HeaderSection}>
//           <View style={styles.MyProfileandText}>
//             <Image
//               style={styles.myprofileicon}
//               source={require('../Assets/myprofileicon.png')}
//             />
//             {/* <Text style={styles.HomePageText}>Akhil React</Text> */}
//           </View>

//         </View>
//         <View style={styles.HeaderSection}>
//             <Image
//               style={styles.myprofileicon}
//               source={require('../Assets/myprofileicon.png')}
//             />
//             </View>
//         {/* <View style={styles.NotificationArea}>
//         <Image
//           style={styles.notificationIcon}
//           source={require('../Assets/notificationicon.png')}
//         />
//       </View> */}
//       </View>
//     </View>
//   );
// };

// export default HomePage;

// const styles = StyleSheet.create({
//   mainHead: {
//     flex: 1,
//     margin: 10,
//   },
//   Header: {
//     flexDirection: 'row',
//   },
//   HeaderSection: {
//     backgroundColor: '#d7d9db',
//     borderRadius: 25,
//     padding: 5,
//   },
//   MyProfileandText: {
//     flexDirection: 'row',
//   },
//   myprofileicon: {
//     height: 45,
//     width: 45,
//     borderRadius: 30,
//   },
//   HomePageText: {
//     //   // justifyContent:"center",
//     textAlignVertical: 'center',
//     padding: 5,
//   },
//   NotificationArea: {
//     // backgroundColor: '#d7d9db',
//     borderRadius: 25,
//     flexDirection: 'row',
//     // alignItems: 'center',
//     // padding: 5,
//   },
//   notificationIcon: {
//     height: 45,
//     width: 45,
//     left: 190,
//     backgroundColor: '#d7d9db',
//     borderRadius: 30,
//     // justifyContent:"flex-end"
//   },
// });

// import {Alert, Button, View} from 'react-native';
// import React from 'react';

// const App = () => {
//    const showAlert = () => {
//   //   Alert.alert('Hello!', 'This is a simple alert box.',[
//   //     {
//   //       text:'cancel',
//   //     //   onPress: () => console.log('Cancel Pressed'),
//   //     //  style: 'cancel',
//   //     },
//   //     {
//   //       text:'Ok',
//   //     }
//   //   ]);
//   // };
//   //const confirmAction = () => {
//     Alert.alert(
//       "Confirm Action",
//       "Do you agree to proceed?",
//       [
//         { text: "No", onPress: () => console.log("User declined.") },
//         { text: "Yes", onPress: () => console.log("User agreed.") }
//       ]
//     );
//   };

//   return (
//     <View>
//       <Button title="Show Alert" onPress={showAlert} />
//     </View>
//   );
// };

// export default App;

// // const showAlertWithButtons = () => {
// //   Alert.alert('Delete Item', 'Are you sure you want to delete this item?', [
// //     {
// //       text: 'Cancel',
// //       onPress: () => console.log('Cancel Pressed'),
// //       style: 'cancel',
// //     },
// //     {
// //       text: 'Delete',
// //       onPress: () => console.log('Delete Pressed'),
// //       style: 'destructive', // For iOS, marks it as a destructive action
// //     },x
// //   ]);
// // };

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

const TestScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => {
  //       setData(response.data.slice(0, 10)); // Fetch first 10 posts
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //       setLoading(false);
  //     });
  // }, []);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setLoading(false);
      });
  }, []);
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.body}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  item: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  title: {fontWeight: 'bold', fontSize: 16},
});

export default TestScreen;
