import { View, Button, TouchableOpacity, Picker, Text } from 'react-native'
import React from 'react'
import { useForm } from "react-hook-form";
import Model from '../Model/Model';
import Calculate from '../../../utils/Calculate';
import InputController from '../InputController';
import RenderPicker from '../RenderPicker';
import { Fields } from '../../../utils/Data';

const Form = () => {

    const [data, setData] = React.useState(null)
    const [model, setModel] = React.useState(false)
    const { control, reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        calculatedDate = Calculate(data)
        setData(calculatedDate)
        setModel(true)
    };


    return (
        <View className="bg-[#003566] h-[1000px] rounded-t-xl p-5 mb-30 mt-3">
            <View>
                <TouchableOpacity className="bg-red-400 w-20 self-end rounded-full">
                    <Button
                        title="Reset"
                        color="white"
                        onPress={() => (
                            reset(),
                            setModel(false),
                            setData(null)
                        )}

                    />
                </TouchableOpacity>

                {RenderPicker('Type of Deed', 'typeOfDeed', [
                    { label: 'Conveyance/Sale deed', value: 'sale' },
                    { label: 'Gift Deed', value: 'gift' },

                ],
                    control,
                    errors,
                )}

                {Fields.map((input, index) => (
                    <InputController
                        key={index}
                        control={control}
                        label={input.label}
                        placeholder={input.placeholder}
                        required={input.required}
                        name={input.name}
                        errors={errors[input.name]}
                        length={input.length}
                    />
                ))}
                {RenderPicker('Gender', 'gender', [
                    { label: 'Male', value: 'male' },
                    { label: 'Female', value: 'female' },
                    { label: 'Both', value: 'both' },
                ],
                    control,
                    errors,
                )}

                <TouchableOpacity style={styles.buttonText}>
                    <Button title="Calculate" color="black" onPress={handleSubmit(onSubmit)} />
                    {/* Assuming 'model' and 'data' are defined */}
                    {model && <Model data={data} />}
                </TouchableOpacity>
            </View>
        </View>
    );
};



const styles = {
    buttonText: {
        backgroundColor: '#DCC48E',
        borderRadius: 4,
        marginTop: 10,
        marginBottom: 100,
    },
    resetButton: {
        innerWidth: 100,
        justifyContent: 'start',
        alignItems: 'start',
    },
};

export default Form