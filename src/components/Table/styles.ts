import styled from 'styled-components';

export const Container = styled.table`
    width: 100%;
    margin-top: 20px;

    thead {
        background-color: #efefef;

        tr {
            td {
                padding: 10px;
                color: #7205f8;
                font-weight: bold;
                font-family: 'Roboto', sans-serif;
            }
        }
    }

    tbody {

        tr {
            td {
                padding: 10px;
                font-family: 'Roboto', sans-serif;
            }
        }
    }
`;

export const IconEdit = styled.div`
    display: flex;
    justify-content: center;
`;
