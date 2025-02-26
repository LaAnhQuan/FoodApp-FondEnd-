import ShareButton from "@/components/button/share.button";
import SocialButton from "@/components/button/social.button";
import ShareInput from "@/components/input/share.input";
import { APP_COLOR } from "@/utils/constant";
import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native"



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        gap: 10,
        marginVertical: 10,
        paddingVertical: 50
    },
})

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLogin = () => {
        console.log("check email, password", email, password);
    }
    return (
        <View style={styles.container}>
            <View>
                <Text
                    style={{
                        fontSize: 25,
                        fontWeight: 600,
                        marginVertical: 30
                    }}
                >Đăng nhập</Text>
            </View>

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

            <View style={{
                flexDirection: "row",
                justifyContent: "center",
                gap: 10
            }}>
                <Text>Quên mật khẩu ?</Text>

            </View>

            <ShareButton
                title="Đăng nhập"
                onPress={() => handleLogin()}
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
            <View style={{
                marginVertical: 5,
                flexDirection: "row",
                gap: 10,
                justifyContent: "center"
            }}>
                <Text style={{
                    color: "black"
                }}>
                    Chưa có tài khoản?
                </Text>
                <Link href={"/(auth)/signup"}>
                    <Text style={{
                        color: "black",
                        textDecorationLine: 'underline'
                    }}>
                        Đăng ký.
                    </Text>
                </Link>
            </View>
            <SocialButton />
        </View>
    )
}

export default Login;