import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ng4 Pagination';
  p: number = 1;
  collection = [];
  constructor() {
    
    this.collection =
      [
        {
          "productId": 204,
          "productName": "Refractory Bricks (5400 - 600)"
        },
        {
          "productId": 205,
          "productName": "Refractory Bricks (749 - 249)"
        },
        {
          "productId": 206,
          "productName": "Refractory Bricks (0.5 - 2)"
        },
        {
          "productId": 207,
          "productName": "Refractory Bricks (0.01 - 9)"
        },
        {
          "productId": 208,
          "productName": "Refractory Bricks (864.0 - 884.0)"
        },
        {
          "productId": 209,
          "productName": "Refractory Bricks (5 - 20)"
        },
        {
          "productId": 210,
          "productName": "Refractory Bricks (50 - 1000)"
        },
        {
          "productId": 211,
          "productName": "Refractory Bricks (810 - 860)"
        },
        {
          "productId": 212,
          "productName": "Refractory Bricks (600 - 1000)"
        },
        {
          "productId": 213,
          "productName": "Refractory Bricks (0.2 - 10)"
        },
        {
          "productId": 214,
          "productName": "Refractory Bricks (160 - 500)"
        },
        {
          "productId": 215,
          "productName": "Refractory Bricks (100 - 300)"
        },
        {
          "productId": 226,
          "productName": "Insulating (1)"
        },
        {
          "productId": 227,
          "productName": "Insulating (250 - 260)"
        },
        {
          "productId": 228,
          "productName": "Insulating (0.37 - 0.42)"
        },
        {
          "productId": 229,
          "productName": "Insulating (2400)"
        },
        {
          "productId": 230,
          "productName": "Insulating (500 - 2000)"
        },
        {
          "productId": 231,
          "productName": "Insulating (0.5)"
        },
        {
          "productId": 232,
          "productName": "Insulating (30.29 - 40.69)"
        },
        {
          "productId": 233,
          "productName": "Insulating (0.01)"
        },
        {
          "productId": 234,
          "productName": "Insulating (4 - 15)"
        },
        {
          "productId": 235,
          "productName": "Insulating (600 - 1000)"
        },
        {
          "productId": 236,
          "productName": "Insulating (200)"
        },
        {
          "productId": 237,
          "productName": "Perirali Coir Brick Plant"
        },
        {
          "productId": 238,
          "productName": "Coir Peat Block Terracet (5 KG)"
        },
        {
          "productId": 239,
          "productName": "Coir Peat Brick For Terracet"
        },
        {
          "productId": 240,
          "productName": "Green & Pure Organic Coir"
        },
        {
          "productId": 241,
          "productName": "Coir Brick (650 Grams)"
        },
        {
          "productId": 242,
          "productName": "Fly Ash Bricks Making Machine"
        },
        {
          "productId": 243,
          "productName": "Fully Automatic Fly Ash Bricks"
        },
        {
          "productId": 244,
          "productName": "Fully Automatic Fly Ash Bricks"
        },
        {
          "productId": 245,
          "productName": "Semi Automatic Fly Ash Bricks Plant"
        },
        {
          "productId": 246,
          "productName": "Fargreen Eco Friendly Coco"
        },
        {
          "productId": 247,
          "productName": "Coco Peat Compressed"
        },
        {
          "productId": 248,
          "productName": "Coco Peat Sky Black (1 No.)"
        },
        {
          "productId": 249,
          "productName": "Coco Peat Bricks H (1 No)"
        },
        {
          "productId": 250,
          "productName": "Coco Peat Potting Medium"
        },
        {
          "productId": 251,
          "productName": "Sanjay Nurseries Coco Peat Bricks"
        },
        {
          "productId": 252,
          "productName": "Coco Peat Brick (650 Gms)"
        },
        {
          "productId": 253,
          "productName": "Coco Peat Brick 45"
        },
        {
          "productId": 254,
          "productName": "Coco Peat Brick Coco Peat"
        },
        {
          "productId": 255,
          "productName": "Coco Ogandena Coco Peat Brick"
        },
        {
          "productId": 256,
          "productName": "Coco Brick 5 KGS x Z Nos"
        },
        {
          "productId": 257,
          "productName": "Papper Agro Organic Coco"
        },
        {
          "productId": 258,
          "productName": "Coco Fiber Peat For Gardenning"
        },
        {
          "productId": 259,
          "productName": "Alumina (1 / Ton)"
        },
        {
          "productId": 260,
          "productName": "Alumina (300 / Ton)"
        },
        {
          "productId": 261,
          "productName": "Alumina (150 - 600 / Ton)"
        },
        {
          "productId": 262,
          "productName": "Alumina (5 / Pc)"
        },
        {
          "productId": 263,
          "productName": "Alumina (235 / Ton)"
        }
      ]
  }
  pageChange(Event){
    console.log(Event);
  }
}
