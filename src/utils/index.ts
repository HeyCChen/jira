import { useEffect, useState } from "react"

export const isFalsy = (value: unknown): boolean => value === 0 ? false : !value;

export const cleanObject = (obj: object) => {
    const res = { ...obj };
    Object.keys(res).forEach(key => {
        // @ts-ignore
        const value = res[key];
        if (isFalsy(value)) {
            // @ts-ignore
            delete res[key];
        }
    });
    return res;
}

export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback()
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