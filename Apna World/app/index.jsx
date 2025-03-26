import { images } from "@/constants";
import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import  CustomButton from "../components/CustomButton";
import { router } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[250px] h-[64px] mb-4"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px] mb-4"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-2xl text-white font-bold text-center">
              Discover Endless{"\n"} Possibilities with{" "}
              <Text className="text-secondary-200">Apna world</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[146px] h-[16px] absolute -bottom-4 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Apna world.
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => {router.push('./sign-in')}}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor={'#161622'} barStyle={'light'}/>
    </SafeAreaView>
  );
}
