import { useMemo } from 'react';

export const useDerivedComments = comments => {
	const commentByParentID = useMemo(() => {
		if (!comments) return [];
		const group = {};

		comments.forEach(comment => {
			group[comment.parent] ||= [];
			group[comment.parent].push(comment);
		});

		return group;
	}, [comments]);

	const getChildComments = parent => {
		return commentByParentID[parent];
	};

	return {
		rootComments: commentByParentID.null,
		getChildComments,
	};
};
