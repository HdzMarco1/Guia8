import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Card} from 'react-native-elements';
const Pais = ({resultado}) => {
  const [info, setinfo] = useState([]);
  const [nombre, setnombre] = useState();
  const [capital, setcapital] = useState();
  const [region, setregion] = useState();
  const [lengua, setlengua] = useState([]);
  const [KilometrosCuadrados, setKilometros] = useState();
  const [imagen, setImagen] = useState();
  useEffect(() => {
    setinfo(resultado);
    //console.log(resultado);
    lengua.length = 0;
    Object.values(info).map(e => {
      setnombre(e.nome.abreviado);
      setcapital(e.governo.capital.nome);
      setregion(e.localizacao.regiao.nome);
      setKilometros(e.area.total);

      rutas.forEach(item => {
        if (item.id == e.id['ISO-3166-1-ALPHA-2']) {
          setImagen(item.src);
          console.log(imagen);
        }
      });

      Object.values(e.linguas).map(l => {
        lengua.push(l.nome);
      });
    });
  });

  const rutas = [
    {
      id: 'AR',
      src: 'https://amp.protocolo.org/extfiles/i-8133-cG.30928.1.jpg',
    },
    {
      id: 'CA',
      src: 'https://i.pinimg.com/originals/f8/e5/10/f8e510af8f121101ee9c43bc14b75598.jpg',
    },
    {
      id: 'CO',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/2560px-Flag_of_Colombia.svg.png',
    },
    {
      id: 'CR',
      src: 'https://i.pinimg.com/originals/e3/7e/40/e37e409bcad7c73c43ada4b93ad2cc72.jpg',
    },
    {
      id: 'ES',
      src: 'https://i.pinimg.com/736x/65/fa/a9/65faa97794888ee600f30b00f330c477.jpg',
    },
    {
      id: 'GT',
      src: 'https://s3.us-west-2.amazonaws.com/cdn.republica.gt/2021/03/0059a9e9954be8b074b0fdbf255ffa6d-2.jpg',
    },
    {
      id: 'HN',
      src: 'https://st.depositphotos.com/1803622/1376/i/600/depositphotos_13767393-stock-photo-honduras.jpg',
    },
    {
      id: 'MX',
      src: 'https://mxcity.mx/wp-content/uploads/2016/02/banderas-1024x576.jpg',
    },
    {
      id: 'NI',
      src: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Bandera_de_Nicaragua.jpg',
    },
    {
      id: 'PA',
      src: 'https://st.depositphotos.com/1610517/3425/i/600/depositphotos_34252581-stock-photo-panama-flag-blowing-in-the.jpg',
    },
    {
      id: 'PE',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_Peru_%28state%29.svg/2560px-Flag_of_Peru_%28state%29.svg.png',
    },
    {
      id: 'SV',
      src: 'https://i0.wp.com/goldservice.com.sv/wp-content/uploads/2016/05/ws_El_Salvador_Flag_1920x1200.jpg',
    },
    {
      id: 'US',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png',
    },
  ];

  return (
    <Card>
      <Card.Title>{nombre}</Card.Title>
      <Card.Divider />
      <View style={{justifyContent: 'center'}}>
        <Text>Capital:{capital}</Text>
        <Text>Region:{region}</Text>
        <Text>Lengua:{lengua.toString()}</Text>
        <Text>Kilometros Cuadrados:{KilometrosCuadrados} km^2</Text>
        <Image
        style={styles.banner}
        source={{uri:imagen}}
        ></Image>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  banner:{
   height:250,
   width: 320
  }
  });
export default Pais;