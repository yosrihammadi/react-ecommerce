import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

import { ShopPageContainer } from './shop.styles';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    return (
      <ShopPageContainer>
        <Routes>
          <Route
            path="/"
            // render={(props) => (
            //   <CollectionOverviewWithSpinner isLoading={loading} {...props} />
            // )}
            element={<CollectionOverviewContainer />}
          />
          <Route
            exact
            path="/:collectionId"
            // render={(props) => (
            //   <CollectionPageWithSpinner isLoading={loading} {...props} />
            // )}
            element={<CollectionPageContainer />}
          />
        </Routes>
        <Outlet />
      </ShopPageContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(Shop);
