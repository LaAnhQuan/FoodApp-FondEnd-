import ShareButton from "@/components/button/share.button"
import SocialButton from "@/components/button/social.button"
import ShareInput from "@/components/input/share.input"
import { registerAPI } from "@/utils/api"
import { APP_COLOR } from "@/utils/constant"
import { SignUpSchema } from "@/utils/validate.schema"
import axios from "axios"
import { Link, router } from "expo-router"
import { Formik } from "formik"
import { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import Toast from "react-native-root-toast"
import { SafeAreaView } from "react-native-safe-area-context"


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        gap: 10
    },

})

const SignUpPage = () => {

    // const [name, setName] = useState<string>("");
    // const [email, setEmail] = useState<string>("");
    // const [password, setPassword] = useState<string>("");

    const handleSignUp = async (email: string, password: string, name: string) => {
        try {
            const res = await registerAPI(email, password, name);
            // console.log(">>> check ress ", res)
            if (res.data) {
                router.replace({
                    pathname: "/(auth)/verify",
                    params: { email: email }
                })
            } else {
                const m = Array.isArray(res.message)
                    ? res.message[0] : res.message
                Toast.show(m, {
                    duration: Toast.durations.LONG,
                    textColor: "white",
                    backgroundColor: APP_COLOR.ORANGE,
                    opacity: 1
                });

            }

        } catch (error) {
            console.log(">>> check error: ", error)
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Formik
                validationSchema={SignUpSchema}
                initialValues={{ email: '', password: '', name: '' }}
                onSubmit={values => handleSignUp(values.email, values.password, values.name)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
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
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                            error={errors.name}
                            touched={touched.name}
                        />
                        <ShareInput
                            title="Email"
                            keyboardType="email-address"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            error={errors.email}
                            touched={touched.email}
                        />
                        <ShareInput
                            title="Password"
                            secureTextEntry={true}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            error={errors.password}
                            touched={touched.password}
                        />


                        <View style={{ marginVertical: 5 }}></View>

                        <ShareButton
                            title="Đăng ký"
                            onPress={handleSubmit as any}
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
                        <SocialButton
                            title="Đăng ký với"
                        />
                    </View>
                )}
            </Formik>

        </SafeAreaView >

    )
}

export default SignUpPage;