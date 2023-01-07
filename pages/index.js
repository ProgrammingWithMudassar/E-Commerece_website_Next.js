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
import db from '../Helper/initDB'
import Product from '../Models/product'



export default function Home({products}) {
  return (
    <>
      <Layout>
        <Typography variant="h4" mt={4} fontWeight={900}>Products</Typography>
        <Grid container spacing={4} my={2}>
          {
            products.map((product) => (
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


export async function getStaticProps(context) {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();

  return {
    props: {
      products : products.map(db.convertDocToObj)
    }, // will be passed to the page component as props
  }
}