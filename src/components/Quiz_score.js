import React, {Component} from 'react';
import './css/style.css';

class Quiz extends Component{

    constructor(props) {
        super(props);
        this.state = {
            quiz_score : ""
        }
    }

    componentDidMount() {

        if(localStorage.getItem('token')!=''){

        fetch('http://localhost:3000/quizQ/get_quiz_score/'+ localStorage.getItem('id'))
            .then(res => res.json())
            .then(json => {
                this.setState({
                    quiz_score: json
                })
            });
        }
        else {
            this.setState({
                    quiz_score : 'You did not take the admission quiz yet, ' +
                        'you can ask our chatbot for more information'
                })
        }
    }

    update_score_color(score){
        if(Number(score)>69){
            return ( <div>Your quiz score is :<p style={{color : "green"}}>{score}%</p></div>)
        }else if(Number(score)<70&&Number(score)>39){
            return ( <div>Your quiz score is :<p style={{color : "orange"}}>{score}%</p></div>)
        }else if(Number(score)<40){
            return ( <div>Your quiz score is :<p style={{color : "red"}}>{score}%</p></div>)
        }
    }

    render(){
        return (<div>

                <div className="col-sm-6">
                    <ul vocab="http://schema.org/" typeof="BreadcrumbList"
                        className="breadcrumbs fixclear bread-style--black">
                        <li property="itemListElement" typeof="ListItem"><a property="item" typeof="WebPage"
                                                                            href="http://esprit.tn">Admission</a></li>
                         <li>Quiz score</li>
                    </ul>

                </div>

                <div className="clear"></div>

            <h2>{this.update_score_color(this.state.quiz_score)}</h2>

            </div>
        );
    }

}

export default Quiz