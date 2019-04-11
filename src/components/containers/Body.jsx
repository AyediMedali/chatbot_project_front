import React, { Component } from 'react';

export default class Body extends Component{
    render() {
        return (
            <React.Fragment>
 
<div>

  <div id="wrapper">
    <header id="header">
      <nav className="navbar navbar-inverse" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="https://dialogflow.com/" />
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="https://dialogflow.com/pricing/" target="_blank">Schooling<span /></a></li>
              <li><a href="https://dialogflow.com/blog/" target="_blank">Admission trial<span /></a></li>
              <li><a href="https://dialogflow.com/pricing/" target="_blank">Social life<span /></a></li>
              <li><a href="https://dialogflow.com/blog/" target="_blank">Branch choosing<span /></a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div id="main" className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>Bug_Hunters Chatbot</h1>
          <h2 />
          <div className="b_integrations_agent_links">
            <a href="#" data-toggle="modal" data-target="#embedModal"><i className="fa-code fa" />Embed</a>
            <a href="mailto:?body=Hey%2C%20check%20out%20my%20bot%20that%20I%20built%20with%20Dialogflow%3A%20https%3A%2F%2Fbot.dialogflow.com%2F175d2574-d9f2-4736-94b0-05f182e5b595%0A%0ACreate%20yours%20at%20https%3A%2F%2Fdialogflow.com%2F&subject=Bot%20PI_Chatbot%20on%20Dialogflow"><i className="fa-envelope-o fa" target="_blank" />Email</a>
            <a href="#" data-toggle="modal" data-target="#shareModal"><i className="fa-reply fa" />Share</a>
          </div>
        </div>
        <div className="col-md-6">
          <iframe id="frame" className="b_frame" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/175d2574-d9f2-4736-94b0-05f182e5b595" />
        </div>
      </div>
      <div className="modal fade" tabIndex={-1} id="embedModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
              <h4 className="modal-title">Use following code to integrate this agent into your site:</h4>
            </div>
            <div className="modal-body">
              <pre>&lt;iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/175d2574-d9f2-4736-94b0-05f182e5b595"&gt;&lt;/iframe&gt;</pre>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" tabIndex={-1} id="shareModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
              <h4 className="modal-title">Share this agent via social networks:</h4>
            </div>
            <div className="modal-body">
              <a href="https://www.facebook.com/sharer.php?u=https://bot.dialogflow.com/175d2574-d9f2-4736-94b0-05f182e5b595" target="_blank">
                <img src="https://assets.dialogflow.com/common/assets/img/social_share/facebook.png" alt="Facebook" />
              </a>
              {/* Twitter */}
              <a href="https://twitter.com/share?text=PI_Chatbot%20https://bot.dialogflow.com/175d2574-d9f2-4736-94b0-05f182e5b595%20at%20@dialogflow.com&url=false" target="_blank">
                <img src="https://assets.dialogflow.com/common/assets/img/social_share/twitter.png" alt="Twitter" />
              </a>
              {/* Google+ */}
              <a href="https://plus.google.com/share?url=https://bot.dialogflow.com/175d2574-d9f2-4736-94b0-05f182e5b595" target="_blank">
                <img src="https://assets.dialogflow.com/common/assets/img/social_share/google.png" alt="Google" />
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://bot.dialogflow.com/175d2574-d9f2-4736-94b0-05f182e5b595" target="_blank">
                <img src="https://assets.dialogflow.com/common/assets/img/social_share/linkedin.png" alt="LinkedIn" />
              </a>
              {/* Reddit */}
              <a href="https://reddit.com/submit?url=https://bot.dialogflow.com/175d2574-d9f2-4736-94b0-05f182e5b595&title=PI_Chatbot.%20" target="_blank">
                <img src="https://assets.dialogflow.com/common/assets/img/social_share/reddit.png" alt="Reddit" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>


            </React.Fragment>
        )
    }
}
