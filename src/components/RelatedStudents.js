import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class RelatedStudents extends Component {

    constructor(props){
        super(props);
        this.state= {
            items: [],
            isLoaded : false 
        }
        
    }
    componentDidMount(){
            fetch('http://localhost:3000/branch/testKNN')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    issLoaded: true,
                    items: json
                })
            });
    }
    render() {
        var {isLoaded , items } = this.state ; 

            return (
                <div id="main" className="container">
                
                    <ul>
                    {items.map(item => (
                            <li key={item._id}>
                               name :  {item.student.first_name} &nbsp;
                               cin : {item.student.cin} &nbsp;

                            </li>
                        ))}
                    </ul>
                </div>
             );
        
    }
}

export default RelatedStudents ;