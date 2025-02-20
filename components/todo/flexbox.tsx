import { StyleSheet, Text, View } from "react-native"


const styles = StyleSheet.create({
    //default: display flex => column
    container: {
        flex: 1,
        marginTop: 40,
        borderWidth: 1,
        borderColor: "red",
        flexDirection: "column", //ox
        justifyContent: "center",
        //alignItems: "center" //oy
    },
    item1: {
        padding: 20,
        borderWidth: 1,
        backgroundColor: "violet",
        height: 60,
        flex: 4,

    },
    item2: {
        flex: 1,
        padding: 20,
        borderWidth: 1,
        backgroundColor: "green",
        height: 300,
        width: 300
    },
    item3: {
        padding: 20,
        borderWidth: 1,
        backgroundColor: "orange",
        height: 100,
        width: 100
    },
    item4: {
        padding: 20,
        borderWidth: 1,
        backgroundColor: "grey",
    },
})
const FlexBox = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.item1}>Item 1</Text>
            </View>
            <View>
                <Text style={styles.item2}>Item 2</Text>
            </View>
            <View>
                <Text style={styles.item3}>Item 3</Text>
            </View>
            <View>
                <Text style={styles.item4}>Item 4</Text>
            </View>

        </View>

    )
}

export default FlexBox;