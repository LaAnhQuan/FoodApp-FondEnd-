import RMain from "@/components/example/restaurant/main"
import SectionListBasic from "@/components/example/section.list.basic"
import SectionListScroll from "@/components/example/section.list.scroll"
import { getRestaurantByIdAPI } from "@/utils/api"
import { useLocalSearchParams } from "expo-router"
import { useEffect, useState } from "react"
import { View } from "react-native"

const ProductPage = () => {
    const { id } = useLocalSearchParams();
    const [restaurant, setRestaurant] = useState<IRestaurant | null>(null)
    useEffect(() => {
        const fetchRestaurant = async () => {
            const res = await getRestaurantByIdAPI(id as string)
            if (res.data) {
                console.log(res.data)
                setRestaurant(res.data)
            }
        }

        fetchRestaurant()
    }, [id])
    return (
        <View style={{ flex: 1 }}>
            <RMain
                restaurant={restaurant}
            />

        </View>
    )

}

export default ProductPage