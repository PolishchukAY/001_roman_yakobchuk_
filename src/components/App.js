
import React from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'

function App(){
	return(
    	<div>
      		<div></div>
        	<h1>App Name</h1>
        	<ArticleList articles={articles} foo={'bar'} flag/>
      	</div>
    )
}

export default App
