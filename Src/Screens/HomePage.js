import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const { width, height } = Dimensions.get('window');

const HomePage = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [selectedSize, setSelectedSize] = useState('All');

  const sizes = ['All', 'Running', 'Lifestyle', 'Sports' ,'Casual'];
  const DATA = [
      {
        id: '123',
        image: require('../Assets/nikeairmax.png'),
        title: 'Nike Air Max',
        description: 'Comfortable Running Shoes',
        price: '$199.99',
        backgroundcolor: '#82c7f5',
      },
      {
        id: '456',
        image: require('../Assets/nikezoom.png'),
        title: 'Nike Zoom',
        description: 'High-Performance Sneakers',
        price: '$170.99',
        backgroundcolor: '#fde18e',
      },
      {
        id: '789',
        image: require('../Assets/nikepegasus.png'),
        title: 'Nike Pegasus',
        description: 'Lightweight Training Shoes',
        price: '$189.99',
        backgroundcolor: '#828281',
      },
      {
        id: '101',
        image: require('../Assets/nikerevolution.png'),
        title: 'Nike Revolution',
        description: 'Stylish Daily Wear',
        price: '$149.99',
        backgroundcolor: '#6a9e96',
      },
      {
        id: '1112',
        image: require('../Assets/nikefreerun.png'),
        title: 'Nike Free Run',
        description: 'Flexible Road Runners',
        price: '$159.99',
        backgroundcolor: '#d8b0ca',
      },
      {
        id: '1213',
        image: require('../Assets/nikevaporfly.png'),
        title: 'Nike Vaporfly',
        description: 'Elite Racing Shoes',
        price: '$249.99',
        backgroundcolor: '#caf5b7',
      },
      {
        id: '1415',
        image: require('../Assets/nikemetcon.png'),
        title: 'Nike Metcon',
        description: 'Cross Training Sneakers',
        price: '$179.99',
        backgroundcolor: '#FFE4C4',
      },
  ];

  const Item = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('FullProductScreen', { shoe: item })}>
      <View style={[styles.flatListitem, { backgroundColor: item.backgroundcolor }]}>
        <Image style={styles.shoeImage} source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.descriptionText}>{item.description}</Text>
        <Text style={styles.priceText}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.mainHead}>
      <View style={styles.headerSection}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('SideMenu')}>
            <Ionicons name="menu" size={45} color="black" />
          </TouchableOpacity>
          <Image style={styles.profileImage} source={require('../Assets/nikelogo.png')} />
          <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
            <Image style={styles.profileImage} source={require('../Assets/myprofileicon.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.brandName}>
          <Text style={styles.brandText}>Morning Akhil</Text>
          <Text style={styles.normalText}>Experience Fashion with Our Shoe Lineup</Text>
        </View>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.input}
            placeholder="Type Here..."
            onChangeText={setSearch}
            value={search}
          />
          <FontAwesome style={styles.searchIcon} name="search" size={25} color="black" />
        </View>
      </View>
      <Text style={styles.newCollectionText}>New Collection</Text>
      <View style={styles.categoryText}>
        <ScrollView horizontal>
          <View style={styles.sizeContainer}>
            {sizes.map(size => (
              <TouchableOpacity
                key={size}
                style={[
                  styles.sizeOption,
                  {
                    borderColor: selectedSize === size ? 'black' : 'white',
                    borderWidth: selectedSize === size ? 2 : 0,
                    backgroundColor: selectedSize === size ? 'transparent' : 'black',
                  },
                ]}
                onPress={() => setSelectedSize(size)}>
                <Text style={[styles.sizeText, { color: selectedSize === size ? 'black' : 'white' }]}>
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* FlatList Section */}
      <View style={styles.flatList}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
      {/* <BottomTabs /> */}
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  mainHead: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  headerSection: {
    alignSelf: 'center',
    borderRadius: 25,
    backgroundColor: '#23a3f8',
    width: width * 0.9,
    padding: height * 0.02,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    borderRadius: (height * 0.06) / 2,
    width: width * 0.12,
    height: height * 0.06,
  },
  brandName: {},
  brandText: {
    marginVertical: height * 0.015,
    fontWeight: 'bold',
    fontSize: height * 0.05,
    color: 'black',
  },
  normalText: {
    fontSize: height * 0.019,
    color: 'black',
  },
  searchBar: {
    width: '100%',
    justifyContent: 'space-around',
    marginTop: height * 0.06,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: height * 0.04,
    paddingRight: 25,
  },
  input: {
    paddingHorizontal: width * 0.04,
    width: '100%',
    paddingHorizontal: width * 0.06,
  },
  newCollectionText: {
    fontWeight: 'bold',
    fontSize: 28,
    color: 'black',
    marginVertical: 10,
  },
  flatListitem: {
    marginRight: 10,
    borderRadius: 15,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  descriptionText: {
    color: 'black',
  },
  priceText: {
    color: 'black',
  },
  flatList: {
    marginVertical: 30,
  },
  shoeImage: {
    height: height * 0.2,
    width: width * 0.4,
  },
  sizeContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
    gap: 10,
  },
  sizeOption: {
    width: 80,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sizeText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
