import ShareButton from "@/components/button/share.button"
import SocialButton from "@/components/button/social.button"
import ShareInput from "@/components/input/share.input"
import { APP_COLOR } from "@/utils/constant"
import axios from "axios"
import { Link } from "expo-router"
import { useEffect, useState } from "react"
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
    const URL_BACKEND = process.env.EXPO_PUBLIC_API_URL;

    console.log("check url backend: ", URL_BACKEND);
    const [name, setName] = useState<String>("");
    const [email, setEmail] = useState<String>("");
    const [password, setPassword] = useState<String>("");

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await axios.get(URL_BACKEND!);
                console.log(">>> check res: ", res);

            } catch (error: any) {
                console.log(">>> check error: ", error.message)
                if (error.response) {
                    console.error("Lỗi phản hồi từ server:");
                    console.error("Mã trạng thái:", error.response.status);  // Mã trạng thái HTTP
                    console.error("Dữ liệu lỗi:", error.response.data);      // Dữ liệu lỗi trả về
                    console.error("Đầu đề phản hồi:", error.response.headers);  // Đầu đề của phản hồi
                }
                // Nếu không có phản hồi nhưng yêu cầu đã được gửi đi (ví dụ: timeout, không kết nối được)
                else if (error.request) {
                    console.error("Yêu cầu đã được gửi nhưng không nhận được phản hồi.");
                    console.error("Yêu cầu:", error.request);
                }
                // Nếu có lỗi xảy ra trong cấu hình yêu cầu
                else {
                    console.error("Lỗi cấu hình yêu cầu:", error.message);
                }
            }

        }
        fetchAPI()
    }, [])

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