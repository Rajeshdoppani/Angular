import { Component } from '@angular/core';
import { CheckedState } from '@progress/kendo-angular-treeview';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kendo UI Angular Tree View...';

  // Checkbox check
  checkedKeys: any[] = [];
  public key = 'category_name';
  public isChecked = (dataItem: any, index: string): CheckedState => {
    if (this.containsItem(dataItem)) { return 'checked'; }
    return 'none';
  }

  public containsItem(item: any): boolean {
    return this.checkedKeys.indexOf(item[this.key]) > -1;
  }

  public data: any[] = [
    {
      "id": 1,
      "category_name": "Movie Updates",
      "subcategories": [
        {
          "id": 1,
          "category_name": "Hindi"
        },
        {
          "id": 2,
          "category_name": "Telugu"
        },
        {
          "id": 3,
          "category_name": "Tamil"
        },
        {
          "id": 4,
          "category_name": "Malayalam"
        },
        {
          "id": 42,
          "category_name": "English"
        },
        {
          "id": 63,
          "category_name": "Kannada"
        },
        {
          "id": 64,
          "category_name": "Marathi"
        }
      ]
    },
    {
      "id": 2,
      "category_name": "Sports",
      "subcategories": [
        {
          "id": 5,
          "category_name": "Cricket"
        },
        {
          "id": 6,
          "category_name": "Football"
        },
        {
          "id": 7,
          "category_name": "Kabbadi"
        },
        {
          "id": 65,
          "category_name": "Hockey"
        }
      ]
    },
    {
      "id": 3,
      "category_name": "Humour",
      "subcategories": [
        {
          "id": 30,
          "category_name": "Comedy Memes"
        },
        {
          "id": 43,
          "category_name": "Hindi jokes"
        },
        {
          "id": 44,
          "category_name": "English Funny Jokes"
        },
        {
          "id": 45,
          "category_name": "Tamil Jokes"
        },
        {
          "id": 66,
          "category_name": "Kannada Jokes"
        },
        {
          "id": 67,
          "category_name": "Malayalam Jokes"
        }
      ]
    },
    {
      "id": 5,
      "category_name": "Jewellery",
      "subcategories": [
        {
          "id": 9,
          "category_name": "Necklace"
        },
        {
          "id": 10,
          "category_name": "Bangles"
        },
        {
          "id": 11,
          "category_name": "Rings and earrings"
        },
        {
          "id": 12,
          "category_name": "Chain and Braclets"
        }
      ]
    },
    {
      "id": 6,
      "category_name": "Receipes",
      "subcategories": [
        {
          "id": 13,
          "category_name": "Street food"
        },
        {
          "id": 14,
          "category_name": "South Indian"
        },
        {
          "id": 15,
          "category_name": "Chinise"
        },
        {
          "id": 16,
          "category_name": "North Indian"
        }
      ]
    },
    {
      "id": 7,
      "category_name": "Tips",
      "subcategories": []
    },
    {
      "id": 8,
      "category_name": "Quotes",
      "subcategories": [
        {
          "id": 17,
          "category_name": "Love"
        },
        {
          "id": 38,
          "category_name": "Wedding"
        },
        {
          "id": 39,
          "category_name": "Friendship"
        },
        {
          "id": 40,
          "category_name": "Birthday"
        }
      ]
    },
    {
      "id": 9,
      "category_name": "Womens Fashion",
      "subcategories": [
        {
          "id": 74,
          "category_name": "Sarees"
        },
        {
          "id": 75,
          "category_name": "Ethnic"
        },
        {
          "id": 76,
          "category_name": "Street Style"
        }
      ]
    },
    {
      "id": 10,
      "category_name": "Make over",
      "subcategories": [
        {
          "id": 77,
          "category_name": "Mehendi"
        },
        {
          "id": 78,
          "category_name": "Nail Arts"
        }
      ]
    },
    {
      "id": 11,
      "category_name": "Celebrities",
      "subcategories": [
        {
          "id": 58,
          "category_name": "Hollywood"
        },
        {
          "id": 59,
          "category_name": "Indian Celebrities"
        }
      ]
    },
    {
      "id": 12,
      "category_name": "Automobiles",
      "subcategories": [
        {
          "id": 72,
          "category_name": "Cars"
        },
        {
          "id": 73,
          "category_name": "Bikes"
        }
      ]
    },
    {
      "id": 13,
      "category_name": "Mens Fashion",
      "subcategories": [
        {
          "id": 31,
          "category_name": "Ethnic wear"
        },
        {
          "id": 32,
          "category_name": "Party wear"
        },
        {
          "id": 33,
          "category_name": "Casuals"
        },
        {
          "id": 34,
          "category_name": "Outfits"
        }
      ]
    },
    {
      "id": 15,
      "category_name": "Interior designs",
      "subcategories": [
        {
          "id": 22,
          "category_name": "Home"
        },
        {
          "id": 23,
          "category_name": "Office"
        },
        {
          "id": 25,
          "category_name": "Kids"
        },
        {
          "id": 26,
          "category_name": "Restaurant"
        }
      ]
    },
    {
      "id": 16,
      "category_name": "Health and Fitness",
      "subcategories": [
        {
          "id": 24,
          "category_name": "Yoga"
        },
        {
          "id": 27,
          "category_name": "Diet"
        },
        {
          "id": 28,
          "category_name": "Fitness"
        },
        {
          "id": 29,
          "category_name": "Nutrition"
        }
      ]
    },
    {
      "id": 19,
      "category_name": "Adults only",
      "subcategories": [
        {
          "id": 18,
          "category_name": "indian hot actresses"
        },
        {
          "id": 19,
          "category_name": "hot indian girls"
        },
        {
          "id": 20,
          "category_name": "Gossips"
        },
        {
          "id": 21,
          "category_name": "Bolly Hot actress"
        }
      ]
    },
    {
      "id": 20,
      "category_name": "News",
      "subcategories": [
        {
          "id": 35,
          "category_name": "National"
        },
        {
          "id": 36,
          "category_name": "International"
        },
        {
          "id": 37,
          "category_name": "Regional News"
        }
      ]
    },
    {
      "id": 22,
      "category_name": "IPL",
      "subcategories": [
        {
          "id": 50,
          "category_name": "sunrisers hyderabd"
        },
        {
          "id": 51,
          "category_name": "Mumbai Indians"
        },
        {
          "id": 52,
          "category_name": "chennaiipl"
        },
        {
          "id": 53,
          "category_name": "Royal Challangers Banglore"
        },
        {
          "id": 54,
          "category_name": "Rajasthan Royals"
        },
        {
          "id": 55,
          "category_name": "kxipofficial"
        },
        {
          "id": 56,
          "category_name": "Kolkata Knight Riders"
        },
        {
          "id": 57,
          "category_name": "Delhicapitals"
        }
      ]
    },
    {
      "id": 24,
      "category_name": "Live Discussions",
      "subcategories": [
        {
          "id": 71,
          "category_name": "Live A"
        }
      ]
    }
  ];

  public children = (dataItem: any) => of(dataItem.subcategories);

  public fetchChildren(node: any) {
    return of(node.subcategories);
  }

  public hasChildren(node: any): boolean {
    return node.subcategories && node.subcategories.length > 0;
  }
}
