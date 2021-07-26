/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

const App = () => {


//   const [filterData, setFilterData] = useState([]);
//   const [masterData, setMasterData] = useState([]);

//   useEffect(() => {
//     fecthPosts();
//     return () => {};
//   }, []);

//   const fecthPosts = () => {
//     const apiURL = 'https://jsonplaceholder.typicode.com/posts';
//     fetch(apiURL)
//       .then(response => response.json())
//       .then(responseJson => {
//         setFilterData(responseJson);
//         setMasterData(responseJson);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };
//   const ItemView = ({item}) => {
//     return (
//       <Text style={styles.itemStyle}>
//         {item.id}
//         {' .'}
//         {item.title.toUpperCase()}
//       </Text>
//     );
//   };

//   const ItemSeparatorView = () => {
//     return (
//       <View
//         style = {{height: 0.5, width: '100%', backgroundColor: '#c8c8c8'}}
//       />
//     )
//   }

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         <FlatList
//           data={filterData}
//           keyExtractor={(item, index) => index.toString()}
//           ItemSeparatorComponent={ItemSeparatorView}
//           renderItem={ItemView}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//   },
//   itemStyle: {
//     padding: 10
//   }
};

export default App;
