import { OrganizationMetadata, CampaignMetadata, ProposalMetadata } from '../../types/metadata'
import { isCIDValid } from '../helpers'
import { to } from 'await-to-js'
import fetch from 'node-fetch'
import config from '../../../config'

const getIpfsUrlByCid = (cid: string): string => `${config.ipfsGateway}${cid}`;

type Metadata = OrganizationMetadata | CampaignMetadata | ProposalMetadata | null;

async function fetchJsonByCid(cid: string): Promise<any | null> {
	const [errFetch, response] = await to(fetch(getIpfsUrlByCid(cid)));
	if (errFetch) return null;

	const [errJson, json] = await to(response!.json());
	if (errJson) return null;

	return json;
}

async function fetchMetadata(cid: string, id: string, name: string, metadata: Metadata): Promise<any> {
	try {
		if (!isCIDValid(cid)) {
			console.error(`Couldn't fetch metadata of ${name} ${id}, invalid cid`);
		} else {
			metadata = await fetchJsonByCid(cid);
			if (!metadata) {
				console.error(`Couldn't fetch metadata of ${name} ${id}`);
			}
		}
	} catch (e) {
		console.log(e);
	}
	return metadata;
}

async function fetchOrgMetadata(cid: string, orgId: string): Promise<OrganizationMetadata | null> {
	let metadata: OrganizationMetadata | null = null;
	return await fetchMetadata(cid, orgId, 'org', metadata);
}

async function fetchCampaignMetadata(cid: string, campaignId: string): Promise<CampaignMetadata | null> {
	let metadata: CampaignMetadata | null = null;
	return await fetchMetadata(cid, campaignId, 'campaign', metadata);
}

async function fetchProposalMetadata(cid: string, proposalId: string): Promise<ProposalMetadata | null> {
	let metadata: ProposalMetadata | null = null;
	return await fetchMetadata(cid, proposalId, 'proposal', metadata);
}

export { fetchOrgMetadata, fetchCampaignMetadata, fetchProposalMetadata };
