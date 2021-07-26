import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import colors from '../../consts/colors';

// const image = {uri: "https://i.pinimg.com/564x/84/12/83/8412830fe8d0445b4623d1e20d103864.jpg"}

const OnBoard = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar />
      <ImageBackground style={{flex: 1, backgroundColor: colors.primary}}>
        <View style={style.details}>
          
          <Text
            style={{
              textAlign: 'center',
              marginTop: 80,
              color: colors.white,
              fontSize: 35,
              fontWeight: 'bold',
            }}>
            About Us
          </Text>
          <Text
            style={{
              color: colors.white,
              marginTop: 30,
              fontSize: 23,
              marginLeft: 158,
            }}>
            Hello
          </Text>
          <Text
            style={{
              color: colors.white,
              marginTop: 100,
              fontSize: 19,
              marginLeft: 130,
            }}>
            Gizem Coşkun
          </Text>
          <Text
            style={{
              color: colors.white,
              marginTop: 6,
              fontSize: 19,
              marginLeft: 130,
            }}>
            Kader Sutlu
          </Text>
          <Text
            style={{
              color: colors.white,
              marginTop: 6,
              fontSize: 19,
              marginLeft: 130,
            }}>
            Hasan Çolak
          </Text>
          <Text
            style={{
              color: colors.white,
              marginTop: 6,
              fontSize: 19,
              marginLeft: 130,
            }}>
            Melike Divdiv
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Home')}>
            <View style={style.btn}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: colors.white,
                  fontSize: 16,
                  marginLeft: 35,
                }}>
                Turn Back
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  detail: {
    height: '50%',
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: 40,
  },
  btn: {
    height: 50,
    width: 150,
    backgroundColor: colors.dark,
    marginTop: 170,
    borderRadius: 30,
    justifyContent: 'center',
    marginHorizontal: 120,
  },
});

export default OnBoard;
