import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window"); //Retorna largura e altura do
// Celular do usuário.

export default {
  baseMargin: 10,
  basePadding: 20,
  baseRadius: 3,
  // Trabalhar com a aplicação tanto com o celular em pé quanto deitado
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width
};
