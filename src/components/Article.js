
import React, {Component} from 'react'

class Article extends Component {
	constructor (props) {
		super(props)
		this.state = {
			isOpen: props.defaultOpen,
			count: 0
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.state.isOpen !== nextState.isOpen
	}

	componentWillMount() {
		console.log('---', 'ct_WillMount')
	}

	componentWillReceiveProps(nextProps) {
		//console.log('---', 'ct_WillReceiveProps')
		if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
			isOpen: nextProps.defaultOpen
		})
	}

	componentWillUpdate(nextProps, nextState, nextContext) {
		console.log('---', 'ct_WillUpdate')
	}

	render(){
		const {article}=this.props
		//console.log('--- this.props', this.props)
		const body = this.state.isOpen && <section className={"card-text"}>{article.text}</section>
		return(
			<div className={"card mx-auto"} style={{width:"70%"}}>
				<div className={"card-header"}>
					<h2 onClick={this.incrementCounter}
						className='hello' style ={{color: 'red'}}>
						{article.title}
						clicked{this.state.count}
						<button onClick={this.handleClick} className={"btn btn-primary btn-lg float-right"}>
							{this.state.isOpen ? 'close' : 'open'}
						</button>
					</h2>
				</div>
				<div className={"card-body"}>
					<h6 className={"card-subtitle text-muted"}>
						creation date: {(new Date(article.date)).toDateString()}
					</h6>
					{body}
				</div>
			</div>
		)
	}

	incrementCounter = () => {
		this.setState({
			count: this.state.count + 1})
	}

	handleClick = () => {
		//console.log('---', 'cliced')
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
}


export default Article
