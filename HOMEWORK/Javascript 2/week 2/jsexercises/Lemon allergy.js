const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];
const toEat = fruitBasket.filter(fruitBasket => fruitBasket == "Lemon" ? false : true);
document.write("My mom bought me a fruit basket, containing " + toEat )