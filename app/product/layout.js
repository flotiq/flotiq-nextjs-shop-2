import Layout from '../../layouts/layout'

const ProductLayout = ({children}) => (
    <Layout additionalClass={['bg-white']}>
        {children}
    </Layout>)

export default ProductLayout
