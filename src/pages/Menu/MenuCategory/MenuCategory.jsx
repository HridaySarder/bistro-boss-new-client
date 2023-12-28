import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items,title,img}) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title}></Cover>}
       <div className="grid md:grid-cols-2 gap-4 mt-16">
        {
          items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
     <p className="text-center"> <button className="btn btn-outline border-0 border-b-4 my-6">View Full Menu</button></p>
    </div>
  );
};

export default MenuCategory;