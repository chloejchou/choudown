import React from 'react';

class Tag extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="hidden" id={this.props.id}>
        {this.props.tags.map(tag => (
          <li onClick={this.props.handleTagClick} key={tag.id}>
            {tag.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default Tag;
