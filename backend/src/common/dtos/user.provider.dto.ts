import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { CreateProviderDto } from "src/providers/dto/create-provider.dto";
import { CreateUserPortalDto } from "src/user-portal/dto/create-user-portal.dto";
import { CreateUserDto } from "src/users/dto/create-user.dto";

export class UserProviderDto {
    @ValidateNested({each: true})
    @Type(() => CreateUserDto)
    user:CreateUserDto;

    
    @ValidateNested({each: true})
    @Type(() => CreateUserPortalDto)
    user_portals:CreateUserPortalDto[];

    @ValidateNested({each: true})
    @Type(() => CreateProviderDto)
    providers:CreateProviderDto[]
}