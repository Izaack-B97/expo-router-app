import React from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';

interface Props extends PressableProps{
    children: string,
    color ?: 'primary' | 'secondary' | 'tertiary',
    variant ?: 'contained' | 'text-only',
    className  ?: string
}

const CustomButton = React.forwardRef(
    (
        { 
            children, 
            color = 'primary', 
            onPress, 
            onLongPress, 
            variant = 'contained',
            className
        } : Props,

        ref: React.Ref<View> 
    ) => {
        
        
    if ( variant === 'text-only' ) {
        const textColor = {
            primary: 'text-primary',
            secondary: 'text-secondary',
            tertiary: 'text-tertiary'
        }[color];    

        return (
            <Pressable 
                className={ `p-5 ${ className }` }
                onPress={ onPress }
                onLongPress={ onLongPress }
                ref={ref}
            >
                <Text className={`text-center ${ textColor }`}>{ children }</Text>
            </Pressable>
        )
    }
    
    const btnColor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary'
    }[color];

    return (
        <Pressable 
            className={ `p-5 rounded-md ${btnColor} active:opacity-90 ${ className }` }
            onPress={ onPress }
            onLongPress={ onLongPress }
            ref={ref}
        >
            <Text className='text-white text-center'>{ children }</Text>
        </Pressable>
    )
});

export default CustomButton