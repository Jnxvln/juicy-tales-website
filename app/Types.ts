// #region LITERATURE TYPES
export type TStanza = {
	id: number;
	part1: string;
	part2: string;
}

export type TLiterature = {
	title: string;
	type: "poem" | "prose" | "story" | "other";
	audioSrcUrl?: string;
	stanzas: TStanza[];
}
// #endregion