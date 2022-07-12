import React , {useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {Title,Caption,Text,TouchableRipple,} from 'react-native-paper';
import {ObtenerUsuario} from "../../Utils/Actions";
import {Avatar} from "react-native-elements";
import colors from "../../Utils/colors";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from "@react-navigation/native";
import { ScrollView } from 'react-native-gesture-handler';
import {cerrarsesion} from "../../Utils/Actions";
import { Button } from 'react-native';


function HeaderAvatar(props) {
    const { usuario, imagenperfil , setimagenperfil } = props;
  
    return (
      <View style={styles.avatarinline}>
        <Avatar
        source={
          imagenperfil
            ? { uri: imagenperfil }
            : require("../../../assets/profile.png")
        }
          style={styles.avatar}
          size="large"
          rounded
          showAccessory={true}
        />
      </View>
    );
  }

function SettingsProfile(){
    const navigation = useNavigation();
    return(
        <View style={{justifyContent:"center"}}>
            <Icon
            raised
            size={30}
            name='wrench'
            color={colors.ORANGE}
            onPress={()=> navigation.navigate("profile-settings")}
            />
        </View>
    );
}

const ProfileScreen = ({}) => {
  const [imagenperfil, setimagenperfil] = useState("");
  const [loading, setloading] = useState(false);
  const usuario = ObtenerUsuario();
  const [displayName, setdisplayName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setemail] = useState("");
  const navigation = useNavigation();

  
  useEffect(() => {
    setimagenperfil(usuario.photoURL);
    const { displayName, phoneNumber, email } = usuario;
    setdisplayName(displayName);
    setphoneNumber(phoneNumber);
    setemail(email);
  }, []);

  
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15 , width:'80%'}}>
        
          <HeaderAvatar 
            usuario={usuario}
            imagenperfil={imagenperfil}
            setimagenperfil={setimagenperfil}
            setloading={setloading}
          />

          <View style={{marginLeft: 10}}>
            <Title style={[styles.title, {
              marginTop:7,
            }]}>{displayName}</Title>
          </View>
            
        <View style={{justifyContent:"center" , flexDirection:"row" ,  width:"20%" , marginLeft:"28%"}}>
          <SettingsProfile/>
        </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color={colors.ORANGE}  size={20}/>
          <Text style={{color:colors.WHITE, marginLeft: 20}}>Lima, Perú</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color={colors.ORANGE}  size={20}/>
          <Text style={{color:colors.WHITE, marginLeft: 20}}>{phoneNumber}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color={colors.ORANGE} size={20}/>
          <Text style={{color:colors.WHITE, marginLeft: 20}}>{email}</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: colors.ORANGE,
            borderRightWidth: 1
          }]}>
            <Button
              title="Developer?"
              onPress={()=> navigation.navigate("developer")}
            />
          </View>
          <View style={styles.infoBox}>
            <Title>3</Title>
            <Caption>4</Caption>
          </View>
      </View>

      <ScrollView>
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={()=> navigation.navigate("yourlikes")}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color={colors.ORANGE} size={26}/>
            <Text style={styles.menuItemText}>Tus Gustos</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=> navigation.navigate("payment")}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color={colors.ORANGE} size={26}/>
            <Text style={styles.menuItemText}>Métodos de Pago</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=> navigation.navigate("verification")}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color={colors.ORANGE} size={26}/>
            <Text style={styles.menuItemText}>Verificación</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=> navigation.navigate("membership")}>
          <View style={styles.menuItem}>
            <Icon name="tag-outline" color={colors.ORANGE} size={26}/>
            <Text style={styles.menuItemText}>Membresias y Cupones</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=> navigation.navigate("notifications")}>
          <View style={styles.menuItem}>
            <Icon name="bell-outline" color={colors.ORANGE} size={26}/>
            <Text style={styles.menuItemText}>Notificaciones</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=> navigation.navigate("language")}>
          <View style={styles.menuItem}>
            <Icon name="web" color={colors.ORANGE} size={26}/>
            <Text style={styles.menuItemText}>Idioma</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=> navigation.navigate("reclamationsbook")}>
          <View style={styles.menuItem}>
            <Icon name="book" color={colors.ORANGE} size={26}/>
            <Text style={styles.menuItemText}>Libro de Reclamaciones</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=> navigation.navigate("termsandconditions")}>
          <View style={styles.menuItem}>
            <Icon name="information" color={colors.ORANGE} size={26}/>
            <Text style={styles.menuItemText}>Términos y Condiciones</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {cerrarsesion()}}>
          <View style={styles.menuItem}>
            <Icon name="door-open" color={colors.ORANGE} size={28}/>
            <Text style={styles.menuItemText}>Cerrar Sesión</Text>
          </View>
        </TouchableRipple>
        
      </View>
      </ScrollView>
      
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.BACKGROUNDCOLOR,
  },
  userInfoSection: {
    paddingHorizontal: 25,
    marginBottom: 20,

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.WHITE
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    paddingLeft:5,
    color: colors.GRAY
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: colors.ORANGE,
    borderBottomWidth: 2,
    borderTopColor: colors.ORANGE,
    borderTopWidth: 2,
    flexDirection: 'row',
    height: 90,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
    justifyContent:"space-between",
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 18,
    paddingHorizontal: 20,
  },
  menuItemText: {
    color: colors.WHITE,
    marginLeft: 20,
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 26,
  },
  avatar:{
    width:65,
    height:65,
  },
  avatarinline:{
    flexDirection:"row",
    justifyContent:"space-around",
  },
});