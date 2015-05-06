function terminal() {}

terminal.prototype = {
    setPricing: function (A, B, C, D) {
        this.A = A;
        this.B = B;
        this.C = C;
        this.D = D;
    },
    count: [],
    scan: function (food) {
        this.count.push(food);
    },
    isDivisible: function (foodCount, number) {
        return foodCount % number === 0;
    },
    isDivBySix: function (foodCount) {
        return foodCount % 6 === 0;
    },
    total: function () {
        var countArr = this.count;
        var countString = countArr.join('');
        var price = 0;
        var foodArr = ["A", "B", "C", "D"];
        var i;
        var len = foodArr.length;
        for (i = 0; i < len; i++) {
            var foodCount = (countString.match(new RegExp(foodArr[i], "g")) || []).length; //logs 4
            //TODO take care of remainder numbers with discounts
            switch (foodArr[i]) {
                case "A":
                    if (this.isDivisible(foodCount, 4)) {
                        price += foodCount / 4 * 7;
                    } else {
                        price += ((foodCount - foodCount % 4) / 4) * 7 + (foodCount % 4) * 2;
                    }
                    break;
                case "B":
                    price += foodCount * 12;
                    break;
                case "C":
                    if (this.isDivisible(foodCount, 6)) {
                        price += foodCount / 6 * 6;
                    } else {
                        foodCount < 6 ? price += (foodCount) * 1.25 : price += ((foodCount - foodCount % 6) / 6) * 1.25 + (foodCount % 6) * 6;
                    }
                    break;
                case "D":
                    price += foodCount * 0.15;
                    break;
                default:
                    console.log("default");

            }

        } //for
        return price;
    }
};

var t1 = new terminal();
t1.setPricing("$2 each or 4 for $7", "$12 ", "$1.25 each or $6 for a six-pack", "$.15 ");
t1.scan("C");
t1.scan("C");
t1.scan("C");
t1.scan("C");
t1.scan("C");
t1.scan("C");
t1.scan("C");
console.log("the total of CCCCCC scaned items is "
+t1.total());


var t2 = new terminal();
t2.setPricing("$2 each or 4 for $7", "$12 ", "$1.25 each or $6 for a six-pack", "$.15 ");
t2.count = [];
t2.scan("A");
t2.scan("B");
t2.scan("C");
t2.scan("D");
t2.scan("A");
t2.scan("B");
t2.scan("A");
t2.scan("A");
console.log("the scaned item totals of ABCDABAA is "+
t2.total());

var t3 = new terminal();
t3.setPricing("$2 each or 4 for $7", "$12 ", "$1.25 each or $6 for a six-pack", "$.15 ");
t3.count = [];
t3.scan("A");
t3.scan("B");
t3.scan("C");
t3.scan("D");
console.log("the scaned item totals of ABCD is "+
t3.total());