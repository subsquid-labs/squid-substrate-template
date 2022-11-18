import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class Voting {
  constructor(props?: Partial<Voting>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: false})
  unit!: string

  @Column_("text", {nullable: false})
  scale!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  yes!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  no!: bigint

  @Column_("text", {nullable: true})
  quorum!: string | undefined | null

  @Column_("text", {nullable: false})
  majority!: string
}
