import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
    <CollectionPreviewContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <PreviewContainer>
            {
                items
                    .filter(
                        (item, idx) => idx < 4
                    )
                    .map(
                        item => (
                            <CollectionItem key={item.id} item={item} />
                        )
                    )
            }
        </PreviewContainer>
    </CollectionPreviewContainer>
);

export default CollectionPreview;

// import './collection-preview.styles.scss';

// const CollectionPreview = ({ title, items }) => (
//     <div className='collection-preview'>
//         <h1 className='title'>{title.toUpperCase()}</h1>
//         <div className='preview'>
//             {
//                 items
//                     .filter(
//                         (item, idx) => idx < 4
//                     )
//                     .map(
//                         item => (
//                             <CollectionItem key={item.id} item={item} />
//                         )
//                     )
//             }
//         </div>
//     </div>
// );

// - - - -

// .map((item) => (
//     <div key={item.id}>{item.name}</div>
// ))