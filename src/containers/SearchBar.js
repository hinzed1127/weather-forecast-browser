import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };

		// as an alternative to arrow functions in the component
		// ex: onChange = { (event) => this.onInputchange(event) }
		this.onInputChange = this.onInputChange.bind(this); 
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault(); // this tells the browser to NOT do defualt behavior for this event	
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className='input-group'event>
				<input
					placeholder='Search for 5-day forecasts in your favorite cities'
					className='form-control'
					value={ this.state.term }
					onChange={ this.onInputChange } />
				<span className='input-group-btn'>
					<button type='submit' className='btn btn-secondary'>Submit</button>
				</span>
			</form>
		);
	}
}

export default SearchBar;