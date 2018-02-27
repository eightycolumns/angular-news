import { SummaryPipe } from "./summary.pipe";

describe("SummaryPipe", () => {
  it("creates an instance", () => {
    const summaryPipe = new SummaryPipe();
    expect(summaryPipe).toBeTruthy();
  });
});
