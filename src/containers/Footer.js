import React, { Component } from 'react';

export default class Footer extends Component{
    render() {
        return (
                    <div>
        <footer id="footer" className="">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        &copy; 2019 Your Site Name. All Rights Reserved. <a href="https://templatemag.com/bootstrap-templates/">Bootstrap templates</a> by TemplateMag.
                    </div>
                    <div className="col-sm-4">
                        <ul className="pull-right">
                            <li><a id="gototop" className="gototop" href="#"><i className="fa fa-chevron-up"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
                    </div>
               )
    }
}