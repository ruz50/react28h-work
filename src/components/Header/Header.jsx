import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import CartPage from '../../Pages/CartPage/CartPage';
import { NavLink } from 'react-router-dom';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CustomizedBadges({num}) {
  
    const [open,setOpen] = useState(false)
    const openDiv = ()=>{
      setOpen(!open)
      
    }

  return (
    <div>
    <IconButton aria-label="cart" onClick={openDiv}>
      <StyledBadge badgeContent={num} color="secondary" >
        <NavLink to={`/cart`}><ShoppingCartIcon /> </NavLink>
      </StyledBadge>
    </IconButton>
    
    </div>
  )
}
