import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Card, Divider } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";

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
  paper: {
    "& > *": {
      margin: theme.spacing(2),
      padding: theme.spacing(1),
    },
    root: {
        margin: theme.spacing(2),
        padding: theme.spacing(1),
    },
  },
}));
const Cart = () => {
  const classes = useStyles();
  return (
      <div className={classes.paper}>
    <Card className={classes.root} variant='outlined'>

      <CardActionArea>
        
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Shopping cart
          </Typography>
          
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
};

export default Cart;
