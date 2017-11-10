class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    this.items.forEach( item => {
      
      if (item.name !='Sulfuras, Hand of Ragnaros') {
        this.decreaseSellIn(item);
      }
      
      switch(item.name) {
        case "Aged Brie":
          this.ifCheese(item);
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          this.ifBackstagePasse(item);
          break;
        case "Sulfuras, Hand of Ragnaros":
          break;
        default:
          this.ifRegularItem(item);
      }
    });

    return this.items;
  }


  ifCheese(item) {
    if (item.quality < 50) {
      item.sellIn < 0 ? item.quality += 2 : item.quality += 1;
    }
  };

  ifBackstagePasse(item) {
    if (item.quality < 50) {
      if(item.sellIn <= 5) {
        item.quality += 3;
      }
      else if(item.sellIn <= 10) {
        item.quality += 2;
      }
      else {
        item.quality += 1;
      }
    }

    if(item.sellIn <= 0) {
      item.quality = 0;
    }
  };

  ifRegularItem(item) {
    if (item.quality > 0 && item.quality < 50) {
      if (item.sellIn > 0) {
        item.quality -= 1;
      }
      else {
        item.quality -= 2; 
      }
    }
  };

  decreaseSellIn(item) {
    item.sellIn -= 1;
  };

}
