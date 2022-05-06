import React from 'react';
import { User } from './searchPanel';
import { Table } from 'antd';
import dayjs from 'dayjs';

interface Project {
    id: string;
    name: string;
    personId: string;
    pin: boolean;
    organization: string;
    created: number;
}

interface ListProps {
    list: Project[];
    users: User[];
}

export const List = ({ list, users }: ListProps) => {

    return (<>
        <Table pagination={false} columns={[
            {
                title: '名称',
                dataIndex: 'name',
                // sorter: (a, b) => a.name.localeCompare(b.name),
                // key: 'name'
            },
            {
                title: '部门',
                dataIndex: 'organization',
                key: 'organization'
            },
            {
                title: '负责人',
                // key: 'personId',
                render(value, project) {
                    return <span>
                        {users.find(user => user.id === project.personId)?.name || "未知"}
                    </span>
                }
            },
            {
                title: '创建时间',
                // key: 'created',
                render(value, project) {
                    return <span>
                        {project.created ? dayjs(project.created).format('YYYY-MM-DD') : '无'}
                    </span>
                }
            },
        ]} dataSource={list} />
    </>);
}