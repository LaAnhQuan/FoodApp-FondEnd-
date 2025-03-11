import ShareButton from "@/components/button/share.button"
import ShareInput from "@/components/input/share.input"
import { ForgotPasswordAPI } from "@/utils/api"
import { APP_COLOR } from "@/utils/constant"
import { ForgotPasswordSchema } from "@/utils/validate.schema"
import { router } from "expo-router"
import { Formik } from "formik"
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
const ForgotPasswordPage = () => {



    const handleForgotPassword = async (email: string) => {
        const res = await ForgotPasswordAPI(email);
        if (res.data) {
            router.replace({
                pathname: "(auth)/request.password",
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
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Formik
                validationSchema={ForgotPasswordSchema}
                initialValues={{ email: '' }}
                onSubmit={values => handleForgotPassword(values.email)}
            >
                {({ handleChange, handleBlur, handleSubmit, values,
                    errors, touched }) => (

                    <View style={styles.container}>
                        <View>
                            <Text style={{
                                fontSize: 25,
                                fontWeight: 600,
                                marginVertical: 25
                            }}>Quên mật khẩu</Text>
                            <Text style={{ color: APP_COLOR.GREY }}>
                                Vui lòng điền vào email tài khoản đăng nhập
                                của bạn để thực hiện yêu cầu thay đổi mật khẩu.
                            </Text>
                        </View>

                        <ShareInput
                            title="Email"
                            keyboardType="email-address"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            error={errors.email}
                            touched={touched.email}

                        />


                        <ShareButton
                            title="Xác nhận"
                            onPress={handleSubmit as any}
                            textStyle={{
                                textTransform: "uppercase",
                                color: "#fff",
                                paddingVertical: 5
                            }}
                            btnStyle={{
                                justifyContent: "center",
                                borderRadius: 30,
                                marginHorizontal: 50,
                                paddingVertical: 10,
                                backgroundColor: APP_COLOR.ORANGE,

                            }}
                            pressStyle={{ alignSelf: "stretch" }}
                        />

                    </View>
                )}
            </Formik>
        </SafeAreaView>

    )

}

export default ForgotPasswordPage