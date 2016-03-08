import React from 'react'
import LoginPage from './pages/login'
import Nav from './components/nav'
import { connect } from 'react-redux'
import NavHelper from 'react-internal-nav'
import { updateUrl, doLogin } from './actions'
import renderUrl from './helpers/render-url'

const App = ({doLogin, updateUrl, url, user}) => {
  let page
  let nav

  renderUrl(url)

  if (url === '/') {
    page = <LoginPage doLogin={doLogin}/>
  }

  if (url !== '/') {
    nav = <Nav name={user}/>
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
    user: state.user.name
  }
}

export default connect(select, {updateUrl, doLogin})(App)
