import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { TitanService } from './services/titan.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<json-schema-form> [schema]="exampleSchema"></json-schema-form>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular JSON Schema Form Demo';
constructor( private titanService: TitanService ){

}
  exampleSchema =
    {
      "schema": {
        "type": "object",
        "title": "Comment",
        "properties": {
          "name": {
            "title": "Name",
            "type": "string"
          },
          "email": {
            "title": "Email",
            "type": "string",
            "format": "email",
            "description": "Email will be used for evil."
          },
          "comment": {
            "title": "Comment",
            "type": "string",
            "maxLength": 20,
            "validationMessage": "Don't be greedy!"
          }
        },
        "required": ["name", "email", "comment"],
        "order": ["email", "name", "comment"],
      }, layout: [
        { "type": "flex", "flex-flow": "row wrap","border":true, "items": ["email", "name"] },
        { "key": "comment", "title": "comment", "placeholder": "enter your comments" },
      ], data: { 'email': 'Jane@dex.com', 'name': 'Doe', 'comment': "comments" }
    }

  displayData: any = null;

  exampleOnSubmitFn(formData) {
    this.displayData = formData;
    this.titanService.getSeodata("SEODEMO18").subscribe(seodata => {
    //  console.log(seodata);
      console.log(seodata.product);
    },
      err => {
        console.log('An error has occured while retreving data from Titan Seo'+ err);
      }
    )
  }
}