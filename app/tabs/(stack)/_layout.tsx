import { Stack } from 'expo-router'
import React from 'react'

const _layout = () => {
  return (
    <Stack
        screenOptions={{
            animation: 'ios_from_left',
            headerShown: false,
            contentStyle: {
                backgroundColor: 'white'
            }
        }}
    >
        <Stack.Screen name='home/index' options={{ title: 'Home Screen' }}/>
        <Stack.Screen name='products/index' options={{ title: 'Products Screen' }}/>
        <Stack.Screen name='profile/index' options={{ title: 'Profile Screen' }}/>
        <Stack.Screen name='settings/index' options={{ title: 'Settings Screen' }}/>
    </Stack>
  )
}

export default _layout