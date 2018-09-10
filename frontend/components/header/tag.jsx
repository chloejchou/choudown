import React from 'react';

class Tag extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items =
      this.props.tags.length === 0 ? (
        <li>No results found</li>
      ) : (
        this.props.tags.map(tag => (
          <li onClick={this.props.handleTagClick} key={tag.id}>
            {tag.name}
          </li>
        ))
      );

    return (
      <ul className="hidden" id={this.props.id}>
        {items}
      </ul>
    );
  }
}

export default Tag;
