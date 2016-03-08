import React from 'react'
import LoginPage from './pages/login'
import Nav from './components/nav'
import { connect } from 'react-redux'
import NavHelper from 'react-internal-nav'
import { updateUrl, doLogin, doLogout } from './actions'
import renderUrl from './helpers/render-url'
import WatchedReposPage from './pages/watched-repos.js'

const App = (props) => {
  const {userData, doLogin, updateUrl, url, doLogout} = props
  let page
  let nav

  renderUrl(url)

  if (url === '/') {
    page = <LoginPage doLogin={doLogin}/>
  } else if (url === '/watched-repos'){
    page = <WatchedReposPage></WatchedReposPage>
  }

  if (url !== '/') {
    nav = <Nav userData={userData} doLogout={doLogout}/>
  }

  return (
    <NavHelper onInternalNav={updateUrl}>
      {nav}
      <div className='container'>
        {page}
      </div>
    </NavHelper>
  )
}

const select = (state) => {
  return {
    url: state.route.url,
    userData: state.me.data
  }
}

const actionCreatorsToBind = {
  updateUrl,
  doLogin,
  doLogout
}

export default connect(select, actionCreatorsToBind)(App)
