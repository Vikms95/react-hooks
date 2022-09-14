import React, { useState, useEffect, useRef } from 'react';

export function userNearScreen({ distance = '100px', externalRef } = {}) {
	const [isNearScreen, setShow] = useState(false);
	const fromRef = useRef(null);

	useEffect(() => {
    const element = externalRef ? externalRef.current : fromRef.current

		const onChange = (entries, observer) => {
			const element = entries[0];
      
			if (element.isIntersecting) {
				setShow(true);
				observer.unobserve(element.target);
			}
		};

		const observer = new IntersectionObserver(onChange, {
			rootMargin: distance,
		});
    
		observer.observe(element);

		return () => observer.disconnect();
	});

	return { isNearScreen, fromRef };
}
