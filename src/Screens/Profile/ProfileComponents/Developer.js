import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  Input,
  Image,
  Button,
  Icon,
  Avatar,
  AirbnbRating,
} from "react-native-elements";
import { map, size, filter, isEmpty } from "lodash";
import { useNavigation } from "@react-navigation/native";
import Loading from "../../../Components/Loading";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { cargarImagenesxAspecto } from "../../../Utils/Utils";
import {
  subirImagenesBatch,
  addRegistro,
  ObtenerUsuario,
} from "../../../Utils/Actions";

import colors from "../../../Utils/colors"

export default function AddRestaurante() {
  const [nombre, setnombre] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const [aforo, setaforo] = useState(0);
  const [imageneslogo, setimageneslogo] = useState([]);
  const [imagenesfondo, setimagenesfondo] = useState([]);
  const [categoria, setcategoria] = useState("");
  const [rating, setrating] = useState(5);
  const [errores, seterrores] = useState({});
  const [loading, setloading] = useState(false);
  const btnref = useRef();
  const navigation = useNavigation();

  const addProducto = async () => {
    seterrores({});
    if (isEmpty(nombre)) {
      seterrores({ titulo: "El Nombre del Restaurante es obligatorio" });
    } else if (isEmpty(descripcion)) {
      seterrores({ descripcion: "El campo descripcion es obligatorio" });
    } else if (!parseFloat(aforo) > 0) {
      seterrores({ precio: "Introduzca un precio para el producto" });
    } else if (isEmpty(categoria)) {
      Alert.alert(
        "Seleccione Categoría",
        "Favor seleccione una categoría para el producto o servicio",
        [
          {
            style: "cancel",
            text: "Entendido",
          },
        ]
      );
    } else if (isEmpty(imageneslogo)) {
      Alert.alert(
        "Seleccione Imagenes",
        "Favor seleccione una imagen para su producto o servicio",
        [
          {
            style: "cancel",
            text: "Entendido",
          },
        ]
      );
    } else if (isEmpty(imagenesfondo)) {
        Alert.alert(
          "Seleccione Imagenes",
          "Favor seleccione una imagen para su producto o servicio",
          [
            {
              style: "cancel",
              text: "Entendido",
            },
          ]
        );
      } 
    
    else {
      setloading(true);
      const urlimagenes = await subirImagenesBatch(
        imagenes,
        "ImagenesRestaurantes"
      );
      const producto = {
        nombre,
        direccion,
        descripcion,
        aforo,
        usuario: ObtenerUsuario().uid,
        imagenes: urlimagenes,
        status: 1,
        fechacreacion: new Date(),
        rating,
        categoria,
      };

      const registrarrestaurante = await addRegistro("Restaurante", restaurante);

      if (registrarproducto.statusreponse) {
        setloading(false);
        Alert.alert(
          "Registro Exitoso",
          "El producto se ha registrado correctamente",
          [
            {
              style: "cancel",
              text: "Aceptar",
              onPress: () => navigation.navigate("mitienda"),
            },
          ]
        );
      } else {
        setloading(false);

        Alert.alert(
          "Registro Fallido",
          "Ha ocurrido un error al registrar producto",
          [
            {
              style: "cancel",
              text: "Aceptar",
            },
          ]
        );
      }
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View
        style={{
          borderBottomColor: "#25D366",
          borderBottomWidth: 2,
          width: 100,
          marginTop: 20,
          alignSelf: "center",
        }}
      />
      <Input
        placeholder="Nombre de Restaurante"
        onChangeText={(text) => settitulo(text)}
        inputStyle={styles.input}
        errorMessage={errores.titulo}
      />
      <Input
        placeholder="Direccion"
        onChangeText={(text) => settitulo(text)}
        inputStyle={styles.input}
        errorMessage={errores.titulo}
      />
      <Input
        placeholder="Descripcion"
        onChangeText={(text) => setdescripcion(text)}
        inputStyle={styles.textarea}
        errorMessage={errores.descripcion}
        multiline={true}
      />
      <Input
        placeholder="Aforo"
        onChangeText={(text) => setaforo(parseFloat(text))}
        inputStyle={styles.input}
        errorMessage={errores.aforo}
        keyboardType="name-phone-pad"
      />

      <Text style={styles.txtlabel}>Calidad del Restaurante</Text>
      <AirbnbRating
        count={5}
        reviews={["Baja", "Deficiente", "Normal", "Muy Bueno", "Excelente"]}
        defaultRating={5}
        size={35}
        onFinishRating={(value) => {
          setrating(value);
        }}
      />
      <Text style={styles.txtlabel}>Cargar Logo (64x64)px </Text>
      <SubirImagenes imagenes={imagenes} setimagenes={setimagenes} />

      <Text style={styles.txtlabel}>Cargar fondo (256x256)px </Text>
      <SubirImagenes imagenes={imagenes} setimagenes={setimagenes} />

      <Text style={styles.txtlabel}>Asignar Categoria's de comida (Agregar la multifuncion de categorias)</Text>
      <Botonera categoria={categoria} setcategoria={setcategoria} />
      <Button
        title="Agregar Nuevo Restaurante"
        buttonStyle={styles.btnaddnew}
        ref={btnref}
        onPress={addProducto}
      />
      <Loading isVisible={loading} />
    </KeyboardAwareScrollView>
  );
}

function SubirImagenes(props) {
  const { imagenes, setimagenes } = props;

  const removerimagen = (imagen) => {
    Alert.alert(
      "Eliminar Imagen",
      "¿Estás Seguro de que quieres eliminar la imagen ?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          onPress: () => {
            setimagenes(filter(imagenes, (imagenURL) => imagenURL !== imagen));
          },
        },
      ]
    );
  };

  return (
    <ScrollView
      style={styles.viewimagenes}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {size(imagenes) < 1 && (
        <Icon
          type="material-community"
          name="plus"
          color="#7a7a7a"
          containerStyle={styles.containerIcon}
          onPress={async () => {
            const resultado = await cargarImagenesxAspecto([1, 1]);
            console.log(resultado);
            if (resultado.status) {
              setimagenes([...imagenes, resultado.imagen]);
            }
          }}
        />
      )}

      {map(imagenes, (imagen, index) => (
        <Avatar
          key={index}
          style={styles.miniatura}
          source={{ uri: imagen }}
          onPress={() => {
            removerimagen(imagen);
          }}
        />
      ))}
    </ScrollView>
  );
}

function Botonera(props) {
  const { categoria, setcategoria } = props;
  return (
    <View style={styles.botonera}>
      <TouchableOpacity
        style={styles.btncategoria}
        onPress={() => {
          setcategoria("libros");
        }}
      >
        <Icon
          type="material-community"
          name="book-open"
          size={24}
          color={categoria === "libros" ? colors.ORANGE : "#757575"}
          reverse
        />
        <Text>Libros</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btncategoria}
        onPress={() => {
          setcategoria("ideas");
        }}
      >
        <Icon
          type="material-community"
          name="lightbulb-on-outline"
          size={24}
          color={categoria === "ideas" ? "#128c7e" : "#757575"}
          reverse
          
        />
        <Text>Ideas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btncategoria}
        onPress={() => {
          setcategoria("articulos");
        }}
      >
        <Icon
          type="material-community"
          name="cart-arrow-down"
          size={24}
          color={categoria === "articulos" ? "#128c7e" : "#757575"}
          reverse
        />
        <Text>Artículos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btncategoria}
        onPress={() => {
          setcategoria("servicios");
        }}
      >
        <Icon
          type="material-community"
          name="account"
          size={24}
          color={categoria === "servicios" ? "#128c7e" : "#757575"}
          reverse
        />
        <Text>Servicios</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUNDCOLOR,
  },
  input: {
    width: "90%",
    borderRadius: 10,
    borderColor: "#707070",
    marginTop: 20,
    paddingHorizontal: 20,
    height: 50,
  },
  textarea: {
    height: 150,
  },
  txtlabel: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: colors.ORANGE,
  },
  btnaddnew: {
    backgroundColor: colors.ORANGE,
    marginTop: 20,
    marginBottom: 40,
    marginHorizontal: 20,
  },
  viewimagenes: {
    flexDirection: "row",
    flex: 1,
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 10,
  },
  containerIcon: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    height: 150,
    width: 100,
    backgroundColor: "#e3e3e3",
    padding: 10,
  },
  miniatura: {
    width: 100,
    height: 150,
    marginRight: 10,
  },
  botonera: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  btncategoria: {
    justifyContent: "center",
    alignItems: "center",
  },
});

