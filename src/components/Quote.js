import React, { Component } from 'react';
import { QUOTES } from '../shared/quotes';
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const quoteNumber = QUOTES.length;

class Quote extends Component{

	constructor(props){

		super(props);

		this.state={
			id:'', 
			author:'',
			quote:'',
		};

		this.loadQuote=this.loadQuote.bind(this);
	};
	
	componentDidMount(){
		this.loadQuote();
	}


	loadQuote(){
		
		let idNew='';
		
		//fetch a new id
		do {
			idNew = Math.floor(Math.random() * Math.floor(quoteNumber));
		} while (idNew===this.state.id);

		//update the state with new quote
		this.setState ({
			id:idNew,
			author:QUOTES[idNew].author,
			quote:QUOTES[idNew].quote
		});
		
	}

  
	render(){

		return (
			<div id="quote-box">
				<div key="transition-group">
					<p id="text">
						&ldquo; {this.state.quote} &rdquo;
					</p>
					<p id="author">
						{this.state.author} 
					</p>
				</div>
				<div className="button-group">
					<a href="https://twitter.com/intent/tweet" title="tweet" target="_blank" rel="noopener"  id="tweet-quote">
						<FontAwesomeIcon icon={faTwitterSquare} />
					</a>
					<button type="submit" title="get new quote" id="new-quote" onClick={this.loadQuote}>New Quote</button>
				</div>
			</div>
		)
	}
}

export default Quote;