import { async, TestBed } from '@angular/core/testing';

import { TalksService } from './talks.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TalksService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    }).compileComponents();
  }));

  it('should be created', () => {
    const service: TalksService = TestBed.get(TalksService);
    expect(service).toBeTruthy();
  });
});
