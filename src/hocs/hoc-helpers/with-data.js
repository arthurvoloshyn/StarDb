import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getDisplayName } from '../../utils';

import Spinner from '../../components/spinner';

const withData = View => {
  return class withData extends Component {
    static defaultProps = {
      getData: () => {}
    };

    static propTypes = {
      getData: PropTypes.func
    };

    static displayName = `withData(${getDisplayName(View)})`;

    state = {
      data: null,
      loading: true,
      error: false
    };

    componentDidUpdate(prevProps) {
      const { getData: prevPropsGetData } = prevProps;
      const { getData } = this.props;

      if (getData !== prevPropsGetData) {
        this.update();
      }
    }

    componentDidMount() {
      this.update();
    }

    update = async () => {
      const { getData } = this.props;

      this.setState({
        loading: true,
        error: false
      });

      try {
        const data = await getData();
        this.setState({ data });
      } catch {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
    };

    render() {
      const { props } = this;
      const { data, loading } = this.state;

      if (loading) {
        return <Spinner />;
      }

      return <View {...props} data={data} />;
    }
  };
};

export default withData;
