import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"

@Entity_()
export class OrganizationMetadata {
  constructor(props?: Partial<OrganizationMetadata>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: false})
  name!: string

  @Column_("text", {nullable: false})
  description!: string

  @Column_("text", {nullable: false})
  website!: string

  @Column_("text", {nullable: false})
  email!: string

  @Column_("text", {nullable: false})
  repo!: string

  @Column_("text", {nullable: false})
  logo!: string

  @Column_("text", {nullable: false})
  header!: string
}
