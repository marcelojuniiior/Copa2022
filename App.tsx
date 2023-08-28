import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { NativeBaseProvider, StatusBar, Center } from "native-base";

import { THEME } from "./src/styles/theme";
import { Signin } from "./src/screens/signin";
import { Loading } from "./src/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Center flex={1} bgColor="gray.900">
        {fontsLoaded ? <Signin /> : <Loading />}
      </Center>
    </NativeBaseProvider>
  );
}
