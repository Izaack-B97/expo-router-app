import { useLocalSearchParams } from 'expo-router/build/hooks';
import React from 'react';
import { Text, View } from 'react-native';

const ProductScreen = () => {

    const { id } = useLocalSearchParams();

    return (
        <View>
            <Text>ProductScreen : { id }</Text>

        </View>
    )
}

export default ProductScreen