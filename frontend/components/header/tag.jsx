import React from 'react';

class Tag extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="hidden" id="search-drop-down">
        {this.props.tags.map(tag => (
          <li key={tag.id}>{tag.name}</li>
        ))}
      </ul>
    );
  }
}

export default Tag;