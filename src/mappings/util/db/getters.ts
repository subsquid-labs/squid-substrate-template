import {
	Organization,
	OrganizationMember,
	OrganizationMetadata,
	CampaignContributor,
	Campaign,
	Proposal,
	Voting,
	ProposalVoter,
} from '../../../model';

import { Store } from '@subsquid/substrate-processor';

type EntityConstructor<T> = {
	new (...args: any[]): T;
};


export async function get<TModel>(
	store: Store,
	entityConstructor: EntityConstructor<TModel>,
	id: string,
	relations: string[] = [],
): Promise<TModel | null> {
	// @ts-ignore
	return (await store.findOne<TModel>(entityConstructor, { where: { id }, relations })) ?? null;
}

// TODO: review "get" relations, ex. ['creatorIdentity', 'metadata']

function getOrg(store: Store, orgId: string): Promise<Organization | null> {
	return get(store, Organization, orgId, ['creatorIdentity', 'metadata']);
}

function getOrgMember(store: Store, orgId: string, member: string): Promise<OrganizationMember | null> {
	return get(store, OrganizationMember, `${orgId}-${member}`.toLowerCase(), ['organization', 'identity']);
}

function getOrgMetadata(store: Store, orgMetadataId: string): Promise<OrganizationMetadata | null> {
	return get(store, OrganizationMetadata, orgMetadataId);
}

function getCampaign(store: Store, campaignId: string): Promise<Campaign | null> {
	return get(store, Campaign, campaignId, ['organization', 'creatorIdentity', 'metadata']);
}

function getCampaignContributor(
	store: Store,
	campaignId: string,
	contributor: string,
): Promise<CampaignContributor | null> {
	return get(store, CampaignContributor, `${campaignId}-${contributor}`.toLowerCase(), ['campaign', 'identity']);
}

function getProposal(store: Store, proposalId: string): Promise<Proposal | null> {
	return get(store, Proposal, proposalId, ['organization', 'campaign', 'creatorIdentity']);
}

function getVoting(store: Store, votingId: string): Promise<Voting | null> {
	return get(store, Voting, votingId);
}

function getProposalVoter(store: Store, proposalId: string, voter: string): Promise<ProposalVoter | null> {
	return get(store, ProposalVoter, `${proposalId}-${voter}`.toLowerCase());
}

export {
	getOrg,
	getOrgMember,
	getOrgMetadata,
	getCampaign,
	getCampaignContributor,
	getProposal,
	getVoting,
	getProposalVoter,
};
