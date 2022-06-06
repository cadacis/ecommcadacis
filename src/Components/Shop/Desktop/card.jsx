import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import { addItem, updateItem } from '../../../redux/actions/cart';
import { Icon } from '@iconify/react';
import { useSelector, useDispatch } from 'react-redux';
const CustomCard = (props) => {
  const data = props.data;
  const dispatch = useDispatch();

  const countItemCart = useSelector((state) => {
    var item = state.cart.items;
    item = item.filter((item, key) => {
      if (item.id == data.id) {
        return item;
      }
    });

    if (item.length > 0) {
      item = item[0].count;
      return item;
    }
    return false;
  });
  const handleAddCart = () => {
    if (!countItemCart) {
      dispatch(addItem(data));
      return;
    }
    dispatch(updateItem({ ...data, count: countItemCart + 1 }));
  };

  return (
    <Box>
      <Card sx={{ minWidth: 10, p: 2 }}>
        <Box>
          <img
            width="200px"
            height={'200px'}
            src={data.image}
            alt={data.title}
          />
        </Box>
        <CardContent>
          <Typography variant="h6" color="primary">
            {data.title.substr(0, 20) + '...'}
          </Typography>
          <Typography variant="h6" color="primary">
            {'$' + data.price}
          </Typography>
        </CardContent>
        <Box display="flex" justifyContent={'center'}>
          <Button
            onClick={handleAddCart}
            sx={{ mr: 1, ml: 1 }}
            variant="contained"
            color="secondary">
            Add to cart
          </Button>
          <Box sx={{ display: !countItemCart ? 'none' : 'block', mt: 1 }}>
            <Badge
              color="secondary"
              badgeContent={!countItemCart ? 0 : countItemCart}>
              <Icon
                icon="mdi-light:cart"
                color="black"
                width="25"
                height="25"
              />
            </Badge>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default CustomCard;
