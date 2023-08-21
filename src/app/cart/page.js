// import React, { useState } from 'react';
// import Header from '@/components/Header';
// import CartItem from '@/components/CartItem';
// import PaymentOption from '@/components/PaymentOption';

// const Cart = () => {
//   const [selectedPayment, setSelectedPayment] = useState('');

//   const cartItems = [
//     { name: 'Feijão', price: 2.5, quantity: 2 },
//     { name: 'Arroz', price: 1.8, quantity: 1 },
//   ];

//   const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <div className="bg-gray-100 min-h-screen p-8">
//       <Header />
//       <div className="w-2/3 mx-auto">
//         <h1 className="text-3xl font-bold mb-4">Carrinho de Compras</h1>
//         {cartItems.map((item, index) => (
//           <CartItem
//             key={index}
//             name={item.name}
//             price={item.price}
//             quantity={item.quantity}
//           />
//         ))}
//         <div className="mt-4">
//           <h2 className="text-lg font-semibold mb-2">Total: R$ {totalPrice.toFixed(2)}</h2>
//           <h3 className="text-md font-semibold mb-2">Escolha a forma de pagamento:</h3>
//           <PaymentOption
//             option="Boleto"
//             selected={selectedPayment}
//             onSelect={setSelectedPayment}
//           />
//           <PaymentOption
//             option="Crédito"
//             selected={selectedPayment}
//             onSelect={setSelectedPayment}
//           />
//           <PaymentOption
//             option="Débito"
//             selected={selectedPayment}
//             onSelect={setSelectedPayment}
//           />
//           <PaymentOption
//             option="PIX"
//             selected={selectedPayment}
//             onSelect={setSelectedPayment}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;
