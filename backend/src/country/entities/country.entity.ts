import { SharedEntity } from "src/common/db/shared_entity";
import { Provider } from "src/providers/entities/provider.entity";
import { State } from "src/state/entities/state.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity("countries") 
export class CountryEntity {

    @PrimaryGeneratedColumn()
    id:number;


    @Column({length:255, unique: true})
    name:string;

    @Column({length:3, type:"char", nullable:true})
    iso3?:string;

    @Column({length:3, type:"char", nullable:true})
    numreic_code?:string;

    @Column({length:2, type:"char", nullable:true})
    iso2?:string;

    @Column({length:255, type:"varchar"})
    phonecode:string;

    @Column({length:255, type:"varchar", nullable:true})
    capital?:string;


    @Column({length:255, type:"varchar", nullable:true})
    currency?:string;

    @Column({length:255, nullable:true})
    currency_name?:string;

    @Column({length:255, nullable:true})
    currency_symbol	:string;

    @Column({length:255, nullable:true})
    tld	:string;

    @Column({length:255, nullable:true})
    native	:string;

    @Column({length:255, nullable:true})
    region:string;

    @Column({type:"mediumint", nullable:true})
    region_id?:number;

    @Column({length:255, type:"varchar", nullable:true})
    subregion?:string;

    @Column({type:"mediumint", nullable:true})
    subregion_id?:number;

    @Column({length:255, nullable:true})
    nationality?:string;

    @Column({type:"text", nullable:true})
    timezones?:string;

    @Column({type:"text", nullable:true})
    translations?:string;

    @Column({type:"decimal", nullable:true})
    latitude?:string;

    @Column({type:"decimal", nullable:true})
    longitude?:string;

    @Column({length:191, nullable:true})
    emoji?:string;

    @Column({length:191, nullable:true})
    emojiU?:string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column({type:"tinyint", nullable:true})
    flag:number;

    @Column({nullable:true})
    wikiDataId:string

    @OneToMany(() => State, (state) => state.country)
    states:State

    @OneToMany(() => User, (user) => user.country)
    users:User

    @OneToMany(() => Provider, (provider) => provider.country)
    providers:Provider







}
