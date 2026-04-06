import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Screen2_Destination({ navigation }) {
  const [selectedBucket, setSelectedBucket] = useState('production-assets-west');

  const buckets = [
    {
      name: 'production-assets-west',
      region: 'us-west-2',
      storage: 'Standard',
      icon: 'database',
    },
    {
      name: 'static-web-delivery',
      region: 'eu-central-1',
      storage: 'Glacier',
      icon: 'database',
    },
    {
      name: 'archive-logs-primary',
      region: 'us-east-1',
      storage: 'Standard-IA',
      icon: 'database',
    },
  ];

  const folders = [
    { name: '/media/images/2024', icon: 'folder' },
    { name: '/backups/critical-db', icon: 'folder' },
  ];

  const handleContinue = () => {
    // For now, just go back to see it works
    Alert.alert('Selected!', `Destination: ${selectedBucket}`);
    // navigation.navigate('NextScreen'); // we'll add later
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Ionicons name="arrow-back" size={28} color="#004d64" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>S3 Architect</Text>
          </View>
          <Text style={styles.stepTitle}>Step 02 — Configuration</Text>
          <Text style={styles.subtitle}>Select Destination</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.description}>
            Choose the target S3 bucket or subfolder where your architected assets will be synchronized.
          </Text>

          {/* Bucket List */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Available Buckets</Text>

            {buckets.map((bucket) => (
              <TouchableOpacity
                key={bucket.name}
                style={[
                  styles.bucketCard,
                  selectedBucket === bucket.name && styles.bucketCardSelected,
                ]}
                onPress={() => setSelectedBucket(bucket.name)}
              >
                <View style={styles.bucketIcon}>
                  <Ionicons name={bucket.icon} size={32} color={selectedBucket === bucket.name ? '#ffffff' : '#004d64'} />
                </View>
                <View style={styles.bucketInfo}>
                  <Text style={[
                    styles.bucketName,
                    selectedBucket === bucket.name && styles.selectedText,
                  ]}>
                    {bucket.name}
                  </Text>
                  <Text style={styles.bucketMeta}>
                    {bucket.region} • {bucket.storage}
                  </Text>
                </View>
                {selectedBucket === bucket.name && (
                  <Ionicons name="checkmark-circle" size={28} color="#ffffff" />
                )}
              </TouchableOpacity>
            ))}
          </View>

          {/* Subfolder Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Subfolder (Optional)</Text>

            {folders.map((folder, index) => (
              <TouchableOpacity key={index} style={styles.folderRow}>
                <Ionicons name={folder.icon} size={24} color="#004d64" style={styles.folderIcon} />
                <Text style={styles.folderName}>{folder.name}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Selected Destination Preview */}
          <View style={styles.selectedPreview}>
            <Text style={styles.previewLabel}>Selected Endpoint</Text>
            <View style={styles.previewCard}>
              <Ionicons name="location-on" size={28} color="#004d64" />
              <Text style={styles.previewText}>{selectedBucket}</Text>
            </View>
          </View>
        </View>

        {/* Bottom Navigation Buttons */}
        <View style={styles.bottomBar}>
          <TouchableOpacity 
            style={styles.backButtonBottom}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backText}>Previous</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.continueButton}
            onPress={handleContinue}
          >
            <Text style={styles.continueText}>Next: Select Source</Text>
            <Ionicons name="chevron-forward" size={20} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f4f3f4' },
  container: { flex: 1, backgroundColor: '#f4f3f4' },
  header: {
    backgroundColor: '#ffffff',
    paddingTop: 20,
    paddingBottom: 24,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  backButton: { paddingRight: 16 },
  headerTitle: { flex: 1, textAlign: 'center', fontSize: 20, fontWeight: '600', color: '#1a1c1d' },
  stepTitle: { fontSize: 18, fontWeight: '600', color: '#004d64', textAlign: 'center', marginTop: 8 },
  subtitle: { fontSize: 24, fontWeight: '700', color: '#1a1c1d', textAlign: 'center', marginTop: 4 },
  content: { padding: 20 },
  description: { fontSize: 15.5, color: '#3f484d', lineHeight: 23, marginBottom: 28 },
  section: { marginBottom: 32 },
  sectionTitle: { fontSize: 17, fontWeight: '600', color: '#1a1c1d', marginBottom: 14 },
  bucketCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  bucketCardSelected: {
    backgroundColor: '#004d64',
    borderColor: '#004d64',
  },
  bucketIcon: { marginRight: 16 },
  bucketInfo: { flex: 1 },
  bucketName: { fontSize: 17, fontWeight: '600', color: '#1a1c1d' },
  bucketMeta: { fontSize: 14, color: '#6b7280', marginTop: 2 },
  selectedText: { color: '#ffffff' },
  folderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  folderIcon: { marginRight: 16 },
  folderName: { fontSize: 16, color: '#1a1c1d' },
  selectedPreview: { marginTop: 20, marginBottom: 40 },
  previewLabel: { fontSize: 14, color: '#3f484d', marginBottom: 10 },
  previewCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#004d64',
  },
  previewText: { marginLeft: 12, fontSize: 17, fontWeight: '600', color: '#004d64' },
  bottomBar: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 30,
    gap: 12,
  },
  backButtonBottom: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: '#3f484d',
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
  },
  backText: { color: '#3f484d', fontWeight: '500', fontSize: 16 },
  continueButton: {
    flex: 1,
    backgroundColor: '#004d64',
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  continueText: { color: '#ffffff', fontWeight: '600', fontSize: 16 },
});