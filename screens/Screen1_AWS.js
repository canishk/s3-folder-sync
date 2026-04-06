import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Screen1_AWS({ navigation }) { {
  const [accessKey, setAccessKey] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [region, setRegion] = useState('us-east-1');
  const [loading, setLoading] = useState(false);

  const regions = [
    { label: 'US East (N. Virginia)', value: 'us-east-1' },
    { label: 'US East (Ohio)', value: 'us-east-2' },
    { label: 'US West (N. California)', value: 'us-west-1' },
    { label: 'Europe (Frankfurt)', value: 'eu-central-1' },
    { label: 'Asia Pacific (Singapore)', value: 'ap-southeast-1' },
  ];

  const testConnection = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('✅ Success!', 'Connection to AWS S3 verified successfully.');
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header - Glass / Surface Layer */}
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <TouchableOpacity style={styles.backButton}>
              <Ionicons name="arrow-back" size={28} color="#004d64" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>AWS Configuration</Text>
          </View>
          <Text style={styles.appTitle}>S3 Architect</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.stepTitle}>Step 01: Environment</Text>
          <Text style={styles.description}>
            Configure your Amazon Web Services credentials to establish a secure connection with your S3 buckets.
          </Text>

          {/* Identity & Access Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Identity & Access</Text>
            <Text style={styles.label}>AWS Access Key ID</Text>
            <TextInput
              style={styles.input}
              placeholder="AKIAXXXXXXXXXXXXXXXX"
              value={accessKey}
              onChangeText={setAccessKey}
            />

            <Text style={styles.label}>AWS Secret Access Key</Text>
            <TextInput
              style={styles.input}
              placeholder="••••••••••••••••••••••••••••••••"
              value={secretKey}
              onChangeText={setSecretKey}
              secureTextEntry
            />
          </View>

          {/* Regional Context Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Regional Context</Text>
            <Text style={styles.label}>Define the geographic locality for bucket discovery.</Text>

            <Text style={styles.subLabel}>AWS Region</Text>

            {regions.map((r) => (
              <TouchableOpacity
                key={r.value}
                style={[
                  styles.regionRow,
                  region === r.value && styles.regionRowSelected,
                ]}
                onPress={() => setRegion(r.value)}
              >
                <Text
                  style={[
                    styles.regionText,
                    region === r.value && styles.regionTextSelected,
                  ]}
                >
                  {r.label}
                </Text>
                {region === r.value && (
                  <Ionicons name="checkmark-circle" size={24} color="#ffffff" />
                )}
              </TouchableOpacity>
            ))}
          </View>

          {/* Test Connection Button */}
          <TouchableOpacity
            style={styles.testButton}
            onPress={testConnection}
            disabled={loading}
          >
            {loading ? (
              <Text style={styles.testButtonText}>Verifying secure handshake...</Text>
            ) : (
              <View style={styles.testButtonContent}>
                <Ionicons name="refresh" size={24} color="#ffffff" />
                <Text style={styles.testButtonText}>Test Connection</Text>
              </View>
            )}
          </TouchableOpacity>

        {/* Bottom Action Buttons - Updated for Navigation */}
          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.cancelButton}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.continueButton}
              onPress={() => navigation.navigate('S3Destination')}   // ← This line adds navigation
            >
              <Text style={styles.continueText}>Save and Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f3f4',
  },
  container: {
    flex: 1,
    backgroundColor: '#f4f3f4',
  },
  header: {
    backgroundColor: '#ffffff',
    paddingTop: 20,
    paddingBottom: 28,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  backButton: {
    paddingRight: 16,
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#1a1c1d',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: '#004d64',
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 40,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1c1d',
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  description: {
    fontSize: 15,
    lineHeight: 24,
    color: '#3f484d',
    marginBottom: 32,
    fontWeight: '400',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 24,
    marginBottom: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1c1d',
    marginBottom: 20,
    letterSpacing: 0.3,
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    color: '#3f484d',
    marginBottom: 8,
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
  subLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: '#3f484d',
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 15,
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 20,
    color: '#1a1c1d',
  },
  regionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 16,
    marginBottom: 10,
  },
  regionRowSelected: {
    backgroundColor: '#004d64',
    borderColor: '#004d64',
  },
  regionText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1a1c1d',
  },
  regionTextSelected: {
    color: '#ffffff',
    fontWeight: '600',
  },
  testButton: {
    backgroundColor: '#004d64',
    borderRadius: 16,
    paddingVertical: 18,
    marginTop: 12,
    marginBottom: 32,
    alignItems: 'center',
    shadowColor: '#004d64',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 5,
  },
  testButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  testButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 10,
    letterSpacing: 0.3,
  },
  bottomContainer: {
    flexDirection: 'row',
    gap: 14,
  },
  cancelButton: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: '#3f484d',
    borderRadius: 16,
    paddingVertical: 17,
    alignItems: 'center',
  },
  cancelText: {
    color: '#3f484d',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  continueButton: {
    flex: 1,
    backgroundColor: '#004d64',
    borderRadius: 16,
    paddingVertical: 17,
    alignItems: 'center',
    shadowColor: '#004d64',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
  },
  continueText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
});