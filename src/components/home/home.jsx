import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../../assets/img/carrouselhome/imagen1.jpg'
import Image2 from '../../assets/img/carrouselhome/imagen2.jpg'
import Image3 from '../../assets/img/carrouselhome/imagen3.jpg'
import Image4 from '../../assets/img/carrouselhome/imagen4.jpg'

function Home() {
  return (
    <>
        <div>
            <h5>¡Aprender un idioma nunca fue tan cómodo!</h5>
            <p>La flexibilidad horaria es lo que nos caracteriza.</p>
            <br />
        </div>
      <Carousel>
        <Carousel.Item>
        <img src={Image1} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Image2} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Image3} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Image4} alt="" />
        </Carousel.Item>
      </Carousel>
      </>
  )
      
};
export default Home