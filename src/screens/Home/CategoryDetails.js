import * as React from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
} from 'react-native';

import colors from '../../consts/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Cart from '../Cart/Cart';
import foodProducts from '../../consts/foodProducts';
import categories from '../../consts/categories';
import meat from '../../consts/meat';

// const CategoryDetails = ({navigation, route}) => {
//   const categories = route.params;
//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
//       <View style={style.header}>
//         <Icon name="arrow-left" size={24} onPress={() => navigation.goBack()} />
//         <Icon name="shopping-cart" size={24} />
//       </View>
//       <View style = {style.imageContainer}>
//         <Image source = {categories.image} style = {{resizeMode: 'contain', flex:1}} />
//       </View>
//       <View style = {style.imageContainer}>
//         <Image source = {categories.image} style = {{resizeMode: 'contain', flex:1}} />
//       </View>
//       <View style = {style.imageContainer}>
//         <Image source = {categories.gizem} style = {{resizeMode: 'contain', flex:1}} />
//       </View>
//       <View style = {style.imageContainer}>
//         <Image source = {categories.image} style = {{resizeMode: 'contain', flex:1}} />
//       </View>
//       <View style = {style.imageContainer}>
//         <Image source = {categories.image} style = {{resizeMode: 'contain', flex:1}} />
//       </View>


//     </SafeAreaView>
//   );
// };

// const width = Dimensions.get('screen').width / 2 - 30;

const width = Dimensions.get('screen').width / 2 - 30;

const CategoryDetails = ({navigation}) => {
  const CategoryList = () => {
    return <View style={style.categoryContainer}></View>;
  };

  const Card = ({category}) => {
    return (
      <TouchableOpacity>
        {/* onPress={() => navigation.navigate('CategoryDetails', category)}> */}
        <View style={style.card}>
          <View style={{alignItems: 'flex-end'}}></View>
          <View style={{height: 100, alignItems: 'center'}}>
            <Image
              style={{flex: 1, resizeMode: 'contain'}}
              source={category.products.image1}
            />
            
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              marginTop: 35,
              color: colors.primary,
              marginLeft: 35,
            }}>
            {category.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: colors.primary,
      }}>
      <View style={style.header}>
        <View>
          <Icon
            name="arrow-left"
            size={24}
            onPress={() => navigation.goBack()}
          />
          <Text style={style.textStyle1}>Welcome to</Text>
          <Text style={style.textStyle2}>Products</Text>
        </View>
        <Icon
          name="shopping-cart"
          size={28}
          onPress={() => navigation.navigate('Cart')}
        />
      </View>
      <View style={{marginTop: 30, flexDirection: 'row'}}>
        <View style={style.searchContainer}>
          <Icon name="search" size={25} style={{marginLeft: 20}} />
          <TextInput placeholder="Search" style={style.input} />
        </View>
        <View style={style.btn}>
          <Icon name="sort" size={30} color={colors.white} />
        </View>
      </View>
      <CategoryList />
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={categories}
        renderItem={({item}) => {
          return <Card category={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle1: {
    fontSize: 23,
    fontWeight: 'bold',
    color: colors.white,
    marginTop: 15,
  },
  textStyle2: {
    fontSize: 38,
    fontWeight: 'bold',
    color: colors.white,
  },
  searchContainer: {
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 30,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.orange,
    flex: 1,
  },
  btn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  categoryTextSelected: {
    color: colors.white,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: 'pink',
  },
  card: {
    height: 225,
    backgroundColor: colors.grey,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    borderRadius: 30,
  },
  imageContainer: {
    flex: 0.5,
    marginTop: 10,
    justifyContent: 'center',
  },
});

export default CategoryDetails;

// const CategoryDetails = ({category}) => {
//   const {headerContainer, headerText, imageStyle} = styles;

//   return;
// <Item>
//   <ItemSection>
//     <View style={headerContainer}>
//       <Text style={headerText}>{category.name}</Text>
//     </View>
//   </ItemSection>
//   <ItemSection>
//     <Image style={imageStyle} source={{uri: category.image}} />
//   </ItemSection>
//   <ItemSection>
//     <Button
//       title="Go to Products"
//       onPress={() => navigation.navigate('Food')}
//     />

//      <TouchableOpacity>
//       <Button onPress={() => category.navigate('Food')} />
//     </TouchableOpacity>
//   </ItemSection>
// </Item>

// };

// const styles = {
//   headerContainer: {
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//   },

//   headerText: {
//     fontSize: 18,
//     fontWeight: '500',
//     textTransform: 'uppercase',
//   },

//   imageStyle: {
//     height: 300,
//     flex: 1,
//     width: 0,
//   },
// };
// export default CategoryDetails;
