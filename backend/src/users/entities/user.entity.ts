import { Exclude } from "class-transformer";
import { IsOptional } from "class-validator";
import { SharedEntity } from "src/common/db/shared_entity";
import { YESNO } from "src/common/enum/general.enum";
import { CountryEntity } from "src/country/entities/country.entity";
import { Provider } from "src/providers/entities/provider.entity";
import { State } from "src/state/entities/state.entity";
import { Support } from "src/support/entities/support.entity";
import { UserPortal } from "src/user-portal/entities/user-portal.entity";
import { AfterInsert, Column, Entity, InsertEvent, JoinColumn, ManyToOne, OneToMany } from "typeorm";


@Entity("users")
export class User extends SharedEntity {


    
 constructor(partial: Partial<User>) {
    super();
    Object.assign(this, partial);
  }

  @Column({length:200})
  first_name:string;

  @Column({length:200})
  last_name:string;

  @Column({length:15})
  contact1:string;

  @Column({length:15, nullable:true})
  contact2:string;

  @ManyToOne(() => CountryEntity, (country) => country.users)
  @JoinColumn({name: "country_id"})
  country:CountryEntity

  @Column()
  country_id:number;

  @ManyToOne(() => State, (state) => state.users)
  @JoinColumn({name: "state_id"})
  state:State

  @Column()
  state_id:number;

  @Column({length:300, unique:true})
  email:string;

  @Column({nullable:true})
  @Exclude()
  password:string;


  @Column({nullable:true})
  @Exclude()
  refresh_token:string;




  @IsOptional()
 @Column({type:"enum", enum:YESNO, default:"NO"})
 oauth: YESNO;

 @OneToMany(() => UserPortal,(user_portal) =>  user_portal.user, {cascade: true})
 user_portals:UserPortal[]


 @OneToMany(() => Provider,(provider) =>  provider.healthProfessional,{cascade:true})
 providers:Provider[]


 @OneToMany(() =>  Support, (support) => support.user, {cascade: true})
 supports:Support[]

 @OneToMany(() =>  Support, (auth_support) => auth_support.auth_user)
 auth_supports:Support[]




 
}


