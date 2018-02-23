import { HttpClientModule } from "@angular/common/http";
import { inject } from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";

import { ContentService } from "./content.service";

describe("ContentService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        ContentService
      ]
    });
  });

  it("should be created", inject(
    [
      ContentService
    ],
    (contentService: ContentService) => {
      expect(contentService).toBeTruthy();
    }
  ));
});
