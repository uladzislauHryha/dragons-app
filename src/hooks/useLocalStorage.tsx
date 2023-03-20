import { useEffect, useState } from "react";

const getValue = (key: string) => {
	const storage = localStorage.getItem(key);
	return storage ? JSON.parse(storage) : [];
}

const saveToLocalStorage = (key: string, value: any) => {
	localStorage.setItem(key, JSON.stringify(value));
}

export default function useLocalStorage(key: string) {
	const [value, setValue] = useState(getValue(key));

	useEffect(() => {
		saveToLocalStorage(key, value);
	}, [value, key]);

	return [value, setValue]
}