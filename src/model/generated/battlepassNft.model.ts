import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Identity} from "./identity.model"
import {Battlepass} from "./battlepass.model"

@Entity_()
export class BattlepassNft {
  constructor(props?: Partial<BattlepassNft>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Identity, {nullable: true})
  owner!: Identity

  @Index_()
  @ManyToOne_(() => Battlepass, {nullable: true})
  battlepass!: Battlepass
}
