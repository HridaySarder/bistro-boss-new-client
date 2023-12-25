import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import "./Featured.css"
const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-10 my-20">
      <SectionTitle 
      subHeading={"chect it out"}
      heading={"Featured Item"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center  gap-10 bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
      <div>
        <img src={featuredImg} alt="" />
      </div>
      <div>
        <p>March 20, 2023</p>
        <p>WHERE CAN I GET SOME?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti corrupti consectetur magni deserunt fugiat veritatis porro odit, pariatur sed aut, culpa perspiciatis nisi! Officia, repellat. Quam aliquam ullam itaque vero atque nihil veniam illum, harum temporibus. Quos facilis at, non inventore repellat commodi ipsa, molestias dolor, ducimus necessitatibus molestiae modi.</p>
        <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
      </div>
      </div>
    </div>
  );
};

export default Featured;