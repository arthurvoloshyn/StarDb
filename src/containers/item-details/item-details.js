import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ErrorButton from '../../components/error-button/error-button';

import './item-details.css';

import defaultImgSrc from '../../images/placeholder-600x400.png';

class ItemDetails extends Component {
  static propTypes = {
    itemId: PropTypes.string,
    getData: PropTypes.func,
    getImageUrl: PropTypes.func,
    children: PropTypes.array,
    defaultImgSrc: PropTypes.string
  };

  static defaultProps = {
    itemId: '',
    getData: () => {},
    getImageUrl: () => {},
    children: [],
    defaultImgSrc
  };

  state = {
    item: null,
    image: null
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    const { itemId, getData, getImageUrl } = this.props;
    const { itemId: prevPropsItemId, getData: prevPropsGetData, getImageUrl: prevPropsGetImageUrl } = prevProps;

    if (itemId !== prevPropsItemId || getData !== prevPropsGetData || getImageUrl !== prevPropsGetImageUrl) {
      this.updateItem();
    }
  }

  updateItem = () => {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId).then(item => {
      this.setState({
        item,
        image: getImageUrl(item)
      });
    });
  };

  setDefaultImgSrc = () => {
    const { defaultImgSrc } = this.props;
    this.setState({ image: defaultImgSrc });
  };

  render() {
    const { item, image } = this.state;
    const { children } = this.props;

    if (!item) {
      return <span>Select a item from a list</span>;
    }

    const { name } = item;

    return (
      <div className="item-details card">
        <img className="item-image" src={image} alt="item" onError={this.setDefaultImgSrc} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">{React.Children.map(children, child => React.cloneElement(child, { item }))}</ul>
          <ErrorButton />
        </div>
      </div>
    );
  }
}

export default ItemDetails;
