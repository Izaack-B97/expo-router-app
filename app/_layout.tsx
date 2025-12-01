import { Slot, SplashScreen } from 'expo-router';

import { useFonts } from 'expo-font';

import * as SystemUI from 'expo-system-ui';
import { useEffect } from 'react';
import "./global.css";

SplashScreen.preventAutoHideAsync();

const RootLAyout = () => {
  
  SystemUI.setBackgroundColorAsync('white');

  const [ fontsLoaded, errors ] =useFonts({
    'WorkSans-Black': require('../assets/fonts/WorkSans-Black.ttf'),
    'WorkSans-Light': require('../assets/fonts/WorkSans-Light.ttf'),
    'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf')
  });


  useEffect(() => {
    if ( errors ) throw errors;
    if ( fontsLoaded ) SplashScreen.hideAsync();
  }, [fontsLoaded, errors]);


  if ( !fontsLoaded && !errors ) return null;


  return (
    <Slot />
  )
}

export default RootLAyout