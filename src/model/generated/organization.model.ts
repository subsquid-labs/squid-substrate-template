import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Identity} from "./identity.model"
import {OrganizationMember} from "./organizationMember.model"
import {Campaign} from "./campaign.model"
import {Proposal} from "./proposal.model"

@Entity_()
export class Organization {
  constructor(props?: Partial<Organization>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: false})
  creator!: string

  @Index_()
  @ManyToOne_(() => Identity, {nullable: true})
  creatorIdentity!: Identity

  @Column_("text", {nullable: false})
  prime!: string

  @Index_()
  @ManyToOne_(() => Identity, {nullable: true})
  primeIdentity!: Identity

  @Column_("text", {nullable: false})
  treasury!: string

  @Index_()
  @ManyToOne_(() => Identity, {nullable: true})
  treasuryIdentity!: Identity

  @Column_("text", {nullable: false})
  accessModel!: string

  @Column_("text", {nullable: false})
  feeModel!: string

  @Column_("text", {nullable: false})
  type!: string

  @Column_("text", {nullable: false})
  state!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  membershipFee!: bigint | undefined | null

  @Column_("text", {nullable: false})
  govCurrency!: string

  @Column_("text", {nullable: false})
  payCurrency!: string

  @Column_("int4", {nullable: false})
  memberLimit!: number

  @Column_("int4", {nullable: false})
  createdAtBlock!: number

  @Column_("int4", {nullable: false})
  updatedAtBlock!: number

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  deposit!: bigint

  @OneToMany_(() => OrganizationMember, e => e.organization)
  members!: OrganizationMember[]

  @OneToMany_(() => Campaign, e => e.organization)
  campaigns!: Campaign[]

  @OneToMany_(() => Proposal, e => e.organization)
  proposals!: Proposal[]

  @Column_("text", {nullable: false})
  slug!: string

  @Column_("text", {nullable: false})
  cid!: string

  @Column_("text", {nullable: false})
  name!: string

  @Column_("text", {nullable: false})
  description!: string

  @Column_("text", {nullable: false})
  website!: string

  @Column_("text", {nullable: false})
  email!: string

  @Column_("text", {nullable: false})
  repo!: string

  @Column_("text", {nullable: false})
  logo!: string

  @Column_("text", {nullable: false})
  header!: string
}
