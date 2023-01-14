import { 
  Grid, Card, CardContent,
  CardActions, Button,
  CardMedia, Typography
} from '@mui/material'
import NextLink from 'next/link'
import styles from '../styles/Navbar.module.css'
import Layout from '../src/components/Layout'
import db from '../Helper/initDB'
import Product from '../Models/product'
import { useDispatch } from 'react-redux'
// import { decrement, increment } from '../Redux/Reducer'
import { addToCart } from '../Redux/CartSlice'
import { useRouter } from 'next/router'



export default function Home({products}) {
  const router = useRouter();
  const dispatch = useDispatch()

  const HanldeDispatch = (product)=>{
    dispatch(addToCart(product));
    router.push('/CartItemPage')
  }

  return (
    <>
      <Layout>
        <Typography variant="h4" mt={4} fontWeight={900}>Products</Typography>
        <Grid container spacing={4} my={2} >
          {
            products.map((product) => (
              <Grid item key={product.name} >
                <Card sx={{ maxWidth: 345, boxShadow:'0 0 8px 2px  rgb(173, 173, 173)' }}>
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
                    <Button variant='contained' color='secondary' style={{ marginRight: '10px' }} onClick={()=>HanldeDispatch(product)}>Add to cart</Button>
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