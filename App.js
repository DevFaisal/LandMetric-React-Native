import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, SafeAreaView, Text, View } from 'react-native';
import Header from './src/Components/Header';
import Form from './src/Components/Form';
import Model from './src/Components/Model';


export default function App() {
  return (
    <View className="bg-[#DCC48E] h-screen">
      <SafeAreaView>
        <Header />
        <ScrollView>
          <Form />
          {/* <Model /> */}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

