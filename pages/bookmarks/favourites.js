import React, { useEffect, useState } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineWarning,
  AiOutlineStar,
  AiOutlineDollarCircle
} from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { BsBoxArrowRight, BsThreeDots } from "react-icons/bs";
import ProfileNavItem from "../../components/ProfileNavBar";
import  {
  fetchActiveFollowersStart,
  fetchExpiredFollowersStart,
  fetchFollowersStart,
}   from "../../store/slices/followerSlice"
import { useDispatch, useSelector } from "react-redux";
import FansCard from "../../components/FansCard";
import { fetchFavStart } from "../../store/slices/favSlice";

export default function Fan() {
  const [fansTab, setFansTab] = useState("all")
  const [openFansCardOption, setOpenFansCardOption] = useState(false)
  const changeFansTab = (tab)=> {
    setFansTab(tab)
  } 
  const dispatch = useDispatch()

  const  Favourites = useSelector(state => state.fav.fav)

  useEffect(()=> {
    dispatch(fetchFavStart())
  }, [])
  
console.log(Favourites)
 

  return (
    <>
      <div className="flex flex-col justify-center lg:flex-row">
        <ProfileNavItem color="red" />

        <div className="w-full lg:w-4/5 lg:mr-16 lg:ml-6 bg-white px-4 mx-auto mt-20 shadow py-4">
          <section className="space-y-2  p-4">
            <div className="flex gap-4 items-center uppercase font-semibold">
              <FaArrowLeft size="20px" />
              <h1>Favourites</h1>
            </div>
          </section>

         
  
                <section className="my-4">
                <h3 className="font-medium">{fansTab.toUpperCase()}</h3>
    
                <div className="block lg:grid grid-cols-3">
                 
                  {(Favourites.loading == false && Favourites.data.favs) ? Favourites.data.favs.map((user, i) => {
                     
                     return (
                      <>
                      <FansCard  user={user} i={i}/>
                      </>
                     )
                  })
                :
                 <h1>loading...</h1>
                }
                </div>
              </section>
        

          
        </div>
      </div>
    </>
  );
}
