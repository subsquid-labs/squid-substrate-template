import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Identity} from "./identity.model"
import {Organization} from "./organization.model"
import {Campaign} from "./campaign.model"
import {Voting} from "./voting.model"
import {ProposalMetadata} from "./proposalMetadata.model"

@Entity_()
export class Proposal {
  constructor(props?: Partial<Proposal>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: false})
  creator!: string

  @Index_()
  @ManyToOne_(() => Identity, {nullable: true})
  creatorIdentity!: Identity

  @Index_()
  @ManyToOne_(() => Organization, {nullable: true})
  organization!: Organization

  @Index_()
  @ManyToOne_(() => Campaign, {nullable: true})
  campaign!: Campaign | undefined | null

  @Column_("text", {nullable: false})
  type!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  deposit!: bigint

  @Column_("text", {nullable: false})
  state!: string

  @Index_()
  @ManyToOne_(() => Voting, {nullable: true})
  voting!: Voting

  @Column_("int4", {nullable: false})
  start!: number

  @Column_("int4", {nullable: false})
  expiry!: number

  @Column_("int4", {nullable: false})
  createdAtBlock!: number

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  amount!: bigint | undefined | null

  @Column_("text", {nullable: true})
  currencyId!: string | undefined | null

  @Column_("text", {nullable: true})
  beneficiary!: string | undefined | null

  @Index_()
  @ManyToOne_(() => Identity, {nullable: true})
  beneficiaryIdentity!: Identity | undefined | null

  @Column_("text", {nullable: true})
  slashingRule!: string | undefined | null

  @Index_()
  @ManyToOne_(() => ProposalMetadata, {nullable: true})
  metadata!: ProposalMetadata | undefined | null
}
