const { Selector } = require("testcafe");

fixture("My Fixture")
  .page("about:blank");

test("My Test", async t => {
  await t
    .navigateTo("https://www.google.com");
  await t
    .expect(Selector("title").innerText).eql("Google");
  console.log("Test passed!");
  await t.wait(2000);
});