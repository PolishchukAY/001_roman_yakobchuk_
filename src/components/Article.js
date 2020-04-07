
import React, {Component} from 'react'

class Article extends Component {
	state={
		isOpen: true
	}

	render(){
		const {article}=this.props
		console.log('--- this.props', this.props)
		const body = this.state.isOpen && <section>{article.text}</section>
		return(
			<div >
				<h2 className='hello' style ={{color: 'red'}}>
					{article.title}
					<button onClick={this.handleClick}>
						{this.state.isOpen ? 'close' : 'open'}
					</button>
				</h2>
				{body}
			`	<h3>
					creation date: {(new Date(article.date)).toDateString()}
				</h3>
			</div>
		)
	}
	handleClick = () => {
		console.log('---', 'cliced')
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
}


export default Article
