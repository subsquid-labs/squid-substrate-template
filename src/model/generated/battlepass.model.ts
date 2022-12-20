import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Identity} from "./identity.model"
import {Organization} from "./organization.model"

@Entity_()
export class Battlepass {
  constructor(props?: Partial<Battlepass>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Identity, {nullable: true})
  creator!: Identity

  @Index_()
  @ManyToOne_(() => Organization, {nullable: true})
  org!: Organization

  @Column_("text", {nullable: false})
  name!: string

  @Column_("text", {nullable: false})
  state!: string

  @Column_("text", {nullable: false})
  season!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  price!: bigint

  @Column_("int4", {nullable: false})
  createdAtBlock!: number

  @Column_("int4", {nullable: false})
  updatedAtBlock!: number

  @Column_("text", {nullable: false})
  cid!: string
}
