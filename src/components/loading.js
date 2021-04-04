import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

function loading() {
  return (
    <View style={styles.loading}>
      <ActivityIndicator color="#07A9F0" size={30} />
    </View>
  );
}

export default loading;

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
