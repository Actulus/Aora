import { View, Text, ScrollView, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = () => {

    };

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='w-full flex justify-center h-full px-4 my-6' style={{
                    minHeight: Dimensions.get("window").height - 100,
                }}>
                    <Image source={images.logo} className='w-[115px] h-[34px]' resizeMode='contain' />
                    <Text className='text-2xl text-white font-psemibold mt-10'>Log in to Aora</Text>
                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e: any) => setForm({ ...form, email: e })}
                        otherStyles="mt-7"
                        keyboardType="email-address" placeholder={'enter your email'} />
                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e: any) => setForm({ ...form, password: e })}
                        otherStyles="mt-7" placeholder={'enter your password'}
                    />

                    <CustomButton
                        title='Sign In'
                        handlePress={submit}
                        containerStyles='mt-7'
                        isLoading={isSubmitting}
                    />

                    <View className='justify-center pt-5 flex-row gap-2'>
                        <Text className='text-lg text-gray-100 font-pregular'>Don't have an account?</Text>
                        <Link href="/sign-up" className='text-lg font-psemibold text-secondary'>Sign Up</Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn