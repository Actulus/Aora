import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEvent } from 'expo';
import { icons } from '../constants';

interface VideoCardProps {
    title: string;
    thumbnail: string;
    video: string;
    creator: string;
    avatar: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, thumbnail, video, creator, avatar }) => {
    const player = useVideoPlayer(video, player => {
        player.loop = false;
        player.pause();
        player.muted = true;
    });

    const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

    const handlePress = () => {
        () => {
            if (isPlaying) {
                player.pause();
            } else {
                player.play();
            }
        }
    };

    return (
        <View className='flex flex-col items-center px-4 mb-14'>
            <View className='flex flex-row items-start'>
                <View className='w-[46px] h-[46px] rounded-lg border border-secondary flex justify-center items-center p-0.5'>
                    <Image
                        source={{ uri: avatar }}
                        className="w-full h-full rounded-lg"
                        resizeMode="cover"
                    />
                </View>
                <View className='flex justify-center flex-1 ml-3 gap-y-1'>
                    <Text className='font-psemibold text-sm text-white' numberOfLines={1}>
                        {title}
                    </Text>
                    <Text className='text-xs text-gray-100 font-pregular' numberOfLines={1}>
                        {creator}
                    </Text>
                </View>
                <View className="pt-2">
                    <Image
                        source={icons.menu}
                        className="w-5 h-5"
                        resizeMode="contain"
                    />
                </View>
            </View>

            <TouchableOpacity
                onPress={handlePress}
                className='w-full h-60 rounded-xl mt-3 relative flex justify-center items-center'>
                <VideoView
                    player={player}
                    style={{ width: '100%', height: '100%' }}
                    allowsFullscreen
                    allowsPictureInPicture
                />
            </TouchableOpacity>
        </View >
    );
};

export default VideoCard;

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        padding: 16,
        marginBottom: 24,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    avatarContainer: {
        width: 46,
        height: 46,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    creatorInfo: {
        flex: 1,
        marginLeft: 12,
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        color: '#fff',
    },
    creator: {
        fontSize: 12,
        color: '#aaa',
    },
    menuIcon: {
        width: 20,
        height: 20,
    },
    videoContainer: {
        width: '100%',
        height: 240,
        borderRadius: 12,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    video: {
        width: '100%',
        height: '100%',
    },
    thumbnail: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    playIcon: {
        width: 48,
        height: 48,
        position: 'absolute',
    },
    controlsContainer: {
        padding: 10,
    },
});