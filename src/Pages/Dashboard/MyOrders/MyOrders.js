import {
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useAuth();
  const history = useHistory();
  useEffect(() => {
    fetch(`https://dry-springs-50521.herokuapp.com/orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyOrders(data);
      });
  }, [myOrders, user?.email]);
  const handleDeleteOrder = (id) => {
    // eslint-disable-next-line no-restricted-globals
    const confirmation = confirm("Are you sure you want to delete this order?");
    if (confirmation) {
      fetch(`https://dry-springs-50521.herokuapp.com/orders/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };
  return (
    <Container sx={{ my: 10 }}>
      <Typography
        variant="h3"
        sx={{
          mb: 8,
          color: "var(--blue-color)",
          fontFamily: "var(--dosis-font)",
          fontWeight: 600,
        }}
      >
        My Orders
      </Typography>
      <Grid container spacing={3}>
        {myOrders.map((order) => (
          <Grid key={order._id} item xs={12} lg={6} sx={{ pr: 3, pb: 3 }}>
            <Card
              sx={{
                maxWidth: "auto",
                display: "flex",
                alignItems: "center",
                px: 3,
                py: { xs: 2, md: 5 },
                boxShadow: "var(--box-shadow)",
                borderRadius: 3,
                overflowY: "scroll",
              }}
            >
              <img
                style={{ width: "100px", height: "145px" }}
                src={order.image}
                alt="ordered products img"
              />
              <CardMedia
                sx={{
                  height: "100px",
                  ml: 2,
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: "left",
                    fontFamily: "var(--dosis-font)",
                    fontWeight: 600,
                  }}
                >
                  {order.name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "white",
                    textAlign: "left",
                    my: 1,
                    background:
                      order.status === "shipped" ? "var(--color)" : "#7158e2",
                    fontSize: "15px",
                    p: 0.5,
                    borderRadius: "3px",
                  }}
                >
                  {order.status}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  <Button
                    variant="contained "
                    sx={{
                      mt: 2,
                      color: "black",
                      border: 2,
                      borderColor: "var(--color)",
                      borderRadius: 20,
                      fontSize: 14,
                      px: 4,
                      py: 0.4,
                    }}
                    className="product-card-button button"
                    onClick={() => handleDeleteOrder(order._id)}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained "
                    sx={{
                      mt: 2,
                      color: "black",
                      border: 2,
                      borderColor: "var(--color)",
                      borderRadius: 20,
                      fontSize: 14,
                      px: 4,
                      py: 0.4,
                    }}
                    className="product-card-button button"
                    onClick={() =>
                      history.push(`/dashboard/payment/${order._id}`)
                    }
                  >
                    {order.isPaid ? "Paid" : "Pay"}
                  </Button>
                </Box>
              </CardMedia>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MyOrders;
