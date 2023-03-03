import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    TextInput,
    ScrollView,
    StatusBar
} from "react-native";
import {
    colors,
    getFontStyles,
    heightPercentageToPx,
    images,
    widthPercentageToPx,
} from "../../utils";

import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";

const Download = ({ navigation }) => {

    return (
        //style={styles.containerScroll} 
        <View>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.notbar}>
                        <Image
                            style={styles.userImg}
                            source={{ uri: images.userImage }}
                        />
                        <Pressable
                            onPress={() =>
                                console.log("presion")
                            }>
                            <View style={styles.notbar2}>
                                <Ionicons name="md-notifications-outline" size={30} color="white" />
                            </View>
                        </Pressable>


                    </View>
                    <View style={styles.down}>

                        <View style={styles.title}>
                            <Text style={styles.welcomeText}>Descarga!</Text>
                            <Text style={styles.toApp}>Certificados y documentos</Text>

                            <View style={styles.descriptionContainer}>
                                <Text style={styles.welcomeDesc}>
                                    Trabajamos para mejorar tu experiencia como empleado o empresa.
                                </Text>
                            </View>
                        </View>
                        <Image
                            style={styles.loginBackgroundImages}
                            source={{ uri: images.loginImage }}
                        />

                    </View>
                    <View style={styles.containerScroll}>
                        <ScrollView style={styles.scrollView} horizontal={true}>
                            <View style={styles.scrollStyle}>
                                <Image
                                    style={styles.certificadoImage}
                                    source={{ uri: images.certificadoImage1 }}
                                />
                                <Text style={styles.toApp2}>Certificado laboral</Text>
                                <Text style={styles.welcomeDesc2}>Descarga tu certificado laboral sin necesidad de pedirlo a Grupologis.</Text>
                                <Pressable>
                                    <View style={styles.asEmployeeButton}>
                                        <Text style={{ color: colors.white }}>Descargar</Text>
                                    </View>
                                </Pressable>
                            </View>
                            <View style={styles.scrollStyle}>
                                <Image
                                    style={styles.certificadoImage}
                                    source={{ uri: images.certificadoImage2 }}
                                />
                                <Text style={styles.toApp2}>Certificado laboral</Text>
                                <Text style={styles.welcomeDesc2}>Descarga tu certificado laboral sin necesidad de pedirlo a Grupologis.</Text>
                                <Pressable>
                                    <View style={styles.asEmployeeButton}>
                                        <Text style={{ color: colors.white }}>Descargar</Text>
                                    </View>
                                </Pressable>
                            </View>
                            <View style={styles.scrollStyle}>
                                <Image
                                    style={styles.certificadoImage}
                                    source={{ uri: images.certificadoImage3 }}
                                />
                                <Text style={styles.toApp2}>Certificado laboral</Text>
                                <Text style={styles.welcomeDesc2}>Descarga tu certificado laboral sin necesidad de pedirlo a Grupologis.</Text>
                                <Pressable>
                                    <View style={styles.asEmployeeButton}>
                                        <Text style={{ color: colors.white }}>Descargar</Text>
                                    </View>
                                </Pressable>
                            </View>
                            <View style={styles.scrollStyle}>
                                <Image
                                    style={styles.certificadoImage}
                                    source={{ uri: images.certificadoImage4 }}
                                />
                                <Text style={styles.toApp2}>Certificado laboral</Text>
                                <Text style={styles.welcomeDesc2}>Descarga tu certificado laboral sin necesidad de pedirlo a Grupologis.</Text>
                                <Pressable>
                                    <View style={styles.asEmployeeButton}>
                                        <Text style={{ color: colors.white }}>Descargar</Text>
                                    </View>
                                </Pressable>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.loginBackgroundColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: heightPercentageToPx(100),
    },
    topContainer: {
        display: "flex",
        alignItems: "center",
        height: heightPercentageToPx(55),
        width: widthPercentageToPx(75),
    },
    imageContainer: {
        height: heightPercentageToPx(40),
        width: widthPercentageToPx(80),
    },
    logoImage: {
        width: widthPercentageToPx(35),
        height: heightPercentageToPx(9),
        marginTop: 50,
        marginBottom: 50,
        overflow: "visible",
    },
    welcomeText: {
        fontFamily: "Poppins-Bold",
        color: colors.mainBlue,
        ...getFontStyles(30),
    },
    toApp: {
        ...getFontStyles(22),
        fontFamily: "Poppins-Bold",
    },
    toApp2: {
        ...getFontStyles(15),
        fontFamily: "Poppins-Bold",
    },
    descriptionContainer: {
        width: widthPercentageToPx(60),
    },
    welcomeDesc: {
        fontFamily: "Poppins-Regular",
        color: colors.descriptionColors,
        marginTop: 20,
        ...getFontStyles(14, 0.5, 0.9),
    },
    welcomeDesc2: {
        fontFamily: "Poppins-Regular",
        color: colors.descriptionColors,
        marginTop: 5,
        marginBottom: 10,
        ...getFontStyles(12, 0.5, 0.9),
    },
    buttonsContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        width: widthPercentageToPx(100),
        marginTop: 30,
    },
    asEmployeeButton: {
        backgroundColor: colors.buttonsColor,
        fontFamily: "Poppins-Regular",
        height: heightPercentageToPx(6),
        width: widthPercentageToPx(25),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,

    },
    asBusinessButton: {
        backgroundColor: colors.mainBlue,
        fontFamily: "Poppins-Regular",
        height: 55,
        width: widthPercentageToPx(65),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginTop: 20,
    },
    loginBackgroundImages: {
        height: heightPercentageToPx(30),
        width: widthPercentageToPx(80),
        left: 75,
        bottom: 65,
    },
    userImg: {
        height: heightPercentageToPx(10),
        width: widthPercentageToPx(20),
        height: 40,
        width: 40,
        marginTop: 17,
        left: 20,

    },

    certificadoImage: {
        height: heightPercentageToPx(12),
        width: widthPercentageToPx(25),
        left: 5,
        top: 10,
        marginBottom: 30,
        height:90,
        width:90,
    },
    textInputContainers: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        gap: 8,
        width: widthPercentageToPx(65),
        height: 50,
        marginTop: 10,
    },
    codeElementContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        marginTop: 10,
        width: "23%",
        borderRadius: 7,
        backgroundColor: colors.white,
    },
    codeElement: {
        fontFamily: "Poppins-Light",
        color: colors.gray,
        ...getFontStyles(18, 0.5, 0.9),
    },
    goBackButton: {
        position: "relative",
        top: 20,
        left: widthPercentageToPx(-43),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.black,
        opacity: 0.4,
        borderRadius: 15,
        height: 30,
        width: 30,
    },
    notbar: {
        width: widthPercentageToPx(90),
        height: heightPercentageToPx(10),
        marginTop: 20,
        marginBottom: 10,
        overflow: "visible",
        backgroundColor: colors.mainBlue,
        borderRadius: 9,
    },
    notbar2: {
        display: "flex",
        alignItems: "center",
        position: "relative",
        width: widthPercentageToPx(10),
        height: heightPercentageToPx(5),
        overflow: "visible",
        left: 290,
        bottom: 35,


    },
    down: {
        width: widthPercentageToPx(90),
        height: heightPercentageToPx(40),
        overflow: "hidden",
        marginBottom: 7,
        backgroundColor: colors.white,
        borderRadius: 17,
        alignItems: "center",
    },
    scrollStyle: {
        width: widthPercentageToPx(45),
        height: heightPercentageToPx(35),
        overflow: "hidden",
        marginBottom: 30,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: colors.white,
        borderRadius: 17,
        alignItems: "center",
    },
    title: {
        marginTop: 20,
    },
    containerScroll: {
        paddingTop: StatusBar.currentHeight,
    },

});

export default Download;