import { StyleSheet, ScrollView } from "react-native";
import { images } from "../../utils";

import Layout from "../layout/Layout.jsx";
import MainCardInfo from "./homeView/MainCardInfo";
import ViewTitleCard from "./homeView/ViewTitleCard";

const Claim = (props) => {
  return (
    <Layout props={{ ...props }}>
      <ScrollView>
        <ViewTitleCard
          title={"Novedades"}
          buttonText="+ Nueva"
          onPressAction={() => console.log("nueva novedad")}
        />
        <MainCardInfo
          firstTitle={"Sistema"}
          secondTitle="de novedades"
          description={
            "Podrás conocer el estado o trazabilidad de tus novedades"
          }
          image={images.employeeNimage}
        />
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({});

export default Claim;
