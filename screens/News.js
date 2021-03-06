import React, { useEffect } from "react";
import { View, Text, ImageBackground, FlatList } from "react-native";
import useGet from "../hooks/useGet";
import { Colors } from "../styles/styled";
import useModal from "../hooks/useModal";
import News_pages from "../styles/News_page";
import newsBackground from "../assets/newsBackground.jpg";
import New_card from "../components/New_card";
import { Entypo } from "@expo/vector-icons";
import LoandingModal from "../components/LoandingModal";
import btnDrawerStyle from "../styles/btnDrawerStyle";
import Btn_link from "../components/Btn_link";
import Btn_icon from "../components/Btn_icon";

export default function News({ navigation }) {
  const { data, loading, error } = useGet(
    "YOUR-API-ADDRESS"
  );
  const [isLoadingModalOpen, openLoadingModal, closeLoadingModal] = useModal(
    !loading
  );

  useEffect(() => {
    if (loading) openLoadingModal();
    else {
      closeLoadingModal();
    }
  }, [loading]);

  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <>
      <View style={News_pages.page}>
        <Btn_icon
          icon={<Entypo name="menu" size={24} color={Colors.third} />}
          color={Colors.white}
          onPress={openDrawer}
          styleButton={[btnDrawerStyle.btn]}
        />
        <View style={News_pages.header}>
          <ImageBackground
            source={newsBackground}
            style={News_pages.header_background}
          >
            <View>
              <Text style={News_pages.header_title}>COOPDGII NEWS</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={News_pages.body}>
          {!loading && (
            <FlatList
              data={data?.data}
              keyExtractor={(item, index) => `${index}-${item.id}`}
              renderItem={({ item }) => (
                <New_card
                  img={item.imagen}
                  title={item.title}
                  onNextScreen={() => navigation.navigate("New", { item })}
                />
              )}
            />
          )}
        </View>
      </View>

      <LoandingModal isLoadingModalOpen={isLoadingModalOpen} />
    </>
  );
}
