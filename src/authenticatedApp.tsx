import React from 'react';
import { useAuth } from './context/authContext';
import { ProjectListScreen } from './screens/projectList';
import styled from '@emotion/styled';
import { Row } from './components/lib';

export const AuthenticatedApp = () => {

    const { logout } = useAuth();

    return (
        <>
            <Container>
                <Header between={true}>
                    <Headerleft gap={true}>
                        <h3>logo</h3>
                        <h3>项目</h3>
                        <h3>用户</h3>
                    </Headerleft>
                    <HeaderRight>
                        <button onClick={logout}>登出</button>
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
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Headerleft = styled(Row)``

const HeaderRight = styled.div``

const Main = styled.main``
