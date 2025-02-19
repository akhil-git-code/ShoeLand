// import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
// import React from 'react';

// const Dummyy = () => {
//   return (
//     <View style={styles.mainView}>
//       <TouchableOpacity>
//         <View style={styles.button}>
//           <Text style={{color: '#fff', textAlign: 'center', margin: 10}}>
//             Dummyy
//           </Text>
//         </View>
//       </TouchableOpacity>
//       <Image source={require('../Assets/shoe2.jpg')}/>
//     </View>
//   );
// };

// export default Dummyy;

// const styles = StyleSheet.create({
//   mainView: {
//     padding: 10,
//     flex: 1,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     backgroundColor: 'blue',
//     borderRadius: 8,
//   },
// });

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const DataTableScreen = () => {
  const [data, setData] = useState([]); // For original data
  const [filteredData, setFilteredData] = useState([]); // For filtered data
  const [searchQuery, setSearchQuery] = useState(''); // Search box value
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users'); // Example API
        const result = await response.json();
        setData(result); // Set original data
        setFilteredData(result); // Set filtered data initially
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // Handle search functionality
  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase()) // Change `name` to match your data key
    );
    setFilteredData(filtered);
  };

  // Render table row
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{item.email}</Text>
      <Text style={styles.cell}>{item.phone}</Text>
    </View>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#000" />;
  }

  return (
    <View style={styles.container}>
      {/* Search Box */}
      <TextInput
        style={styles.searchBox}
        placeholder="Search by name..."
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {/* Table */}
      <View style={styles.tableHeader}>
        <Text style={styles.headerCell}>Name</Text>
        <Text style={styles.headerCell}>Email</Text>
        <Text style={styles.headerCell}>Phone</Text>
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default DataTableScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  searchBox: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
});
