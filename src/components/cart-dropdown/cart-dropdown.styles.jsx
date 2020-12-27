import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    button {
        margin-top: auto;
    }
`;

export const CartDropdownButton = styled(CustomButton)`
    ::-webkit-scrollbar {
        margin-top: auto;
    }

    ::-webkit-scrollbar-track {
        border: 7px solid #232943;
        box-shadow: inset 0 0 2.5px 2px rgba(0,0,0,0.5);
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(
            45deg,
            #06dee1,
            #79ff6c
        );
        border-radius: 3px;
    }
`;

export const EmptyMessageContainer = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-color: gray white;
    scrollbar-width: thin;
`;