import React from 'react'
import Image from 'next/image'
import {
  Grid, List, ListItem, Typography, Card, CardContent, CardActions, Button
} from '@mui/material'

const ProductScreen = ({ products }) => {
  return (
    <>
      <Grid container spacing={2} mt={3}>
        <Grid item md={6} xs={12}>
          <Image
            src={products.image}
            alt={products.name}
            width={500}
            height={500}
          />
        </Grid>
        {/* product details  */}
        <Grid item md={3} xs={12}>
          <List>
            <ListItem><Typography variant='h6' color="initial" fontWeight={900}>{products.name}</Typography> </ListItem>
            <ListItem><Typography color="initial" fontWeight={600}>Category : {products.category}</Typography> </ListItem>
            <ListItem><Typography color="initial" fontWeight={600}>Brand : {products.brand}</Typography> </ListItem>
            <ListItem><Typography color="initial" fontWeight={600}>Rating : {products.rating}/5<span style={{ color: "#FC624D" }}>stars</span> (10 reviews)</Typography> </ListItem>
            <ListItem><Typography color="initial" fontWeight={600}>Description :</Typography> </ListItem>
            <ListItem><Typography color="initial" whiteSpace="pre-line">{products.description}</Typography></ListItem>
          </List>
        </Grid>

        <Grid item md={3} xs={12}>
          <Card variant="outlined">
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="body1" color="initial">Price</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" color="initial">${products.price}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="body1" color="initial">Status</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" color="initial">{products.countInStock > 0 ? 'Available' : 'Unavailable'}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button fullWidth>  Add to cart </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default ProductScreen