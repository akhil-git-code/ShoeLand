import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ProductContext } from '../../App';
const {width, height} = Dimensions.get('window');

const SizeSelectorScreen = ({route, navigation}) => {
  const [selectedSize, setSelectedSize] = useState(41.5);
  const [selectedColor, setSelectedColor] = useState('blue');
  const {setProducts, products} = useContext(ProductContext);

  const {shoe} = route.params;
  const sizes = [38.5, 40.5, 41.5, 42.5];
  const colors = ['blue', 'red', 'yellow', 'green'];

  return (
    <View style={[styles.container, {backgroundColor: shoe.backgroundcolor}]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={40} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="favorite" size={40} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Product Image and Title */}
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{shoe.title}</Text>
        <Text style={styles.productSubtitle}>Men's shoes</Text>
        <View style={styles.productFrontandBack}>
          <View style={styles.images}>
            <Image
              style={styles.nikeback}
              source={require('../Assets/nikeback.png')}
            />
            <Image source={shoe.image} style={styles.productImage} />
          </View>
        </View>
      </View>
      {/* Price and Colors Section */}
      <View style={styles.priceAndColorsContainer}>
        {/* Row with labels */}
        <View style={styles.row}>
          <Text style={styles.priceLabel}>PRICE</Text>
          <Text style={styles.colorLabel}>COLORS</Text>
        </View>

        {/* Row with values */}
        <View style={styles.row}>
          <Text style={styles.priceValue}>${shoe.price}</Text>
          <View style={styles.colorsContainer}>
            {colors.map(color => (
              <TouchableOpacity
                key={color}
                style={[
                  styles.colorOption,
                  {
                    backgroundColor: color,
                    borderWidth: selectedColor === color ? 2 : 0,
                    borderColor:
                      selectedColor === color ? '#000' : 'transparent',
                  },
                ]}
                onPress={() => setSelectedColor(color)}
              />
            ))}
          </View>
        </View>
      </View>

      {/* Size Selection */}
      <View style={styles.sizeContainer}>
        {sizes.map(size => (
          <TouchableOpacity
            key={size}
            style={[
              styles.sizeOption,
              {
                borderColor: selectedSize === size ? '#000' : 'transparent',
              },
            ]}
            onPress={() => setSelectedSize(size)}>
            <Text style={styles.sizeText}>{size}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Add to Cart Button */}
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={() => setProducts(products + 1)}>
        <Text style={styles.addToCartText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SizeSelectorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  images: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  nikeback: {
    resizeMode: 'contain',
    transform: [{rotate: '90deg'}],
    opacity: 0.3,
    height: height * 0.5,
    alignItems: 'center',
    // position: 'absolute',
  },
  productImage: {
    height: height * 0.5,
    width: width * 0.9,
    resizeMode: 'contain',
    marginBottom: 10,
    position: 'absolute',
  },
  productTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productSubtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
  priceAndColorsContainer: {
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  priceLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
    textAlign: 'left',
  },
  colorLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
    textAlign: 'right',
  },
  priceValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
    textAlign: 'left',
  },
  colorsContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  colorOption: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  sizeOption: {
    width: 60,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f3f9fd',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  sizeText: {
    fontSize: 16,
    color: '#000',
  },
  addToCartButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  addToCartText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});
