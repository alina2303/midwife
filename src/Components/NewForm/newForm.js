import React, { Component } from 'react';
import FormTabs from '../FormTabs/formTabs';

class NewForm extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.onDateChange = this.onDateChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
    }
    state = {
        date: new Date(),
      }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    onDateChange(event) {
        this.formData.date = event.target.value;
        console.log(this.formData);
    }
  
    handleSubmit(event) {
      alert('A form was submitted: ');
      event.preventDefault();
    }
  
    render() {
      return (
          <div>
            <h1>Erfaringsskema for 4.semester</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Pick a date:
                        <input type="date" onChange={this.onDateChange} value={this.state.date} />
                    </label>
                    <label>
                        Working hours:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <FormTabs />
                    <button type="button" value="Submit" className="btn btn-success">Submit</button>
                </form>
        </div>
      );
    }
  }


//const NewForm = () => (

    //<div>
         //<h1>Erfaringsskema for 4.semester</h1>
            //<FormTabs />
        //<button type="button" className="btn btn-success">Submit</button>
    //</div>

//);

export default NewForm