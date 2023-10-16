import { CountryEntity } from "src/country/entities/country.entity";
import { Provider } from "src/providers/entities/provider.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("states")
export class State {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    state_name:string;

    @ManyToOne(() => CountryEntity, (country) => country.states)
    @JoinColumn({name:"country_id"})
    country: CountryEntity

    @Column({nullable:true})
    country_id:number;

    @Column({type:"char", nullable:true})
    country_code?:string;

    @Column({nullable:true})
    fips_code:string;

    @Column({nullable:true})
    iso2:string;

    @Column({length:191, nullable:true})
    type:string;

    @Column({type:"decimal", nullable:true})
    latitude:true;

    @Column({type:"decimal", nullable:true})
    longitude:true;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column({type:"tinyint", nullable:true})
    flag:number;

    @Column({nullable:true})
    wikiDataId:string


    @OneToMany(() => User, (user) => user.state)
    users:User

    @OneToMany(() => Provider, (provider) => provider.state)
    providers:Provider



}
