import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import CustomInput from '../Components/CustomInput';

const options = [
  {
    name: 'Apple',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg',
  },
  {
    name: 'Banana',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg',
  },
  {
    name: 'Orange',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg',
  },
  {
    name: 'Strawberry',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg',
  },
  {
    name: 'Pineapple',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Pineapple_and_cross_section.jpg',
  },
  {
    name: 'Watermelon',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Watermelons.jpg',
  },
  {
    name: 'Kiwi',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg',
  },
  {
    name: 'Mango',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg',
  },
  {
    name: 'Papaya',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Papaya_cross_section_bnc.jpg',
  },
  {
    name: 'Blueberry',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Blueberries.jpg',
  },
  {
    name: 'Guava',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Guava_ID.jpg',
  },
  {
    name: 'Cherry',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Cherry_Stella444.jpg',
  },
  {
    name: 'Peach',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Nectarine_and_cross_section02_edit.jpg',
  },
  {
    name: 'Pomegranate',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Pomegranate_fruit_-_whole_and_piece_with_arils.jpg',
  },
];

const Searchbar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedOption, setSelectedOption] = useState<{
    name: string;
    image: string;
  } | null>(null);

  const filteredOptions = options.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const selectItem = (item: {name: string; image: string}) => {
    setSelectedOption(item);
    setModalVisible(false);
    setSearch('');
  };

  return (
    <View style={styles.container}>
      <CustomInput
        value={selectedOption?.name || ''}
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
              // editable={true}
            />

            <FlatList
              data={filteredOptions}
              keyExtractor={item => item.name}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => selectItem(item)}
                  style={styles.optionItem}>
                  <View style={styles.optionRow}>
                    <Image
                      source={{uri: item.image}}
                      style={styles.fruitImage}
                    />
                    <Text style={styles.fruitName}>{item.name}</Text>
                  </View>
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

export default Searchbar;

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

  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fruitImage: {
    width: 30,
    height: 30,
    borderRadius: 5,
    marginRight: 12,
  },
  fruitName: {
    fontSize: 16,
    color: '#000',
  },
  closeText: {
    textAlign: 'center',
    color: 'red',
    marginTop: 10,
  },
});
