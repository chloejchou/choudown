import React from 'react';
import ProfileBookmarkItem from './profile_bookmark_item';
import Loading from '../loading';

class ProfileBookmarks extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
  }

  componentDidMount() {
    this.props.requestBookmarks(this.props.currentUser.id)
      .then(() => this.setState({ loading: false }));
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    const keys = Object.keys(this.props.businesses);
    const midIdx = Math.floor(keys.length / 2);
    const bookmarkResults = (
      <div>
        <ul className="col col-1-2">
          {keys.slice(0, midIdx).map(id => (
            <ProfileBookmarkItem key={id} business={this.props.businesses[id]}/>
          ))}
        </ul>
        <ul className="col col-1-2">
          {keys.slice(midIdx, keys.length).map(id => (
            <ProfileBookmarkItem key={id} business={this.props.businesses[id]}/>
          ))}
        </ul>
      </div>
    );

    return(
      <div id="profile-bookmarks">
        <h1>Your Bookmarks</h1>
        {bookmarkResults}
      </div>
    );
  }
}

export default ProfileBookmarks;
