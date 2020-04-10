import React, {PureComponent, Component} from 'react'
import Article from './Article'
import './ArticleList.css'

export  default class ArticleList extends PureComponent {
    state = {
        openArticleID: null
    }

    render() {
        console.log('---', '2-render_ArticleList')
        const articleElements = this.props.articles.map((article, index) =>
            <li key = {article.id} className="article-list__li" >
                <Article article = {article} isOpen = {this.state.openArticleID === article.id}
                onButtonClick = {this.handleClick.bind(this, article.id)}/>

                {/*{console.log('---', 'this.state.openArticleID', this.state.openArticleID, 'article.id', article.id)}*/}
            </li>
        )
        return(
            <ul>
                {articleElements}
            </ul>
        )
    }

    handleClick = openArticleId => {
        console.log('По кнопке кликнули', openArticleId)
        console.log('По кнопке --------', this.state.openArticleID)
        this.setState({openArticleId})
        this.state.openArticleID = this.state.openArticleID === openArticleId ? null : openArticleId
        console.log('По  --------', this.state.openArticleID === openArticleId)
        this.state.openArticleID = openArticleId
        //this.state.openArticleID === openArticleId ? null : openArticleId
    }




}