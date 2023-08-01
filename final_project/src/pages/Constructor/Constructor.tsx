import React, { useState } from "react";
import "./index.scss";
import { amber, yellow } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { addToCart } from "../../store/reducers/cartSlice";

const theme = createTheme({
  palette: {
    primary: {
      main: "#af8e4d",
    },
  },
});

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CoffeeBuilder = () => {
  const [ingredients, setIngredients] = useState({
    espresso: 0,
    sugar: 0,
    milkTypes: "",
    syrup: "",
    extras: [] as string[],
  });

  const milkPrice: Record<string, number> = {
    none: 0, 
    cow: 1.0, 
    rice: 1.0, 
    oat: 1.2, 
    soy: 1.3, 
    almond: 1.0, 
  };
  const syrupPrices: Record<string, number> = {
    none: 0, 
    caramel: 1.5, 
    vanilla: 1.0, 
    strawberry: 1.2, 
    blackberry: 1.3, 
    almond: 1.0, 
    chocolate: 1.5, 
    mint: 1.2, 
  };

  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { cart } = useSelector((state: RootState) => state.cart);

  const getTotalQuantity = (): number => {
    let total = 0;
    cart.map((item: any) => {
      total += item.quantity;
    });
    return total;
  };

  const handleIngredientChange = (ingredient: string, value: any) => {
    setIngredients((prevIngredients) => ({
      ...prevIngredients,
      [ingredient]: value,
    }));
  };

  const handleExtrasChange = (extra: string) => {
    if (ingredients.extras.includes(extra)) {
      setIngredients((prevIngredients) => ({
        ...prevIngredients,
        extras: prevIngredients.extras.filter((item) => item !== extra),
      }));
    } else {
      setIngredients((prevIngredients) => ({
        ...prevIngredients,
        extras: [...prevIngredients.extras, extra],
      }));
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const extraPrices: Record<string, number> = {
      whippedCream: 0.5,
      chocolate: 0.75,
    };

    
    const totalEspressoPrice = ingredients.espresso * 1.5; 
    const totalSugarPrice = ingredients.sugar * 0.5; 
    const totalMilkPrice = milkPrice[ingredients.milkTypes]; 
    const totalSyrupPrice = syrupPrices[ingredients.syrup]; 

    const totalExtrasPrice = ingredients.extras.reduce((acc, extra) => {
      return acc + extraPrices[extra];
    }, 0);

    const totalPrice =
      totalEspressoPrice +
      totalSugarPrice +
      totalMilkPrice +
      totalSyrupPrice +
      totalExtrasPrice;

    setTotalPrice(totalPrice);
  };

  const imageUrl = "/Group 2.png";
  const nameCoffee = "Your own coffee";

  return (
    <ThemeProvider theme={theme}>
      <div className="builder">
        <h2 className="builder__title">Coffee Builder</h2>
        <div className="builder__wrapper">
          <div className="builder__wrap">
            <div className="builder__image">
              <img
                className="builder__image-png"
                src="/Group 2.png"
                alt="foto"
              />
            </div>
            <div className="builder__info">
              <h4 className="builder__name">Your own coffee</h4>
              <p className="builder__price">Price: {totalPrice.toFixed(2)}$</p>
              <button
                className="builder__button"
                onClick={() =>
                  dispatch(
                    addToCart({
                      price: totalPrice,
                      image: imageUrl,
                      name: nameCoffee,
                    })
                  )
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="builder__content">
          <form onSubmit={handleSubmit}>
            <div className="builder__inputs">
              <div className="builder__input">
                <Box sx={{ maxWidth: 90 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Espresso
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={ingredients.espresso}
                      label="espresso"
                      onChange={(e) =>
                        handleIngredientChange("espresso", e.target.value)
                      }
                    >
                      <MenuItem value={0}>0</MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <div className="builder__input">
                <Box sx={{ maxWidth: 90 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Sugar</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={ingredients.sugar}
                      label="sugar"
                      onChange={(e) =>
                        handleIngredientChange("sugar", e.target.value)
                      }
                    >
                      <MenuItem value={0}>0</MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <div className="builder__input">
                <Box sx={{ maxWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Milk</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={ingredients.milkTypes}
                      label="Milk"
                      onChange={(e) =>
                        handleIngredientChange("milkTypes", e.target.value)
                      }
                    >
                      <MenuItem value={"none"}>None</MenuItem>
                      <MenuItem value={"cow"}>Cow's</MenuItem>
                      <MenuItem value={"oat"}>Oat</MenuItem>
                      <MenuItem value={"soy"}>Soy</MenuItem>
                      <MenuItem value={"rice"}>Rice</MenuItem>
                      <MenuItem value={"almond"}>Almond</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <div className="builder__input">
                <Box sx={{ maxWidth: 130 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Syrup:
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={ingredients.syrup}
                      label="Age"
                      onChange={(e) =>
                        handleIngredientChange("syrup", e.target.value)
                      }
                    >
                      <MenuItem value={"none"}>None</MenuItem>
                      <MenuItem value={"caramel"}>Caramel</MenuItem>
                      <MenuItem value={"vanilla"}>Vanilla</MenuItem>
                      <MenuItem value={"strawberry"}>Strawberry</MenuItem>
                      <MenuItem value={"blackberry"}>Blackberry</MenuItem>
                      <MenuItem value={"almond"}>Almond</MenuItem>
                      <MenuItem value={"chocolate"}>Chocolate</MenuItem>
                      <MenuItem value={"mint"}>Mint</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
            </div>
            <div className="builder__input-extras">
              <p className="builder__name-extras">Extras:</p>
              <div className="builder__labels">
                <label className="builder__label">
                  <Checkbox
                    checked={ingredients.extras.includes("whippedCream")}
                    onChange={() => handleExtrasChange("whippedCream")}
                    {...label}
                    defaultChecked
                  />
                  Whipped Cream
                </label>
                <label className="builder__label">
                  <Checkbox
                    checked={ingredients.extras.includes("chocolate")}
                    onChange={() => handleExtrasChange("chocolate")}
                    {...label}
                    defaultChecked
                  />
                  Chocolate
                </label>
              </div>
            </div>
            <button
              className="builder__button builder__button-bottom"
              type="submit"
            >
              Build Coffee
            </button>
          </form>
        </div>
        <div className="shopping-cart" onClick={() => navigate("/cart")}>
          <ShoppingCart id="cartIcon" />
          <p>{getTotalQuantity() || 0}</p>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default CoffeeBuilder;
