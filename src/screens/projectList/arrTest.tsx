import * as React from 'react';
import { useArray, useMount } from '../../utils';

const ArrTest = () => {

    const persons: { name: string, age: number }[] = [
        { name: 'jack', age: 20 },
        { name: 'ma', age: 22 }
    ];
    const { value, clear, removeIndex, add } = useArray(persons);

    useMount(() => {
        console.log(value);
        // add({ name: 'david' });
        // removeIndex('123');
    })

    return (
        <>
            <div>
                <button style={{ marginBottom: '20px' }} onClick={() => add({ name: 'cc', age: 22 })}>添加 cc</button>
                <button style={{ marginBottom: '20px' }} onClick={() => removeIndex(0)}>清除第一个数组元素</button>
                <button style={{ marginBottom: '20px' }} onClick={() => clear()}>清空数组元素</button>
                {value.map((person: { name: string, age: number }, index: number) => {
                    return (
                        <div key={index} style={{ marginBottom: '20px' }}>
                            <span style={{ color: 'red', marginRight: '10px' }}>{index}</span>
                            <span>{person.name}</span>
                            <span>{person.age}</span>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default ArrTest;