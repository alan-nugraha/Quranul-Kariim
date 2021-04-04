import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import axios from 'axios';
import Loading from '../components/loading';

function Detail(props) {
  const id = props.route.params.noSurat;
  const nameSurat = props.route.params.namaSurat;

  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  const detailSurah = () => {
    axios
      .get('https://al-quran-8d642.firebaseio.com/surat/' + id + '.json')
      .then(result => {
        setDetail(result.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  };
  useEffect(() => {
    detailSurah();
  });

  const renderDetail = ({item}) => (
    <View style={styles.list}>
      <View style={styles.containerFlatlist}>
        <View style={styles.border}>
          <Text style={styles.textNumber}>{item.nomor}</Text>
        </View>
        <Text style={styles.arabText}>{item.ar}</Text>
      </View>
      <View
        style={{
          borderTopWidth: 1,
          borderColor: '#D5D5D5',
          marginBottom: '4%',
        }}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>{nameSurat}</Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: '5%',
          top: -20,
        }}>
        <FlatList
          data={detail}
          renderItem={renderDetail}
          keyExtractor={(_, index) => index}
          onEndReachedThreshold={0.5}
          showsVerticalScrollIndicator={false}
        />
      </View>
      {loading && <Loading />}
    </View>
  );
}

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    height: '15%',
    backgroundColor: '#02C882',
    justifyContent: 'center',
  },
  textHeader: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'Raleway-Bold',
    fontSize: 20,
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
  list: {
    justifyContent: 'space-between',
    marginBottom: '2%',
  },
  containerFlatlist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '5%',
    flex: 1,
  },
  arabText: {
    width: '70%',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555555',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
