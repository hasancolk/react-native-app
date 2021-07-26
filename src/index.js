/**
 * @format
 */

import {View, Navigator, StatusBar} from 'react-native';
import React, {Component} from 'react';
import Home from './screens/Home/Home';
import OnBoard from './screens/OnBoard/OnBoard';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import colors from './consts/colors';
import CategoryDetails from './screens/Home/CategoryDetails';
import Cart from './screens/Cart/Cart';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={colors.dark} />
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="OnBoard" component={OnBoard} />
        <Stack.Screen name="CategoryDetails" component={CategoryDetails} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
// export default  props => {
//   return(
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName = "Home">
//         <Stack.Screen name = "Home" component = {Home}/>
//         <Stack.Screen name = "Food" component = {Food}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// const navigator = createStackNavigator(
//   {
//     Home: Home,
//     Foods: Food
//   },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       title: 'Home'
//     }
//   }
// );

// export default createAppContainer(navigator);
// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           //options={{title: 'Welcome'}}
//         />
//         <Stack.Screen name="Food" component={Food} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const navigator = createStackNavigator(
//   {
//     Categories: Home,
//     Products: Products
//   },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       title: 'Home',
//     },
//   }
// );

// export default MyStack;

// class App extends React.Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <View style={{flex: 1}}>
//           <Home />
//         </View>
//       </Provider>
//     );
//   }
// }

// export default App;
