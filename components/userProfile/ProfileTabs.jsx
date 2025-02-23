import { useState, useRef } from "react";
import { Tab } from "@headlessui/react";
import ChannelCard from "../channels/ChannelCard";
import NewsFeedCard from "../feeds/NewsFeedCard";
import ShopList from "../shop/ShopList";
import GroupCard from "../groups/GroupCard";
import ExplorePostCard from "../../components/explore/ExplorePostCard";

import {
  MdSmartDisplay,
  MdPhotoSizeSelectActual,
  MdLockOutline,
} from "react-icons/md";
import { FaVideo, FaPause } from "react-icons/fa";
import { BsHeartFill, BsHeart, BsThreeDots } from "react-icons/bs";
import { FiPlay } from "react-icons/fi";
import { GiSpeaker } from "react-icons/gi";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsStart } from "../../store/slices/postSlice";
import NoDataFound from "../NoDataFound/NoDataFound";
import Link from "next/link";
import ReactPlayer from "react-player/lazy";
import ReactAudioPlayer from "react-audio-player";
import { getCookie } from "cookies-next";

function classNames(...classNamees) {
  return classNamees.filter(Boolean).join(" ");
}

const ProfileTabs = () => {
  const posts = useSelector((state) => state.post.posts);
  const user = useSelector((state) => state.user.profile.data);
  const groups = useSelector((state) => state.groups.userGroups.data);
  const channels = useSelector((state) => state.channels.userChannels.data);
  const id = getCookie("userId");
  const dispatch = useDispatch();

  const audio = useRef();
  const [playing, setPlaying] = useState(false);
  const togglePlaying = () => {
    setPlaying(!playing);
  };

  const playAudio = () => {
    if (playing === false) {
      togglePlaying;
      audio.current.audioEl.current.play();
    } else {
      audio.current.audioEl.current.pause();
      togglePlaying;
    }
  };

  const setActiveSection = (key) => {
    if (key === 0)
      dispatch(
        fetchPostsStart({
          type: "all",
        })
      );
    else if (key === 3)
      dispatch(
        fetchPostsStart({
          type: "image",
        })
      );
    else if (key === 4)
      dispatch(
        fetchPostsStart({
          type: "video",
        })
      );
    else if (key === 5)
      dispatch(
        fetchPostsStart({
          type: "audio",
        })
      );
  };

  let [categories] = useState([
    "Timeline",
    "Channel",
    "Groups",
    "Photos",
    "Videos",
    "Audios",
    "Shop",
  ]);
  const images = [
    "person2",
    "person5",
    "person6",
    "person7",
    "person8",
    "person2",
    "person3",
    "person8",
  ];

  return (
    <div>
      <Tab.Group
        onChange={(index) => {
          setActiveSection(index);
        }}
      >
        <Tab.List>
          <div className="flex justify-center space-x-0 md:space-x-1 items-center  border rounded-b-lg shadow-md py-3 bg-slate-50">
            {categories.map((category, index) => (
              <Tab
                key={index}
                className={({ selected }) =>
                  classNames(
                    "w-auto h-8 px-1 md:px-4 text-xs md:text-sm leading-5 font-semibold ",
                    "focus:outline-none focus:ring-0 ",
                    selected
                      ? "text-lightPlayRed underline decoration-lightPlayRed underline-offset-8 decoration-[3px] font-bold"
                      : ""
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </div>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel className={classNames("bg-white rounded-xl p-1")}>
            {posts.loading ? (
              "Loading..."
            ) : posts.data.posts.length > 0 ? (
              <div className="py-2 md:p-2 grid grid-cols-1 gap-y-5">
                {posts.data.posts.map((post) => (
                  <NewsFeedCard post={post} key={post.post_id} />
                ))}
              </div>
            ) : (
              <NoDataFound />
            )}
            {/* {posts.data.posts.map((post, index) => (
                <NewsFeedCard post={post} key={index} />
              ))} */}
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "bg-white rounded-xl p-1 flex flex-col space-y-3"
            )}
          >
            {channels.filter((channel) => channel.user_id === user.id).length >
            0 ? (
              <div className="p-2 bg-white rounded-lg shadow-lg border">
                <div className="flex items-center space-x-2 my-5">
                  <div className="side-icon">
                    <MdSmartDisplay className="text-white h-6 w-6" />
                  </div>
                  <h1 className="text-xl md:text-3xl font-semibold">
                    {user.name}&apos;s Channels
                  </h1>
                </div>
                <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-3">
                  {channels
                    .filter((channel) => channel.user_id === user.id )
                    .map((channel, index) => (
                      <ChannelCard
                        key={channel.id}
                        profile={true}
                        channel={channel}
                      />
                    ))}
                </div>
              </div>
            ) : null}

            <div className="p-2 bg-white rounded-lg shadow-lg mt-2 border">
              <div className="flex items-center space-x-2 my-5">
                <div className="side-icon">
                  <MdSmartDisplay className="text-white h-6 w-6" />
                </div>
                <h1 className="text-xl md:text-3xl font-semibold">
                  Channels joined by {user.name}
                </h1>
              </div>
              <div className="p-2 grid grid-cols-1  md:grid-cols-2 gap-3">
                {channels
                  .filter((channel) => channel.user_id !== user.id )
                  .map((channel, index) => (
                    <ChannelCard
                      key={channel.id}
                      profile={true}
                      channel={channel}
                    />
                  ))}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "bg-white rounded-xl p-1 flex flex-col space-y-5"
            )}
          >
            {groups.filter((group) => group.user_id == user.id ).length > 0 ? (
              <div className="p-2 bg-white rounded-lg shadow-lg border">
                <div className="flex items-center space-x-2 my-5">
                  <div className="side-icon">
                    <MdSmartDisplay className="text-white h-6 w-6" />
                  </div>
                  <h1 className="text-xl md:text-3xl font-semibold">
                    {user.name}&apos;s Groups
                  </h1>
                </div>
                <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-3">
                  {groups
                    .filter((group) => group.user_id == user.id )
                    .map((group, index) => (
                      <GroupCard key={group.id} profile={true} group={group} />
                    ))}
                </div>
              </div>
            ) : null}

            <div className="p-2 bg-white rounded-lg shadow-lg mt-2 border">
              <div className="flex items-center space-x-2 my-5">
                <div className="side-icon">
                  <MdSmartDisplay className="text-white h-6 w-6" />
                </div>
                <h1 className="text-xl md:text-3xl font-semibold">
                  Groups joined by {user.name}
                </h1>
              </div>
              <div className="p-2 grid grid-cols-1  md:grid-cols-2 md:gap-3">
                {groups
                  .filter((group) => group.user_id != id)
                  .map((group, index) => (
                    <GroupCard key={group.id} profile={true} group={group} />
                  ))}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel className={classNames("bg-white rounded-xl p-1")}>
            <div className="flex items-center space-x-2 my-5">
              <div className="side-icon">
                <MdPhotoSizeSelectActual className="text-white h-6 w-6" />
              </div>
              <h1 className="text-2xl font-semibold">Photos</h1>
            </div>

            {posts.loading ? (
              "Loading..."
            ) : posts.data.posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3  gap-2">
                {posts.data.posts.map((post) =>
                  post.postFiles.length > 0
                    ? post.postFiles.map((p_file, i) => (
                        <div key={post.post_id}>
                          <div className="inner list-none">
                            <Link
                              href={"/post/" + post.post_unique_id}
                              className="list-none"
                              passHref
                            >
                              <Image
                                className="rounded cursor-pointer list-none"
                                src={p_file.post_file}
                                alt={post.post_unique_id}
                                objectFit="cover"
                                height={350}
                                width={300}
                              />
                            </Link>
                          </div>
                        </div>
                      ))
                    : ""
                )}
              </div>
            ) : (
              <NoDataFound></NoDataFound>
            )}
          </Tab.Panel>
          <Tab.Panel className={classNames("bg-white rounded-xl p-1")}>
            <div className="flex items-center space-x-2 my-5">
              <div className="side-icon">
                <FaVideo className="text-white h-6 w-6" />
              </div>
              <h1 className="text-2xl font-semibold">Videos</h1>
            </div>

            {posts.loading ? (
              "Loading..."
            ) : posts.data.posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2  gap-2">
                {posts.data.posts.map((post) =>
                  post.postFiles.length > 0
                    ? post.postFiles.map((p_file) => (
                        <ul
                          className="list-unstyled list-none"
                          key={post.post_id}
                        >
                          <li className="box">
                            <div className="p-[1px] w-full h-auto object-cover relative">
                              <ReactPlayer
                                light={p_file.preview_file}
                                url={p_file.post_file}
                                controls={true}
                                width="100%"
                                height="100%"
                                className="post-video-size !w-full min-h-[30em] !h-[30em] object-cover"
                              />
                            </div>
                          </li>
                        </ul>
                      ))
                    : ""
                )}
              </div>
            ) : (
              <NoDataFound />
            )}
          </Tab.Panel>
          <Tab.Panel className={classNames("bg-white rounded-xl p-1")}>
            <div className="flex items-center space-x-2 my-5">
              <div className="side-icon">
                <GiSpeaker className="text-white h-6 w-6" />
              </div>
              <h1 className="text-2xl font-semibold">Audio</h1>
            </div>

            {posts.loading ? (
              "Loading..."
            ) : posts.data.posts.length > 0 ? (
              <div className="grid grid-cols-2 gap-2">
                {posts.data.posts.map((post) => (
                  <ExplorePostCard
                    post={post}
                    key={post.post_id}
                    type="audio"
                  />
                ))}
              </div>
            ) : (
              <NoDataFound />
            )}
          </Tab.Panel>
          <Tab.Panel className={classNames("bg-white rounded-xl p-1")}>
            <ShopList />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default ProfileTabs;
