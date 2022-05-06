import React from 'react';
import { Input, Select } from 'antd';

export interface User {
    id: string;
    name: string;
    email: string;
    title: string;
    organization: string;
    token: string;
}

interface SearchPanelProps {
    users: User[];
    param: {
        name: string;
        personId: string;
    };
    setParam: (param: SearchPanelProps['param']) => void;
}

export const SearchPanel = ({ param, setParam, users }: SearchPanelProps) => {

    // const [param, setParam] = useState({
    //     name: '',
    //     personId: '',
    // });

    // const [users, setUsers] = useState([]);
    // const [list, setList] = useState([]);

    // useEffect(() => {
    //     fetch('').then(async res => {
    //         if (res.ok) {
    //             setList(await res.json());
    //         }
    //     })
    // }, [param]);

    return (
        <>
            <form>
                <Input type='text' value={param.name} onChange={evt => setParam({
                    ...param,
                    name: evt.target.value,
                })} />
                <Select value={param.personId} onChange={value => setParam({
                    ...param,
                    personId: value
                })}>
                    <Select.Option value={''}>负责人</Select.Option>
                    {
                        users.map(user => {
                            return <Select.Option key={user.id} value={user.id}>{user.name}</Select.Option>
                        })
                    }
                </Select>
            </form>
        </>
    );
}