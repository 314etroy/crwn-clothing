import React from 'react';
// import React, { useEffect } from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { connect } from 'react-redux';
// import { firestore } from '../../firebase/firebase.utils';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { CollectionPageContainer, CollectionTitle, CollectionItemsContainer } from './collection.styles';

const CollectionPage = ({ collection }) => {

    // useEffect(() => {
    //     console.log('I am subscribing');
    //     const unsubscribeFromCollections = firestore
    //         .collection('collections')
    //         .onSnapshot(snapshot => console.log(snapshot));

    //     return () => {
    //         console.log('I am unsubscribing');
    //         unsubscribeFromCollections();
    //     }
    // }, []);

    const { title, items } = collection;
    return (
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </CollectionItemsContainer>
        </CollectionPageContainer>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);

// import './collection.styles.scss';

// const CollectionPage = ({ collection }) => {
//     const { title, items } = collection;
//     return (
//         <div className='collection-page'>
//             <h2 className='title'>{title}</h2>
//             <div className="items">
//                 {items.map(item => (
//                     <CollectionItem key={item.id} item={item} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// - - -

// const CollectionPage = ({ collection }) => {
//     console.log(collection);
//     return (
//         <div className='collection-page'>
//             <h2>COLLECTION PAGE</h2>
//         </div>
//     );
// };

// const CollectionPage = ({ collection }) => (
//     <div className='collection-page'>
//         <h2>COLLECTION PAGE</h2>
//     </div>
// );