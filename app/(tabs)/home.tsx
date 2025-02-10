import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from "@/constants";
import { getAllPosts, getLatestPosts } from '@/lib/appwrite';
import useAppwrite from '@/lib/useAppwrite';
import { SearchInput, Trending, EmptyState, VideoCard } from "@/components";

const Home = () => {
    const { data: posts, refetch } = useAppwrite(getAllPosts);
    const { data: latestPosts } = useAppwrite(getLatestPosts);

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = async () => {
        setRefreshing(true);
        await refetch();
        setRefreshing(false);
    };

    return (
        <SafeAreaView className='bg-primary h-full'>
            <FlatList
                data={latestPosts ?? []}
                className='mb-12'
                keyExtractor={(item: {
                    $id: string;
                    title: string;
                    thumbnail: string;
                    video: string;
                    creator: any;
                }) => item.$id}
                renderItem={({ item }) => (
                    <VideoCard
                        title={item.title}
                        thumbnail={item.thumbnail}
                        video={item.video}
                        creator={item.creator.username}
                        avatar={item.creator.avatar}
                    />
                )}
                ListHeaderComponent={() => (
                    <View className='flex my-6 px-4 space-y-6'>
                        <View className='flex justify-between items-start flex-row mb-6'>
                            <View>
                                <Text className='font-pmedium text-sm text-gray-100'>
                                    Welcome back,
                                </Text>
                                <Text className='text-2xl font-psemibold text-gray-100'>
                                    John Doe
                                </Text>
                            </View>
                            <View className='mt-1.5'>
                                <Image
                                    source={images.logoSmall}
                                    className='w-9 h-10'
                                    resizeMode='contain'
                                />
                            </View>
                        </View>

                        <SearchInput />

                        <View className='w-full flex-1 pt-5 pb-8'>
                            <Text className='text-gray-100 text-lg font-pregular mb-3'>
                                Latest Videos
                            </Text>

                            <Trending posts={posts ?? []} />
                        </View>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <EmptyState
                        title="No videos found"
                        subtitle="Be the first one to upload a video!"
                    />
                )}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            />
        </SafeAreaView>
    )
}

export default Home