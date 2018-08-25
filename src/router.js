import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import IndexPage from './routes/IndexPage'
import LoginPage from './routes/login'
import StudentsPage from './routes/studentManagement'
import ProfilePage from './routes/profile'

const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model)
  }
}

function RouterConfig ({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/sfsdf" exact component={IndexPage} />
        <Route path="/login"
          children={({ match, ...rest }) => {
          registerModel(app, require('./models/login').default)
          return (<LoginPage />)
        }}
        />
        <Route path="/students"
          children={({ match, ...rest }) => {
          registerModel(app, require('./models/students').default)
          return (<StudentsPage />)
        }}
        />
        <Route path="/profile"
          children={({ match, ...rest }) => {
          registerModel(app, require('./models/students').default)
          return (<ProfilePage />)
        }}
        />
      </Switch>
    </Router>
  )
}

export default RouterConfig
