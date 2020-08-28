import Auth, { Login } from "../auth.js";
import "jasmine";

describe("auth", () => {
  it("should be able to create a Login object with a email and password", () => {
    const user = new Login({
      email: "admin@example.com",
      password: "secret123"
    });
    expect(user.email).toBe("admin@example.com");
    expect(user.password).toBe("secret123");
  });

  it("should be able to verify if a user is valid", () => {
    const user = new Login({
      email: "admin@example.com",
      password: "secret123"
    });
    const auth = new Auth({
      user: user,
      source: "google"
    });
    expect(auth.validUser()).toBe(true);
  });

  it("should return false if a user is not valid", () => {
    const user = new Login({
      email: "admin@example.com",
      password: "whoops"
    });
    const auth = new Auth({
      user: user,
      source: "google"
    });
    expect(auth.validUser()).toBe(false);
  });

  it("should have a source attribute in the auth class", () => {
    const user = new Login({
      email: "admin@example.com",
      password: "whoops"
    });
    const auth = new Auth({
      user: user,
      source: "google"
    });
    expect(auth.source).toBe("google");
  });
});
