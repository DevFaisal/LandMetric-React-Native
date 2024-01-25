import { View, Modal, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { XCircle } from 'lucide-react-native'


const Model = ({ data }) => {

    useEffect(() => {
        setModalVisible(true)
    }, [data])

    const [modalVisible, setModalVisible] = useState(true);


    return (
        <SafeAreaView>
            <View>
                <View className="bg-red-200" >
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }}>
                        <View >

                            <View className="bg-[#3eb46b] justify-center p-10 items-start h-screen" >

                                <View className="flex gap-1 bg-white p-5 self-center rounded-md">
                                    <TouchableOpacity className="absolute right-0 mt-20 p-2 rounded-full"
                                        onPress={() => setModalVisible(!modalVisible)}>
                                        <Text>
                                            <XCircle color="gray" size={30} />
                                        </Text>
                                    </TouchableOpacity>
                                    <Text className="text-3xl self-center font-bold">Final Summary</Text>
                                    <Text className="bg-orange-600 rounded-md text-center text-white text-xl font-bold" >{data.typeOfDeed.charAt(0).toUpperCase() + data.typeOfDeed.slice(1)} Deed</Text>
                                    <View className="mb-5 self-center">
                                        <Text className="text-indigo-600 text-xl font-bold mt-10" >Govt Rate Per Kanal</Text>
                                        <Text className="text-gray-800 text-xl font-bold text-center" >{formatNumberWithCommas(parseInt(data.rate))}</Text>
                                    </View>

                                    <Text className="text-indigo-600 self-center text-xl font-semibold" >Total Land Purchased</Text>
                                    <View className='flex-row p-3 self-center rounded-md bg-yellow-300'>
                                        <Text className="text-gray-800 text-md font-bold pr-3" >{data.kanal} Kanal</Text>
                                        <Text className="text-gray-800 text-md font-bold pr-3" >{data.marla} Marla</Text>
                                        <Text className="text-gray-800 text-md font-bold pr-3" >{data.sirsai} Sirsai</Text>
                                        <Text className="text-gray-800 text-md font-bold pr-3" >{data.squarefeet} Sqft</Text>
                                    </View>

                                    <View className="flex-row gap-2 flex-wrap justify-between bg-gray-200 py-2 pr-3 rounded-md">
                                        <View>
                                            <Text className="text-indigo-600 font-bold" >Total Cost of Land</Text>
                                            <Text className="text-gray-600 font-semibold" >{formatNumberWithCommas([data.landValues - data.valuation])}</Text>
                                        </View>
                                        <View>
                                            <Text className="text-indigo-600 text-base font-bold" >Valuation</Text>
                                            <Text className="text-gray-600 font-semibold " >{formatNumberWithCommas(parseInt(data.valuation))}</Text>
                                        </View>
                                        <View>
                                            <Text className="text-indigo-600  font-bold" >Consideration</Text>
                                            <Text className="text-gray-600  font-semibold" >{formatNumberWithCommas(parseInt(data.landValues))}</Text>
                                        </View>
                                        <View>
                                            <Text className="text-indigo-600  font-bold" >Gender</Text>
                                            <Text className="text-gray-600 font-semibold" >{data.gender.charAt(0).toUpperCase() + data.gender.slice(1)}</Text>
                                        </View>
                                    </View>
                                    <View className="bg-slate-300 rounded-md flex-row justify-between p-3">
                                        <View>
                                            <Text className="text-indigo-600 text-base font-bold" >eStamp</Text>
                                            <Text className="text-gray-800 text-base font-bold" >{formatNumberWithCommas(data.eStamp)}</Text>
                                        </View>
                                        <View>
                                            <Text className="text-indigo-600 text-base font-bold" >Registration Fee</Text>
                                            <Text className="text-gray-800 text-base font-bold" >{formatNumberWithCommas(data.regFee)}</Text>
                                        </View>
                                    </View>
                                    <View className="bg-orange-300 rounded-md flex-row justify-center p-3">
                                        <View className="items-center ">
                                            <Text className="text-indigo-600 text-2xl font-bold" >Total Amount</Text>
                                            <Text className="text-gray-800 text-2xl font-bold" >{formatNumberWithCommas(data.total)}</Text>
                                        </View>
                                    </View>
                                </View>

                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        </SafeAreaView>
    )
}

//Function for comma in Indian Currency
function formatNumberWithCommas(number) {
    return number
        .toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        })
        .replace(/\.00$/, "");
}

export default Model