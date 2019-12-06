import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image } from 'react-native'
import { connect } from 'react-redux'

class ArticleDetail extends React.Component {
  render() {
    console.log(this.props)
    return (
      <ScrollView style={styles.scrollview_container}>
        <Image
          style={styles.image}
          source={{uri: this.props.navigation.state.params.DetailUrlimg}}
        />
        <Text style={styles.title_text}>{this.props.navigation.state.params.DetailTitle}</Text>
        <Text style={styles.description_text}>{this.props.navigation.state.params.DetailContenu}</Text>
        <Text style={styles.default_text}>Publie le {this.props.navigation.state.params.DetailDate}</Text>
        <Text style={styles.default_text}>Auteur : {this.props.navigation.state.params.DetailAuteur} ( {this.props.navigation.state.params.DetailSource} )</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollview_container: {
    flex: 1
  },
  image: {
    height: 169,
    margin: 5
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 35,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000',
    textAlign: 'center'
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15
  },
  default_text: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  }
})

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(ArticleDetail)