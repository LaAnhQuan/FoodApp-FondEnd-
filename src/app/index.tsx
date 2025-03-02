import { Link, router } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { getAccountAPI } from "@/utils/api";
import { useCurrentApp } from "@/context/app.contex";
import * as SplashScreen from 'expo-splash-screen'
import { Text, View } from "react-native";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const RootPage = () => {
    const { setAppState } = useCurrentApp();
    const [state, setState] = useState<any>();

    useEffect(() => {
        async function prepare() {
            try {
                // Pre-load fonts, make any API calls you need to do here
                const res = await getAccountAPI();
                if (res.data) {
                    //success
                    setAppState({
                        user: res.data.user,
                        access_token: await AsyncStorage.getItem("access_token")
                    })
                    router.replace("/(tabs)")
                    // await AsyncStorage.removeItem("access_token")
                }
                else {
                    //error

                    router.replace("/(auth)/welcome")
                }

            } catch (e) {
                setState(() => {
                    throw new Error('Không thể kết nối với backend...')
                })
                // setState({ error: new Error("") })
                // console.warn(e);
                //console.log("Không thể kết nối với backend...")
            } finally {
                // Tell the application to render
                await SplashScreen.hideAsync();
            }
        }

        prepare();
    }, []);

    // if (true) {
    //     return (
    //         <Redirect href={"/(tabs)"} />
    //     )

    // }
    return (
        <>
            <View>
                <Text>root page</Text>
            </View>
        </>
    )
}

export default RootPage;