import { Image, StyleSheet, View } from "react-native"
import ShareButton from "./share.button"
import TextBetweenLine from "./text.between.line"
import fbLogo from '@/assets/auth/facebook.png';
import ggLogo from '@/assets/auth/google.png'


const styles = StyleSheet.create({
    welcomeBtn: {
        flex: 1,
        gap: 20,
    }
})

interface IProps {
    title: string
}


const SocialButton = (props: IProps) => {
    const { title } = props;
    return (
        <View style={styles.welcomeBtn}>
            <TextBetweenLine title={title} />

            <View style={{
                flexDirection: "row",
                justifyContent: "center",
                gap: 30
            }}>
                <ShareButton
                    title="facebook"
                    onPress={() => { alert("me") }}
                    textStyle={{ textTransform: "uppercase" }}
                    btnStyle={{
                        backgroundColor: "#fff",
                        justifyContent: "center",
                        borderRadius: 30
                    }}
                    icons={
                        <Image source={fbLogo} />
                    }
                />

                <ShareButton
                    title="google"
                    onPress={() => { alert("me") }}
                    textStyle={{ textTransform: "uppercase" }}
                    btnStyle={{
                        backgroundColor: "#fff",
                        justifyContent: "center",
                        borderRadius: 30,
                        paddingHorizontal: 20
                    }}
                    icons={
                        <Image source={ggLogo} />
                    }
                />
            </View>
        </View>

    )
}

export default SocialButton