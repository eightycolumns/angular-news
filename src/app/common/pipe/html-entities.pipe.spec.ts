import { HtmlEntitiesPipe } from "./html-entities.pipe";

describe("HtmlEntitiesPipe", () => {
  const pipe = new HtmlEntitiesPipe();

  it("creates an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("converts all applicable characters to HTML entities", () => {
    const unencodedString = `< & " ' > < & " ' >`;
    const encodedString = "&lt; &amp; &quot; &apos; &gt; &lt; &amp; &quot; &apos; &gt;";
    expect(pipe.transform(unencodedString)).toBe(encodedString);
  });
});
