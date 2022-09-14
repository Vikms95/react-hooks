import { useEffect } from 'react';
import { getPostToUpdate } from '../utils/getPostToUpdate';

export function usePostToUpdate(postid, posts, setFormData) {
	useEffect(() => {
		if (postid) {
			const postToUpdate = getPostToUpdate(posts, postid);

			setFormData(() => {
				return {
					title: postToUpdate.title,
					text: postToUpdate.text,
					isPublic: postToUpdate.public,
					timestamp: postToUpdate.timestamp,
				};
			});
		}
	}, []);
}
