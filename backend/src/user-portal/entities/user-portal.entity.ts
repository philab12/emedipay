import { Exclude } from "class-transformer";
import { IsOptional } from "class-validator";
import { SharedEntity } from "src/common/db/shared_entity";
import { PORTALENUM, STATUS, USERLEVEL, YESNO } from "src/common/enum/general.enum";
import { Provider } from "src/providers/entities/provider.entity";
import { User } from "src/users/entities/user.entity";
import { AfterInsert, Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity("user_portals")
export class UserPortal extends SharedEntity {

    constructor(partial: Partial<UserPortal>) {
        super();
        Object.assign(this, partial);
      }

    @ManyToOne(() => User, (user) => user.user_portals)
    @JoinColumn({name: "user_id"})
    user:User

    @Column()
    user_id:string;

    @Column({type:"enum", enum:PORTALENUM})
    portal:PORTALENUM

    @Column({type:"enum", enum:USERLEVEL})
    user_level: USERLEVEL

    @ManyToOne(()=> Provider, (provider) => provider.user_portals)
    @JoinColumn({name:"provider_id"})
    provider:Provider;

    @Column({nullable:true})
    provider_id:string;

    
  @Column({length:100, nullable:true})
  @Exclude()
  verification_code: string;


  @IsOptional()
  @Column({type:"enum", enum:YESNO, default:YESNO.NO})
  is_verified: YESNO;


    @Column({nullable:true})
    otp_code:string;

    @Column({type:"enum", enum:STATUS})
    status:STATUS

    
    

    @AfterInsert()
 generateVerificationCode (): void {
   // 'this' will refer to our entity
   if (!this.verification_code) {
     this.verification_code = uuidv4();
   }
 }


}
