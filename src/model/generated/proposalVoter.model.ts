import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Voting} from "./voting.model"
import {Identity} from "./identity.model"

@Entity_()
export class ProposalVoter {
  constructor(props?: Partial<ProposalVoter>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Voting, {nullable: true})
  voting!: Voting

  @Column_("text", {nullable: false})
  address!: string

  @Index_()
  @ManyToOne_(() => Identity, {nullable: true})
  identity!: Identity

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  power!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  amount!: bigint | undefined | null

  @Column_("bool", {nullable: false})
  voted!: boolean
}
