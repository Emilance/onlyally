import Head from "next/head";
import { useEffect } from "react";
import Image from "next/image";
import Stories from "../components/feeds/Stories";
import NewsFeed from "../components/feeds/NewsFeed";
import NewsFeedSideBar from "../components/feeds/NewsFeedSideBar";
import SideNavLayout from "../components/SideNavLayout";
import { END } from "redux-saga";
import { getSession } from "next-auth/react";
import { wrapper } from "../store";
import { useSelector, useDispatch } from "react-redux";
import {fetchUserDetailsStart, fetchUserDetailsSuccess} from '../store/slices/userSlice';

export default function Home({ user }) {
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   fetchUserDetailsStart
  // }, [dispatch]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideNavLayout user={user}>
        <main className=" p-0.5 lg:p-5">
          <Stories />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <NewsFeed />
            <NewsFeedSideBar />
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
