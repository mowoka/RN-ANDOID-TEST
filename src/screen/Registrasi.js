import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Picker,
  FlatList,
  ScrollView,
} from 'react-native';
import {Input} from 'react-native-elements';
import {set} from 'react-native-reanimated';

const Registrasi = () => {
  const [PickerValue, setPickerValue] = useState('');
  const [PickerCityValue, setPickerCityValue] = useState('');
  const [PickerKecValue, setPickerKecValue] = useState('');
  const [PickerKelValue, setPickerKelValue] = useState('');

  return (
    <View style={styles.Container}>
      <Text> Pilih Provinsi </Text>
      <Picker
        style={styles.pickerBox}
        selectedValue={PickerValue}
        onValueChange={(itemValue, itemIndex) => setPickerValue(itemValue)}>
        {Provinsi.map((item, index) => {
          return <Picker.Item label={item} value={item} key={index} />;
        })}
      </Picker>
      <Text> Pilih Kota </Text>
      <Picker
        style={styles.pickerBox}
        selectedValue={PickerCityValue}
        onValueChange={(itemValue, itemIndex) => setPickerCityValue(itemValue)}>
        {kota.map((item, index) => {
          return <Picker.Item label={item} value={item} key={index} />;
        })}
      </Picker>
      <Text> Pilih Kecamatan </Text>
      <Picker
        style={styles.pickerBox}
        selectedValue={PickerKecValue}
        onValueChange={(itemValue, itemIndex) => setPickerKecValue(itemValue)}>
        {kecamatan.map((item, index) => {
          return <Picker.Item label={item} value={item} key={index} />;
        })}
      </Picker>
      <Text> Pilih Kelurahan </Text>
      <Picker
        style={styles.pickerBox}
        selectedValue={PickerKelValue}
        onValueChange={(itemValue, itemIndex) => setPickerKelValue(itemValue)}>
        {Kelurahan.map((item, index) => {
          return <Picker.Item label={item} value={item} key={index} />;
        })}
      </Picker>

      <View style={styles.posBox}>
        <Input placeholder="Kode Pos" editable={false} />
      </View>
    </View>
  );
};

export default Registrasi;

const options = ['apple', 'jeruk'];

const Provinsi = [
  'Aceh',
  'Sumatra Utara',
  'Sumatra Barat',
  'Riau',
  'Kepulawan Riau',
  'Jambi',
  'Bengkulu',
  'Sumatra Selatan',
  'Kepulawan Bangka',
  'Lampung',
  'Banten',
  'DKI DJAKARTA',
  'Jawa barat',
  'Jawa Tengah',
  'Jawa Timur',
  'DI Djojakarta',
  'Bali',
  'NTB',
  'NTT',
];

const kota = [
  'Banda Aceh',
  'Langsa',
  'sabang',
  'Denpasar',
  'Cilegon',
  'Tanggerang selatan',
  'Tanggerang',
  'Bengkulu',
  'Jakarta Barat',
  'Jakarta pusat',
  'Jakarta Timur',
  'Jakarta Utara',
  'Jakarta Selatan',
  'Bandung',
  'Bekasi',
  'bogor',
  'Cimahi',
];

const kecamatan = [
  'Cimahi Selatan',
  'Cimahi Tengah',
  'Cimahi Utara',
  'Banjar',
  'Langensari',
  'Pataruman',
  'Purwaharja',
  'Babalean',
  'Cibarusan',
  'Cibitung',
  'Cikarang Barat',
];

const Kelurahan = [
  'Baros',
  'Cigugur Tengah',
  'Cimahi',
  'Karang Mekar',
  'Padasuka',
  'Setiamanah',
  'Antapani Kulon',
  'Antapani Tengah',
  'Antapani Wetan',
  'Cihapit',
  'Citarum',
  'Taman Sari',
  'Cicadas',
  'Padasuka',
  'Sukamaju',
  'Antapani Kidul',
  'Cikutra',
];

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  pickerBox: {
    width: '80%',
  },
  posBox: {
    width: '60%',
  },
  provinsiBox: {
    width: '80%',
    alignItems: 'center',
  },
  provinsiDrop: {
    position: 'absolute',
    width: '100%',
    height: 100,
    backgroundColor: 'gray',
    marginTop: 70,
  },
});
