export type SearchResult = {
	readonly aliases?: readonly string[];
	readonly concepturi: string;
	readonly description?: string;
	readonly id: string;
	readonly label: string;
	readonly match: {
		readonly language: string;
		readonly text: string;
		readonly type: string;
	};
	readonly pageid: number;
	readonly repository: string;
	readonly title: string;
	readonly url: string;
}
