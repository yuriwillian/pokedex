import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonsListServiceService {

  constructor() { }
  
  fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
  }
}
