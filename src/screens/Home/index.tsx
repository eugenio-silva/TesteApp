import { useEffect, useState } from 'react';
import { api } from '../../services/api';

import { IoMdBusiness } from 'react-icons/io';

import { Header } from '../../components/Header';
import { Container, Content, TitleWrapper, IconBusiness, Title, TableWrapper, Div, WrapperLeft, WrapperRight } from './styles';
import { Table } from '../../components/Table';

export interface IData {
    idRegion: string,
    nameRegion: string, 
}

export const Home = () => {
    const [dataResponse, setDataResponse] = useState<IData[]>([]);

    useEffect(() => {
        (async () => {
            const { data } = await api.get('/');
            setDataResponse(data.regions);
        })();    
    }, []);

    return (
        <>
            <Container>
                <Header />

                <Content>
                    <TitleWrapper>
                        <IconBusiness>
                            <IoMdBusiness />
                        </IconBusiness>
                        <Title>
                            Gestão de Clientes
                        </Title>
                    </TitleWrapper>

                    <TableWrapper>
                        <Div>
                            <WrapperLeft>
                                <input type="text" placeholder="Ações" />
                                <button>Aplicar</button>
                            </WrapperLeft>

                            <WrapperRight>
                                <input type="text" placeholder="Buscar" />
                                <button>Novo Cliente</button>
                            </WrapperRight>
                        </Div>

                       <Table data={dataResponse} />

                    </TableWrapper>
                </Content>
            </Container>
        </>
    );
};