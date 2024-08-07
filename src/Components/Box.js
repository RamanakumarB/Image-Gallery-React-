import img1 from "../assests/images/img1.jpeg.jpg";
import img4 from "../assests/images/img4.jpeg.jpg";
import img5 from "../assests/images/img5.jpeg.jpg";
import img6 from "../assests/images/img6.jpeg.jpg";
import img7 from "../assests/images/img7.jpeg.jpg";
import img8 from "../assests/images/img8.jpeg.jpg";

//Function Components
function Box() {
    return (
      <div className="container">
        <div className="image-container">
          <div className="image-wrapper">
            <img src={img1}></img>
            <p className="paragraph">Julie's Rabbit Ears</p>
          </div>
          <div className="image-wrapper">
            <img src={img8}></img>
            <p className="paragraph">The Innocent Look</p>
          </div>
          <div className="image-wrapper">
            <img src={img6}></img>
            <p className="paragraph">Big Eyed Buggy</p>
          </div>
          <div className="image-wrapper">
            <img src={img4}></img>
            <p className="paragraph">The Saint Doggo</p>
          </div>
        </div>
        
  
        <div className="image-container">
          <div className="image-wrapper">
            <img src={img5}></img>
            <p className="paragraph">Big Eyed Buggy</p>
          </div>
          <div className="image-wrapper">
            <img src={img6}></img>
            <p className="paragraph">The Innocent Look</p>
          </div>
          <div className="image-wrapper">
            <img src={img7}></img>
            <p className="paragraph">Big Eyed Buggy</p>
          </div>
          <div className="image-wrapper">
            <img src={img8}></img>
            <p className="paragraph">The Saint Doggo</p>
          </div>
        </div>
      </div>
    );
  }

  export default Box