import React, { Component } from 'react'
import axios from 'axios'

class Form extends Component {
	state ={
		fields: []
	}
componentDidMount() {
		axios.get('http://localhost:3001/fields').then(resp => {
			this.setState({
				fields: resp.data
			})
		})
}
	render() {
		return (
			<div className="bigContainer">
				<header>
				<h1>Sign Up</h1>
				</header>

				<div className="fields">
					{this.state.fields.map(item =>{
						if(item.type === 'text'){
							return <input id={item.id} type={item.type} placeholder={item.label}/>
						}else if(item.type === 'tel'){
							return <input id={item.id} type={item.type} placeholder={item.label} />
						}else if(item.type === 'email'){
							return <input id={item.id} type={item.type} placeholder={item.label} />
						}else if(item.type === 'select'){
							return <select id={item.id}>
							<option value='select'>{item.label}</option>
							{item.options.map(label => {
								return(
									<option value={label.value}>{label.label}</option>)}
							)}
							</select>
						}else{return <textarea id={item.id} placeholder={item.label}></textarea>}
						return (
							<div key={item.id}></div>
							)
					}
					)}
				</div>

				<footer>
				<button>Submit</button>
				</footer>
				
			</div>
		)
	}
}

export default Form