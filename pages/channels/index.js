import SideNavLayout from "../../components/SideNavLayout";
import ChannelTabs from "../../components/channels/ChannelTabs";
import ChannelCard from "../../components/channels/ChannelCard";
import CreatorCard from "../../components/creators/CreatorCard";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUserCategoryListStart,
  fetchContentCreatorListStart,
} from "../../store/slices/userCategory";
import { useState, useEffect } from "react";
import CategoryListingLoader from "../../components/explore/CategoryListingLoader";

const Channels = () => {
  const userCategory = useSelector((state) => state.userCategory);
  useEffect(() => {
    dispatch(fetchUserCategoryListStart());
    dispatch(fetchContentCreatorListStart());
  }, []);

  const dispatch = useDispatch();

  return (
    <SideNavLayout>
      <div className="max-w-[950px] px-1 mx-auto">
        <div className="p-5 my-3 lg:my-6  bg-white rounded-xl shadow-lg  outline-none">
          <h1 className="text-3xl font-semibold mb-2">Channels</h1>
          <ChannelTabs />
        </div>
        <div className="p-5 mt-3 lg:mt-6 mb-40 bg-white rounded-xl shadow-lg  outline-none ">
          <div className="grid cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4">
            {[...Array(4)].map((_, index) => (
              <ChannelCard key={index} main={true} />
            ))}
          </div>
          <div className="my-4">
            <h2 className="text-2xl font-semibold mb-2 ml-3">
              Top Content Creators
            </h2>
            <div className="p-2 mt-2 flex overflow-x-scroll space-x-4 py-1  scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 scroll-smooth scrollbar-track-white">
              {userCategory.contentCreatorList.loading ? (
                <CategoryListingLoader />
              ) : userCategory.contentCreatorList.data.content_creators.length >
                0 ? (
                <>
                  {userCategory.contentCreatorList.data.content_creators.map(
                    (creator, index) => (
                      <CreatorCard
                        key={index}
                        main={true}
                        username={creator.username}
                        image={creator.picture}
                      />
                    )
                  )}
                </>
              ) : (
                <div>
                  <h4>No creator Found</h4>
                </div>
              )}
            </div>
          </div>
          <div className="grid cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 my-5">
            {[...Array(4)].map((_, index) => (
              <ChannelCard key={index} main={true} />
            ))}
          </div>
        </div>
      </div>
    </SideNavLayout>
  );
};

export default Channels;
