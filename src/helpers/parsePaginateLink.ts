export type ParsePaginateLink = {
	first: number;
	last?: number;
	prev?: number;
	next?: number;
};

export default function parsePaginateLink(linkHeader: string): ParsePaginateLink {
	const linkHeadersArray = linkHeader.split(', ').map(header => header.split('; '));
	const linkHeadersMap = linkHeadersArray.map(header => {
		const thisHeaderRel = header[1].replace(/"/g, '').replace('rel=', '');
		const thisHeaderUrl = header[0].slice(1, -1);
		return [thisHeaderRel, thisHeaderUrl];
	});
	const link = Object.fromEntries(linkHeadersMap);

	for (let linkKey in link) {
		link[linkKey] = Number(new URL(link[linkKey]).searchParams.get('_page'));
	}

	return link;
}
