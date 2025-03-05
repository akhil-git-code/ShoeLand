import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {ProductContext} from '../../App';

const AddToCart = ({navigation}) => {
  // const {products} = useContext(ProductContext); // for context api
  const cartItems = []; // Empty for now, can be populated later

  const renderEmptyCart = () => (
    <View style={styles.emptyCartContainer}>
      <Text style={styles.emptyCartText}>Your cart is empty!</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>My Cart</Text>
      </View>

      {/* Cart Items */}
      {cartItems.length === 0 ? (
        renderEmptyCart()
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => (
            <View style={styles.cartItem}>
              <Image source={{uri: item.image}} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
            </View>
          )}
        />
      )}

      {/* Summary and Checkout */}
      <View style={styles.summaryContainer}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Added Items</Text>
          {/* <Text style={styles.summaryText1}>{products}</Text> */} 
           {/* for context api */}
          <Text style={styles.summaryText1}>0</Text>
        </View>
        {/* <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Shipping</Text>
          <Text style={styles.summaryText}>$0.00</Text>
        </View> */}
        <View style={styles.summaryRow}>
          <Text style={[styles.summaryText, styles.totalText]}>Total Cost</Text>
          <Text style={[styles.summaryText, styles.totalText]}>$0.00</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddToCart;

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
  emptyCartContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyCartText: {
    fontSize: 16,
    color: '#999',
  },
  summaryContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginTop: 'auto', // Pushes the summary container to the bottom
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryText: {
    fontSize: 16,
    color: '#000',
  },
  summaryText1:{
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  totalText: {
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
