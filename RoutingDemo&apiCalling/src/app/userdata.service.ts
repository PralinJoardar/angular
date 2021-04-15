import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  constructor() {}
  data() {
    return [
      {
      id: 1,
      name: 'peter',
      age: 23,
    },
    {
      id: 2,
      name: 'james',
      age: 33,
    },
    {
      id: 3,
      name: 'rayn',
      age: 28,
    },
  ];
  }
}
