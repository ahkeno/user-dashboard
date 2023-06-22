export class User {
    id?: number;
    name?: string;
    email?: string;
    profile_picture_url?: string;
    email_verified_at?: Date;
    identification_number?: string;
    current_organisation?: Array<String>;
    is_personal?: boolean;
}