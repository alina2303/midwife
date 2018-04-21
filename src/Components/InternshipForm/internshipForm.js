import React, { Component } from 'react';


class InternshipForm extends Component {
    constructor(){
        super();
        this.onDateChange = this.onDateChange.bind(this);
        this.formData = {
            tasks: [
                {
                    id: 1, 
                    name: 'Listening to heart beating',
                    status: false
                },
                {
                    id: 2, 
                    name: 'Taking to future parents',
                    status: false
                },
                {
                    id: 3, 
                    name: 'Checking uterus',
                    status: false
                }
            ],
            date: ''
            
        };

    }

    onChange(event, item) {
        let value = event.target.checked;
        item.status = value;

        // looking for id that equals 
        let ItemInArray = this.formData.tasks.find(itm=>itm.id===item.id);
        //
        let indexOfItem = this.formData.tasks.indexOf(ItemInArray);
        this.formData.tasks[indexOfItem] = item;
        console.log(this.formData);
    }

    onDateChange(event) {
        this.formData.date = event.target.value;
        console.log(this.formData);
    }
    renderTasks(){
        let tasks = [];
        tasks = this.formData.tasks.map((item)=>{
            return (
                <li>
                    <label>{item.name}</label>
                    <input type="checkbox" onChange={(e)=>{this.onChange(e,item)}}/>
                </li>   
            );
        });
        return tasks; 
    }
    render() {
        return (
            <div>
                <h1>Form  for internship 1</h1>
                <ul>{this.renderTasks()}</ul>
                <input type="date" onChange={this.onDateChange}/>
            </div>
        )
    }
}

export default InternshipForm;
