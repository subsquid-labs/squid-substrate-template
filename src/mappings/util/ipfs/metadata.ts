import {
	CampaignMetadata as IpfsCampaignMetadata,
	OrganizationMetadata as IpfsOrgMetadata,
	ProposalMetadata as IpfsProposalMetadata,
} from '../../types/metadata';

import { CampaignMetadata, OrganizationMetadata, ProposalMetadata } from '../../../model';
import { get } from '../db/getters';
import { Store } from '@subsquid/substrate-processor';

async function upsertOrganizationMetadata(store: Store, metadataId: string, data: IpfsOrgMetadata | null) {
	let metadata = await get(store, OrganizationMetadata, metadataId);
	if (!metadata) {
		metadata = new OrganizationMetadata();
		metadata.id = metadataId;
	}
	metadata.name = data?.name ?? '';
	metadata.description = data?.description ?? '';
	metadata.website = data?.website ?? '';
	metadata.email = data?.email ?? '';
	metadata.repo = data?.repo ?? '';
	metadata.logo = data?.logo ?? '';
	metadata.header = data?.header ?? '';

	await store.save(metadata);

	return metadata;
}

async function upsertCampaignMetadata(store: Store, metadataId: string, data: IpfsCampaignMetadata | null) {
	let metadata = await get(store, CampaignMetadata, metadataId);
	if (!metadata) {
		metadata = new CampaignMetadata();
		metadata.id = metadataId;
	}
	metadata.name = data?.name ?? '';
	metadata.email = data?.email ?? '';
	metadata.title = data?.title ?? '';
	metadata.description = data?.description ?? '';
	metadata.markdown = data?.markdown ?? '';
	metadata.logo = data?.logo ?? '';
	metadata.header = data?.header ?? '';

	await store.save(metadata);

	return metadata;
}

async function upsertProposalMetadata(store: Store, metadataId: string, data: IpfsProposalMetadata | null) {
	let metadata = await get(store, ProposalMetadata, metadataId);
	if (!metadata) {
		metadata = new ProposalMetadata();
		metadata.id = metadataId;
	}
	metadata.name = data?.name ?? '';
	metadata.description = data?.description ?? '';

	await store.save(metadata);

	return metadata;
}

export { upsertCampaignMetadata, upsertOrganizationMetadata, upsertProposalMetadata };
