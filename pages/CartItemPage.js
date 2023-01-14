import React from 'react'
import Layout from '../src/components/Layout'
import { Typography, Button } from '@mui/material'
import NextLink from 'next/link'
import { Grid, Box, TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Select, MenuItem } from '@mui/material'
import { useSelector } from 'react-redux'
import Image from 'next/image'

const cartItemPage = () => {
    const cartItems = useSelector((state) => state.cart.cartItem);

    return (
        <Layout title="Shopping Cart">
            {console.log(cartItems)}
            <Typography variant="h5" color="initial" fontWeight={900} my={3}>Shopping Cart</Typography>
            {
                cartItems.length === 0 ? (
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="" color="initial">Shopping cart Item page.</Typography>
                        <NextLink href="/">
                            <Typography variant="" color="initial">Go Back</Typography>
                        </NextLink>
                    </Box>) : (
                    <div>
                        <Grid container spacing={1}>
                            <Grid item md={9} xs={12}>
                                <TableContainer>
                                    <Table aria-label="simple table" style={{ backgroundColor: 'white' }}>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Image</TableCell>
                                                <TableCell>Name</TableCell>
                                                <TableCell>Price</TableCell>
                                                <TableCell>Quantity</TableCell>
                                                <TableCell>Action</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                cartItems.map((item) => {
                                                    return (
                                                        <TableRow key={item._id}>
                                                            <TableCell>
                                                                <NextLink href={`/product/${item.slug}`}>
                                                                    <Image src={item.image} width={50} height={50} alt={item.name} style={{ cursor: 'pointer' }}></Image>
                                                                </NextLink>
                                                            </TableCell>
                                                            <TableCell> <Typography variant="" color="initial">{item.name}</Typography> </TableCell>
                                                            <TableCell> <Typography variant="" color="initial">{item.price}$</Typography> </TableCell>
                                                            <TableCell>
                                                                <Select
                                                                    value={item.quantity}
                                                                    onChange={(e) =>
                                                                        updateCartHandler(item, e.target.value)
                                                                    } >
                                                                    {[...Array(item.countInStock).keys()].map((x) => (
                                                                        <MenuItem key={x + 1} value={x + 1}>
                                                                            {x + 1}
                                                                        </MenuItem>
                                                                    ))}
                                                                </Select>
                                                            </TableCell>
                                                            <TableCell></TableCell>
                                                        </TableRow>
                                                    )
                                                })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                            <Grid item md={3} xs={12}>
                                cart action
                            </Grid>
                        </Grid>
                    </div>
                )
            }
        </Layout>
    )
}

export default cartItemPage