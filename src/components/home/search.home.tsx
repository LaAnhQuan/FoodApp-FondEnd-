import { Pressable, StyleSheet, Text, View } from "react-native"
import { ZoomIn } from "react-native-reanimated"
import EvilIcons from '@expo/vector-icons/EvilIcons';
import ShareButton from "../button/share.button";
import { APP_COLOR } from "@/utils/constant";
import { router } from "expo-router";


const styles = StyleSheet.create({
    container: {
        backgroundColor: APP_COLOR.GREY,
        gap: 5,
        flexDirection: "row",
        margin: 5,
        paddingHorizontal: 3,
        paddingVertical: 7,
        borderRadius: 3
    }
})
const SearchHome = () => {
    return (
        <Pressable onPress={() => router.navigate("/(auth)/search")}>
            <View style={styles.container}>
                <EvilIcons
                    name="search"
                    size={20}
                    color="black"
                />
                <Text style={{
                    color: "#707070"
                }}>Deal Hot Hôm Nay Từ 0đ...</Text>
            </View>
        </Pressable>
    )
}

export default SearchHome;