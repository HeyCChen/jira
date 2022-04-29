import React, { useState, useEffect } from 'react';
import { cleanObject, useDebounce, useMount } from '../../utils';
import { List } from './list';
import { SearchPanel } from './searchPanel';
import * as qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: '',
    });
    const [users, setUsers] = useState([]);
    const [list, setList] = useState([]);

    const debouncedParam = useDebounce(param, 1000);

    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async res => {
            if (res.ok) {
                setList(await res.json());
            }
        })
    }, [debouncedParam]);

    useMount(() => {
        fetch(`${apiUrl}/users`).then(async res => {
            if (res.ok) {
                setUsers(await res.json());
            }
        })
    })

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <SearchPanel param={param} setParam={setParam} users={users} />
            <List list={list} users={users} />
        </div>
    );
}