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

import {
  fetchActiveFollowingStart,
  fetchExpiredFollowingStart,
  fetchFollowingStart
}  from "../../store/slices/followerSlice"
import { useDispatch, useSelector } from "react-redux";
import FansCard from "../../components/FansCard";

export default function Fan() {
  const [fansTab, setFansTab] = useState("all")
  const [openFansCardOption, setOpenFansCardOption] = useState(false)
  const changeFansTab = (tab)=> {
    setFansTab(tab)
  } 
  const dispatch = useDispatch()
  const following = useSelector(state => state.follow.following)
  const activeFollowing = useSelector(state => state.follow.activeFollowing)
  const expiredFollowing = useSelector(state => state.follow.expiredFollowing)


  useEffect(()=> {
    dispatch(fetchActiveFollowingStart())
    dispatch(fetchExpiredFollowingStart())
    dispatch(fetchFollowingStart())
  }, [])
  
  const followingUser = following.data.followers
  const activeFollowingUser = activeFollowing.data.followers
  const expiredFollowingUser = expiredFollowing.data.followers
  if(following.loading == false){
    console.log(followingUser)
  }


  return (
    <>
      <div className="flex flex-col justify-center lg:flex-row">
        <ProfileNavItem color="red" />

        <div className="w-full lg:w-4/5 lg:mr-16 lg:ml-6 bg-white px-4 mx-auto mt-20 shadow py-4">
          <section className="space-y-2  p-4">
            <div className="flex gap-4 items-center uppercase font-semibold">
              <FaArrowLeft size="20px" />
              <h1>Following</h1>
            </div>
          </section>

          <div className="border-b-2 pb-2 block lg:flex items-center gap-4">
            <article onClick={()=>changeFansTab("active")} className={fansTab === "active"  ? "flex gap-2 border-b-4 border-red-600 pr-2 cursor-pointer"  : "flex gap-2 pr-2  cursor-pointer"}>
              <AiOutlineCheckCircle size="20px" />
              <p>Active</p>
            </article>
            <article onClick={()=>changeFansTab("unsubscribed")}  className={fansTab === "unsubscribed"  ? "flex gap-2 border-b-4 border-red-600 pr-2  cursor-pointer"  : "flex gap-2 pr-2  cursor-pointer"}>
              <AiOutlineWarning size="20px" />
              <p>Unsubscribed</p>
            </article>
            <article onClick={()=>changeFansTab("all")}  className={fansTab === "all"  ? "flex gap-2 border-b-4 border-red-600 pr-2  cursor-pointer"  : "flex gap-2 border p-2 dotted  cursor-pointer"}>
              <MdOutlineLibraryAddCheck size="20px" />
              <p>ALL</p>
            </article>
          </div>
          {(fansTab === "active" )  && 
                <section className="my-4">
                <h3 className="font-medium">{fansTab.toUpperCase()}</h3>
    
                <div className="block lg:grid grid-cols-3">
                 
                  {activeFollowing.loading == false ? activeFollowingUser.map((user, i) => {
                   return (
                    <>
                    <FansCard  user={user.otherUser} i={i}/>
                    </>
                   )
                  })
                :
                 <h1>loading...</h1>
                }
                </div>
              </section>
        
         }
          {(fansTab === "unsubscribed" )  && 
                <section className="my-4">
                <h3 className="font-medium">{fansTab.toUpperCase()}</h3>
    
                <div className="block lg:grid grid-cols-3">
                 
                  {expiredFollowing.loading == false ? expiredFollowingUser.map((user, i) => {
                    return (
                      <>
                      <FansCard  user={user.otherUser} i={i}/>
                      </>
                     )
                    
                   })
                :
                 <h1>loading...</h1>
                }
                </div>
              </section>
        
         }


         {(fansTab === "all" )  && 
                <section className="my-4">
                <h3 className="font-medium">{fansTab.toUpperCase()}</h3>
    
                <div className="block lg:grid grid-cols-3">
                 
                  {following.loading == false ? followingUser.map((user, i) => {
                     
                     return (
                      <>
                      <FansCard  user={user.otherUser} i={i}/>
                      </>
                     )
                  })
                :
                 <h1>loading...</h1>
                }
                </div>
              </section>
        
         }
          
        </div>
      </div>
    </>
  );
}
