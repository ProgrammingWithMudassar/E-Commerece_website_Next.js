import React from 'react'
import { useRouter } from 'next/router'
import data from '../../Data/ProductData'
import Typography from '@mui/material/Typography'
import PS from '../../src/components/ProductScreen/ProductScreen'
import Layout from '../../src/components/Layout'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import NextLink from 'next/link'
import Product from '../../Models/product'
import db from '../../Helper/initDB'


const ProductScreen = ({ product}) => {
    // const router = useRouter();
    // const { slug } = router.query;
    // const product = data.products.find((e) => e.slug === slug)
    
    if (!product) {
        return (
            <div> Product Not Found </div>
        )
    }
    else {
        return (
            <>
                <Layout title={product.slug}>
                    <Box mt={3}>
                        <Box display="flex" justifyContent='flex-end'>
                            <NextLink href='/' style={{textDecoration:'none'}}>
                                <Button variant="text" color="primary" > Go back </Button>
                            </NextLink>
                        </Box>
                        {/* products screen page  */}
                        <PS products={product}/>
                    </Box>
                </Layout>
            </>
        )
    }
}

export default ProductScreen


export async function getServerSideProps(context) {
    const {params} = context;
    const {slug} = params;

    await db.connect();
    const product = await Product.findOne({ slug }).lean();
    await db.disconnect();
  
    return {
      props: {
        product : db.convertDocToObj(product)
      }
    }
  }