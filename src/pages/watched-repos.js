import React from 'react'
import { connect } from 'react-redux'
import { fetchRepos } from '../actions'

const WatchedReposPage = React.createClass({
	componentDidMount() {
	    this.props.fetchRepos()
	},

	render () {

		const { repos } = this.props
		let content

		if (repos.length) {
			content = (
				<div>
					{ repos.map(repo => {
						return <div key={repo.id}>{repo.full_name}</div>
					})}
				</div>
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
    repos: state.repos.data
  }
}

const actionCreatorsToBind = {
  fetchRepos
}

export default connect(select, actionCreatorsToBind)(WatchedReposPage)
