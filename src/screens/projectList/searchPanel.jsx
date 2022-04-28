import React from 'react';

export const SearchPanel = ({ param, setParam, users }) => {

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
                <input type='text' value={param.name} onChange={evt => setParam({
                    ...param,
                    name: evt.target.value,
                })} />
                <select value={param.personId} onChange={evt => setParam({
                    ...param,
                    personId: evt.target.value
                })}>
                    <option value={''}>负责人</option>
                    {
                        users.map(user => {
                            return <option key={user.id} value={user.id}>{user.name}</option>
                        })
                    }
                </select>
            </form>
        </>
    );
}