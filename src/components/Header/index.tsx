import { IoIosNotificationsOutline } from 'react-icons/io';
import { FaRegUserCircle } from 'react-icons/fa';

import { Container, Content, WrapperAvatar, NameUser, IconNotification, Logo } from './styles';

export const Header = () => {
    return (
        <>
            <Container>
                <Content>
                    <Logo>Logo Empresa</Logo>
                    
                    <WrapperAvatar>

                        <IconNotification>
                            <IoIosNotificationsOutline />
                        </IconNotification>
                        
                        <NameUser>
                            <FaRegUserCircle />    
                            <p>Lorem Ipsum Dolor</p>
                        </NameUser>

                    </WrapperAvatar>
                </Content>
            </Container>
        </>
    );
};