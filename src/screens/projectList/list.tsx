import React from 'react';
import { User } from './searchPanel';
import { Table } from 'antd';

interface Project {
    id: string;
    name: string;
    personId: string;
    pin: boolean;
    organization: string;
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
                sorter: (a, b) => a.name.localeCompare(b.name),
            },
            {
                title: '负责人',
                render(value, project) {
                    return <span>
                        {users.find(user => user.id === project.personId)?.name || "未知"}
                    </span>
                }
            }
        ]} dataSource={list} />
    </>)
    // return (
    //     <>
    //         <table>
    //             <thead>
    //                 <tr>
    //                     <th>名称</th>
    //                     <th>负责人</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {
    //                     list.map(item => {
    //                         return (
    //                             <tr key={item.id}>
    //                                 <td>{item.name}</td>
    //                                 {/*使用 ?. 如果find函数结果为undefined则不会报错，会使这个语句整体为undefined，显示“未知” */}
    //                                 <td>{users.find(user => user.id === item.personId)?.name || "未知"}</td>
    //                             </tr>
    //                         )
    //                     })
    //                 }
    //             </tbody>
    //         </table>
    //     </>
    // );
}