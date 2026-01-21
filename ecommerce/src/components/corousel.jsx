import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Corousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='d-block w-100' src="https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-3d-rendered-e-commerce-illustration-image_3811627.jpg" height={330} alt="" />
        <Carousel.Caption>
          <h3>Happy Shopping</h3>
          <p>Shop online with just one click...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src="https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fHww"  height={330} alt="" />
        <Carousel.Caption>
          <h3>Yours Favorites into Your Cart</h3>
          <p>Fill the Heart with the Cart...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src="https://maptrons.in/public/assets/img/placeholder.jpg"  height={330} alt="" />
        <Carousel.Caption>
          <h3>Experience New Arrivals..</h3>
          <p>
            Order your favourites into your home delivery....
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Corousel;