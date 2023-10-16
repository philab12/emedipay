import { IsEnum, IsNotEmpty, IsOptional, IsString, Validate } from "class-validator";
import { STATUS } from "src/common/enum/general.enum";
import { IsUnique } from "src/common/validation/is-unique";
import { IsUniqueConstraint } from "src/common/validation/is-unique-constraint";

export class CreateSupportDto {

    @IsOptional()
    @IsUnique({tableName:'supports', column:'user_support_id'})
    @Validate(IsUniqueConstraint)
    @IsString()
    user_support_id:string | null;

    @IsOptional()
    @IsString()
    auth_user_id:string | null;

    @IsOptional()
    @IsEnum(STATUS)
    status:STATUS | null;

    @IsOptional()
    @IsString()
    reason:string | null;
}
