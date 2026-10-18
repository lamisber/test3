import { useState } from 'react';

// // Task 1
// interface GreetingProps { name: string; emoji?: string; }
// function Greeting({ name, emoji = '👋' }: GreetingProps) {
//   return <h2>{emoji} Hello, {name}!</h2>;
// }


// function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count - 1)} disabled={count === 0}>−</button>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   );
// }

// // // Task 3
// function Details() {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? 'Hide details' : 'Show details'}
//       </button>
//       {isOpen && <p>React is a library for building user interfaces.</p>}
//     </div>
//   );
// }

// // Task 4  (CSS: .done { text-decoration: line-through; color: gray; })
// function TodoList() {
//   const doneCount = todos.filter(t => t.done).length;
//   return (
//     <div>
//       <p>{doneCount} of {todos.length} done</p>
//       <ul>
//         {todos.map(todo => (
//           <li key={todo.id} className={todo.done ? 'done' : ''}>
//             {todo.done && '✔ '}{todo.title}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // Task 5
// interface ProductCardProps {
//   name: string;
//   price: number;
//   inStock: boolean;
//   onAddToCart: () => void;
// }
// function ProductCard({ name, price, inStock, onAddToCart }: ProductCardProps) {
//   return (
//     <div className="card">
//       <h3>{name}</h3>
//       <p>${price}</p>
//       {!inStock && <p style={{ color: 'gray' }}>Out of stock</p>}
//       <button disabled={!inStock} onClick={onAddToCart}>Add to cart</button>
//     </div>
//   );
// }


// function Shop() {
//   const [cartCount, setCartCount] = useState(0);
//   const add = () => setCartCount(cartCount + 1);
//   return (
//     <div>
//       <p>🛒 {cartCount}</p>
//       <ProductCard name="Laptop" price={999} inStock={true} onAddToCart={add} />
//       <ProductCard name="Phone" price={499} inStock={false} onAddToCart={add} />
//     </div>
//   );
// }

// // Challenge
// interface Contact { id: number; name: string; phone: string; }
// const contacts: Contact[] = [
//   { id: 1, name: 'Ahmad', phone: '0791111111' },
//   { id: 2, name: 'Sara', phone: '0792222222' },
//   { id: 3, name: 'Samer', phone: '0793333333' },
// ];
// function ContactSearch() {
//   const [search, setSearch] = useState('');
//   const results = contacts.filter(c =>
//     c.name.toLowerCase().includes(search.toLowerCase())
//   );
//   return (
//     <div>
//       <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..." />
//       <p>{results.length} contact(s)</p>
//       {results.length === 0 ? (
//         <p>No contacts found</p>
//       ) : (
//         <ul>
//           {results.map(c => (
//             <li key={c.id}>{c.name}: {c.phone}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }



export default Greeting;
// export default Counter;

// export default Details;

//  export default TodoList;
  // export default ProductCard;

