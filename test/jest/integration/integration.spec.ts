import "tsarch/dist/jest";
import { filesOfProject } from "tsarch";

describe("Integration test", () => {
  it("checks the created messages", async () => {
    const rule = (
      await filesOfProject(
        __dirname + "/samples/filenamingsample/tsconfig.json"
      )
    )
      .inFolder("services")
      .should()
      .matchPattern(".*Service.ts");

    await expect(rule).not.toPassAsync();
  });
});
