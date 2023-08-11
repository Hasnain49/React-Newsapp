import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
        constructor(){
            super();
            console.log("Hello I am constructor from news article")
            this.state = {
                articles: [],
                loading: false
            }
        }
        async componentDidMount(){
            let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=7f3db769b81c4149899d4e40ecbced1f";
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({articles: parsedData.articles})
        }
    render() {
        return (
            <div className='container my-3'>
                <h2>NewsMonkey - Top headlines</h2>
                <div className="row my-3">
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url} />
                    </div>
                    })}
                    
                </div>
                
            </div>

        )
    }
}

export default News