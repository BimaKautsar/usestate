import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
    return (
      <div className="flex justify-center py-5">
        <CardProduct>
          <CardProduct.Header images="/images/hoodie.png" />
          <CardProduct.Body title="Hoodie Pria">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui itaque
            laborum sunt voluptatum eius! Adipisci temporibus tempore provident,
            eum officiis, rem hic odio eaque laudantium odit laborum ut,
            asperiores error.
          </CardProduct.Body>
          <CardProduct.Footer harga="Rp 85.000" />
        </CardProduct>

        <CardProduct>
          <CardProduct.Header images="/images/jeans.png" />
          <CardProduct.Body title="Celana Jeans Pria">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui itaque
            laborum sunt voluptatum eius! Adipisci temporibus tempore provident,
            eum officiis, rem hic odio eaque laudantium odit laborum ut,
            asperiores error.
          </CardProduct.Body>
          <CardProduct.Footer harga="Rp 130.000" />
        </CardProduct>

        <CardProduct>
          <CardProduct.Header images="/images/baju-labelling.png" />
          <CardProduct.Body title="Baju Labelling Wanita">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui itaque
            laborum sunt voluptatum eius! Adipisci temporibus tempore provident,
            eum officiis, rem hic odio eaque laudantium odit laborum ut,
            asperiores error.
          </CardProduct.Body>
          <CardProduct.Footer harga="Rp 130.000" />
        </CardProduct>

        <CardProduct>
          <CardProduct.Header images="/images/rok.png" />
          <CardProduct.Body title="Rok Wanita">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui itaque
            laborum sunt voluptatum eius! Adipisci temporibus tempore provident,
            eum officiis, rem hic odio eaque laudantium odit laborum ut,
            asperiores error.
          </CardProduct.Body>
          <CardProduct.Footer harga="Rp 95.000" />
        </CardProduct>
      </div>
    );
};

export default ProductsPage;