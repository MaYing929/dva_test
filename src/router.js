import React, { PropTypes } from 'react';
import {Router,Route} from 'react-router';
import Users from './routes/User.jsx';
import wuwu from './routes/wuwu.jsx';



export default function ({history}){

  return (
    <Router history={history}>

      <Route path='/' component={wuwu} />
      <Route path='/users' component={Users} />

    </Router>
  )
}
