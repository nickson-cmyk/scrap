import SimpleImageSlider from "react-simple-image-slider";
// import Images from "../Asset/Images/images.jpeg";
import ImageText from "../components/ImageText";
import RecycleImage from '../Asset/Images/yellowDustBin.jpg'
import HumanRecycleImage from '../Asset/Images/humanRecycle.jpg'
import LittleGirlRecycleImage from '../Asset/Images/littleGirl.jpg'
const images = [{ url: LittleGirlRecycleImage }, { url: HumanRecycleImage }, { url: RecycleImage }];

const ImageSlide = () => {
  // console.log("image", Images);
  return (
    <div>
      <ImageText ></ImageText>
      <div className="imageSliders">
      <SimpleImageSlider
        width={1400}
        height={600}
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={1}
        autoPlay={true}
      />
      </div>
    </div>
  );
};

export default ImageSlide;
