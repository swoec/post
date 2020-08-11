import React, {Component} from 'react';
import PostList from '../User/components/PostList'

export default class Home extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.context.router.push({pathname: `/${this._input.value}`});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <PostList />
          </div>
        </div>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
