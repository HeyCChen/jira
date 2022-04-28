import React from 'react';

export const List = ({ list, users }) => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>名称</th>
                        <th>负责人</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    {/*使用 ?. 如果find函数结果为undefined则不会报错，会使这个语句整体为undefined，显示“未知” */}
                                    <td>{users.find(user => user.id === item.personId)?.name || "未知"}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    );
}