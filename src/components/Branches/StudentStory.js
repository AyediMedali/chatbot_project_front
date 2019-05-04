import React, {Component} from 'react';

class StudentStory extends Component {

    constructor(props){
        super(props);
        this.state= {
            items: [],
            isLoaded : false 
        }
        
    }
    componentDidMount(){
            fetch('https://chatbot-bug-hunters-back.herokuapp.com/branch/testKNN')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    issLoaded: true,
                    items: json
                })
            });
    }

  
    getScore(student) {
        var number = 0 ; 
        var sum = 0 ;
        student.passed_exams.forEach( element => {
            if(element.exam.level.grade==3){
                    number ++ ;
                    sum+=element.score ;
            }
        })
        if(number==0) return 0 ;
        else 
        return (sum/number) ;
    }

    render() {
        var {isLoaded , items } = this.state ; 

        return (
            <React.Fragment>
        <div>
  <section className="zn_section eluid40534c2d     section--no " id="eluid40534c2d">
    <div className="zn_section_size container">
      <div className="row zn_columns_container zn_content " data-droplevel={1}>
        <div className="eluid00f5ac22   col-md-8 col-sm-8   zn_sortable_content zn_content " data-droplevel={2}>
          <div className="kl-title-block clearfix tbk--text- tbk--left text-left tbk-symbol--line  tbk-icon-pos--after-title eluidb6b6f3b4 "><h2 className="tbk__title ">Students Stories </h2><span className="tbk__symbol "><span /></span></div>
          
          {items.map(item => (
              <React.Fragment>
          <div className="testimonial_box tst-box tb-eluid097bbee6 clearfix  " data-align="left" data-theme="light">
            <div className="details tst-box-details">
              <img className="tst-box-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png" width={60} height={60} alt title /><h6 className="tst-box-title"><strong className="tst-box-title-auth">{item.student.first_name} {item.student.last_name}</strong>{item.student.email}</h6>				</div>
            <blockquote className="tst-box-bqt" style={{}}>This Student had qualities and attributes so close to you<br />
            Chose this branch : {item.student.level.branch.name} <br />
            He joined esprit in { item.student.registration_date} <br />
            he averaged a score of : {this.getScore(item.student)} <br />
            you can even Email him to get further advices


            </blockquote> </div>
                      <div className="zn_separator clearfix eluidf6a28f37 zn_separator--icon-yes "><span className="zn_separator__line zn_separator__line--left" /><span className="zn_separator__icon" data-zniconfam="icomoon" data-zn_icon="" /><span className="zn_separator__line zn_separator__line--right" /></div>
            
                      </React.Fragment>
            ))}

          
                 </div>
      </div>
    </div>
  </section>
</div>

	
            </React.Fragment>
        );
    }
}

export default StudentStory;