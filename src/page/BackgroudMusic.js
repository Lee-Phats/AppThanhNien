import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';

const BackgroundMusic = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const playSound = async () => {
      const { sound: soundObject } = await Audio.Sound.createAsync(
        require('../page/amthanh.mp3'), // Đường dẫn đến file âm thanh của bạn
        { shouldPlay: true }
      );
      setSound(soundObject);
    };

    playSound();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  useEffect(() => {
    if (sound) {
      sound.setIsMutedAsync(isMuted);
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <TouchableOpacity onPress={toggleMute}>
      <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} size={24} />
    </TouchableOpacity>
  );
};

export default BackgroundMusic;
