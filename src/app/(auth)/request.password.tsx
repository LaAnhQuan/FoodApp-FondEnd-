import ShareButton from "@/components/button/share.button"
import ShareInput from "@/components/input/share.input"
import { RequestPasswordAPI } from "@/utils/api"
import { APP_COLOR } from "@/utils/constant"
import { RequestPasswordSchema } from "@/utils/validate.schema"
import { router, useLocalSearchParams } from "expo-router"
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
const RequestPassword = () => {

    const { email } = useLocalSearchParams();

    const handleRequestPassword =
        async (verifyCode: string, newPassword: string) => {
            const res = await RequestPasswordAPI(verifyCode, email as string, newPassword)
            if (res.data) {
                Toast.show("Đổi mật khẩu thành công", {
                    duration: Toast.durations.LONG,
                    textColor: "white",
                    backgroundColor: APP_COLOR.ORANGE,
                    opacity: 1
                });
                router.navigate("/(tabs)")
            }
            else {
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
                validationSchema={RequestPasswordSchema}
                initialValues={{ verifyCode: "", newPassword: "", confirmNewPassword: "" }}
                onSubmit={values => handleRequestPassword(values.verifyCode, values.newPassword, values.confirmNewPassword)}
            >
                {({ handleChange, handleBlur, handleSubmit, values,
                    errors, touched }) => (

                    <View style={styles.container}>
                        <View>
                            <Text style={{
                                fontSize: 25,
                                fontWeight: 600,
                                marginVertical: 25
                            }}>Thay đổi mật khẩu</Text>

                        </View>

                        <ShareInput
                            title="Mã code xác thực"
                            onChangeText={handleChange('verifyCode')}
                            onBlur={handleBlur('verifyCode')}
                            value={values.verifyCode}
                            error={errors.verifyCode}
                            touched={touched.verifyCode}

                        />
                        <ShareInput
                            title="Mật khẩu mới"
                            secureTextEntry={true}
                            onChangeText={handleChange('newPassword')}
                            onBlur={handleBlur('newPassword')}
                            value={values.newPassword}
                            error={errors.newPassword}
                            touched={touched.newPassword}
                        />
                        <ShareInput
                            title="Xác nhận mật khẩu mới"
                            secureTextEntry={true}
                            onChangeText={handleChange('confirmNewPassword')}
                            onBlur={handleBlur('confirmNewPassword')}
                            value={values.confirmNewPassword}
                            error={errors.confirmNewPassword}
                            touched={touched.confirmNewPassword}
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

export default RequestPassword