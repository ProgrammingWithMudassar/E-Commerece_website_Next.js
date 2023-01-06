import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import data from '../Data/ProductData.js'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import NextLink from 'next/link'
import styles from '../styles/Navbar.module.css'
import Layout from '../src/components/Layout'




export default function Home() {
  return (
    <>
      <Layout>
        <Typography variant="h4" mt={4} fontWeight={900}>Products</Typography>
        <Grid container spacing={4} my={2}>
          {
            data.products.map((product) => (
              <Grid item key={product.name} >
                <Card sx={{ maxWidth: 345 }} >
                  <NextLink href={`/product/${product.slug}`}>
                    <CardMedia
                      component="img" alt="green iguana"
                      height="340"
                      image={product.image}
                      title={product.title} />
                  </NextLink>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" fontWeight={900}>{product.name}</Typography>
                    <Typography variant="body2" fontWeight={900}>Price :  ${product.price}</Typography>
                  </CardContent>
                  <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant='contained' color='secondary' style={{ marginRight: '10px' }}>Add to cart</Button>
                    <NextLink href={`/product/${product.slug}`} className={styles.LinkDecoration}>
                      <Button variant='contained' color='secondary' >More Detail</Button>
                    </NextLink>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Layout>
    </>
  )
}
