import React from 'react';
import { useAuth } from './context/authContext';
import { ProjectListScreen } from './screens/projectList';
import styled from '@emotion/styled';
import { Row } from './components/lib';
import { ReactComponent as SoftwareLogo } from './assets/software-logo.svg';
import { Dropdown, Menu, Button } from 'antd';

export const AuthenticatedApp = () => {

    const { logout, user } = useAuth();

    return (
        <>
            <Container>
                <Header between={true}>
                    <Headerleft gap={true}>
                        <SoftwareLogo width={'18rem'} color={'rgb(38,132,255)'} />
                        <h2>项目</h2>
                        <h2>用户</h2>
                    </Headerleft>
                    <HeaderRight>
                        {/* <button onClick={logout}>登出</button> */}
                        <Dropdown overlay={<Menu>
                            <Menu.Item key={'logout'}>
                                <Button type='link' onClick={logout}>登出</Button>
                            </Menu.Item>
                        </Menu>}>
                            <Button type='link' onClick={e => e.preventDefault()}>Hi, {user?.name}!</Button>
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
