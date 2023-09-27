import { useDispatch, useSelector } from "react-redux";
// import our action creators:
import { addFavorite, fetchFail, fetchStart, getProducts } from "../store/ProductsSlice";
import axios from "axios";
import { useEffect } from "react";
import { RootState } from "../store";
// toastify is a library that allows us to show toast messages, super cool, check it out:
// https://fkhadra.github.io/react-toastify/introduction
import {toast} from 'react-toastify'
import Card from "../components/Card";
// import the Product type:
import { Product } from "../models/models";
import {useState} from 'react' 
import Search from "../components/Search";

const Home = () => {
  // set our local state for the search input:
  // this will be a string
  const [search, setSearch] = useState<string>('')
  // setup our dispatch function:
  const dispach = useDispatch();
  // setup our useSelector hook:
  // remember, what we pass ot the useSelector is the type of the state of the store
  const { loading, error, productsList, favorites } = useSelector(
    // this function is the selector function, it takes the state of the store as an argument and returns the part of the state that we want to use
    (state: RootState) => state.products
    // The above line makes the products available as if it was our local state
  );

  // here we are pulling the darkMode from the uiReducer
  const {darkMode} = useSelector((state:RootState)=> state.ui)

  const fetchProducts = async () => {
    // fetchStart is an action creator that we imported from the productsSlice,
    // This just sets 2 values. loading to true and error to false.
    dispach(fetchStart());
    try {
      const { data } = await axios.get(`https://dummyjson.com/products/search?q=${search}`);

      // getProducts is an action creator that we imported from the productsSlice,
      // This just sets 3 values. loading to false, error to false and productsList to the data that we get from the api.
      dispach(getProducts(data.products));
    } catch (error) {
      console.log(error);
      // fetchFail is an action creator that we imported from the productsSlice,
      // This just sets 2 values. loading to false and error to true.
      dispach(fetchFail());
    }
  };

  console.log(productsList);

  // this useEffect will run when the component mounts and fetch the products from the api
  // then if we change the search input, it will run again and fetch the products that match the search input
  useEffect(() => {
    fetchProducts();
  }, [search]);


  const handleAdd = (product: Product)=>{
      if(favorites.filter(item=> item.id === product.id).length ===0){
        // ADD TO FAV
        dispach(addFavorite(product))
        // show toast message, check the toastify docs for more info:
        toast.success('Product added to Favorites!', {theme: darkMode?'dark': 'light', position:'top-center'})
      }else{
        toast.warning('Already added to Favorites!', {theme: darkMode?'dark': 'light', position:'top-center'})
      }
  }

  // this event type React.ChangeEvent<HTMLInputElement> is the type of the event that we get when we change the value of an input
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setSearch(e.target.value)
  }
  return (
    <div className="container mx-auto pt-20 p-5">
      <Search handleChange={handleChange}/>
      {loading && (
        <div className="mt-52">
          <p className="text-center text-red-600"> Loading ....</p>
        </div>
      )}
      {error && (
        <div className="mt-52">
          <p className="text-center text-red-600"> Something Went wrong</p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productsList.map((product) => (
          <Card key={product.id} product={product} caption="ADD" handleFunc ={handleAdd}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
