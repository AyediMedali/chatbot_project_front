import React, {Component} from 'react';

class DynamicContextSkills extends Component {

    constructor(props) {
        super(props);
        this.state = {
            skills: [],

        }
    }

    componentDidMount() {
        fetch('https://chatbot-bug-hunters-back.herokuapp.com/get_connected_user')
            .then(res => res.json())
            .then(res => {
console.log(res)
                // this.setState({
                //     message: res.msg
                // })
                // if(res.user.skills.length != 0)
                // {
console.log(res.user.skills)

               // const Userskills = res.user.skills.map(obj => [obj.title]);
               // this.setState({ skills: Userskills });

                this.setState({ skills: res.user.skills });
            });
    }

    handleSubmit = async event => {


    }

    render() {
        var  items  = this.state.skills ;
        return (
            <div id="main" className="container">
                <ul>
                    {items.map(item => (
                        <li key={item._id}>
                            title :  {item.title} ;

                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default DynamicContextSkills;