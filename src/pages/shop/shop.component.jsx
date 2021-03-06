import React, { useEffect } from 'react';
import CollectionPageContainer from '../collection/collection.container';
import CollectionsOverviewWithContainer from '../../components/collections-overview/collections-overview.container';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const ShopPage = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);

    return (
        <div className='shop-page'>
            <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverviewWithContainer}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPageContainer}
            />
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
    null,
    mapDispatchToProps
)(ShopPage);

// const ShopPage = ({ match }) => (
//     <div className='shop-page'>
//         <Route exact path={`${match.path}`} component={CollectionsOverview} />
//         <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
//     </div>
// );