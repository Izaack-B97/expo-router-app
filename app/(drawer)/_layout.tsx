import CustomDrawer from '@/presentation/components/share/CustomDrawer';
import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';

function DrawerLayout() {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        headerShown: false, 
        overlayColor: 'rgba(0,0,0,0.9)',
        drawerActiveTintColor: 'indigo',
        headerShadowVisible: false, 
        sceneStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Drawer.Screen
        name='(tabs)'
        options={{
          drawerLabel: 'Tabs + Stack',
          title: 'Tabs + Stack',
          drawerIcon: ({ color, size }) => <Ionicons name='albums-outline' color={color} size={size} />
        }}
      />
      <Drawer.Screen
        name='user/index'
        options={{
          drawerLabel: 'User',
          title: 'User Info',
          drawerIcon: ({ color, size }) => <Ionicons name='person-circle-outline' color={color} size={size} />
        }}
      />
      <Drawer.Screen
        name='schedule/index' // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Schedule',
          title: 'Schedule info',
          drawerIcon: ({ color, size }) => <Ionicons name='calendar-outline' color={color} size={size} />
        }}
      />
    </Drawer>
  )
}

export default DrawerLayout