import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 // template: `<json-schema-form> [schema]="exampleSchema"></json-schema-form>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular JSON Schema Form Demo';

  exampleSchema = {
    'type': 'object',
    'properties': {
      'first_name': { 'type': 'string' },
      'last_name': { 'type': 'string' },
      'age': { 'type': 'integer' },
      'is_company': { 'type': 'boolean' },
      'address': {
        'type': 'object',
        'properties': {
          'street_1': { 'type': 'string' },
          'street_2': { 'type': 'string' },
          'city': { 'type': 'string' },
          'state': {
            'type': 'string',
            'enum': [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE',
                'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA',
                'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS',
                'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
                'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD',
                'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ]
          },
          'zip_code': { 'type': 'string' }
        }
      },
      'birthday': { 'type': 'string' },
      'notes': { 'type': 'string' },
      'phone_numbers': {
        'type': 'array',
        'items': {
          'type': 'object',
          'properties': {
            'type': { 'type': 'string', 'enum': [ 'cell', 'home', 'work' ] },
            'number': { 'type': 'string' }
          },
          'required': [ 'type', 'number' ]
        }
      }
    },
    'required': [ 'last_name' ]
  };

  jsonFormObject = 
    {
      "form": [
      {
        "type": "help",
        "helpvalue": "<div class=\"alert alert-info\">Grid it up with bootstrap</div>"
      },
      {
        "type": "section",
        "htmlClass": "row",
        "items": [
          {
            "type": "section",
            "htmlClass": "col-xs-6",
            "items": [
              "name"
            ]
          },
          {
            "type": "section",
            "htmlClass": "col-xs-6",
            "items": [
              "email"
            ]
          }
        ]
      },
      {
        "key": "comment",
        "type": "textarea",
        "placeholder": "Make a comment"
      },
      {
        "type": "submit",
        "style": "btn-info",
        "title": "OK"
      }
    ]
  }
  exampleData = {
    'first_name': 'Jane', 'last_name': 'Doe', 'age': 25, 'is_company': false,
    'address': {
      'street_1': '123 Main St.', 'street_2': null,
      'city': 'Las Vegas', 'state': 'NV', 'zip_code': '89123'
    },
    'phone_numbers': [
      { 'number': '702-123-4567', 'type': 'cell' },
      { 'number': '702-987-6543', 'type': 'work' }
    ], 'notes': ''
  };
  displayData: any = null;

  exampleOnSubmitFn(formData) { 
    this.displayData = formData;
  }
}