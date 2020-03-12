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
        <div className="container">
          <div class="row">
            {this.state.articles.map((item, index) => {
              return (
                <div class="col-sm">
                  <div className="card" style={{ width: '18rem' }}>
                    <img src={item.urlToImage} className="card-img-top" />
                    <div className="card-body">
                      <h2 style={{ textAlign: 'left' }}>
                        {item.title}
                      </h2>
                      <p><b>{item.author}</b></p>
                      <a href={item.url} target="_blank">Read More</a>
                      <p>{item.content}</p>
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
