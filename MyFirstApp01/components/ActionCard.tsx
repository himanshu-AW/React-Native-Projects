import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevated]}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            Use Blog Writing Tools for Efficiency
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://bloggingtips.com/wp-content/uploads/2022/04/ai_writing_software_2-1024x576.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3} style={styles.bodyText}>
            Frase.io is an AI writing tool that can generate short blurbs of
            content based on the specifications you put in. Not only will this
            save you tons of time, but it will also optimize your content so
            that it’s engineered to rank higher on search engines.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://learn.bloggingtips.com/topics/blog-post-examples/',
              )
            }>
            <Text style={styles.buttonText}>Learn More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() =>
            //   openWebsite(
            //     'https://youtube.com/@apnaworld18?si=eIpp7ekb77fh94G0',
            //   )
            // }
            >
            <Text style={[styles.buttonText,{color:'#FF2400'},{borderColor:'#FF2400'}]}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card: {
    width: 380,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 'auto',
    overflow: 'hidden',
  },
  elevated: {
    backgroundColor: '#dddddd',
    elevation: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  headerContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardImage: {
    height: 200,
    margin: 8,
    borderRadius: 4,
    objectFit: 'cover',
  },
  bodyContainer: {
    padding: 10,
  },
  bodyText: {
    color: '#8F00FF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  footerContainer: {
    marginVertical:10,
    flex:1,
    flexDirection: 'row',
    justifyContent:'space-evenly',
    alignItems: 'center',
  },
  buttonText: {
    color: '#0000FF',
    backgroundColor: '#ffffff',
    fontSize: 15,
    fontWeight:'bold',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#0000FF',
    textTransform: 'uppercase',
  },
});
