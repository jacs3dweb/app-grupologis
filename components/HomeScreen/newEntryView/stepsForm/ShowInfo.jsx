import { Text } from "react-native";

const ShowInfo = (props) => {
  const { module, info } = props;

  <Text> {JSON.stringify(info)} </Text>;
};

export default ShowInfo;
