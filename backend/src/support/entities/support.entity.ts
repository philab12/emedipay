import { SharedEntity } from "src/common/db/shared_entity";
import { STATUS } from "src/common/enum/general.enum";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity("supports")
export class Support extends SharedEntity {

    constructor(partial: Partial<Support>) {
        super();
        Object.assign(this, partial);
      }


    @ManyToOne(() => User, (user) => user.supports)
    @JoinColumn({name: "user_support_id"})
    user:User

    @Column()
    user_support_id:string;


    @ManyToOne(() => User, (user) => user.auth_supports)
    @JoinColumn({name: "auth_user_id"})
    auth_user:User

    @Column({nullable:true})
    auth_user_id:string;


    @Column({type:"enum", enum:STATUS, default:STATUS.PENDING})
    status:STATUS

    @Column({type:"text", nullable:true})
    reason:string;

}
