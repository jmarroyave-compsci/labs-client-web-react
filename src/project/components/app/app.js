import React from 'react';
import { withRouter } from 'react-router-dom'

import CoreApp from 'core/app/dashboard';
import uris from 'shared/trends/uris';
import Footer from 'components/app/footer'
import Header from 'components/app/header'
import { AppContext } from 'state/contexts/app';

class App extends React.Component {
  render(){
    var { app, data, children } = this.props;    
    const page_title = `JMArroyave`;
    const title = `JMArroyave`;
    return(
        <CoreApp 
          notifications={false} 
          theme={this.context.theme} 
          title={title}
          page_title={page_title} 
          nav={window.__nav} 
          footer={<Footer/>}
          >
            <Header noCheck app={app} data={data}/>
            <div className={"content"}>
              {children}
            </div>          
        </CoreApp>
    )
  }
}

App.contextType = AppContext;
export default withRouter(App);