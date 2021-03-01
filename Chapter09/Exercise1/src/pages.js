var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var pages = {};
var Page = function (constructor) {
    var className = constructor.name;
    var selector = "/" + className.toLowerCase();
    pages[selector] = new constructor();
};
var AboutUs = /** @class */ (function () {
    function AboutUs() {
        this.content = [
            "<div>",
            "<h1>",
            "Some information about us",
            "</h1>",
            "</div>"
        ];
    }
    AboutUs.prototype.render = function () {
        return this.content.join("");
    };
    AboutUs = __decorate([
        Page
    ], AboutUs);
    return AboutUs;
}());
var ContactUs = /** @class */ (function () {
    function ContactUs() {
        this.content = ["<div>", "<h1>", "Send us a message", "</h1>", "</div>"];
    }
    ContactUs.prototype.render = function () {
        return this.content.join("");
    };
    ContactUs = __decorate([
        Page
    ], ContactUs);
    return ContactUs;
}());
console.log(pages); //?
pages["/aboutus"].render(); //?
