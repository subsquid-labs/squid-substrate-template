import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Campaign} from "./campaign.model"
import {Identity} from "./identity.model"

@Entity_()
export class CampaignContributor {
  constructor(props?: Partial<CampaignContributor>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Campaign, {nullable: true})
  campaign!: Campaign

  @Column_("text", {nullable: false})
  address!: string

  @Index_()
  @ManyToOne_(() => Identity, {nullable: true})
  identity!: Identity

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  contributed!: bigint
}
