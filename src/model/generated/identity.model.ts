import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import {AccountBalance} from "./accountBalance.model"
import {Organization} from "./organization.model"
import {OrganizationMember} from "./organizationMember.model"
import {Campaign} from "./campaign.model"
import {CampaignContributor} from "./campaignContributor.model"
import {Proposal} from "./proposal.model"
import {ProposalVoter} from "./proposalVoter.model"

@Entity_()
export class Identity {
  constructor(props?: Partial<Identity>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: false})
  address!: string

  @Column_("text", {nullable: true})
  displayName!: string | undefined | null

  @Column_("text", {nullable: true})
  legalName!: string | undefined | null

  @Column_("text", {nullable: true})
  email!: string | undefined | null

  @Column_("text", {nullable: true})
  riot!: string | undefined | null

  @Column_("text", {nullable: true})
  image!: string | undefined | null

  @Column_("text", {nullable: true})
  twitter!: string | undefined | null

  @Column_("text", {nullable: true})
  web!: string | undefined | null

  @Column_("text", {nullable: true})
  web3name!: string | undefined | null

  @Column_("text", {nullable: true})
  discord!: string | undefined | null

  @OneToMany_(() => AccountBalance, e => e.identity)
  balances!: AccountBalance[]

  @OneToMany_(() => Organization, e => e.creatorIdentity)
  createdOrganizations!: Organization[]

  @OneToMany_(() => Organization, e => e.primeIdentity)
  controllerOrganizations!: Organization[]

  @OneToMany_(() => OrganizationMember, e => e.identity)
  organizationMembers!: OrganizationMember[]

  @OneToMany_(() => Campaign, e => e.creatorIdentity)
  createdCampaigns!: Campaign[]

  @OneToMany_(() => CampaignContributor, e => e.identity)
  campaignContributors!: CampaignContributor[]

  @OneToMany_(() => Proposal, e => e.creatorIdentity)
  createdProposals!: Proposal[]

  @OneToMany_(() => ProposalVoter, e => e.identity)
  proposalVoters!: ProposalVoter[]
}
