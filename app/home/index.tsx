import CustomButton from '@/presentation/components/CustomButton'
import { Link, router } from 'expo-router'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className='px-10'>
        <Link href='/products' asChild>
            <CustomButton className='mt-10'>
              Products
            </CustomButton>
        </Link>

        <CustomButton className='mt-10' color='primary' onPress={() => router.push('/products')}>
          Products
        </CustomButton>

        <CustomButton className='mt-10' color='secondary' variant='text-only' onPress={() => router.push('/products')}>
          Products
        </CustomButton>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen