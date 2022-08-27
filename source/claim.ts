export type ClaimRank = 'normal' | 'preferred' | 'deprecated'

export type Claim = {
	readonly id: string;
	readonly mainsnak: ClaimSnak;
	readonly rank: ClaimRank;
	readonly type: string;
	readonly qualifiers?: Record<string, readonly ClaimSnak[]>;
	readonly 'qualifiers-order'?: readonly string[];
	readonly references?: readonly ClaimReference[];
}

export type ClaimSnak = {
	readonly datatype: string;
	readonly datavalue?: ClaimSnakValue;
	readonly hash: string;
	readonly property: string;
	readonly snaktype: string;
}

export type ClaimSnakValue =
       ClaimSnakEntityValue |
       ClaimSnakMonolingualTextValue |
       ClaimSnakQuantityValue |
       ClaimSnakStringValue |
       ClaimSnakTimeValue

export type ClaimSnakStringValue = {
	readonly type: 'string';
	readonly value: string;
}

export type ClaimSnakTimeValue = {
	readonly type: 'time';
	readonly value: {
		readonly after: number;
		readonly before: number;
		readonly calendermodel: string;
		readonly precision: number;
		readonly time: string;
		readonly timezone: number;
	};
}

export type ClaimSnakQuantityValue = {
	readonly type: 'quantity';
	readonly value: {
		readonly amount: string;
		readonly unit: string;
	};
}

export type ClaimSnakEntityValue = {
	readonly type: 'wikibase-entityid';
	readonly value: {
		readonly id: string;
		readonly 'numeric-id': number;
		readonly 'entity-type': string;
	};
}

export type ClaimSnakMonolingualTextValue = {
	readonly type: 'monolingualtext';
	readonly value: {
		readonly text: string;
		readonly language: string;
	};
}

export type ClaimReference = {
	readonly hash: string;
	readonly snaks: Record<string, readonly ClaimSnak[]>;
	readonly 'snaks-order': readonly string[];
}
