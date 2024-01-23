import { View, Button, TextInput, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { useForm, Controller } from "react-hook-form";
import RNPickerSelect from 'react-native-picker-select';
import Model from './Model';
import Calculate from '../../utils/Calculate';

const Form = () => {
    const [data, setData] = React.useState(null)
    const [model, setModel] = React.useState(false)
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            typeOfDeed: null,
            rate: 0,
            valuation: 0,
            kanal: 0,
            marla: 0,
            sirsai: 0,
            squarefeet: 0,
            gender: null
        }
    });
    const onSubmit = (data) => {
        calculatedDate = Calculate(data)
        setData(calculatedDate)
        setModel(true)
    };

    return (
        <View className="bg-[#003566] h-screen rounded-t-xl p-5 mt-3">
            <View>
                <Text className="text-md py-1 text-white font-semibold">Type of Deed</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (

                        <RNPickerSelect
                            placeholder={{ label: 'Select type of Deed', value: null }}
                            onValueChange={onChange}
                            style={{
                                inputIOS: {
                                    color: 'black',
                                    backgroundColor: 'white',
                                    borderWidth: 1,
                                    borderColor: 'gray',
                                    borderRadius: 4,
                                    padding: 10,
                                },
                                inputAndroid: {
                                    color: 'black',
                                    backgroundColor: 'white',
                                    borderWidth: 1,
                                    borderColor: 'gray',
                                    borderRadius: 4,
                                    padding: 10,
                                },
                            }}
                            items={[
                                { label: 'Conveyance/Sale deed', value: 'sale' },
                                { label: 'Gift Deed', value: 'gift' },
                            ]}
                        />
                    )}
                    name="typeOfDeed"
                />
                {errors.typeOfDeed && <Text className="text-red-600">This is required.</Text>}
                <Text className="text-md pt-2 pb-1 text-white font-semibold">Rate per Kanal</Text>
                <Controller
                    control={control}
                    rules={{
                        maxLength: 8,
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Govt rate per Kanal"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            keyboardType='numeric'
                            keyboardAppearance='dark'
                            className="bg-white rounded-md p-2 font-semibold"
                        />
                    )}
                    name="rate"
                />
                {errors.rate && <Text className="text-red-600">This is required.</Text>}
                <Text className="text-md pt-2 pb-1 text-white font-semibold">If Valuation</Text>
                <Controller
                    control={control}
                    rules={{
                        maxLength: 8,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Valuation of Trees or Structures"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            keyboardType='numeric'
                            keyboardAppearance='dark'
                            className="bg-white rounded-md p-2 font-semibold"
                        />
                    )}
                    name="valuation"
                />
                <Text className="text-md pt-2 pb-1 text-white font-semibold">Kanal</Text>
                <Controller
                    control={control}
                    rules={{
                        maxLength: 8,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Enter Kanal"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            keyboardType='numeric'
                            keyboardAppearance='dark'
                            className="bg-white rounded-md p-2 font-semibold"
                        />
                    )}
                    name="kanal"
                />
                <Text className="text-md pt-2 pb-1 text-white font-semibold">Marla</Text>
                <Controller
                    control={control}
                    rules={{
                        maxLength: 8,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Enter Marla"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            keyboardType='numeric'
                            keyboardAppearance='dark'
                            className="bg-white rounded-md p-2 font-semibold"
                        />
                    )}
                    name="marla"
                />
                <Text className="text-md pt-2 pb-1 text-white font-semibold">Sirsai</Text>
                <Controller
                    control={control}
                    rules={{
                        maxLength: 8,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Enter Sirsai"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            keyboardType='numeric'
                            keyboardAppearance='dark'
                            className="bg-white rounded-md p-2 font-semibold"
                        />
                    )}
                    name="sirsai"
                />
                <Text className="text-md pt-2 pb-1 text-white font-semibold">Square Feet</Text>
                <Controller
                    control={control}
                    rules={{
                        maxLength: 8,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Govt rate per Kanal"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            keyboardType='numeric'
                            keyboardAppearance='dark'
                            className="bg-white rounded-md p-2 font-semibold"
                        />
                    )}
                    name="squarefeet"
                />
                <Text className="text-md pt-2 pb-1 text-white font-semibold">Gender</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (

                        <RNPickerSelect
                            placeholder={{ label: 'Select Gender', value: null }}
                            onValueChange={onChange}
                            style={{
                                inputIOS: {
                                    color: 'black',
                                    backgroundColor: 'white',
                                    borderWidth: 1,
                                    borderColor: 'gray',
                                    borderRadius: 4,
                                    padding: 10,
                                },
                                inputAndroid: {
                                    color: 'black',
                                    backgroundColor: 'white',
                                    borderWidth: 1,
                                    borderColor: 'gray',
                                    borderRadius: 4,
                                    padding: 10,
                                },
                            }}
                            items={[
                                { label: 'Male', value: 'male' },
                                { label: 'Female', value: 'female' },
                                { label: 'Both', value: 'both' },
                            ]}
                        />
                    )}
                    name="gender"
                />
                {errors.gender && <Text className="text-red-600">This is required.</Text>}
                <TouchableOpacity className="bg-[#DCC48E] rounded-md mt-3" >
                    <Button title="Calculate" color="black" onPress={handleSubmit(onSubmit)} />
                    {model && <Model data={data} />}
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Form