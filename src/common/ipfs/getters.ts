import { to } from 'await-to-js'
import fetch from 'node-fetch'
import config from '../../config'

const getIpfsUrlByCid = (cid: string): string => `${config.ipfsGateway}${cid}`
const isCIDValid = (cid: string | null) => cid !== null && cid.length < 50 && !!cid.match(/^[a-z0-9]+$/i)

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
