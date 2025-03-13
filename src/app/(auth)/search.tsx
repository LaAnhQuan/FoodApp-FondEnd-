import { APP_COLOR } from "@/utils/constant";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EvilIcons from '@expo/vector-icons/EvilIcons';

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
const SearchPage = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
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
        </SafeAreaView>
    )

}

export default SearchPage;