import React from 'react';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { connect } from 'react-redux';
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';
import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = ({ collections }) => (
    <CollectionsOverviewContainer>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);

// import './collections-overview.styles.scss';

// const CollectionsOverview = ({ collections }) => (
//     <div collections='collections-overview'>
//         {collections.map(({ id, ...otherCollectionProps }) => (
//             <CollectionPreview key={id} {...otherCollectionProps} />
//         ))}
//     </div>
// );