import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Organization} from "./organization.model"
import {Identity} from "./identity.model"

@Entity_()
export class OrganizationMember {
  constructor(props?: Partial<OrganizationMember>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Organization, {nullable: true})
  organization!: Organization

  @Column_("text", {nullable: false})
  address!: string

  @Index_()
  @ManyToOne_(() => Identity, {nullable: true})
  identity!: Identity

  @Column_("text", {nullable: false})
  state!: string
}
