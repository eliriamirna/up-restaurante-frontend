import React, { useState, useEffect } from "react";
import api from "../../service/api";
import { Container, Header, Content, Order, Item } from "./styles";
import Logo from "../../components/Logo";
import Button from "../../components/Button";

import { parseISO } from "date-fns";
import { utcToZonedTime, format } from "date-fns-tz";

const KitchenOrders = () => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    api.get("/order").then((response) => {
      const orders = response.data;
      setOrderList([...orders]);
    });
  }, []);

  const displayTime = (dateString) => {
    const parsedDate = parseISO(`${dateString}Z`);
    const znDate = utcToZonedTime(parsedDate, "America/Sao_Paulo");

    return format(znDate, "H:mm");
  };

  const closeOrder = (orderId) => {
    const status = {
      status: "pronto",
    };

    api.put(`/order/${orderId}`, status).then((response) => {
      orderList.forEach((order, index) => {
        if (order.id === orderId) {
          orderList.splice(index, 1);
        }
      });

      setOrderList([...orderList]);
    });
  };

  return (
    <Container>
      <Header>
        <Logo></Logo>
      </Header>

      <Content>
        <ul>
          {orderList.map((order, index) => {
            return (
              <Order>
                <h1>{index + 1}</h1>
                <h3>{order.customer_name}</h3>
                <ul>
                  {order.orderItems.map((item) => {
                    return (
                      <Item>
                        <span>{item.product.product_id}</span>
                        <span id="name">{item.product.name}</span>
                        <span>{item.quantity}</span>
                      </Item>
                    );
                  })}
                </ul>
                <p>{order.notes}</p>
                <h1>{displayTime(order.created_at)}</h1>
                <div id="button">
                  <Button onClick={() => closeOrder(order.id)}>Pronto</Button>
                </div>
              </Order>
            );
          })}
        </ul>
      </Content>
    </Container>
  );
};

export default KitchenOrders;
