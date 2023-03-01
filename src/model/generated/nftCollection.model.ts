import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Identity} from "./identity.model"

@Entity_()
export class NftCollection {
  constructor(props?: Partial<NftCollection>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Identity, {nullable: true})
  owner!: Identity

  @Column_("int4", {nullable: true})
  max!: number | undefined | null
}
