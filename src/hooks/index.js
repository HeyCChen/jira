import { useEffect, useState } from "react"

export const useMount = (callback) => {
    useEffect(() => {
        callback()
    }, [])
}

export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay);
        // useEffect return 在上一次 useEffect 处理完以后运行，因此最后一次执行 useEffect 的时候不执行这里的return语句
        return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
}