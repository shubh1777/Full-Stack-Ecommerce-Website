import Navbar from "../features/navbar/Navbar";
import ProductDetail from "../features/product-list/component/productDetail";

function ProdDetailPage() {
    return (
        <div>
            <Navbar>
                <ProductDetail></ProductDetail>
            </Navbar>
        </div>
    );
}

export default ProdDetailPage;