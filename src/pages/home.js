import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import Loading from '../components/loading';

function Home(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllSurah();
  });

  const getAllSurah = () => {
    axios
      .get('https://al-quran-8d642.firebaseio.com/data.json')
      .then(result => {
        setData(result.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const goToDetail = (id, nameSurat) => {
    props.navigation.navigate('Detail', {noSurat: id, namaSurat: nameSurat});
  };
  const renderSurat = ({item}) => (
    <View style={styles.content}>
      <TouchableOpacity
        style={styles.mainContainer}
        onPress={() => goToDetail(item.nomor, item.nama)}>
        <View style={styles.containerInitial}>
          <View style={styles.border}>
            <Text style={styles.textNumber}>{item.nomor}</Text>
          </View>
        </View>
        <View style={styles.containerContent}>
          <View>
            <Text style={styles.textName}>{item.nama}</Text>
            <Text style={styles.textTranslate}>
              {item.arti} ({item.ayat})
            </Text>
          </View>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text style={{fontSize: 18}}>{item.asma}</Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          borderTopWidth: 1,
          borderColor: '#D5D5D5',
          marginTop: 15,
        }}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#02C882" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.textHeader}>Al - Quran</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderSurat}
        keyExtractor={(_, index) => index}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
      />
      {loading && <Loading />}
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  header: {
    height: '12%',
    backgroundColor: '#02C882',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  textHeader: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'Raleway-Bold',
    fontSize: 20,
  },
  content: {
    width: '100%',
    backgroundColor: '#F6F6F6',
    paddingHorizontal: '3%',
    marginTop: 15,
  },
  mainContainer: {
    flexDirection: 'row',
  },
  containerInitial: {
    marginRight: 15,
    alignSelf: 'center',
  },
  border: {
    backgroundColor: '#02C882',
    height: 41,
    width: 41,
    justifyContent: 'center',
    borderRadius: 5,
  },
  textNumber: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    alignSelf: 'center',
    color: 'white',
  },
  containerContent: {
    flex: 1,
  },
  textName: {
    color: '#02C87F',
    fontFamily: 'Raleway-Bold',
    fontSize: 14,
    width: '75%',
  },
  textTranslate: {
    color: '#A3A199',
    fontFamily: 'Roboto-Bold',
  },
});
