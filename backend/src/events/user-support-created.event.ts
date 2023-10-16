export class UserSupportCreatedEvent {
    constructor(public readonly user_id:string, verification_code:string, email:string, contact1:string){}
}