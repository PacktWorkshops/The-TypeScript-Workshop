"use strict";
exports.__esModule = true;
var Login = /** @class */ (function () {
    function Login(args) {
        this.email = args.email;
        this.password = args.password;
    }
    return Login;
}());
exports.Login = Login;
var Auth = /** @class */ (function () {
    function Auth(args) {
        this.user = args.user;
        this.source = args.source;
    }
    Auth.prototype.validUser = function () {
        var _a = this.user, email = _a.email, password = _a.password;
        if (email === "admin@example.com" && password === "secret123") {
            return true;
        }
        else {
            return false;
        }
    };
    return Auth;
}());
exports["default"] = Auth;
var goodUser = new Login({
    email: "admin@example.com",
    password: "secret123"
});
var badUser = new Login({
    email: "admin@example.com",
    password: "whoops"
});
var authAttemptFromGoodUser = new Auth({
    user: goodUser,
    source: "Google"
});
authAttemptFromGoodUser.validUser(); //?
var authAttemptFromBadUser = new Auth({
    user: badUser,
    source: "Google"
});
authAttemptFromBadUser.validUser(); //?
