import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {
  Divider,
  FormControl,
  MenuItem,
  Select,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const cartItems = [
  {
    id: 1,
    name: "book",
    company: "nike",
    countInStock: 3,
  },
  {
    id: 1,
    name: "book",
    company: "nike",
    countInStock: 3,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),
  },

  image: {
    height: "auto",
    width: "100%",
    maxWidth: "400px",
  },
  card: {
    display: "flex",
    margin: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(1),
  },
  qty: {
    display:'flex',
    },
  qtyItem:{
    marginRight:theme.spacing(2),
    marginTop:theme.spacing(2),
    marginBottom:theme.spacing(2)
    
  }  
}));
const Cart = () => {
  const classes = useStyles();
  const [age, setAge] = useState(0);
  return (
    <div className={classes.root}>
      <Paper variant="outlined" className={classes.paper}>
        <div className={classes.top}>
          <Typography variant="h6" component="h2">
            My Cart({cartItems.length})
          </Typography>
          <Button size="small" color="primary" variant="outlined">
            Remove All
          </Button>
        </div>
        <Divider />
        <div className={classes.top}>
          <Typography variant="h6" component="h2">
            Product Name whic is big brand
          </Typography>
          <Typography variant="h6" component="h6">
            Delivered by Fri,16
          </Typography>
        </div>
        <Typography variant="body1" component="p" color="textSecondary">
          Company Name
        </Typography>

        <Typography variant="body1" component="h2" bold>
          Price : 250${" "}
          <span style={{ color: "grey", textDecoration: "line-through" }}>
            200$
          </span>{" "}
          <span style={{ color: "green" }}>29% off</span>{" "}
        </Typography>
        <div className={classes.qty}>
          <Typography component="p" variant="h6" className={classes.qtyItem}>Qty:</Typography>
          <FormControl className={classes.qtyItem}>
            
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Button size="small" variant="outlined" color="primary" className={classes.qtyItem}>Remove</Button>
        </div>
        <Divider />
        {/* checking the responsivesness*/}
        <div className={classes.top}>
          <Typography variant="h6" component="h2">
            Product Name whic is big brand
          </Typography>
          <Typography variant="h6" component="h6">
            Delivered by Fri,16
          </Typography>
        </div>
        <Typography variant="body1" component="p" color="textSecondary">
          Company Name
        </Typography>

        <Typography variant="body1" component="h2" bold>
          Price : 250${" "}
          <span style={{ color: "grey", textDecoration: "line-through" }}>
            200$
          </span>{" "}
          <span style={{ color: "green" }}>29% off</span>{" "}
        </Typography>
        <div className={classes.qty}>
          <Typography component="p" variant="h6" className={classes.qtyItem}>Qty:</Typography>
          <FormControl className={classes.qtyItem}>
            
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Button size="small" variant="outlined" color="primary" className={classes.qtyItem}>Remove</Button>
        </div>
        <Divider />
      </Paper>
    </div>
  );
};

export default Cart;
