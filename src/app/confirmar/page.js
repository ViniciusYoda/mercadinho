import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import CartItem from '@/components/CartItem';
import PaymentOption from '@/components/PaymentOption';

const Confirmar = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/produtos')
      .then((response) => response.json())
      .then((data) => {
        setCartItems(data.items);
        setTotalPrice(data.total);
        setSelectedPayment(data.pagamento);
      })
      .catch((error) => {
        console.error('Erro ao buscar detalhes do pedido:', error);
      });
  }, []);

  const atualizarMetodoPagamento = () => {
    const apiUrl = 'URL_DA_SUA_API';
    const novoPedido = {
      items: cartItems,
      total: totalPrice,
      pagamento: selectedPayment,
    };

    fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoPedido),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Método de pagamento atualizado com sucesso.');
        } else {
          console.error('Erro ao atualizar o método de pagamento.');
        }
      })
      .catch((error) => {
        console.error('Erro ao atualizar o método de pagamento:', error);
      });
  };

  const excluirItemDoCarrinho = (index) => {
    const apiUrl = `URL_DA_SUA_API/${index}`;

    fetch(apiUrl, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          console.log('Item excluído com sucesso.');
          const novoCarrinho = [...cartItems];
          novoCarrinho.splice(index, 1);
          setCartItems(novoCarrinho);
        } else {
          console.error('Erro ao excluir o item do carrinho.');
        }
      })
      .catch((error) => {
        console.error('Erro ao excluir o item do carrinho:', error);
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <Header />
      <div className="w-2/3 mx-auto">
        <h1 className="text-3xl font-bold mb-4">Confirmação de Pedido</h1>
        {cartItems.map((item, index) => (
          <CartItem
            key={index}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onRemove={() => excluirItemDoCarrinho(index)}
          />
        ))}
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Total: R$ {totalPrice.toFixed(2)}</h2>
          <h3 className="text-md font-semibold mb-2">Escolha a forma de pagamento:</h3>
          <PaymentOption
            option="Boleto"
            selected={selectedPayment}
            onSelect={setSelectedPayment}
          />

          <div className="mt-4">
            <button
              onClick={atualizarMetodoPagamento}
              className="bg-indigo-500 text-white px-4 py-2 rounded-full"
            >
              Atualizar Método de Pagamento
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmar;
