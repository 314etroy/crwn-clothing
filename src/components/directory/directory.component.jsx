import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { DirectoryMenuContainer } from './directory.styles';

const Directory = ({ sections }) => (
    <DirectoryMenuContainer>
        {sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
        ))}
    </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(
    mapStateToProps
)(Directory);

// import './directory.styles.scss';

// - - - -

// class Directory extends React.Component {
//     constructor() {
//         super();

//         this.state = {
//             sections: [{
//                 title: 'hats',
//                 imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
//                 size: '',
//                 id: 1,
//                 linkUrl: 'hats'
//             },
//             {
//                 title: 'jackets',
//                 imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
//                 size: '',
//                 id: 2,
//                 linkUrl: 'jackets'
//             },
//             {
//                 title: 'sneakers',
//                 imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
//                 size: '',
//                 id: 3,
//                 linkUrl: 'sneakers'
//             },
//             {
//                 title: 'womens',
//                 imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
//                 size: 'large',
//                 id: 4,
//                 linkUrl: 'womens'
//             },
//             {
//                 title: 'mens',
//                 imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
//                 size: 'large',
//                 id: 5,
//                 linkUrl: 'mens'
//             }]
//         };
//     }

//     render() {
//         return (
//             <div className='directory-menu'>
//                 {/* Chestie inteligenta */}


//                 {this.state.sections.map(({ id, ...otherSectionProps }) => (
//                     <MenuItem key={id} {...otherSectionProps} />
//                 ))}


//                 {/* Declarare greoaie */}
//                 {/* {this.state.sections.map(({ title, imageUrl, size, id, linkUrl }) => (
//                     <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
//                 ))} */}
//             </div>
//         );
//     }
// }