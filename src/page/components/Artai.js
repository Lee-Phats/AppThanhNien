import React from "react";
import { View, Button, Alert } from "react-native";
import axios from "axios";
import FormData from "form-data";

export default function GenerateArt({
  APIkey,
  content_type = "application/json",
  accept = "image/*",
  prompt,
  aspect_ratio,
  negative_prompt,
  seed,
  style_preset,
  output_format = "webp"
}) {
  const formData = new FormData();
  formData.append("prompt", prompt);
  formData.append("output_format", output_format);
  // Append other optional parameters if they are provided
  if (aspect_ratio) formData.append("aspect_ratio", aspect_ratio);
  if (negative_prompt) formData.append("negative_prompt", negative_prompt);
  if (seed) formData.append("seed", seed);
  if (style_preset) formData.append("style_preset", style_preset);

  const ApiAi = async () => {
    try {
      const response = await axios.post(
        "https://api.stability.ai/v2beta/stable-image/generate/core",
        formData,
        {
          headers: {
            Authorization: `Bearer ${APIkey}`,
            "Content-Type": content_type,
            Accept: accept,
          },
          responseType: "arraybuffer",
        }
      );

      if (response.status === 200) {
        const imageBuffer = Buffer.from(response.data, "binary");
        fs.writeFileSync("output.webp", imageBuffer);
        Alert.alert("Success", "Image generated successfully!");
      } else {
        Alert.alert("Error", "Failed to generate image");
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View>
      <Button title="Generate Art" onPress={ApiAi} />
    </View>
  );
}
