import FruitContainer from "./components/FruitContainer"
import Input from "./components/Input"
import './App.css'


function App() {
  const fruits = ["apple 🍎", "pineapple 🍍", "banana 🍌", "watermelon 🍉", "cherry 🍒", "guava", "coconut 🥥", "kiwi 🥝", "strawberry 🍓", "mango 🥭", "avocado 🥑"]
  return (
    <div>
      <h1>Fruit Fiter</h1>
      <FruitContainer fruits={fruits} />
    </div>
  );
}

export default App;
