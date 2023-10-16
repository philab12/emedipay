import { Transform, Type } from "class-transformer";
import { IsEmail, IsEnum, IsNotEmpty, IsObject, IsOptional, IsString, IsStrongPassword, MaxLength, ValidateNested, maxLength } from "class-validator";
import { YESNO } from "src/common/enum/general.enum";
import { IsUnique } from "src/common/validation/is-unique";
import { CreateSupportDto } from "src/support/dto/create-support.dto";
import { CreateUserPortalDto } from "src/user-portal/dto/create-user-portal.dto";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(200)
    @Transform((param) => param.value.toUpperCase())
    first_name:string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(200)
    @Transform((param) => param.value.toUpperCase())
    last_name:string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(15)
    contact1: string;

    @MaxLength(15)
    @IsOptional()
    @IsString()
    contact2:string | null;

    @IsNotEmpty()
    country_id:number;

    @IsNotEmpty()
    state_id:number

    @IsNotEmpty()
    @IsEmail()
    @MaxLength(300)
    @IsUnique({tableName:'users', column:'email'})
    email:string;


    @IsNotEmpty()
    @IsStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        minUppercase: 1
    })
    password:string;

    refresh_token?:string;


    // @IsOptional()
    // @ValidateNested({each: true})
    // @Type(() => CreateUserPortalDto)
    // user_portals:CreateUserPortalDto[] | null;


    // @IsOptional()
    // @ValidateNested({each: true})
    // @Type(() => CreateSupportDto)
    // supports:CreateSupportDto[] | null;


    // @IsEnum(YESNO)
    // @IsOptional()
    // is_verified:YESNO | null;

    
    

    @IsEnum(YESNO)
    @IsOptional()
    oauth:YESNO | null;

}
