import ShareButton from "@/components/button/share.button"
import { APP_COLOR } from "@/utils/constant"
import { StyleSheet, Text, TextInput, View } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        marginHorizontal: 20,
        gap: 10
    },
    inputGroup: {
        padding: 5,
        gap: 10

    },
    text: {
        fontSize: 18,

    },
    input: {
        borderColor: "#d0d0d0",
        borderWidth: 1,
        paddingHorizontal: 7,
        paddingVertical: 10,
        borderRadius: 5,


    }
})

const SignUpPage = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text>Đăng ký tài khoản </Text>
            </View>
            <View style={styles.inputGroup}>
                <Text style={styles.text}>Họ Tên</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.inputGroup}>
                <Text style={styles.text}>Email</Text>
                <TextInput keyboardType="email-address" style={styles.input} />
            </View>
            <View style={styles.inputGroup}>
                <Text style={styles.text}>Password</Text>
                <TextInput style={styles.input} />
            </View>
            <View>
                <ShareButton
                    title="Đăng ký"
                    onPress={() => { alert("me") }}
                    textStyle={{
                        color: "#fff",
                        paddingVertical: 5,
                        textTransform: "uppercase"
                    }}
                    btnStyle={{
                        backgroundColor: APP_COLOR.ORANGE,
                        justifyContent: "center",
                        borderRadius: 30,
                        marginHorizontal: 50,
                        paddingVertical: 10,


                    }}
                    pressStyle={{ alignSelf: "stretch" }}
                />
            </View>
        </View>
    )
}

export default SignUpPage;