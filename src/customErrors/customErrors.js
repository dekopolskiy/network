

export class InvalidFieldsAPI extends Error {
    constructor(props) {
        super(props);
        this.name = 'InvalidFieldsAPI';
    }
}

export class AuthrorizationError extends Error {
    constructor(props) {
        super(props);
        this.name = 'AuthorizationError';
    }
}

export class InnocorrectEmailOrPasword extends Error{
    constructor(props) {
        super(props);
        this.name = 'InnocorrectEmailOrPassword';
    }
}