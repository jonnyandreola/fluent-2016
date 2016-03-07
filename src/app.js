import React from 'react';
import LoginPage from './pages/login'
import Nav from './components/nav'
const App = ({ url }) => {

	let page;
	let nav

	if (url === '/') {
		page = <LoginPage/>
	}

	if (url !== '/') {
		nav = <Nav/>
	}

	return (
		<div>
			{nav}
			{page}
		</div>
	)

}

export default App