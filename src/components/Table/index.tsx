import { MdModeEdit } from 'react-icons/md';

import { Container, IconEdit } from './styles';

export interface IdataTable {
    data: {
        idRegion: string;
        nameRegion: string;
    }[];
}

export const Table = ({ data }: IdataTable) => {

    return (
        <>
            <Container>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Nome Da Região</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr>
                            <td>{item.idRegion}</td>
                            <td>{item.nameRegion}</td>
                            <td>
                                <IconEdit>
                                    <MdModeEdit />
                                </IconEdit>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Container>
        </>
    );
};

