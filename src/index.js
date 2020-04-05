import React from 'react'
import {render} from 'react-dom'
//import App from './components/App'

function Article(){
	
  	//const body =<section>article.text</section>
	return(
    	<div className='hello' style ={{color: 'red'}}>
        	<h2>
				article.title
				<button onClick={hendleClick}>close</button>
			</h2>
        	body
        `	<h3>
        		creation date: {(new Date()).toDateString()}
        	</h3>
      	</div>
    )
}

function hendleClick(){
	console.log('---', 'cliced')	
}


function App(){
	return(
    	<div>
      		<div></div>
        	<h1>App Name</h1>
        	<Article />
      	</div>
    )
}

render(<App/>, document.getElementById('root'))
