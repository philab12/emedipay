import { Transform } from "class-transformer";
import { IsNotEmpty, IsString, IsEnum } from "class-validator";
import { YESNO } from "src/common/enum/general.enum";

export class CreateHealthProfessionDto {

    @IsNotEmpty()
    @IsString()
    @Transform((param) => param.value.toUpperCase())
    health_profession:string;

    @IsNotEmpty()
    @IsEnum(YESNO)
    is_active:YESNO

}
