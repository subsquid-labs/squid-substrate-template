import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {HistoricalBalance} from "./historicalBalance.model"
import {Identity} from "./identity.model"

@Entity_()
export class AccountBalance {
  constructor(props?: Partial<AccountBalance>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => HistoricalBalance, {nullable: true})
  balance!: HistoricalBalance

  @Index_()
  @ManyToOne_(() => Identity, {nullable: true})
  identity!: Identity
}
