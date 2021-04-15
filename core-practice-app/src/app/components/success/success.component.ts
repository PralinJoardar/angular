import { Component } from '@angular/core';

@Component({
  selector: 'app-success',
  template: `<p>Success</p>`,
  styles: [
    `p{
        padding:20px;
        background-color: yellowGreen;
        border: 1px solid green
    }`
  ],
})
export class SuccessComponent {}
