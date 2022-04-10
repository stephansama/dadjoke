import { useEffect, useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
	const [value, setValue] = useState(() => {
		const savedValue = JSON.parse(localStorage.getItem(key))
		if (savedValue) return savedValue
		if (initialValue instanceof Function) return initialValue()
		return initialValue
	})

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value))
	}, [value, key])

	return [value, setValue]
}
