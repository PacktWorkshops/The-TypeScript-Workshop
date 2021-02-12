function ClassDecoratorFactory(message: string) {
    console.log(`${message} inside factory`);
    return function (constructor: Function) {
        console.log(`${message} inside decorator`);
    };
}
@ClassDecoratorFactory("Hi")
class DecoratedOne {}


@ClassDecoratorFactory("Hello")
class DecoratedTwo {}
