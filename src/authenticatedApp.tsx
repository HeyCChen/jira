import React from 'react';
import { useAuth } from './context/authContext';
import { ProjectListScreen } from './screens/projectList';
import styled from '@emotion/styled';
import { Row } from './components/lib';
import { ReactComponent as SoftwareLogo } from './assets/software-logo.svg';
import { Dropdown, Menu } from 'antd';

export const AuthenticatedApp = () => {

    const { logout, user } = useAuth();

    return (
        <>
            <Container>
                <Header between={true}>
                    <Headerleft gap={true}>
                        <SoftwareLogo width={'18rem'} color={'rgb(38,132,255)'} />
                        <h3>项目</h3>
                        <h3>用户</h3>
                    </Headerleft>
                    <HeaderRight>
                        {/* <button onClick={logout}>登出</button> */}
                        <Dropdown overlay={<Menu>
                            <Menu.Item key={'logout'}>
                                <a onClick={logout}>登出</a>
                            </Menu.Item>
                        </Menu>}>
                            <a onClick={e => e.preventDefault()}>Hi, {user?.name}!</a>
                        </Dropdown>
                    </HeaderRight>
                </Header>
                <Main>
                    <ProjectListScreen />
                </Main>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-rows: 6rem 1fr;
    height: 100vh;
`

const Header = styled(Row)`
    padding: 3.2rem;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.2);
    z-index: 1;
`

const Headerleft = styled(Row)``

const HeaderRight = styled.div``

const Main = styled.main``
