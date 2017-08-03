import React from 'react'
import DOM from 'react-dom'
import Autocomplete from 'react-autocomplete';
import Select from 'react-select';
import $ from 'jquery';
import 'react-select/dist/react-select.css';



class tNavBar extends React.Component {
	    constructor(props) {
        super(props);
        this.state = {
            options: [
                {value: 'none', label: 'none'}     
            ]
        }
        this.logChange = this.logChange.bind(this);
    }

    componentDidMount(){


    	$.getJSON(`http://localhost:5000/profiles`, (serverData)=>{
            // log the JSON response from Express
            var profilesArray = []
            console.log(serverData.profileData)
            for(let i = 0; i < serverData.profileData.length; i++){
            	profilesArray.push({value: serverData.profileData[i].username, label: serverData.profileData[i].username})
            	//profilesArray.push('1')
            }
            console.log(profilesArray);

            this.setState({
                options: profilesArray
            })
        })
    }

    logChange(val) {
	  this.setState({
	  		selectVal: val.value
	  })
	}




  render() {

  	var Select = require('react-select');

	

	console.log(this.state.options)
	//console.log(document.getElementById('search').value)
	var input = 's'
	console.log(document.getElementById('special'))
	
    return (
    	<div>
	    	<p><br/><br/><br/><br/><br/><br/><br/><br/><br/></p>
			<Select
				id='special'
				placeholder='input'
				name="form-field-name"
				value={this.state.selectVal}
				options={this.state.options}
				onChange={this.logChange}
			/>
		</div>
    )
  }
}

export default tNavBar;