import { Transform } from "class-transformer";
import { IsNotEmpty, IsString, MaxLength, Validate } from "class-validator";
import { IsUnique } from "src/common/validation/is-unique";
//import { IsUniqueConstraint } from "src/common/validation/is-unique-constraint";

export class CreateCountryDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    @Transform((param) => param.value.toUpperCase())
    @IsUnique({tableName:'countries', column:'name'})
    name:string


    @IsNotEmpty()
    @IsString()
    @MaxLength(255) 
    @Transform((param) => param.value.toUpperCase())
    phonecode:string

    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    currency:string

    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    currency_name:string


    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    currency_symbol:string
}
