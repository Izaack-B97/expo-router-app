import { products } from '@/store/products.store'
import React from 'react'
import { FlatList, Text, View } from 'react-native'

const ProductsScreen = () => {
  return (
    <View className='flex flex-1'>
      <FlatList 
        data={ products }
        keyExtractor={( item ) => item.id}
        renderItem={(item) => <Text className='text-primary text-2xl font-work-medium mt-10 p-4'>{ JSON.stringify( item, null, 2 ) }</Text>}
      />
    </View>
  )
}

export default ProductsScreen