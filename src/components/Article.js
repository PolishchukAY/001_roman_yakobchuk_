
import React from 'react'

function Article(props){
	const {article}=props
	console.log('---', props)
  	const body =<section>{article.text}</section>
	return(
    	<div >
        	<h2 className='hello' style ={{color: 'red'}}>
				{article.title}
				<button onClick={hendleClick}>close</button>
			</h2>
        	{body}
        `	<h3>
        		creation date: {(new Date(article.date)).toDateString()}
        	</h3>
      	</div>
    )
}

function hendleClick(){
	console.log('---', 'cliced')	
}

export default Article
