import { SharedEntity } from "src/common/db/shared_entity";
import { YESNO } from "src/common/enum/general.enum";
import { Provider } from "src/providers/entities/provider.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity("health_cares")
export class HealthCare extends SharedEntity {
    @Column({length: 200, unique:true})
    health_care:string

    @Column({type:"enum", enum:YESNO})
    is_active:YESNO;

    @OneToMany(() => Provider, (provider) => provider.state)
    providers:Provider
}
