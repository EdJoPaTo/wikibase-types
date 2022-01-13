export type ClaimRank = 'normal' | 'preferred' | 'deprecated'

export interface Claim {
	readonly id: string;
	readonly mainsnak: ClaimSnak;
	readonly rank: ClaimRank;
	readonly type: string;
	readonly qualifiers?: Record<string, readonly ClaimSnak[]>;
	readonly 'qualifiers-order'?: readonly string[];
	readonly references?: readonly ClaimReference[];
}

export interface ClaimSnak {
	readonly datatype: string;
	readonly datavalue?: ClaimSnakValue;
	readonly hash: string;
	readonly property: string;
	readonly snaktype: string;
}

export type ClaimSnakValue = ClaimSnakTimeValue | ClaimSnakEntityValue | ClaimSnakQuantityValue

export interface ClaimSnakTimeValue {
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

export interface ClaimSnakQuantityValue {
	readonly type: 'quantity';
	readonly value: {
		readonly amount: string;
		readonly unit: number;
	};
}

export interface ClaimSnakEntityValue {
	readonly type: 'wikibase-entityid';
	readonly value: {
		readonly id: string;
		readonly 'numeric-id': number;
		readonly 'entity-type': string;
	};
}

export interface ClaimReference {
	readonly hash: string;
	readonly snaks: Record<string, readonly ClaimSnak[]>;
	readonly 'snaks-order': readonly string[];
}
