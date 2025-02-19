import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import OnBording from 'react-native-onboarding-swiper'

const OnBordingScreens = ({navigation}) => {
  return (
    <OnBording
    pages={[
      {
        backgroundColor: '#fff',
        image: <Image style={styles.mainImage}source={require('../Assets/loginpage1.png')} />,
        title: 'Step Up in Style \n Find Your Perfect Pair ',
        subtitle:
          'Shoes for Every Step! Discover quality footwear \n for every occasion, with smooth browsing \n and fast delivery.',
      },
      {
        backgroundColor: '#fdeb93',
        image: <Image style={styles.mainImage}source={require('../Assets/loginpagee.png')} />,
        title: 'Walk Your Style, \n Wear Your Confidence',
        subtitle:
          'Find uyour perfect pair from sneakers to heels \n delivered right to your door. Step into \n style with ease!',
      },
      {
        backgroundColor: '#e9bcbe',
        image: <Image style={styles.mainImage}source={require('../Assets/shoeee.png')} />,
        title: 'From Cart to Doorstep – \n Fast, Fresh, Footwear!',
        subtitle:
          'Enjoy a hassle-free shopping experience with \n quick delivery of the latest footwear styles,\n straight to your door.',
      },
    ]}
    onDone={() => navigation.navigate('SignIn')} // Navigate to Home screen after onboarding
    onSkip={() => navigation.navigate('SignIn')} // Allow skipping
  />
);
};

export default OnBordingScreens

const styles = StyleSheet.create({pages: {
    flex: 1,
  },
  title: {
    fontSize: hp(4),
    color: '#000',
    textAlign: 'center',
    marginTop: hp(8),
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: hp(2),
    color: '#000',
    textAlign: 'center',
    marginTop: hp(6),
  },
  images: {
    height: hp(60),
    width: wp(100),
    marginTop: wp(-10),
    alignSelf: 'center',
    borderRadius: 30,
  },
  mainImage:{
    height:hp(50),
    width:wp(90)
  }
});
