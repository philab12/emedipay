import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { CreateSupportDto } from "src/support/dto/create-support.dto";
import { CreateUserPortalDto } from "src/user-portal/dto/create-user-portal.dto";
import { CreateUserDto } from "src/users/dto/create-user.dto";

export class UserSupportDto {
    @ValidateNested({each: true})
    @Type(() => CreateUserDto)
    user:CreateUserDto;

    
    @ValidateNested({each: true})
    @Type(() => CreateUserPortalDto)
    user_portals:CreateUserPortalDto[];

    @ValidateNested({each: true})
    @Type(() => CreateSupportDto)
    supports:CreateSupportDto[]
}