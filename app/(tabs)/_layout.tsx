import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View, Image, Text } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useFonts } from 'expo-font';
import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }: { icon: any, color: string, name: string, focused: boolean }) => {
  return (
    <View className='items-center justify-center gap-2'>
      <Image source={icon} resizeMode='contain' tintColor={color} className='w-6 h-6' />
      <Text className={`${focused ? 'font-psemibold' : 'font-regular'} text-xs`} style={{ color: color }}>{name}</Text>
    </View>
  )
}

const TabsLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tabIconSelected,
          tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: 'absolute',
              backgroundColor: '#161622',
              borderTopWidth: 1,
              borderTopColor: '#232533',
              height: 84,
            },
            android: {
              position: 'absolute',
              backgroundColor: '#161622',
              borderTopWidth: 1,
              borderTopColor: '#232533',
              height: 84,
            },
            default: {},
          }),
        }}>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.home} color={color} name="Home" focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: 'Bookmark',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.bookmark} color={color} name="Bookmark" focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.plus} color={color} name="Create" focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.profile} color={color} name="Profile" focused={focused} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

export default TabsLayout;
