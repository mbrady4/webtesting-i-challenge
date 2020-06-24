const enhancer = require("./enhancer.js");
// test away!

it("checks that jest is setup", function () {
  expect(true).toBe(true);
});

describe("enhancer", function () {
  it("Test repair function sets durability to 100", function () {
    const item = {
      name: "wario",
      durability: 50,
      enhancement: 18,
    };
    const repairedItem = enhancer.repair(item);
    expect(repairedItem.durability).toBe(100);
  });

  it("success function increments enhancement prop by 1 if <20", function () {
    const item = {
      name: "wario",
      durability: 50,
      enhancement: 18,
    };
    const success = enhancer.succeed(item);
    expect(success).toEqual(
      expect.objectContaining({
        name: "wario",
        durability: 50,
        enhancement: 19,
      })
    );
  });

  it("success function does nothing if enhancement = 20", function () {
    const item = {
      name: "wario",
      durability: 50,
      enhancement: 20,
    };
    const success = enhancer.succeed(item);
    expect(success).toEqual(
      expect.objectContaining({
        name: "wario",
        durability: 50,
        enhancement: 20,
      })
    );
  });

  it("fail decreases durability by 5 if enhancement <15", function () {
    const item = {
      name: "wario",
      durability: 50,
      enhancement: 12,
    };
    expect(enhancer.fail(item)).toEqual(
      expect.objectContaining({
        name: "wario",
        durability: 45,
        enhancement: 12,
      })
    );
  });

  it("fail decreases durability by 10 if enhancement is >=15", function () {
    const item = {
      name: "wario",
      durability: 50,
      enhancement: 15,
    };
    expect(enhancer.fail(item)).toEqual(
      expect.objectContaining({
        name: "wario",
        durability: 40,
        enhancement: 15,
      })
    );
  });

  it("fail won't decrease beyond 0", function () {
    const item = {
      name: "wario",
      durability: 5,
      enhancement: 15,
    };
    expect(enhancer.fail(item)).toEqual(
      expect.objectContaining({
        name: "wario",
        durability: 0,
        enhancement: 15,
      })
    );
  });

  it("fail decreases enahancement by 1 if enhancement >16", function () {
    const item = {
      name: "wario",
      durability: 50,
      enhancement: 16,
    };
    expect(enhancer.fail(item)).toEqual(
      expect.objectContaining({
        name: "wario",
        durability: 40,
        enhancement: 15,
      })
    );
  });
});

describe("get function", function () {
  it("get modifies the name if enhancement > 0", function () {
    const item = {
      name: "wario",
      durability: 50,
      enhancement: 15,
    };
    expect(enhancer.get(item)).toEqual(
      expect.objectContaining({
        name: "[+15] wario",
        durability: 50,
        enhancement: 15,
      })
    );
  });

  it("get does not modify name if enhancecment === 0", function () {
    const item = {
      name: "wario",
      durability: 50,
      enhancement: 0,
    };
    expect(enhancer.get(item)).toEqual(
      expect.objectContaining({
        name: "wario",
        durability: 50,
        enhancement: 0,
      })
    );
  });
});
