import { ScrollView, SafeAreaView, View } from 'react-native';
import { Form, Header } from './src/Components/index';


export default function App() {
  return (
    <View className="bg-[#DCC48E] h-screen">
      <SafeAreaView>
        <Header />
        <ScrollView>
          <Form />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

