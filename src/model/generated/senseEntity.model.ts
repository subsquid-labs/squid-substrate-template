import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Identity} from "./identity.model"

@Entity_()
export class SenseEntity {
  constructor(props?: Partial<SenseEntity>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Identity, {nullable: true})
  identity!: Identity

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  experience!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  trust!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  reputation!: bigint

  @Column_("int4", {nullable: false})
  createdAtBlock!: number

  @Column_("int4", {nullable: false})
  updatedAtBlock!: number

  @Column_("text", {nullable: false})
  cid!: string
}
