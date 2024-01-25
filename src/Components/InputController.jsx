import React from 'react'
import { useForm, Controller } from "react-hook-form";
import { TextInput, View, Text } from 'react-native'

const InputController = ({
    label = 'Label',
    placeholder = 'Placeholder',
    required = false,
    name = 'name',
    control = control,
    errors = false,
    length = 2,

}) => {
    return (
        <View>

            <Text className="text-md pt-2 pb-1 text-white font-semibold">{label}</Text>
            <Controller
                control={control}
                rules={{
                    maxLength: length,
                    required: required,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder={placeholder}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        keyboardType='numeric'
                        keyboardAppearance='dark'
                        className="bg-white  p-2 font-semibold"
                        returnKeyType='done'
                    />
                )}
                name={name}
            />
            {errors && <Text className="text-red-600">This is required.</Text>}
        </View>
    )

}



export default InputController