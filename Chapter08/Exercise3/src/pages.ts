const pages = {};

const Page = constructor => {
  const className = constructor.name;
  const selector = "/" + className.toLowerCase();
  pages[selector] = new constructor();
};

interface IHandleMethodDecoratorBinding {
  originalFunction: () => {};
  thisObject: {};
  request: {};
}
const handleMethodDecoratorBinding = (
  params: IHandleMethodDecoratorBinding
) => {
  const bindedOriginalFunction = params.originalFunction.bind(
    params.thisObject
  );
  const result = bindedOriginalFunction(params.request);
  return result;
};

const adminLog = (target, propertyKey, descriptor) => {
  const originalFunction = descriptor.value;
  descriptor.value = function(request) {
    console.log("Dashboard accessed by", request.username);
    return handleMethodDecoratorBinding({
      originalFunction: originalFunction,
      request: request,
      thisObject: this
    });
  };
  return descriptor;
};

const authGuard = (target, propertyKey, descriptor) => {
  const originalFunction = descriptor.value;

  descriptor.value = function(request) {
    if (request.username === "someAdmin" && request.password === "secret123") {
      return handleMethodDecoratorBinding({
        originalFunction: originalFunction,
        request: request,
        thisObject: this
      });
    } else {
      throw new Error("You shall not pass");
    }
  };

  return descriptor;
};

@Page
class AboutUs {
  private content = [
    `<div>`,
    `<h1>`,
    `Some information about us`,
    `</h1>`,
    `</div>`
  ];

  render() {
    return this.content.join("");
  }
}

@Page
class ContactUs {
  private content = [
    `<div>`, 
    `<h1>`, 
    `Send us a message`, 
    `</h1>`, 
    `</div>`
  ];

  render() {
    return this.content.join("");
  }
}

@Page
class AdminDashboard {
  private content = [
    `<div>`, 
    `<h1>`, 
    `Secret stuff`, 
    `</h1>`, 
    `</div>`
  ];

  @authGuard
  @adminLog
  render() {
    return this.content.join("");
  }
}

console.log(pages["/aboutus"].render());
console.log(pages["/contactus"].render());
console.log(pages["/admindashboard"].render({
  username: "someAdmin",
  password: "secret123"
}));
