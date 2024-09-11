import Button from "../Elements/Button";

const CardProduct = (props) => {
    const {children} = props;
    return (
      <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-5 ">
       {children}
      </div>
    );
};

const Header = (props) => {
    const { images } = props;
    return (
      <a href="#">
        <img
          src={images}
          alt="products"
          className="p-8 rounded-t-lg"
        />
      </a>
    );
};

const Body = (props) => {
    const { title, children } = props; 
    return (
      <div className="px-5 pb-5">
        <a href="">
          <h3 className="text-xl font-semibold tracking-tight text-white">
            {title}
          </h3>
          <p className="text-s text-white">
            {children}
          </p>
        </a>
      </div>
    );
};

const Footer = (props) => {
    const { harga } = props;
    return (
      <div className="flex items-center justify-between px-5 pb-5">
        <span className="text-xl font-bold text-white">{harga}</span>
        <Button className="bg-blue-600">Add To Cart</Button>
      </div>
    );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;