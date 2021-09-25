import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 10%;

    background-color: #7205f8;

    padding: 20px;
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.h2`
    color: #fff;
`;

export const WrapperAvatar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;

    color: #fff;
`;

export const IconNotification = styled.div`
    padding-right: 10px;
    font-size: 18px;
 
`;

export const NameUser = styled.div`
    display: flex;
    flex-direction: row;

    margin-right: 20px;
    padding: 15px;

    color: #fff;

    border-radius: 30px;

    background-color: #801ef8;

    p {
        font-size: 14px;
        margin-left: 10px;
    }

    cursor: pointer;
`;