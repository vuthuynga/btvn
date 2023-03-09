// B1
var styles = [
    'Jazz',
    'Blues'
]
styles.push('Rock-n-roll')
console.log(styles)

styles.splice(1, 1, 'Classics')
console.log(styles)

console.log(styles.slice(1, 3))


styles.unshift('Rap', 'Reggage')
console.log(styles)


// B2
function sumInput() {

    let numbers = [];
  
    while (true) {
      let value = prompt("Fill in a number!", 0);
        if (value === "" || value === null || !isFinite(value)) break;
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  console.log( sumInput() );


// B3


// B4
function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
  }
  
  let arr = [2, 6, 9, 8];
  
  let find = filterRange(arr, 1, 4);
  
  console.log(find); 
  
  console.log(arr); 

// B5
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];
let names = users.map(item => item.name);

console.log( names ); 

// B6


// B7
var user = {};
user.name = "David";
user.surname = "Xuan";
user.name = "Cafedev";
delete user.name;

console.log(user)


// B8
var salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
var sum = 0;
  for (var key in salaries) {
    sum += salaries[key];
  }
console.log(sum);


// B9
  let menu = {
    width: 200,
    height: 300,
    title: "My menu cafedev"
  };
multiplyNumeric(menu);

function multiplyNumeric(menu) {
    for (let key in menu) {
      if (typeof menu[key] == 'number') {
        menu[key] *= 2;
      }
    }
  }
console.log(menu)


// B10
function Calculator() {
    this.read = function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    };
    this.sum = function() {
      return this.a + this.b;
    };
    this.mul = function() {
      return this.a * this.b;
    };
  }
  
var calculator = new Calculator();
calculator.read();
  
console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );

  
// B11
let num;

do {
  num = prompt("Enter a number > 100?", 0);
} while (num <= 100 && num);


// B12


// B13
function main() {
    const n = String(prompt("Nhập số cần đảo ngược", 1))
    let soDaoNguoc = ''
    for (i = n.length; i >= 0; i--) {
    soDaoNguoc += n.charAt(i)
    }
    console.log({ soDaoNguoc })
  }


// B14

// B15

function tinh_tong(n)
{
    var tong = 0;
    var i = 0;
 
    while (i <= n)
    {
        if (i % 2 == 0){
            tong += i;
        }
         i++;
    }
 
    console.log("Tổng số chẵn từ 1 tới " + n + " là: " + tong );
}
