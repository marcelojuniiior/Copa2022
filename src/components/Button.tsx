import { Button as ButtonNativeBase, Text, IButtonProps } from "native-base";

interface Props extends IButtonProps {
  title: string;
  type?: "primary" | "secundary";
}

export function Button({ title, type = "primary", ...rest }: Props) {
  return (
    <ButtonNativeBase
      w={"full"}
      h={14}
      rounded={"sm"}
      fontSize={"md"}
      textTransform="uppercase"
      bg={type === "secundary" ? "red.500" : "yellow.500"}
      _pressed={{
        bg: type === "secundary" ? "red.600" : "yellow.600",
      }}
      _loading={{
        _spinner: { color: "yellow" },
      }}
      {...rest}
    >
      <Text
        fontSize="sm"
        fontFamily="heading"
        color={type === "secundary" ? "white" : "black"}
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
}
