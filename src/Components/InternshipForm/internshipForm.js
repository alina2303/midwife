import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './InternshipForm.css';




class InternshipForm extends Component {
    constructor(){
        super();
        this.onDateChange = this.onDateChange.bind(this);
        this.formData = {
            tasks: [
                {
                    id: 1, 
                    name: 'Modtagelse af familien',
                    status: false
                },
                {
                    id: 2, 
                    name: 'Samtale om og planlægning af barselsomsorgen',
                    status: false
                },
                {
                    id: 3, 
                    name: 'Vejledning i personlig hygiejne',
                    status: false
                },
                {
                    id: 4, 
                    name: 'Vejledning i personlig hygiejne',
                    status: false
                },
                {
                    id: 5, 
                    name: 'Palpation af uterus p.p.',
                    status: false
                },
                {
                    id: 6, 
                    name: 'Observation og vejledning omkring lokkier',
                    status: false
                }
            ],
            date: ''
            
        };

    }

    onChange(event, item) {
        let value = event.target.checked;
        item.status = value;

        // looking for id that is equal to 
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
                <tr>
                    <td><label>{item.name}</label></td>
                    <td><label className="control control--checkbox"><input type="checkbox" onChange={(e)=>{this.onChange(e,item)}}/><div className="control__indicator"></div></label></td>
                </tr>
            );
        });
        return tasks; 
    }
    render() {
        return (
            <div>
                <h1>Erfaringsskema for 4.semester</h1>
                <input type="date" onChange={this.onDateChange}/>
                <div className="container">
                    <table className="table">
                        <tbody>
                        <tr>
                        <th>Barselsomsorg generelt:</th>
                        <th>Deltaget i (dato eller stregregnskab)</th>
                        </tr>
                            {this.renderTasks()}
                        </tbody> 
                    </table> 
                    <button type="button" className="btn btn-success">Submit</button>
                </div> 
            </div>
        )
    }
}

export default InternshipForm;
