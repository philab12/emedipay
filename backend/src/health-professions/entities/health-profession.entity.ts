import { SharedEntity } from "src/common/db/shared_entity";
import { YESNO } from "src/common/enum/general.enum";
import { Column, Entity } from "typeorm";

@Entity("health_professions")
export class HealthProfession extends SharedEntity {
    @Column({length: 200, unique:true})
    health_profession:string

    @Column({type:"enum", enum:YESNO})
    is_active:YESNO;
}
