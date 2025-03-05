import { Button, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/components/learn/home';
import HomeDetail from './src/components/learn/home.detail';
import Like from './src/app/(user)/like';
import LikeDetail from './src/app/(user)/like/like.detail';
import About from './src/components/learn/about';
import ChangePassword from './src/components/learn/change.password';

export default function App() {

  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();

  const TabApp = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Like" component={Like} />
      </Tab.Navigator>
    )
  }

  const StackApp = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home"
          component={TabApp}
          options={{ headerTitle: "Trang chu", headerShown: false }}
        />
        <Stack.Screen
          name="HomeDetail"
          component={HomeDetail}
          options={({ route }: { route: any }) => ({
            title: `Xem chi tiet ${route?.params?.userId ?? ""}`,

          })}
        />
        <Stack.Screen name="LikeDetail"
          component={LikeDetail}
        />


      </Stack.Navigator>
    )

  }
  return (
    <NavigationContainer>
      <Drawer.Navigator >
        <Drawer.Screen
          name="StackApp" component={StackApp} />
        <Drawer.Screen
          name="About" component={About} />
        <Drawer.Screen
          name="changePassword"
          component={ChangePassword}
        />

      </Drawer.Navigator>



    </NavigationContainer>
  );
}
