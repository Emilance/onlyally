import Head from "next/head";
import { useEffect } from "react";
import Image from "next/image";
import Stories from "../components/feeds/Stories";
import NewsFeed from "../components/feeds/NewsFeed";
import NewsFeedSideBar from "../components/feeds/NewsFeedSideBar";
import SideNavLayout from "../components/SideNavLayout";
import { END } from "redux-saga";
import {useSession, getSession } from "next-auth/react";
import { wrapper } from "../store";
import { useSelector, useDispatch } from "react-redux";
import {fetchUserDetailsStart, fetchUserDetailsSuccess} from '../store/slices/userSlice';
import Sticky from "react-stickynode";

export default function Home() {
  

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideNavLayout>
        <main className=" p-0.5 lg:p-5">
          <Stories />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <NewsFeed />
            <Sticky >
                <NewsFeedSideBar />
            </Sticky>
          
          </div>
        </main>
      </SideNavLayout>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  store => async ({req, res}) => {
    const session = await getSession({ req });
    // const dispatch = useDispatch();
    if(session){
      store.dispatch(fetchUserDetailsSuccess(session.user.userDetails));
    
    }
  
    // session && store.dispatch(setUserData(session.user.userDetails))
    // store.dispatch(fetchUserDetailsStart({accessToken: session.accessToken, userId: session.userId}));
    // store.dispatch(END)
    // await store.sagaTask.toPromise();

    if (!session) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
    return {
      props: {
        user: session.user.userDetails,
      },
    };
  }
);
