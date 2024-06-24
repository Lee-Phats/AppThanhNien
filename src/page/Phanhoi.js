import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image ,Keyboard } from 'react-native';
import axios from "axios";
import FormData from "form-data";
import buttonsEx from '../page/Content/buttonsEx'; // Import file chứa dữ liệu của nút
import aspectRatios from '../page/Content/aspectRatios';
import enumValues  from '../page/Content/contentContainerStyle';
import Header from './components/Header';

export default function Phanhoi() {
  const [textInputValue, setTextInputValue] = useState('');
  const [selectedAspectRatio, setSelectedAspectRatio] = useState('1:1'); 
  const [selectedValue, setSelectedValue] = useState('No Slyte');

  
  const generateImage = async () => {
    try {
      const formData = {
        prompt: textInputValue,
        aspect_ratio: selectedAspectRatio,
        style_preset: selectedValue,
        output_format: "webp"
      };

      const response = await axios.postForm(
        `https://api.stability.ai/v2beta/stable-image/generate/core`,
        axios.toFormData(formData, new FormData()),
        {
          validateStatus: undefined,
          responseType: "arraybuffer",
          headers: { 
            Authorization: `Bearer sk-AX992wlfx2qrT4sCVHup0S96Y09I3Ay3bq92tVnBDJdWgaEP`, 
            Accept: "image/*" 
          },
        },
      );
      
      console.log(respons)
      
    } catch (error) {
      console.error('Lỗi nội dung vui lòng chọn thẻ phù hợp:', error);
    }
  };


  const handleButtonPressPrompt = (text) => {
    setTextInputValue(text);
  };
  const handleButtonPressRatio = (aspectRatio) => {
    setSelectedAspectRatio(aspectRatio);
  };
  const handlePress = (value) => {
    setSelectedValue(value);
  };
  
  const firstRow = enumValues.slice(0, Math.ceil(enumValues.length / 2));
  const secondRow = enumValues.slice(Math.ceil(enumValues.length / 2));


  return (
    <TouchableOpacity onPress={Keyboard.dismiss} style={styles.container} >
      <Header/>
      <View style={styles.enterPrompt}>
        <Text style={styles.text}>Góp ý :</Text>
        <TextInput
          style={styles.textInput}
          multiline
          value={textInputValue}
          onChangeText={(text) => setTextInputValue(text)}
          placeholder="Type here..."
          placeholderTextColor="#ccc"
        />
      </View>
      
      <View >
        <ScrollView  horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.buttonContainer}>
          {buttonsEx.map((button, index) => (
            <TouchableOpacity key={index} style={styles.button} onPress={() => handleButtonPressPrompt(button.content)}>
              <Text style={styles.buttonText}>{button.title}<Image source={button.picture}/></Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      
      <View>
        <Text style={styles.textTT}>Cấp thiết:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.buttonContainer2} >
            {aspectRatios.map((aspectRatio, index) => (
              <TouchableOpacity 
                key={index} 
                style={[
                  styles.buttonRatio, 
                  { backgroundColor: aspectRatio === selectedAspectRatio ? '#007bff' : '#0f161e' }
                ]} 
                onPress={() => handleButtonPressRatio(aspectRatio)}
              >
                <Text style={[styles.buttonText, { color: aspectRatio === selectedAspectRatio ? '#fff' : '#9a9ea7' }]}>
                  {aspectRatio}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>      
      <View>
      <Text style={styles.textTT}>Chọn các thẻ vấn đề được nhắc đến :</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.buttonContainer3}>
          <View style={styles.row}>
            {firstRow.map((value, index) => (
              <TouchableOpacity 
                key={index} 
                style={[
                  styles.button, 
                  { backgroundColor: value === selectedValue ? '#007bff' : '#192b37' }
                ]} 
                onPress={() => handlePress(value)}
                disabled={value === selectedValue} 
              >
                
                <Text style={[styles.buttonText, { color: value === selectedValue ? '#fff' : '#9a9ea7' }]}>
                  {value}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.buttonContainer3}>
          
          <View style={styles.row}>
            {secondRow.map((value, index) => (
              <TouchableOpacity 
                key={index} 
                style={[
                  styles.button, 
                  { backgroundColor: value === selectedValue ? '#007bff' : '#192b37' }
                ]} 
                onPress={() => handlePress(value)}
                disabled={value === selectedValue} 
              >
                <Text style={[styles.buttonText, { color: value === selectedValue ? '#fff' : '#9a9ea7' }]}>
                  {value}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      <TouchableOpacity style={styles.generateButton} onPress={generateImage}>
        <Text style={styles.generateButtonText}>Generate </Text>
      </TouchableOpacity>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f161e",
  },
  container2: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#0f161e',
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
  },
  text: {
    color: "#fcfefe",
    fontSize: 17,
  },
  textTT: {
    color: "#fcfefe",
    fontSize: 17,
    marginTop: 23,
    marginLeft: 20,
    marginRight: 20,
  },
  enterPrompt: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  textInput: {
    backgroundColor: "#192b37",
    marginTop: 8,
    height: 130,
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingTop: 8,
    color: "#fcfefe",
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    height: 40,
    marginTop: 18
  },
  buttonContainer2: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    height: 60,
    marginTop: 13
  },
  buttonContainer3: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 11

  },
  button: {
    backgroundColor: '#0f161e',
    borderWidth: 1,
    borderColor: '#686c75',
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingLeft: 18,
    paddingRight: 18,
    borderRadius: 5,
    marginRight: 10,
  },

  buttonText: {
    color: '#9a9ea7',
  },

  buttonRatio: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 25, 
    marginHorizontal: 7,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#686c75',
  },

  generateButton: {
    backgroundColor: '#007bff',
    height: 55,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 25
  },
  generateButtonText: {
    color: '#fff',
    fontSize: 16
  }
});
