import {useState, useEffect} from 'react';

function useDebounce(value: string, delay:number) {
    const [debouncedValue, setDebouncedvalue] = useState<string>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedvalue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        }
    }, [value, delay]);

    return debouncedValue;

}

export default useDebounce;