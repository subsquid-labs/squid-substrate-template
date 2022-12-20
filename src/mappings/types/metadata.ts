interface CampaignMetadata {
	name: string;
	email: string;
	title: string;
	description: string;
	markdown: string;
	logo: string;
	header: string;
}

interface OrganizationMetadata {
	name: string;
	description: string;
	website?: string;
	email?: string;
	repo?: string;
	logo?: string;
	header?: string;
	url?: string;
	location?: string;
	tags?: [string];
}

interface ProposalMetadata {
	name: string;
	description: string;
}

export { CampaignMetadata, OrganizationMetadata, ProposalMetadata };
