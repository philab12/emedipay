import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { PORTALENUM, STATUS, USERLEVEL, YESNO } from "src/common/enum/general.enum";
import { IsUnique } from "src/common/validation/is-unique";

export class CreateUserPortalDto {
    @IsOptional()
    @IsUnique({tableName:'user_portals', column:'user_id', column2:'portal'})
    user_id:string | null;

    @IsEnum(PORTALENUM)
    @IsNotEmpty()
    portal:PORTALENUM
    
    @IsNotEmpty()
    @IsEnum(USERLEVEL)
    user_level:USERLEVEL

    @IsOptional()
    provider_id:string | null;

    verification_code:string;

    @IsEnum(YESNO)
    @IsOptional()
    is_verified:YESNO | null;


    @IsOptional()
    @IsString()
    otp_code:string;


    @IsNotEmpty()
    @IsEnum(STATUS)
    status:STATUS;
}
