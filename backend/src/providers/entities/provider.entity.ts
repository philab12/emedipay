import { SharedEntity } from "src/common/db/shared_entity";
import { STATUS, TRANSTYPE } from "src/common/enum/general.enum";
import { CountryEntity } from "src/country/entities/country.entity";
import { HealthCare } from "src/health_care/entities/health_care.entity";
import { State } from "src/state/entities/state.entity";
import { UserPortal } from "src/user-portal/entities/user-portal.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany } from "typeorm";

@Entity("providers")
export class Provider extends SharedEntity {

    constructor(partial: Partial<Provider>) {
        super();
        Object.assign(this, partial);
      }


    @Column({length:200})
    provider:string;

    @ManyToOne(() => CountryEntity, (country) => country.providers)
    @JoinColumn({name:"country_id"})
    country:CountryEntity

    @Column()
    country_id:number;

    @ManyToOne(() => State, (state) => state.providers)
    @JoinColumn({name: "state_id"})
    state: State

    @Column()
    state_id:number

    @ManyToOne(() => HealthCare, (health_care) => health_care.providers)
    @JoinColumn({name: "health_care_id"})
    health_care:HealthCare;

    @Column()
    health_care_id:string;

    @Column({type:"text", nullable:true})
    address:string;

    @Column({length:300, unique:true})
    email:string;

    @Column({length:15})
    company_phone:string;

    @Column({type:"enum", enum:TRANSTYPE, nullable:true})
    trans_type:TRANSTYPE

    @Column({length:200, nullable:true})
    trans_company:string;

    @Column({length:50, nullable:true})
    trans_acc_number:string;

    @Column({type:"int"})
    number_of_locations:number;

    @ManyToOne(() => User, (user) => user.providers)
    @JoinColumn({name:"health_professional_id"})
    healthProfessional:User

    @Column({nullable:true})
    health_professional_id:string;

    @Column({type:"enum", enum:STATUS})
    status:STATUS

    @OneToMany(()=> UserPortal, (user_portal) => user_portal.provider, {cascade:true})
    user_portals:UserPortal[];


}
