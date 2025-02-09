import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineArrowBack } from "react-icons/md";
import CommonCenterLoader from "../../components/helpers/CommonCenterLoader";
import { useForm } from "react-hook-form";

import {
  updateGroupInfoStart,
  updateGroupPrivacyStart,
  fetchGroupsCategoriesStart,
} from "../../store/slices/groupsSlice";

const PrivacySettings = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.groups.categories);
  const [handlerStatus, setHandlerStatus] = useState(false)
  
  const { data: group, loading } = useSelector(
    (state) => state.groups.groupData
  );


  const { data: privacy, loading: privating } = useSelector(
    (state) => state.groups.updateGroupPrivacy
  );

  useEffect(() => {
    dispatch(fetchGroupsCategoriesStart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
  } = useForm({
    mode: "onBlur",
  });

  const handler = (status)=>{
    console.log(status)
    if(status === true){
      setHandlerStatus(true)
    }else{
      setHandlerStatus(false)
    }
  }

  const onPrivacySubmit = (data) => {
    const body = {
      ...data,
      private: JSON.parse(data.private),
      slug: group.slug,
      amount: parseInt(data.amount),
    };

    dispatch(updateGroupPrivacyStart(body));
  };

  const [billing, enableBilling] = useState(false);


  const handleBilling = () => {
    enableBilling(!billing);
  };

  return (
    <form
      name="privacy-form"
      onSubmit={handleSubmit2(onPrivacySubmit)}
      className="mt-10"
    >
      <div className="w-full relative z-[1] border-b-2 border-black  bg-gray-100 focus-within:border-lightPlayRed my-4 bg-transparent">
        <select
          name="privacy"
          defaultValue={group.is_private}
          className="form-select relative mt-2  mb-1 z-[3] block w-full  appearance-none  bg-transparent  outline-none focus:ring-0 focus:outline-none ring-0 border-0"
          // onChange={(event) =>
          //   setGroupData({
          //     ...groupData,
          //     privacy: event.currentTarget.value,
          //   })
          // }
          {...register2("private", {
            onChange : (event) =>handler(event.currentTarget.value)
          })}
        >
          <option value={true}>Private</option>
          <option value={false}>Public</option>
        </select>
        <label
          htmlFor="privacy"
          className="origin-0 absolute -top-3 left-3 font-medium text-sm z-[2] text-gray-500 duration-300"
        >
          Page Privacy
        </label>
      </div>
      {group.is_private ? (
        <div>
          <div className="flex items-center space-x-2 mt-2">
            <h3 className="font-semibold text-2xl">Enable Billing</h3>

            <label
              htmlFor="toggleB"
              className="flex items-center cursor-pointer"
            >
              {/* toggle */}
              <div className="relative">
                {/* input */}
                <input
                  type="checkbox"
                  id="toggleB"
                  className="sr-only"
                  checked={billing}
                  onChange={handleBilling}
                />
                {/* line */}
                <div className="block bg-gray-600 w-14 h-8 rounded-full tick-bg " />
                {/* dot */}
                <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition" />
              </div>
              {/* label */}
              {/* <div className="ml-3 text-gray-700 font-medium">Toggle Me!</div> */}
            </label>
          </div>
          <p className="text-xs font-medium my-0">
            Get users to pay when subscribing to this group
          </p>
          {billing ? (
            <>
              <div className="my-2">
                <label
                  htmlFor="month-price"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Subscription Duration
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <select
                    name="duration"
                    id="duration"
                    required
                    {...register2("duration")}
                    defaultValue={group.configuration.billing.duration}
                    className="focus:ring-textPlayRed focus:border-textPlayRed block w-full  sm:text-sm border-gray-300 rounded-md"
                  >
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="bi-monthly">Bi-Monthly</option>
                    <option value="yearly">Yearly</option>
                  </select>
                </div>
              </div>
              <div className="my-2">
                <label
                  htmlFor="month-price"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Subscription Price
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm"> &#8358; </span>
                  </div>
                  <input
                    type="text"
                    name="month-price"
                    id="month-price"
                    {...register2("amount")}
                    defaultValue={group.configuration.billing.amount}
                    required
                    className="focus:ring-textPlayRed focus:border-textPlayRed block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder={0.0}
                  />
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      ) : null}

      <div className="my-4 w-full row-container space-x-4">
        <div
          className="row-container space-x-2 cursor-pointer"
          onClick={() => router.back()}
        >
          <MdOutlineArrowBack className="w-4 h-4" />
          <p className="text-sm font-semibold tracking-wide">Go Back</p>
        </div>

        <button
          className="w-36 h-10 shadow-md text-sm rounded-md hover:bg-lightPlayRed/60 transition duration-300 row-container bg-lightPlayRed text-white font-medium "
          type="submit"
        >
          {privating ? "Loading..." : "Save"}
        </button>
      </div>
    </form>
  );
};

export default PrivacySettings;
