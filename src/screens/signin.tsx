import { Center, Text, Icon } from "native-base";
import { Fontisto } from "@expo/vector-icons";

import Logo from "../assets/logo.svg";
import { Button } from "../components/Button";

export function Signin() {
  return (
    <Center flex={1} bgColor="gray.900">
      <Logo width={212} height={40} />

      <Button
        title="ENTRAR COM O GOOGLE"
        leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
        type="secundary"
        mt={12}
      />

      <Text color="white" textAlign="center" mt={4}>
        Não ultilizamos nenhuma informação além {"\n"} do seu email para criar a
        sua conta.
      </Text>
    </Center>
  );
}
