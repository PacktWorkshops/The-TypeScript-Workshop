const pages = {};

const Page = constructor => {
  const className = constructor.name;
  const selector = "/" + className.toLowerCase();
  pages[selector] = new constructor();
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

console.log(pages["/aboutus"].render());
console.log(pages["/contactus"].render());
