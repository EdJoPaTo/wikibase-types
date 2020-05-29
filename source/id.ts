export function isNumericId(id: unknown): id is string {
	return typeof id === 'string' && /^[1-9]\d*$/.test(id)
}

export function isItemId(id: unknown): id is string {
	return typeof id === 'string' && /^Q[1-9]\d*$/.test(id)
}

export function isPropertyId(id: unknown): id is string {
	return typeof id === 'string' && /^P[1-9]\d*$/.test(id)
}

export function isLexemeId(id: unknown): id is string {
	return typeof id === 'string' && /^L[1-9]\d*$/.test(id)
}

export function isNonNestedEntityId(id: unknown): id is string {
	return typeof id === 'string' && /^[QPL][1-9]\d*$/.test(id)
}

export function isFormId(id: unknown): id is string {
	return typeof id === 'string' && /^L[1-9]\d*-F[1-9]\d*$/.test(id)
}

export function isSenseId(id: unknown): id is string {
	return typeof id === 'string' && /^L[1-9]\d*-S[1-9]\d*$/.test(id)
}

export function isSpecificLexemeId(id: unknown): id is string {
	// TODO: has this a name better than 'specific lexeme'?
	return typeof id === 'string' && /^L[1-9]\d*-[FS][1-9]\d*$/.test(id)
}

export function isEntityId(id: unknown): id is string {
	return isNonNestedEntityId(id) || isSpecificLexemeId(id)
}

export function isRevisionId(id: unknown): id is string {
	return typeof id === 'string' && /^\d+$/.test(id)
}
