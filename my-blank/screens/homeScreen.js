import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  SectionList,
  Pressable,
  StyleSheet,
  Modal,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { fetchBooksByCategory } from '../api/googleBooks';
import { groupBooksByAuthor } from '../utils/groupBooks';
import BookItem from '../components/bookItem';

const { width: screenWidth } = Dimensions.get('window');

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

export default function HomeScreen() {
  const [loading, setLoading] = useState(false);
  const [sections, setSections] = useState([]);
  const [error, setError] = useState('');
  const [activeCategory, setActiveCategory] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  const categories = ['Fiction', 'Historia', 'Tecnologia', 'Ciencia', 'Arte'];

  const loadBooks = async (category) => {
    setActiveCategory(category);
    setLoading(true);
    setError('');
    setSections([]);
    try {
      const books = await fetchBooksByCategory(category);
      if (books.length === 0) setError('No se encontraron libros');
      const grouped = groupBooksByAuthor(books);
      setSections(grouped);
    } catch (err) {
      setError('Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedBook) {
      const imageUri = getBestImage(selectedBook.volumeInfo.imageLinks);
      if (imageUri) {
        Image.getSize(
          imageUri,
          (width, height) => {
            const maxWidth = screenWidth - 40; // padding horizontal 20*2
            let scaledWidth = width;
            let scaledHeight = height;
            if (width > maxWidth) {
              const scaleFactor = maxWidth / width;
              scaledWidth = maxWidth;
              scaledHeight = height * scaleFactor;
            }
            setImageSize({ width: scaledWidth, height: scaledHeight });
          },
          () => {
            setImageSize({ width: 200, height: 300 });
          }
        );
      } else {
        setImageSize({ width: 0, height: 0 });
      }
    } else {
      setImageSize({ width: 0, height: 0 });
    }
  }, [selectedBook]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>📚 Buscar libros por categoría</Text>

      <View style={styles.categoryContainer}>
        {categories.map((cat) => (
          <Pressable
            key={cat}
            onPress={() => loadBooks(cat)}
            style={[
              styles.categoryButton,
              activeCategory === cat && styles.categoryButtonActive,
            ]}
          >
            <Text
              style={[
                styles.categoryText,
                activeCategory === cat && styles.categoryTextActive,
              ]}
            >
              {cat}
            </Text>
          </Pressable>
        ))}
      </View>

      {loading && <ActivityIndicator size="large" color="#0077cc" />}
      {error !== '' && <Text style={styles.error}>{error}</Text>}

      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookItem book={item} onPress={() => setSelectedBook(item)} />
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <Modal
        visible={!!selectedBook}
        animationType="slide"
        onRequestClose={() => setSelectedBook(null)}
        transparent={true}
      >
        <View style={styles.modalOverlay}>
          <SafeAreaView style={styles.modalContainer}>
            <TouchableOpacity
              onPress={() => setSelectedBook(null)}
              style={styles.closeButton}
            >
              <Text style={styles.closeText}>Cerrar ✕</Text>
            </TouchableOpacity>

            {selectedBook && (
              <ScrollView contentContainerStyle={styles.detailContent}>
                {imageSize.width > 0 && (
                  <Image
                    source={{
                      uri: getBestImage(selectedBook.volumeInfo.imageLinks),
                    }}
                    style={[
                      styles.detailImage,
                      {
                        width: imageSize.width,
                        height: imageSize.height,
                      },
                    ]}
                    resizeMode="contain"
                  />
                )}

                <Text style={styles.detailTitle}>
                  {selectedBook.volumeInfo.title}
                </Text>
                <Text style={styles.detailPublisher}>
                  {selectedBook.volumeInfo.publisher || 'Sin editorial'}
                </Text>
                <Text style={styles.detailDescription}>
                  {selectedBook.volumeInfo.description || 'Sin descripción'}
                </Text>
              </ScrollView>
            )}
          </SafeAreaView>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
  error: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: '#eee',
    borderRadius: 20,
  },
  categoryButtonActive: {
    backgroundColor: '#0077cc',
  },
  categoryText: {
    fontSize: 14,
    color: '#333',
  },
  categoryTextActive: {
    color: 'white',
    fontWeight: 'bold',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginTop: 12,
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // fondo semi-transparente
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    maxHeight: '90%',
    overflow: 'hidden',
    paddingTop: 10,
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  closeButton: {
    alignSelf: 'flex-end',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  closeText: {
    fontSize: 18,
    color: '#0077cc',
    fontWeight: 'bold',
  },
  detailContent: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  detailImage: {
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: '#eee',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  detailTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
    textAlign: 'center',
  },
  detailPublisher: {
    fontSize: 16,
    color: '#0077cc',
    marginBottom: 16,
    textAlign: 'center',
  },
  detailDescription: {
    fontSize: 16,
    color: '#555',
    textAlign: 'justify',
  },
});
