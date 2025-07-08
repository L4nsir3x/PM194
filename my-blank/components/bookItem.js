import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const getBestImage = (imageLinks) => {
  return (
    imageLinks?.extraLarge ||
    imageLinks?.large ||
    imageLinks?.medium ||
    imageLinks?.small ||
    imageLinks?.thumbnail ||
    null
  );
};

export default function BookItem({ book, onPress }) {
  const info = book.volumeInfo;
  const imageUri = getBestImage(info.imageLinks);
  const [imageSize, setImageSize] = useState({ width: 80, height: 120 }); // tamaño por defecto

  useEffect(() => {
    if (imageUri) {
      Image.getSize(
        imageUri,
        (width, height) => {
          // Ajustar para que la altura sea 120 y escalar proporcionalmente
          const maxHeight = 120;
          const scaleFactor = maxHeight / height;
          const scaledWidth = width * scaleFactor;
          setImageSize({ width: scaledWidth, height: maxHeight });
        },
        (error) => {
          // En caso de error, mantener tamaño por defecto
          setImageSize({ width: 80, height: 120 });
        }
      );
    }
  }, [imageUri]);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          style={[styles.image, { width: imageSize.width, height: imageSize.height }]}
          resizeMode="contain"
        />
      )}
      <View style={styles.content}>
        <Text style={styles.title}>{info.title}</Text>
        <Text style={styles.publisher}>{info.publisher || 'Sin editorial'}</Text>
        <Text numberOfLines={4} style={styles.description}>
          {info.description || 'Sin descripción'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
    padding: 12,
    marginVertical: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    borderRadius: 8,
    backgroundColor: '#ccc',
  },
  content: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  publisher: {
    color: '#0077cc',
    fontSize: 13,
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: '#555',
  },
});
