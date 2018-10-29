export class LoginResponse {
    authenticated: boolean;
    user: User;
    permisson: Permisson[];
    message: string;
    success: boolean;
}

class User {
    nickName: string;
    name: string;
    guid: string;
}

class Permisson {
    columName: string;
    value: string;
}
