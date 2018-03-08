import { NbspPipe } from "./nbsp.pipe";

describe("NbspPipe", () => {
  const pipe = new NbspPipe();

  it("creates an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("converts all spaces to non-breaking spaces", () => {
    expect(pipe.transform("string with spaces")).toBe("string&nbsp;with&nbsp;spaces");
  });
});
