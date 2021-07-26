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
import categories from '../../consts/categories';
import shoppingList from '../../consts/shoppingList';
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const width = Dimensions.get('screen').width / 2 - 34;

const Home = ({ navigation }) => {
  const categoriess = [
    'Food ',
    '   Meat & Frozen Food',
    '   Junk Food ',
    '   Dessert ',
    '   Vegatable & Fruit ',
    '   Water & Drink ',
    '   Personal Care ',
    '   Pet Shop ',
    '   Mom&Baby ',
    '   Electronic ',
  ];

  const [categoryIndex, setCategoryIndex] = React.useState(0);

  const CategoryList = () => {
    return (
      <View style={style.categoryContainer}>
        <ScrollView horizontal={true} style={{ flex: 1 }}>
          {categoriess.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => setCategoryIndex(index)}>
              <Text
                key={index}
                style={[
                  style.categoryText,
                  categoryIndex == index && style.categoryTextSelected,
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };


  const Card = ({ category }) => { 
    return (
      <TouchableOpacity
       >
        <View style={style.card}>
          <View style={{ alignItems: 'flex-end' }}></View>
          <View style={{ height: 100, alignItems: 'center' }}>
            <Image
              style={{ flex: 1, resizeMode: 'contain' }} 
              source={category.image}
            />
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 17,
              color: colors.dark,
              marginLeft: 25,
            }}>
            {category.name}


          </Text>
         <View>
          <Button title= "Add To Cart" onPress={()=>
          {
            shoppingList.push(category);

          }
          } />
        </View>
       </View>

      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: colors.blueviolet,
      }}>
      <View style={style.header}>
        <View>
          {/* <Icon
            name="arrow-left"
            size={24}
            onPress={() => navigation.goBack()}
          /> */}
          
          <Text style={style.textStyle2}>Shopping List</Text>
        </View>
        <Icon
          name="shopping-cart"
          size={28}
          onPress={() => navigation.navigate('Cart')}
        />
        <Icon
          name="info"
          size={28}
          onPress={() => navigation.navigate('OnBoard')}
        />
      </View>
      <View style={{ marginTop: 30, flexDirection: 'row' }}>
        <View style={style.searchContainer}>
          <Icon name="search" size={25} style={{ marginLeft: 20 }} />
          <TextInput placeholder="Search" style={style.input} />
        </View>
        <View style={style.btn}>
          <Icon name="sort" size={30} color={colors.white} />
        </View>
      </View>
      <CategoryList />
      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={categories[categoryIndex].products}
        renderItem={({ item }) => {
          
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
  textStyle2: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.white,
    marginTop: 22,
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
    height: 30,
  },
  categoryText: {
    fontSize: 17,
    color: 'black',
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
    backgroundColor: colors.white,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    borderRadius: 40,
  },
});

export default Home;

// const {width} = Dimensions.get('screen');

// const Home = ({navigation}) => {
//   // const CategoryList = () => {
//   //   return <View style={style.categoryContainer}></View>;
//   // };
//   const Card = ({category}) => {
//     return (
//       <ImageBackground
//         style={style.cardImage}
//         source={category.image}></ImageBackground>
//     );
//   };
//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: colors.primary}}>
//       <StatusBar translucent={false} backgroundColor={colors.primary} />
//       <View style={style.header}>
//         <Icon name="sort" size={28} color={colors.white} />
//       </View>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View style={{backgroundColor: colors.primary, height: 120}}>
//           <Text style={style.headerTitle}>Categories</Text>
//           <View style={style.inputContainer}>
//             <Icon name="search" size={28} />
//             <TextInput
//               placeholder="Search place"
//               style={{color: colors.primary}}
//             />
//           </View>
//         </View>
//         <Text style={style.sectionTitle}>Foods</Text>
//         <View>
//           <FlatList
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             data={categories}
//             renderItem={({item}) => <Card category={item} />}
//           />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const style = StyleSheet.create({
//   header: {
//     paddingVertical: 20,
//     paddingHorizontal: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: colors.primary,
//   },
//   headerTitle: {
//     color: colors.white,
//     fontWeight: 'bold',
//     fontSize: 23,
//     textAlign: 'center',
//   },
//   inputContainer: {
//     height: 40,
//     width: '100%',
//     backgroundColor: colors.white,
//     borderRadius: 10,
//     position: 'absolute',
//     top: 80,
//     flexDirection: 'row',
//     paddingHorizontal: 20,
//     alignItems: 'center',
//     elevation: 12,
//   },
//   sectionTitle: {
//     marginHorizontal: 20,
//     marginVertical: 20,
//     fontWeight: 'bold',
//     fontSize: 20,
//   },
//   cardImage: {
//     height: 220,
//     width: width / 2,
//     marginRight: 20,
//     padding: 10,
//     overflow: 'hidden',
//     borderRadius: 10,
//   },
// });
//
//export default Home;

// <View style={styles.container}>
//   <ScrollView style={styles.container}>
//     <Header />
//     <SearchInput
//       placeholer="Kategori adı giriniz"
//       onPress={this.onSearchButtonTouched}
//       onChangeText={this.OnChangeSearchQuery}
//       style={styles.searchInput}
//     />
//     <View style={styles.line} />
//     <CategoryObject />
//     {/* <TouchableOpacity>
//       <Button
//         onPress={() => navigation.navigate('Food')}
//         style = {styles.Button}
//         title="FoodScreen"/>
//     </TouchableOpacity> */}
//   </ScrollView>
//   {/* <Button icon = 'arrow' onPress = {this.OnButtonTouched} style = {styles.Button}/> */}
// </View>
// );

//   onSearchButtonTouched = () => {
//     console.warn('search button touched');
//   };
//   OnChangeSearchQuery = text => {
//     console.warn('new text = ' + text);
//   };

//   OnButtonTouched = () => {
//     console.warn();
//   };
//   return (
//     <View style={styles.container}>
//       <ScrollView style={styles.container}>
//         <Header />
//         <SearchInput
//           placeholer="Kategori adı giriniz"
//           onPress={this.onSearchButtonTouched}
//           onChangeText={this.OnChangeSearchQuery}
//           style={styles.searchInput}
//         />r
//         <View style={styles.line} />
//         <CategoryObject />
//         <Button onPress = {() => navigation.navigate('Food')} title = 'FoodScreen'></Button>
//       </ScrollView>
//       {/* <Button icon = 'arrow' onPress = {this.OnButtonTouched} style = {styles.Button}/> */}
//     </View>
//   );
// };

// class Home extends React.Component {

//   onSearchButtonTouched = () => {
//     console.warn('search button touched');
//   };
//   OnChangeSearchQuery = text => {
//     console.warn('new text = ' + text);
//   };

//   OnButtonTouched = () => {
//     console.warn();
//   };
//   render() {
//     console.log(this.state);
//     return (
//       <View style={styles.container}>
//         <ScrollView style={styles.container}>
//           <Header />
//           <SearchInput
//             placeholer="Kategori adı giriniz"
//             onPress={this.onSearchButtonTouched}
//             onChangeText={this.OnChangeSearchQuery}
//             style={styles.searchInput}
//           />
//           <View style={styles.line} />
//           <CategoryObject />
//         </ScrollView>

//         {/* <Button icon = 'arrow' onPress = {this.OnButtonTouched} style = {styles.Button}/> */}
//       </View>
//     );
//   }
// }
