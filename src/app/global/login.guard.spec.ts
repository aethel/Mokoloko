import { TestBed, async, inject } from '@angular/core/testing';

import { Login.GuardGuard } from './login.guard';

describe('Login.GuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Login.GuardGuard]
    });
  });

  it('should ...', inject([Login.GuardGuard], (guard: Login.GuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
