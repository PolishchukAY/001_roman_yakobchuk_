import React from 'react'
import {render} from 'react-dom'

function HelloWorld(){
	return(
	<div>
		<div></div>
		<h1>Hello World!!!</h1>
	</div>
	)
}

render(<HelloWorld/>, document.getElementById('root'))
