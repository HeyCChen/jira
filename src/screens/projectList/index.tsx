import React, { useState, useEffect } from 'react';
import { cleanObject, useDebounce, useMount } from '../../utils';
import { List } from './list';
import { SearchPanel } from './searchPanel';
import { useHttp } from '../../utils/http';
import styled from '@emotion/styled';

export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: '',
    });
    const [users, setUsers] = useState([]);
    const [list, setList] = useState([]);

    const debouncedParam = useDebounce(param, 200);

    const client = useHttp();

    useEffect(() => {
        client('projects', { data: cleanObject(debouncedParam) }).then(setList)
        // fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async res => {
        //     if (res.ok) {
        //         setList(await res.json());
        //     }
        // })
    }, [debouncedParam]);

    useMount(() => {
        client('users').then(setUsers);
        // fetch(`${apiUrl}/users`).then(async res => {
        //     if (res.ok) {
        //         setUsers(await res.json());
        //     }
        // })
    })

    return (
        <Container>
            <h1>项目列表</h1>
            <SearchPanel param={param} setParam={setParam} users={users} />
            <List list={list} users={users} />
        </Container>
    );
}

const Container = styled.div`
    padding: 3.2rem;
`
