import React from 'react'
import { useForm, Controller } from "react-hook-form";
import { View, Text } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';


const RenderPicker = (label, name, items, control, errors) => {
    return (
        <>
            <Text className="text-md py-1 text-white font-semibold">{label}</Text>
            <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <RNPickerSelect
                        placeholder={{ label: `Select ${label}`, value: null }}
                        onValueChange={onChange}
                        style={{ inputIOS: styles.inputContainer, inputAndroid: styles.inputContainer }}
                        items={items}
                    />
                )}
                name={name}
            />
            {errors[name] && <Text className="text-red-600">This is required.</Text>}
        </>
    )
}


const styles = {
    inputContainer: {
        color: 'black',
        backgroundColor: 'white',
        borderColor: 'gray',
        padding: 10,
    }
};

export default RenderPicker