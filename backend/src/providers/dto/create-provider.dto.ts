import { Transform, Type } from "class-transformer";
import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, ValidateNested } from "class-validator";
import { STATUS, TRANSTYPE } from "src/common/enum/general.enum";
import { IsUnique } from "src/common/validation/is-unique";
import { CreateUserPortalDto } from "src/user-portal/dto/create-user-portal.dto";

export class CreateProviderDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(200)
    @Transform((param) => param.value.toUpperCase())
    @IsUnique({tableName:'providers', column:'email'})
    provider:string;

    @IsNotEmpty()
    country_id:number;

    @IsNotEmpty()
    state_id:number;

    @IsNotEmpty()
    health_care_id:string;

    @IsString()
    @IsOptional()
    address:string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(300)
    @IsEmail()
    email:string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(15)
    company_phone:string;

    @IsOptional()
    @IsEnum(TRANSTYPE)
    trans_type:TRANSTYPE | null;

    @IsOptional()
    @IsString()
    @MaxLength(200)
    trans_company:string;

    @IsOptional()
    @IsString()
    @MaxLength(50)
    trans_acc_number:string;


    @IsNumber()
    @IsNotEmpty()
    number_of_locations:number;



    @IsOptional()
    health_professional_id:string | null;


    // @IsOptional()
    // @ValidateNested({each: true})
    // @Type(() => CreateUserPortalDto)
    //  user_portals:CreateUserPortalDto[] | null;




    @IsNotEmpty()
    @IsEnum(STATUS)
    status:STATUS;


}
