import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateStateDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    state_name:string;

    @IsNotEmpty()
    country_id:number;
}
