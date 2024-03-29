export type SparqlValueRaw = string | number
export type SparqlValueType = SparqlValueRaw | Record<string, SparqlValueRaw>

export type SparqlResults = {
	readonly head: {
		readonly vars: readonly string[];
	};
	readonly results: {
		readonly bindings: readonly any[];
	};
}
