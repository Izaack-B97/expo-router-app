import CustomButton from '@/presentation/components/CustomButton'
import { Link, router } from 'expo-router'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className='px-10'>

        <CustomButton className='mt-2' color='primary' onPress={() => router.push('/tabs/(stack)/products')}>
          Products
        </CustomButton>

        <CustomButton className='mt-2' color='secondary' onPress={() => router.push('/tabs/profile')}>
          Profile
        </CustomButton>

        <CustomButton className='mt-2' color='tertiary' onPress={() => router.push('/tabs/settings')}>
          Settings
        </CustomButton>
        
        <Link href='/tabs/products' asChild>
            <CustomButton variant='text-only' className='mt-2'>
              Products
            </CustomButton>
        </Link>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen