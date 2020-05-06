import {Claim} from './claim'

export interface LanguageEntry {
	readonly language: string;
	readonly value: string;
}

export interface Entity {
	readonly type: string;
	readonly datatype?: string;
	readonly id: string;

	// Info
	readonly pageid?: number;
	readonly ns?: number;
	readonly title?: string;
	readonly lastrevid?: number;
	readonly modified?: string;
	readonly redirects?: {
		readonly from: string;
		readonly to: string;
	};

	// Available when asked for in GetEntitiesOptions
	readonly aliases?: Record<string, readonly LanguageEntry[]>;
	readonly claims?: Record<string, readonly Claim[]>;
	readonly descriptions?: Record<string, LanguageEntry>;
	readonly labels?: Record<string, LanguageEntry>;
	readonly sitelinks?: Record<string, Sitelink>;
}

export interface Sitelink {
	readonly site: string;
	readonly title: string;
	readonly badges: readonly string[];
	readonly url?: string;
}
