import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {NftCollection} from "./nftCollection.model"

@Entity_()
export class Nft {
  constructor(props?: Partial<Nft>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: false})
  owner!: string

  @Column_("text", {nullable: false})
  metadata!: string

  @Column_("bool", {nullable: true})
  equipped!: boolean | undefined | null

  @Column_("bool", {nullable: false})
  pending!: boolean

  @Column_("bool", {nullable: false})
  transferable!: boolean

  @Index_()
  @ManyToOne_(() => NftCollection, {nullable: true})
  collection!: NftCollection
}
