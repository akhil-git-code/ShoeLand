import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';
import CustomInput from '../Components/CustomInput';

const options = [
  'Apple',
  'Banana',
  'Orange',
  'Grapes',
  'Pineapple',
  'Strawberry',
  'Watermelon',
];

const SearchableDropdownModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const filteredOptions = options.filter(item =>
    item.toLowerCase().includes(search.toLowerCase()),
  );

  const selectItem = (item: string) => {
    setSelectedOption(item);
    setModalVisible(false);
    setSearch('');
  };

  return (
    <View style={styles.container}>
      <CustomInput
        value={selectedOption}
        placeholder="Select an option"
        onPress={() => setModalVisible(true)}
      />

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
          <CustomInput
              style={styles.searchInput}
              placeholder="Search..."
              value={search}
              onChangeText={setSearch}
            />

            <FlatList
              data={filteredOptions}
              keyExtractor={item => item}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => selectItem(item)}
                  style={styles.optionItem}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />

            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SearchableDropdownModal;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  dropdownButton: {
    borderWidth: 0,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
  },
  dropdownText: {
    color: '#000',
  },
  modalOverlay: {
    // position:"absolute",
    flex: 1,
    backgroundColor: '#00000080',
    // justifyContent: 'center',
    padding: 20,
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    maxHeight: '70%',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
  },
  optionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  closeText: {
    textAlign: 'center',
    color: 'red',
    marginTop: 10,
  },
});
