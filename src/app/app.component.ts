import { SeoWebsiteList } from './models/seo/seoWebsiteList';
import { SeoData } from './models/seo/seoData';
import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { TitanService } from './services/titan.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<json-schema-form> [schema]="exampleSchema"></json-schema-form>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular JSON Schema Form Demo';
  exampleSchema: Object = {};
constructor( private titanService: TitanService ){
}

ngOnInit() { // Item970, Item974
  this.titanService.getSeodata("Item0123").subscribe(seodata => {
     var schemaData ={};
     schemaData['ProductHeader']=seodata.ProductHeader;
     var arr= [seodata.product];
     var displayFormData = schemaData['ProductHeader'];
     displayFormData['products']=arr;
     displayFormData['WebsiteUrlList']=seodata.WebsiteUrlList;
     displayFormData['CategoryList']=seodata.CategoryList;
    this.exampleSchema= 
      {
        "schema": {
          "type": "object",
          "title": "SEO Data",
          "properties": {
            "productinstance": {
              "title": "productinstance",
              "type": "string"
            },
            "enterpriseAccountId": {
              "title": "enterpriseAccountId",
              "type": "string"
            },
            "enterpriseItemId": {
              "title": "enterpriseItemId",
              "type": "string"
            },
            "businessLocationId": {
              "title": "businessLocationId",
              "type": "string"
            },
            "productType": {
              "title": "productType",
              "type": "string"
            },
            "productTier": {
              "title": "productTier",
              "type": "string"
            },
            "salesChannelCode": {
              "title": "salesChannelCode",
              "type": "string"
            },
            "transactionType": {
              "title": "transactionType",
              "type": "string"
            },
            "instanceStatus": {
              "title": "instanceStatus",
              "type": "string"
            },
            "fulfilmentStatus": {
              "title": "fulfilmentStatus",
              "type": "string"
            },
            "primaryItemIdForAddon": {
              "title": "primaryItemIdForAddon",
              "type": "string"
            },
            "previousItemId": {
              "title": "previousItemId",
              "type": "string"
            },
            "serviceStartDate": {
              "title": "serviceStartDate",
              "type": "string",
              "format": "date"
            },
            "serviceEndDate": {
              "title": "serviceEndDate",
              "type": "string",
              "format": "date"
            },
            "futureRequestedDate": {
              "title": "futureRequestedDate",
              "type": "string",
              "format": "date"
            },
            "userId": {
              "title": "updatedBy",
              "type": "string"
            },
            "products": {
              "type": "array",
              "title": "product",
              "items": {
                "type": "object",
                "properties": {
                  "FirstName": {
                    "title": "FirstName",
                    "type": "string"
                  },
                  "LastName": {
                    "title": "LastName",
                    "type": "string"
                  },
                  "Phone": {
                    "title": "Phone",
                    "type": "string"
                  },
                  "EmailID": {
                    "title": "EmailID",
                    "type": "string",
                    "pattern": "^\\S+@\\S+$",
                  },
                  "BusinessName": {
                    "title": "BusinessName",
                    "type": "string"
                  },
                  "PrimaryCity": {
                    "title": "PrimaryCity",
                    "type": "string"
                  },
                  "confirmationNumber": {
                    "title": "confirmationNumber",
                    "type": "string"
                  },
                  "proposalId": {
                    "title": "proposalId",
                    "type": "string"
                  },
                  "notes": {
                    "title": "notes",
                    "type": "string"
                  },
                  "primaryCategoryId": {
                    "title": "primaryCategoryId",
                    "type": "string"
                  },
                  "primaryCategoryName": {
                    "title": "primaryCategoryName",
                    "type": "string"
                  }
                }
              }
            },"WebsiteUrlList": {
              "type": "array",
              "title": "WebsiteUrlList",
              "items": {
                "type": "object",
                "properties": {
                  "url": {
                    "title": "url",
                    "type": "string"
                  },"isDexmediaSite": {
                    "title": "isDexmediaSite",
                    "type": "string",
                    "enum": [ "Y","N"]
                  },"isPrimary": {
                    "title": "isPrimary",
                    "type": "string",
                    "enum": [ "Y","N"]
                  },"isNew": {
                    "title": "isNew",
                    "type": "string",
                    "enum": [ "Y","N"]
                  },"username": {
                    "title": "username",
                    "type": "string"
                  },"password": {
                    "title": "password",
                    "type": "string",
                    "description": "Password"
                  }
                }
              }
            },"CategoryList": {
              "type": "array",
              "title": "CategoryList",
              "items": {
                "type": "object",
                "properties": {
                  "CategoryId": {
                    "title": "CategoryId",
                    "type": "string"
                  },"CategoryName": {
                    "title": "CategoryName",
                    "type": "string"
                  }
                }
              }
            }
          },

          "required": ["productType","userId"],
          // "order": ["email", "name", "comment"],
        },
        layout: [
          {
            "type": "flex", "flex-flow": "row wrap", "border": false, "items": ["productinstance", "enterpriseAccountId", "enterpriseItemId",
              "businessLocationId", "productType", "productTier", "salesChannelCode", "transactionType", "instanceStatus", "fulfilmentStatus",
              "primaryItemIdForAddon", "previousItemId", "serviceStartDate", "serviceEndDate", "futureRequestedDate", "userId"]
          },{
            "key": "products",
            "add": "Add products",
            "type": "flex", "flex-flow": "row wrap", "border": false,
            "items": ["products[].FirstName", "products[].LastName", "products[].Phone", "products[].EmailID", "products[].BusinessName",
              "products[].PrimaryCity", "products[].confirmationNumber", "products[].proposalId", "products[].notes",
              "products[].primaryCategoryId", "products[].primaryCategoryName"]
          },{
            "key": "WebsiteUrlList",
            "add": "Add URL's",
            "type": "flex", "flex-flow": "row wrap", "border": false,
            "items": ["WebsiteUrlList[].url", "WebsiteUrlList[].isDexmediaSite", "WebsiteUrlList[].isPrimary", "WebsiteUrlList[].isNew",
              "WebsiteUrlList[].username", "WebsiteUrlList[].password"]
          }, {
            "key": "CategoryList",
            "add": "Add Categories",
            "type": "flex", "flex-flow": "row wrap", "border": false,
            "items": ["CategoryList[].CategoryId", "CategoryList[].CategoryName"]
          }
        ], data: displayFormData
      };
    },err => {
        console.log('An error has occured while retreving data from Titan Seo'+ err);
      }
    )
}

  displayData: any = null;

  exampleOnSubmitFn(formData) {
    this.displayData = formData;
    var authData = {}
    var productHead = {}
    var PrimaryCatId = {}
    authData['apiSource'] = "CA";
    productHead['AuthData'] = authData;
    productHead['ProductHeader'] = formData;
    var products = productHead['ProductHeader']['products']
    var category = productHead['ProductHeader']['CategoryList']
    var website = productHead['ProductHeader']['WebsiteUrlList']
    delete productHead['ProductHeader']['products'];
    delete productHead['ProductHeader']['CategoryList'];
    delete productHead['ProductHeader']['WebsiteUrlList'];
    PrimaryCatId['CategoryId'] = products[0]['primaryCategoryId'];
    PrimaryCatId['CategoryName'] = products[0]['primaryCategoryName'];
    products[0]['WebsiteUrlList'] = website;
    products[0]['CategoryList'] = category;
    products[0]['PrimaryCatId'] = PrimaryCatId;
    productHead['products'] = JSON.parse(JSON.stringify(products))
    this.displayData = productHead

    this.titanService.updateSeoData(productHead).subscribe(seodata => {
      console.log(seodata);
    },
      err => {
        console.log('An error has occured while updating  data from Titan Seo' + err);
      }
    )
  } 
}