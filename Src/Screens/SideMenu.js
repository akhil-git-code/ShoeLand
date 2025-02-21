import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SideMenu = ({navigation}) => {

  const handleSignOut = async () => {
    try {
      // Clear stored user session
      await AsyncStorage.removeItem('userToken');
      
      // Redirect to login screen
      navigation.replace('SignIn');
    } catch (error) {
      Alert.alert('Sign Out Error', 'Failed to sign out. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={require('../Assets/myprofileicon.png')}
        />
        <Text style={styles.greeting}>Hey, <Text style={styles.wave}>👋</Text></Text>
        <Text style={styles.name}>Akhil</Text>
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('MyProfile')}>
          <Icon name="person-outline" size={20} color="#fff" />
          <Text style={styles.menuText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('HomePage')}>
          <Icon name="home-outline" size={20} color="#fff" />
          <Text style={styles.menuText}>Home Page</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AddToCart')}>
          <Icon name="cart-outline" size={20} color="#fff" />
          <Text style={styles.menuText}>My Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('FavouriteScreen')}>
          <Icon name="heart-outline" size={20} color="#fff" />
          <Text style={styles.menuText}>Favorite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="reader-outline" size={20} color="#fff" />
          <Text style={styles.menuText}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}onPress={() => navigation.navigate('Notifications')}>
          <Icon name="notifications-outline" size={20} color="#fff" />
          <Text style={styles.menuText}>Notifications</Text>
        </TouchableOpacity>
      </View>

      {/* Sign Out */}
      <TouchableOpacity style={[styles.menuItem, styles.signOut]} onPress={handleSignOut}>
        <Icon name="log-out-outline" size={20} color="#fff" />
        <Text style={styles.menuText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2d', 
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  greeting: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  wave: {
    fontSize: 18,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  menuContainer: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuText: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 15,
  },
  signOut: {
    marginTop: 'auto',
    borderTopWidth: 1,
    borderTopColor: '#3a3a47',
    paddingTop: 20,
  },
});

export default SideMenu;
