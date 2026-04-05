import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';   // we'll install this next

export default function Screen1_AWS() {
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
    // Mock test (we'll connect to real AWS later)
    setTimeout(() => {
      setLoading(false);
      Alert.alert('✅ Success!', 'Connection to AWS S3 verified!');
    }, 1500);
  };

  return (
    <ScrollView className="flex-1 bg-surface">
      {/* Header - Glass effect */}
      <View className="bg-surface-container-low px-6 pt-12 pb-6">
        <View className="flex-row items-center">
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={28} color="#004d64" />
          </TouchableOpacity>
          <Text className="flex-1 text-center text-2xl font-semibold text-on-surface">AWS Configuration</Text>
        </View>
        <Text className="text-primary text-xl font-medium text-center mt-2">S3 Architect</Text>
      </View>

      <View className="px-6 pt-8">
        <Text className="text-on-surface text-lg font-semibold mb-1">Step 01: Environment</Text>
        <Text className="text-on-surface-variant text-base">Configure your Amazon Web Services credentials</Text>

        {/* Identity & Access Card */}
        <View className="mt-8 bg-surface-container-highest rounded-2xl p-6">
          <Text className="text-on-surface font-medium text-lg mb-4">Identity & Access</Text>

          <Text className="text-on-surface-variant text-sm mb-1">AWS Access Key ID</Text>
          <TextInput
            className="bg-white border border-surface-container-low rounded-xl px-4 py-4 text-base"
            placeholder="AKIAXXXXXXXXXXXXXXXX"
            value={accessKey}
            onChangeText={setAccessKey}
            secureTextEntry={false}
          />

          <Text className="text-on-surface-variant text-sm mt-5 mb-1">AWS Secret Access Key</Text>
          <TextInput
            className="bg-white border border-surface-container-low rounded-xl px-4 py-4 text-base"
            placeholder="••••••••••••••••••••••••••••••••"
            value={secretKey}
            onChangeText={setSecretKey}
            secureTextEntry={true}
          />
        </View>

        {/* Regional Context */}
        <View className="mt-8 bg-surface-container-highest rounded-2xl p-6">
          <Text className="text-on-surface font-medium text-lg mb-4">Regional Context</Text>
          <Text className="text-on-surface-variant text-sm mb-3">AWS Region</Text>

          {regions.map((r) => (
            <TouchableOpacity
              key={r.value}
              onPress={() => setRegion(r.value)}
              className={`flex-row items-center justify-between px-4 py-4 mb-2 rounded-xl ${region === r.value ? 'bg-primary' : 'bg-white border border-surface-container-low'}`}
            >
              <Text className={region === r.value ? 'text-white font-medium' : 'text-on-surface'}>{r.label}</Text>
              {region === r.value && <Ionicons name="checkmark-circle" size={24} color="white" />}
            </TouchableOpacity>
          ))}
        </View>

        {/* Test Connection Button */}
        <TouchableOpacity
          onPress={testConnection}
          disabled={loading}
          className="mt-12 bg-primary rounded-2xl py-5 flex-row justify-center items-center"
        >
          {loading ? (
            <Text className="text-white font-semibold text-lg">Verifying secure handshake...</Text>
          ) : (
            <>
              <Ionicons name="refresh" size={24} color="white" />
              <Text className="text-white font-semibold text-lg ml-3">Test Connection</Text>
            </>
          )}
        </TouchableOpacity>

        {/* Footer buttons */}
        <View className="flex-row justify-between mt-8 mb-12">
          <TouchableOpacity className="flex-1 mr-3 py-4 border border-on-surface-variant rounded-2xl">
            <Text className="text-center text-on-surface-variant font-medium">Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 ml-3 py-4 bg-primary rounded-2xl">
            <Text className="text-center text-white font-semibold">Save and Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
