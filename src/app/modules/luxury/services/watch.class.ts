export default class Watch {
  public discount: string;

  constructor(
    public src: string,
    public brand: string,
    public ref: string,
    public oldprice: number,
    public price: number = 0,
    public inWishList = false,
    public inCart = false,
  ) {
    if (oldprice) {
      const off = Math.floor((this.oldprice - this.price) * 100 / this.oldprice);
      this.discount = `${off}% Descuento`;
    }
  }

  toggleInWishList() {
    this.inWishList = !this.inWishList;
  }

  toggleInCart() {
    this.inCart = !this.inCart;
  }
}
