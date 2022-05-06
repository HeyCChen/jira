import { useEffect, useState } from "react"

export const isFalsy = (value: unknown): boolean => value === 0 ? false : !value;

export const isVoid = (value: unknown) => value === undefined || value === null || value === '';

export const cleanObject = (obj: { [key: string]: unknown }) => {
    const res = { ...obj };
    Object.keys(res).forEach(key => {
        const value = res[key];
        if (isVoid(value)) {
            delete res[key];
        }
    });
    return res;
}

// 页面加载时执行一次
export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback()
        // 依赖项里加上callback会无限循环
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

// 用泛型来规范类型
export const useDebounce = <V>(value: V, delay?: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    // console.log(value.mayExist);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay);
        // useEffect return 在上一次 useEffect 处理完以后运行，因此最后一次执行 useEffect 的时候不执行这里的return语句
        return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
}

// useArray 钩子使用泛型，作用有 返回数组值、清空数组、根据索引删除数组、增加数组元素
export const useArray = <V>(arrs: V[]) => {
    const [arrList, setArrList] = useState(arrs);
    return {
        value: arrList,
        clear: () => {
            setArrList([]);
        },
        removeIndex: (index: number) => {
            const newArr = [...arrList];
            newArr.splice(index, 1);
            setArrList(newArr);
        },
        add: (item: V) => {
            setArrList([...arrList, item]);
        }
    }
}