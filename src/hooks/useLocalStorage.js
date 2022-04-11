import { useEffect, useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
	const [value, setValue] = useState(() => {
		const savedValue = JSON.parse(localStorage.getItem(key))
		if (savedValue) return savedValue

		return initialValue instanceof Function ? initialValue() : initialValue
	})

	useEffect(
		() => localStorage.setItem(key, JSON.stringify(value)),
		[value, key]
	)

	return [value, setValue]
}
