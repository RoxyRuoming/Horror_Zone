import Carousel from './components/Carousel';
import man from './images/man.png';
import puppet from './images/puppet.png';
import hotel from './images/hotel.png';
import house from './images/house.png';
import clown from './images/clown.png';
import './css/About.css';


function About() {

  const images = [
    { src: man, alt: 'a man in black coat in a forest' },
    { src: puppet, alt: 'a puppet with creepy smile' },
    { src: hotel, alt: 'a dirty hotel' },
    { src: house, alt: 'a creepy house' },
    { src: clown, alt: 'a horrible clown' },
  ];

  return (
    <div className="about">
      <h2 className="about-title">Horror comes from many forms...</h2>
      <Carousel images={images} />
    </div>
  );
}

export default About;
