
import { StatusBar } from "expo-status-bar";
import {
  Image,
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado />
      <Cuerpo />
      <Pie />
    </View>
  );
}
export const Encabezado = () => {
  return (
    <View style={styles.encabezado}>
      
      <Text style={styles.texto}>NokoPrint</Text> 
      <Image style={styles.img} source={{ uri: "https://cdn-icons-png.flaticon.com/512/545/545684.png" }} />

      
      <Text style={styles.texto2}>No seleccionado</Text>
      <Image style={styles.img2} source={{ uri:"https://cdn-icons-png.flaticon.com/512/5122/5122709.png"}}/>

     
      
    </View>
  );
};
export const Login = () => {
  return (
    <View>
      <Text style={styles.label}>Fotos e imágenes</Text>
      <Image style={styles.img3} source={require("./assets/drawable/Screenshot 2024-02-03 111527.png")} />

      <Text style={styles.label}>Documentos</Text>
      <Image style={styles.img4} source={require("./assets/drawable/Screenshot 2024-02-03 111538.png")} />

      <Text style={styles.label}>Páginas web</Text>
      <Image style={styles.img5} source={require("./assets/drawable/Screenshot 2024-02-03 111649.png")} />

      
     
    </View>
   
  );
};

export const Cuerpo = () => {
  return (
    <View style={styles.cuerpo}>
      <Text style={styles.texto}>Cuerpo</Text>
      <Login />
    </View>
  );
};

export const Pie = () => {
  //aqui podria tener varias operaciones sin problemas
  return (
    <View style={styles.pie}>
      <Text style={styles.txt3}>The best Memory Foam Pillows</Text>
      <Text style={styles.txt3}>Sponsored</Text>

      <Image style={styles.img6} source={{ uri: "https://cdn-icons-png.flaticon.com/512/545/545684.png" }} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "stretch",
    justifyContent: "center",
  },
  texto: {
    color: "white",
    fontSize: 20,
    marginLeft:"7%",
    marginTop:"10%"
  },
  texto2: {
    color: "white",
    fontSize: 15,
    marginLeft:"19%",
    marginTop:"6%",
    fontWeight:"bold"
  },
  txt3: {
    fontSize:8
  },
  pie: {
    color: "white",
    fontSize:15,
    marginLeft:"12%",
    position:'absolute',
    top: 580
  },
  encabezado: {
    flex: 1.7,
    flexDirection: "column", 
    justifyContent: "center", 
    alignItems: "flex-start", 
    backgroundColor: "#0d47a1"
  },
  cuerpo: {
    flex: 7,
    marginTop:"-5%",
    alignItems:"center"
  },

  label:{
    textAlign:"left",
    color:"black",
    marginBottom:"25%",
    fontSize:18,
    marginLeft:45
  },
  img:{
    width:20,
    height:20,
    position: 'absolute', 
    top: 67, 
    left: 320
  },
  img2:{
    width:40,
    height:40,
    position: 'absolute', 
    top: 100, 
    left: 15
  },
  img3:{
    width:90,
    height:90,
    position: 'absolute', 
    top: -35, 
    left: -65
  },
  img4:{
    width:90,
    height:90,
    position: 'absolute', 
    top: 78, 
    left: -65
  },
  img5:{
    width:90,
    height:90,
    position: 'absolute', 
    top: 195, 
    left: -65
  },
  img6:{
    width:14,
    height:14,
    position: 'absolute', 
    top: 190, 
    left: -4
  }
});
