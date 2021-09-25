import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
`;  

export const Content = styled.main`
    padding: 60px;
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
`;

export const IconBusiness  = styled.div`
    font-size: 18px;
`;

export const Title  = styled.p`
    margin-left: 12px;
    color: #7205f8;
    font-size: 20px;
    font-weight: 400;
`;

export const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const TableWrapper = styled.div`
    margin-top: 15px;
    padding: 25px;

    width: 100%;

    border-radius: 20px;
    border: none;
    
    box-shadow: 2px 5px 5px 8px #d5d5d5;

`;

export const WrapperLeft = styled.div`

    button {
        width: 100px;
        height: 30px;
        border-radius: 15px;
        background-color: #fff;
        border: 1px solid #7205f8;
        color: #7205f8;
        padding: 5px;
        margin-left: 15px;

        :hover {
            color: #fff;
            background-color: #7205f8 ; 
        } 
    }

    input {
        height: 30px;
        padding: 10px;
        border-radius: 15px;
        border: 1px solid #efefef;
    }
`; 

export const WrapperRight = styled.div`

    button {
        width: 100px;
        height: 30px;
        border-radius: 15px;
        background-color: #7205f8;
        border: none;
        color: #fff;
        padding: 5px;

        :hover {
            background-color: #fff;
            color: #7205f8 ; 
        }
    }

    input {
        height: 30px;
        padding: 10px;
        border: none;
        background-color: #efefef;
        margin-right: 15px;
        border-radius: 15px;
    }
`;

