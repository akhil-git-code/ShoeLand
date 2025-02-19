import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';

const Notifications = ({ navigation }) => {
  // Dummy Notifications Data
  const [notifications, setNotifications] = useState([
    { id: '1', title: 'Order Shipped', message: 'Your order #12345 has been shipped.' },
    { id: '2', title: 'New Offer!', message: 'Get 20% off on your next purchase.' },
    { id: '3', title: 'Delivery Update', message: 'Your package will be delivered tomorrow.' },
    { id: '4', title: 'Payment Received', message: 'Your payment for order #67890 is successful.' },
  ]);

  // Function to Clear Notifications
  const clearNotifications = () => {
    if (notifications.length === 0) {
      Alert.alert('No Notifications', 'There are no notifications to clear.');
      return;
    }
    
    Alert.alert(
      'Clear Notifications',
      'Are you sure you want to clear all notifications?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Clear All', onPress: () => setNotifications([]) },
      ]
    );
  };

  const renderNotification = ({ item }) => (
    <View style={styles.notificationCard}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationMessage}>{item.message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Notifications</Text>
        <TouchableOpacity onPress={clearNotifications}>
          <Text style={styles.clearText}>Clear</Text>
        </TouchableOpacity>
      </View>

      {/* Notifications List */}
      {notifications.length > 0 ? (
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={renderNotification}
          contentContainerStyle={styles.list}
        />
      ) : (
        <Text style={styles.noNotifications}>No notifications available.</Text>
      )}
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  backText: {
    fontSize: 16,
    color: '#007bff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:"black",
  },
  clearText: {
    fontSize: 16,
    color: '#ff3b30',
  },
  list: {
    paddingVertical: 8,
  },
  notificationCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#555',
  },
  noNotifications: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
    marginTop: 20,
  },
});
