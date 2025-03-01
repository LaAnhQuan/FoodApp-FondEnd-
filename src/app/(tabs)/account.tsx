import ShareInput from "@/components/input/share.input";
import { useCurrentApp } from "@/context/app.contex";
import { Image, Platform, Text, View } from "react-native"

const AccountPage = () => {
    const { theme, appState } = useCurrentApp();

    const backend = Platform.OS === 'android'
        ? process.env.EXPO_PUBLIC_ANDROID_API_URL
        : process.env.EXPO_PUBLIC_IOS_API_URL;
    const baseImage = `${backend}/images/avatar`;

    return (
        <View>
            <View style={{ alignItems: "center", gap: 5 }}>
                <Image
                    style={{ height: 150, width: 150 }}
                    source={{ uri: `${baseImage}/${appState?.user?.avatar}` }}
                />
                <Text>{appState?.user.name}</Text>
            </View>
            <View style={{ marginTop: 20, gap: 20 }}>
                <ShareInput
                    title="Họ Tên"
                    // onChangeText={handleChange('name')}
                    // onBlur={handleBlur('name')}
                    //error={errors.name}
                    value={appState?.user.name}
                />
                <ShareInput
                    title="Email"
                    keyboardType="email-address"
                    // onChangeText={handleChange('email')}
                    // onBlur={handleBlur('email')}
                    // error={errors.email}
                    value={appState?.user.email}
                />
                <ShareInput
                    title="Số điện thoại"
                    // secureTextEntry={true}
                    // onChangeText={handleChange('password')}
                    // onBlur={handleBlur('password')}
                    // error={errors.password}
                    value={appState?.user.phone}
                />
            </View>
        </View>

    )
}

export default AccountPage