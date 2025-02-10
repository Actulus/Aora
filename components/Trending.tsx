import { Image, Text, FlatList, ImageBackground, TouchableOpacity, View, Button } from 'react-native';
import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { useVideoPlayer, VideoView, VideoSource } from "expo-video";
import { icons } from "../constants";
import { useEvent } from 'expo';

interface TrendingProps {
    posts: any; // Replace 'any' with the appropriate type if known
}

const zoomIn: Animatable.CustomAnimation = {
    0: {
        transform: [{ scale: 0.9 }],
    },
    1: {
        transform: [{ scale: 1 }],
    },
};

const zoomOut: Animatable.CustomAnimation = {
    0: {
        transform: [{ scale: 1 }],
    },
    1: {
        transform: [{ scale: 0.9 }],
    },
};

interface TrendingItemProps {
    activeItem: string; // Replace 'string' with the appropriate type if known
    item: {
        $id: string; // Replace 'string' with the appropriate type if known
        video: string;
        thumbnail: string;
    };
}

const TrendingItem: React.FC<TrendingItemProps> = ({ activeItem, item }) => {
    const [isVisible, setIsVisible] = useState(false);
    const player = useVideoPlayer(item.video as VideoSource, player => {
        player.play();
        player.pause();
        player.muted = true;
    });

    const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

    const handlePress = () => {
        if (isPlaying) {
            player.pause();
        } else {
            player.play();
        }
    };

    return (
        <View className='mr-5'>
            <TouchableOpacity
                onPress={handlePress}
                className='w-full h-60 rounded-xl mt-3 relative flex justify-center items-center'>
                <VideoView
                    player={player}
                    style={{ width: 300, height: 200 }}
                    allowsFullscreen
                    allowsPictureInPicture
                />
            </TouchableOpacity>
        </View>
    );
};

const Trending: React.FC<TrendingProps> = ({ posts }) => {
    const [activeItem, setActiveItem] = useState(posts[0]?.$id || "");

    const viewableItemsChanged = ({ viewableItems }: { viewableItems: any }) => {
        if (viewableItems.length > 0) {
            setActiveItem(viewableItems[0].key);
        }
    };

    return (
        <FlatList
            data={posts}
            horizontal
            keyExtractor={(item) => item.$id}
            renderItem={({ item }) => (
                <TrendingItem activeItem={activeItem} item={item} />
            )}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={{
                itemVisiblePercentThreshold: 70,
            }}
            contentOffset={{ x: 170, y: 0 }}
        />
    );
}

export default Trending;