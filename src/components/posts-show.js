import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { PropTypes as T } from 'prop-types'

import { fetchPost, deletePost } from '../actions'

class PostsShow extends Component {
  componentDidMount () {
    const { id } = this.props.match.params
    this.props.fetchPost(id)
  }

  onDeleteClick () {
    const { id } = this.props.match.params
    this.props.deletePost(id, () => {
      this.props.history.push('/')
    })
  }

  render () {
    const { post } = this.props
    if (!post) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Link to='/'>Back To Index</Link>
        <button
          className='btn btn-danger pull-xs-right'
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}

// second argument to mapStateToProps, ownProps
// which are the final props that reach the component
const mapStateToProps = ({ posts }, ownProps) => {
  return { post: posts[ownProps.match.params.id] }
}

PostsShow.propTypes = {
  fetchPost: T.func,
  deletePost: T.func,
  match: T.object,
  post: T.object,
  history: T.object
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow)
