import { TestBed } from '@angular/core/testing';

import { PokemonsListServiceService } from './pokemons-list-service.service';

describe('PokemonsListServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonsListServiceService = TestBed.get(PokemonsListServiceService);
    expect(service).toBeTruthy();
  });
});
