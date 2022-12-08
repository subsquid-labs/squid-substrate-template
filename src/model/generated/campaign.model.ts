import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Organization} from "./organization.model"
import {Identity} from "./identity.model"
import {CampaignContributor} from "./campaignContributor.model"
import {Proposal} from "./proposal.model"

@Entity_()
export class Campaign {
  constructor(props?: Partial<Campaign>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Organization, {nullable: true})
  organization!: Organization

  @Column_("text", {nullable: false})
  creator!: string

  @Index_()
  @ManyToOne_(() => Identity, {nullable: true})
  creatorIdentity!: Identity

  @Column_("text", {nullable: false})
  admin!: string

  @Index_()
  @ManyToOne_(() => Identity, {nullable: true})
  adminIdentity!: Identity

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  target!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  deposit!: bigint

  @Column_("int4", {nullable: false})
  start!: number

  @Column_("int4", {nullable: false})
  expiry!: number

  @Column_("text", {nullable: false})
  protocol!: string

  @Column_("text", {nullable: false})
  governance!: string

  @Column_("text", {nullable: true})
  tokenSymbol!: string | undefined | null

  @Column_("text", {nullable: true})
  tokenName!: string | undefined | null

  @Column_("text", {nullable: false})
  state!: string

  @OneToMany_(() => CampaignContributor, e => e.campaign)
  contributors!: CampaignContributor[]

  @OneToMany_(() => Proposal, e => e.campaign)
  proposals!: Proposal[]

  @Column_("int4", {nullable: false})
  createdAtBlock!: number

  @Column_("text", {nullable: false})
  cid!: string

  @Column_("text", {nullable: false})
  name!: string

  @Column_("text", {nullable: false})
  email!: string

  @Column_("text", {nullable: false})
  title!: string

  @Column_("text", {nullable: false})
  description!: string

  @Column_("text", {nullable: false})
  markdown!: string

  @Column_("text", {nullable: false})
  logo!: string

  @Column_("text", {nullable: false})
  header!: string
}
