import ShareButton from "@/components/button/share.button"
import SocialButton from "@/components/button/social.button"
import ShareInput from "@/components/input/share.input"
import { APP_COLOR } from "@/utils/constant"
import { Link } from "expo-router"
import { useState } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"
import { SafeAreaFrameContext, SafeAreaView } from "react-native-safe-area-context"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        gap: 10
    },

})

const SignUpPage = () => {
    const [name, setName] = useState<String>("eric");
    const [email, setEmail] = useState<String>("");
    const [password, setPassword] = useState<String>("");

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View>
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 600,
                        marginVertical: 30
                    }}>Đăng ký tài khoản </Text>
                </View>
                <ShareInput
                    title="Họ Tên"
                    value={name}
                    setValue={setName}
                />
                <ShareInput
                    title="Email"
                    keyboardType="email-address"
                    value={email}
                    setValue={setEmail}
                />
                <ShareInput
                    title="Password"
                    secureTextEntry={true}
                    value={password}
                    setValue={setPassword}
                />


                <View style={{ marginVertical: 5 }}></View>

                <ShareButton
                    title="Đăng ký"
                    onPress={() => { console.log(name, email, password) }}
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
                    pressStyle={{ alignSelf: "stretch" }} p
                />
                <View style={{
                    marginVertical: 5,
                    flexDirection: "row",
                    gap: 10,
                    justifyContent: "center"
                }}>
                    <Text style={{
                        color: "black"
                    }}>
                        Đã có tài khoản?
                    </Text>
                    <Link href={"/(auth)/login"}>
                        <Text style={{
                            color: "black",
                            textDecorationLine: 'underline'
                        }}>
                            Đăng nhập.
                        </Text>
                    </Link>
                </View>
                <SocialButton />
            </View>

        </SafeAreaView >

    )
}

export default SignUpPage;