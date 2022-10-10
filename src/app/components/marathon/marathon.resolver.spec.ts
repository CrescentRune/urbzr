import { TestBed } from '@angular/core/testing';

import { MarathonResolver } from './marathon.resolver';

describe('MarathonResolver', () => {
  let resolver: MarathonResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MarathonResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
