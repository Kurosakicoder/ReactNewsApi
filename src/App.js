import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=759a41ef0f944f91a5939ea831376dd8')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          articles: data.articles
        })
      });
  }

  render() {
    // console.log(this.state);
    return (
      <div className="App">

        <div className="jumbotron">
          <h1 className="display-4">React News App</h1>
          <p className="lead">Get breaking news headlines, and search for articles from over 30,000 news sources and blogs with our news API</p>
        </div>

        <div className="container">
          <div class="row">
            {this.state.articles.map((item, index) => {
              return (
                <div class="col-sm">
                  <div className="card" style={{ width: '18rem' }}>
                    <img src={item.urlToImage} className="card-img-top" />
                    <div className="card-body">
                      <h5 style={{ textAlign: 'left' }}>
                        {item.title}
                      </h5>
                      <h6 className="card-subtitle mb-2 text-muted">{item.author}</h6>
                      <p className="card-text">{item.description}</p>
                      <a href={item.url} className="btn btn-primary" target="_blank">Read More</a>
                    </div>
                  </div>
                  <br />
                </div>
              )
            })
            }
          </div>
        </div>
      </div >

    );
  }
}



export default App;
