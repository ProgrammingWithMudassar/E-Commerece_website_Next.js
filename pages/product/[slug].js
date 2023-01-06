import React from 'react'
import { useRouter } from 'next/router'
import data from '../../Data/ProductData'
import Typography from '@mui/material/Typography'

const ProductScreen = () => {
    const router = useRouter();
    const { slug } = router.query;
    const product = data.products.find((e) => e.slug === slug)
    if (!product) {
        return (
            <div>
                Product Not Found
            </div>
        )
    }
    else {
        return (
            <>
             <Typography variant="h2" color="initial">{product.slug}</Typography>
            </>
        )
    }
}

export default ProductScreen