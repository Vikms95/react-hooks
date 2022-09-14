import { useEffect, useRef } from 'react';

export function useHtmlAsText(text) {
	const textRef = useRef(null);

	useEffect(() => {
		if (textRef.current) {
			textRef.current.innerHTML = text;
		}
	}, [text]);
	return textRef;
}
