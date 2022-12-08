export interface IdentityUpsertData {
	address: string;
	displayName: string | null;
	legalName: string | null;
	email: string | null;
	riot: string | null;
	image: string | null;
	twitter: string | null;
	web: string | null;
	web3name?: string | null;
	discord?: string | null;
}
