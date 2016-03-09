import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchRepos } from '../actions'
import requiresToken from '../helpers/requires-token'

const WatchedReposPage = React.createClass({
	componentDidMount() {
	    this.props.fetchRepos()
	},

	propTypes: {
	    repos: PropTypes.array.isRequired,
	    loading: PropTypes.bool.isRequired
	},

	render () {

		const { repos, loading } = this.props
		let content

		if (repos.length) {
			content = (
				<ul className='repos-list'>
					{ repos.map(repo => {
						return (
							<li key={repo.id}>
								<a target='_blank' href={repo.html_url}>{repo.full_name}</a>
								<button className='btn'> unwatch <span className='octicon octicon-eye'></span></button>
							</li>
						)
					})}
				</ul>
			)
		} else if(loading) {
			content = (
				<h3>Loading</h3>
			)
		}

		return (
			<div>
				<h1>Watched Repos</h1>
				{ content }
			</div>
		)
	}
})

const select = (state) => {
  return {
    repos: state.repos.data,
    me: state.me,
    loading: state.repos.loading
  }
}

const actionCreatorsToBind = {
  fetchRepos
}

const WrappedComponent = requiresToken(WatchedReposPage)

export default connect(select, actionCreatorsToBind)(WrappedComponent)
