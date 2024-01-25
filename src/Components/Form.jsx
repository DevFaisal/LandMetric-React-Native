import { View, Button, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { useForm, Controller } from "react-hook-form";
import RNPickerSelect from 'react-native-picker-select';
import Model from './Model';
import Calculate from '../../utils/Calculate';
import InputController from './InputController';

const Form = () => {

    const inputs = [
        {
            label: 'Rate per Kanal',
            required: true,
            name: 'rate',
            placeholder: 'Govt rate per Kanal',
            length: 7,
        },
        {
            label: 'Valuation',
            required: false,
            name: 'valuation',
            placeholder: 'Valuation of Trees or Structures',
            length: 7,
        },
        {
            label: 'Kanal',
            required: false,
            name: 'kanal',
            placeholder: 'Enter Kanal',
            length: 2,
        },
        {
            label: 'Marla',
            required: false,
            name: 'marla',
            placeholder: 'Enter Marla',
            length: 2,
        },
        {
            label: 'Sirsai',
            required: false,
            name: 'sirsai',
            placeholder: 'Enter Sirsai',
            length: 3,
        },
        {
            label: 'Square Feet',
            required: false,
            name: 'squarefeet',
            placeholder: 'Enter Square Feet',
            length: 4,
        },
    ]

    const [data, setData] = React.useState(null)
    const [model, setModel] = React.useState(false)
    const { control, reset, handleSubmit, formState: { errors } } = useForm({
        // defaultValues: {
        //     typeOfDeed: null,
        //     rate: Number,
        //     valuation: 0,
        //     kanal: 0,
        //     marla: 0,
        //     sirsai: 0,
        //     squarefeet: 0,
        //     gender: null,
        // }
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

                {inputs.map((input, index) => (
                    <InputController
                        control={control}
                        label={input.label}
                        placeholder={input.placeholder}
                        required={input.required}
                        name={input.name}
                        errors={errors[input.name]}
                        length={input.length}
                        key={index}
                    />
                ))}

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