import { Button, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function App() {

  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();


  function HomeScreen(props: any) {
    const navigation = props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>

        <View style={{ marginVertical: 10 }}>
          <Button
            onPress={() => navigation.navigate("Details")}
            title='Go back home'
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Button
            onPress={() => navigation.navigate("Details",
              { userId: 1, name: "Eric" }
            )}
            title='Go user id = 1'
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Button
            onPress={() => navigation.navigate("Details",
              { userId: 2, name: "Hoi dan It" }
            )}
            title='Go user id = 2'
          />
        </View>
      </View>
    );
  }

  function DetailsScreen(props: any) {
    // console.log(">>> check props: ", props);

    const route: any = useRoute();
    console.log(">>> check route: ", route.params)
    const navigation: any = useNavigation();

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>user id = {route?.params?.userId}</Text>
        <Button
          onPress={() => navigation.goBack()}
          title='Go to Detail'
        />


      </View>
    );
  }

  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Home"
          component={HomeScreen}
          options={{ headerTitle: "Trang chu" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({ route }: { route: any }) => ({
            title: `Xem chi tiet ${route?.params?.userId ?? ""}`,

          })}
        />
      </Stack.Navigator> */}

      <Drawer.Navigator initialRouteName='hoidanit'>
        <Drawer.Screen name="Article" component={DetailsScreen} />
        <Drawer.Screen
          options={{
            headerTitle: "Trang chu",
            drawerLabel: "Trang chu"
          }}
          name="hoidanit"
          component={HomeScreen} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
