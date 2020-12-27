import React from 'react';
import { GroupContainer, FormInputContainer, FormInputLabel } from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <GroupContainer> 
        <FormInputContainer onChange={handleChange} {...otherProps} />
        {
            label ? (
                <FormInputLabel
                    className={`${otherProps.value.length ? 'shrink' : ''
                        } form-input-label`}
                >
                    {label}
                </FormInputLabel>
            ) : null
        }
    </GroupContainer>
);

export default FormInput;

// import './form-input.styles.scss';

// const FormInput = ({ handleChange, label, ...otherProps }) => (
//     <div className='group'>
//         <input className='form-input' onChange={handleChange} {...otherProps} />
//         {
//             label ? (
//                 <label
//                     className={`${otherProps.value.length ? 'shrink' : ''
//                         } form-input-label`}
//                 >
//                     {label}
//                 </label>
//             ) : null
//         }
//     </div>
// );