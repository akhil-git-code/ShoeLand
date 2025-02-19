import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');
const ProductsSmallScreen = () => {
  return (
    <View style={styles.mainHead}>
      <View style={styles.ProductScreen}>
        <Image
          style={styles.myprofileicon}
          source={require('../Assets/nikeduck.png')}
        />
        <View style={styles.ProductInfo}>
          <Text style={styles.ProductNameText}>Nike Dunk Low retro</Text>
          <View style={styles.RatingIconAndText}>
            <Image
              style={styles.starIcon}
              source={require('../Assets/star.png')}
            />
            <Text style={styles.RatingText}>4.7</Text>
          </View>
        </View>
        <View style={styles.ProductDescription}>
          <Image
            style={styles.LocationIcon}
            source={require('../Assets/locationicon.png')}
          />
          <Text style={styles.ProductDescriptionText}>
            Men's Shoes, 1 Color
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductsSmallScreen;
// const {width,height}=Dimensions
const styles = StyleSheet.create({
  mainHead: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  ProductScreen: {
    alignSelf: 'center',
    padding: 10,
    height: height * 0.43,
    width: width * 0.7,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  myprofileicon: {
    height: height * 0.3,
    width: 'auto',
    resizeMode: 'cover',
    borderRadius: 20,
  },
  ProductInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginTop:10,
  },
  ProductNameText: {
    // marginVertical:15,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  RatingIconAndText: {
    flexDirection: 'row',
    alignItems: 'center',
    color: 'black',
  },
  starIcon: {
    height: 25,
    width: 25,
  },
  RatingText: {
    color:"black",
  },
  ProductDescription: {
    flexDirection: 'row',
    alignItems: 'center',

    marginVertical: 5,
  },
  LocationIcon: {
    height: 25,
    width: 25,
  },
  ProductDescriptionText: {
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 2,
  },
});
