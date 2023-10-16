import { Transform } from "class-transformer";
import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { YESNO } from "src/common/enum/general.enum";

export class CreateHealthCareDto {
    @IsNotEmpty()
    @IsString()
    @Transform((param) => param.value.toUpperCase())
    health_care:string;

    @IsNotEmpty()
    @IsEnum(YESNO)
    is_active:YESNO
}
