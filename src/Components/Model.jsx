import { View, Modal, Text, Pressable, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'

const Model = ({ data }) => {

    useEffect(() => {
        setModalVisible(true)
    }, [data])

    const [modalVisible, setModalVisible] = useState(true);

    console.log(data)

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

                            <View className="bg-[#57cc99] justify-center p-10 items-start h-screen" >
                                <Pressable className="absolute top-5 right-5 mt-20"
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text className="text-lg font-bold" >X</Text>
                                </Pressable>
                                <Text className="text-3xl self-center font-bold">Final Summary</Text>
                                <View className="flex gap-1">
                                    <View>
                                        <Text className="text-indigo-600 text-xl font-bold mt-10" >Govt Rate Per Kanal</Text>
                                        <Text className="text-gray-800 text-xl font-bold" >{formatNumberWithCommas(parseInt(data.rate))}</Text>
                                    </View>
                                    <Text className="text-indigo-600 text-xl font-bold" >Total Land Purchased</Text>
                                    <View className='flex-row p-1 rounded-md bg-yellow-200'>
                                        <Text className="text-gray-800 text-lg font-bold pr-3" >{data.kanal} Kanal</Text>
                                        <Text className="text-gray-800 text-lg font-bold pr-3" >{data.marla} Marla</Text>
                                        <Text className="text-gray-800 text-lg font-bold pr-3" >{data.sirsai} Sirsai</Text>
                                        <Text className="text-gray-800 text-lg font-bold pr-3" >{data.squarefeet} Sqft</Text>
                                    </View>
                                    <View className="flex-row justify-between">
                                        <View>
                                            <Text className="text-indigo-600 text-xl font-bold" >Total Cost of Land</Text>
                                            <Text className="text-gray-800 text-xl font-bold" >{formatNumberWithCommas([data.landValues - data.valuation])}</Text>
                                        </View>
                                        <View>
                                            <Text className="text-indigo-600 text-xl font-bold" >Valuation</Text>
                                            <Text className="text-gray-800 text-xl font-bold" >{formatNumberWithCommas(parseInt(data.valuation))}</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Text className="text-indigo-600 text-xl font-bold" >Consideration</Text>
                                        <Text className="text-gray-800 text-xl font-bold" >{formatNumberWithCommas(parseInt(data.landValues))}</Text>
                                    </View>
                                    <View className="bg-slate-300 rounded-md flex-row justify-between p-3">
                                        <View>
                                            <Text className="text-indigo-600 text-xl font-bold" >eStamp</Text>
                                            <Text className="text-gray-800 text-xl font-bold" >{formatNumberWithCommas(data.eStamp)}</Text>
                                        </View>
                                        <View>
                                            <Text className="text-indigo-600 text-xl font-bold" >Registration Fee</Text>
                                            <Text className="text-gray-800 text-xl font-bold" >{formatNumberWithCommas(data.regFee)}</Text>
                                        </View>
                                    </View>
                                    <View className="bg-orange-300 rounded-md flex-row justify-between p-3">
                                        <View>
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