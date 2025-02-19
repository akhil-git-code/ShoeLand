import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const FavoriteScreen = ({navigation}) => {
  // Dummy products
  const [products, setProducts] = useState([
    {
      id: '1',
      name: 'Nike Jordan',
      price: '$58.7',
      image: 'https://via.placeholder.com/100',
      bestSeller: true,
    },
    {
      id: '2',
      name: 'Nike Air Max',
      price: '$37.8',
      image: 'https://via.placeholder.com/100',
      bestSeller: true,
    },
    {
      id: '3',
      name: 'Nike Club Max',
      price: '$47.7',
      image: 'https://via.placeholder.com/100',
      bestSeller: true,
    },
    {
      id: '4',
      name: 'Nike Air Max',
      price: '$57.6',
      image: 'https://via.placeholder.com/100',
      bestSeller: true,
    },
  ]);

  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      {/* Favorite Icon */}
      <TouchableOpacity style={styles.favoriteIcon}>
        <Text style={styles.heart}>♡</Text>
      </TouchableOpacity>
      {/* Product Image */}
      <Image source={{ uri: item.image }} style={styles.productImage} />
      {/* Best Seller Label */}
      {item.bestSeller && <Text style={styles.bestSeller}>BEST SELLER</Text>}
      {/* Product Name */}
      <Text style={styles.productName}>{item.name}</Text>
      {/* Product Price */}
      <Text style={styles.productPrice}>{item.price}</Text>
      {/* Color Dots */}
      <View style={styles.colorOptions}>
        <View style={[styles.colorDot, { backgroundColor: '#f00' }]} />
        <View style={[styles.colorDot, { backgroundColor: '#00f' }]} />
        <View style={[styles.colorDot, { backgroundColor: '#333' }]} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
       <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Favourite</Text>
        <TouchableOpacity>
          <Text style={styles.heart}>♡</Text>
        </TouchableOpacity>
      </View>
      {/* Products Grid */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        numColumns={2} // Grid with 2 columns
        columnWrapperStyle={styles.row} // Styling for each row
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  backText: {
    fontSize: 16,
    color: '#007bff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  heart: {
    fontSize: 20,
    color: '#000',
  },
  grid: {
    paddingVertical: 8,
  },
  row: {
    justifyContent: 'space-between',
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    width: '48%', // Two cards fit in one row with spacing
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  favoriteIcon: {
    alignSelf: 'flex-end',
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  bestSeller: {
    color: '#007bff',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  colorOptions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
});
