import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View className="flex justify-center items-center gap-2">
            <View>
                <Text className="text-2xl font-bold text-center">LandMetic Master</Text>
                <Text className="text-xs px-6 text-zinc-600 text-center">Simplify Property Transactions with Accurate Land Measurement Conversion and Transaction Fee Calculation</Text>
            </View>
            <View>
                <Text className="text-xs text-zinc-500">Developed by Faisal </Text>
            </View>
        </View>
    )
}

export default Header

