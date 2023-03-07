import {
    Organization,
    OrganizationMember,
    CampaignContributor,
    Campaign,
    Proposal,
    Voting,
    ProposalVoter,
    SenseEntity,
    Battlepass,
    Nft,
    NftCollection,
    BattlepassNft
} from '../../model'
import { Store } from '@subsquid/typeorm-store'

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

function getOrg(store: Store, orgId: string): Promise<Organization | null> {
    return get(store, Organization, orgId, ['creatorIdentity'])
}

function getOrgMember(store: Store, orgId: string, member: string): Promise<OrganizationMember | null> {
    return get(store, OrganizationMember, `${orgId}-${member}`.toLowerCase(), ['organization', 'identity']);
}

function getCampaign(store: Store, campaignId: string): Promise<Campaign | null> {
    return get(store, Campaign, campaignId, ['organization', 'creatorIdentity']);
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

function getSenseEntity(store: Store, accountId: string): Promise<SenseEntity | null> {
    return get(store, SenseEntity, accountId);
}

function getBattlepass(store: Store, battlepassId: string): Promise<Battlepass | null> {
    return get(store, Battlepass, battlepassId);
}

function getNft(store: Store, id: string): Promise<Nft | null> {
    return get(store, Nft, id);
}

function getNftCollection(store: Store, id: string): Promise<NftCollection | null> {
    return get(store, NftCollection, id);
}

async function getCollectionNfts(store: Store, collectionId: string): Promise<Nft[]> {
    return (await store.find(Nft, { where: { collection: { id: collectionId } } }));
}

async function getBattlepassNfts(store: Store, collectionId: string): Promise<BattlepassNft[]> {
    return (await store.find(BattlepassNft, { where: { nft: { collection: {id: collectionId} } } }));
}

export {
    getOrg,
    getOrgMember,
    getCampaign,
    getCampaignContributor,
    getProposal,
    getVoting,
    getProposalVoter,
    getSenseEntity,
    getBattlepass,
    getNft,
    getNftCollection,
    getCollectionNfts,
    getBattlepassNfts
};
