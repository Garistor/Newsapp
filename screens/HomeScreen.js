import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { getNews } from '../API/NEWSapi';
import Article from '../components/Article';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }
  // Called after a component is mounted
  componentDidMount() {
    this.fetchNews();
   }

  fetchNews() {
    getNews()
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
    },
      () => this.fetchNews()
    );
  }
  
  _displayDetailForFilm = (DetailTitle, DetailUrlimg, DetailDate, DetailAuteur, DetailContenu, DetailSource, url) => {
    this.props.navigation.navigate("ArticleDetail", { DetailTitle: DetailTitle, DetailUrlimg: DetailUrlimg,DetailDate: DetailDate, DetailAuteur: DetailAuteur, DetailContenu: DetailContenu, DetailSource: DetailSource, url: url })
  }

  render() {
    console.log(this.props)
    return (
      <FlatList
        data={this.state.articles}
        renderItem={({ item }) => <Article article={item} displayDetailForFilm={this._displayDetailForFilm} />}
        keyExtractor={item => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
    );
  }
}
