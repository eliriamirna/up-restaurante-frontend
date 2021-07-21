import React, { useState, useEffect } from "react";
import api from "../../service/api";
import {
  Container,
  Header,
  ItemList,
  ShoppingCart,
  ItemContent,
  ShoppingCartItems,
  ShoppingCartSummary,
  Item,
  BoxValue,
} from "./styles";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import { FiSearch, FiPlus, FiMinus, FiUser } from "react-icons/fi";
import { useHistory } from "react-router-dom";

const CustomerPage = () => {
  const [productsList, setProductsList] = useState([]);
  const [shoppingCartList, setShoppingCartList] = useState([]);
  const [paymentType, setPaymentType] = useState("");
  const [totalValue, setTotalValue] = useState(0);
  const [moneyChange, setMoneyChange] = useState(0);
  const [totalMoney, setTotalMoney] = useState(0);
  const [customerName, setCustomerName] = useState("");
  const [notes, setNotes] = useState("");
  const [filterProductsList, setFilterProductsList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    api.get("/product").then((response) => {
      const products = response.data;
      setProductsList([...products]);
      setFilterProductsList([...products]);
    });
  }, []);

  useEffect(() => {
    let totalValue = 0;
    shoppingCartList.forEach((item) => {
      totalValue += item.value * item.quantity;
    });

    if (totalMoney >= totalValue) {
      setMoneyChange(totalMoney - totalValue);
    } else {
      setMoneyChange(0);
    }
    setTotalValue(totalValue);
  }, [shoppingCartList, totalMoney]);

  const addItemToCart = (product) => {
    let isDuplicated = false;
    const cartItem = {
      id: product.id,
      name: product.name,
      quantity: 1,
      value: product.value,
    };

    shoppingCartList.forEach((item) => {
      if (item.id === product.id) {
        isDuplicated = true;
        item.quantity++;
      }
    });

    if (isDuplicated) {
      setShoppingCartList([...shoppingCartList]);
    } else {
      setShoppingCartList([...shoppingCartList, cartItem]);
    }
  };

  const changeQuantity = (cartItem, operator) => {
    shoppingCartList.forEach((item, index) => {
      if (item.id === cartItem.id) {
        if (operator === "+") {
          item.quantity++;
        } else {
          item.quantity--;

          if (item.quantity === 0) {
            shoppingCartList.splice(index, 1);
          }
        }
      }
    });
    setShoppingCartList([...shoppingCartList]);
  };

  function selectPaymentType(e) {
    setPaymentType(e.target.value);
  }

  const searchItems = (e) => {
    const search = e.target.value.toLowerCase();

    if (search === "") {
      setFilterProductsList([...productsList]);
    } else {
      const filteredItems = productsList.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.product_id.toLowerCase().includes(search)
      );

      setFilterProductsList([...filteredItems]);
    }
  };

  const submitOrder = () => {
    const order = {
      customer_name: customerName,
      notes: notes,
      payment_type: paymentType,
      items: shoppingCartList.map((cartItem) => {
        return { quantity: cartItem.quantity, product_id: cartItem.id };
      }),
    };

    api.post("/order", order).then(() => {
      history.push("/success");
    });
  };

  return (
    <Container>
      <Header>
        <Logo></Logo>
        <div id="input">
          <Input
            iconRight={FiSearch}
            type="text"
            name="search"
            placeholder="Buscar seu UP"
            onChange={(e) => searchItems(e)}
          />
        </div>
      </Header>
      <ItemList>
        {filterProductsList.map((product) => {
          return (
            <ItemContent
              key={product.id}
              onClick={() => addItemToCart(product)}
            >
              <div id="img_div">
                <img src={product.image_url} alt="" />
              </div>
              <div>
                <strong>{product.name}</strong>
                <p>{product.description}</p>
                <strong>R$ {product.value.toFixed(2)}</strong>
              </div>
            </ItemContent>
          );
        })}
      </ItemList>

      <ShoppingCart>
        <div>
          <ShoppingCartItems>
            <ul>
              {shoppingCartList.map((cartItem) => {
                return (
                  <Item key={cartItem.id}>
                    <span>{cartItem.name}</span>
                    <div>
                      <button
                        type="button"
                        onClick={() => changeQuantity(cartItem, "-")}
                      >
                        <FiMinus />
                      </button>
                      <span>{cartItem.quantity}</span>
                      <button
                        type="button"
                        onClick={() => changeQuantity(cartItem, "+")}
                      >
                        <FiPlus />
                      </button>
                    </div>
                  </Item>
                );
              })}
            </ul>
            <TextArea
              rows="3"
              placeholder="Alguma observação?"
              name="notes"
              onChange={(e) => setNotes(e.target.value)}
            ></TextArea>
          </ShoppingCartItems>
          <ShoppingCartSummary>
            <h1>Resumo do Pedido</h1>
            <Input
              name="customer_name"
              placeholder="Insira seu nome"
              onChange={(e) => setCustomerName(e.target.value)}
              iconLeft={FiUser}
            ></Input>

            <div>
              <div id="payment-type">
                <select
                  name="payment_type"
                  defaultValue={""}
                  onChange={selectPaymentType}
                >
                  <option value="" disabled>
                    Forma de pagamento
                  </option>
                  <option value="Cartão Crédito">Cartão Crédito</option>
                  <option value="Cartão Débito">Cartão Débito</option>
                  <option value="Pix">Pix</option>
                  <option value="Dinheiro">Dinheiro</option>
                </select>
              </div>
              <Input
                placeholder="Valor a ser pago"
                type="number"
                onChange={(e) => setTotalMoney(Number(e.target.value))}
              ></Input>
            </div>
            <div id="value-summary">
              <BoxValue>
                <span>Valor Total</span>
                <strong>R$ {totalValue.toFixed(2)}</strong>
              </BoxValue>
              <BoxValue>
                <span>Troco</span>
                <strong>R$ {moneyChange.toFixed(2)}</strong>
              </BoxValue>
            </div>
          </ShoppingCartSummary>
        </div>
        <Button id="submit-button" onClick={() => submitOrder()}>
          Enviar Pedido
        </Button>
      </ShoppingCart>
    </Container>
  );
};

export default CustomerPage;
