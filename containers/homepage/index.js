import {
  addUser,
  addUserGenerate,
  deleteAllUser,
} from "@redux/slices/userSlice";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formInput } from "./dummy/index";

const CardCore = dynamic(() => import("@components/core/card"));
const FormHomePage = dynamic(() => import("@containers/homepage/section/form"));

const HomePage = () => {
  const dispatch = useDispatch();
  const usersState = useSelector((state) => state.users);
  const [userInput, setUserInput] = useState({
    fullName: "",
    email: "",
    birth: "",
    address: "",
    phone: "",
    password: "",
    picture: "",
  });
  const [searchInput, setSearchInput] = useState("");

  const searchHandleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const userInputHandleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setUserInput((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const addUserSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(userInput));
    setUserInput({
      fullName: "",
      email: "",
      birth: "",
      address: "",
      phone: "",
      password: "",
      picture: "",
    });
  };

  const cancelUserInput = (e) => {
    e.preventDefault();
    setUserInput({
      fullName: "",
      email: "",
      birth: "",
      address: "",
      phone: "",
      password: "",
      picture: "",
    });
  };

  const autoGenerateSubmit = (e) => {
    e.preventDefault();
    dispatch(addUserGenerate());
  };

  const delAllUserSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteAllUser());
  };

  console.log(usersState)

  return (
    <main>
      <section className="px-[48px] pt-[48px] flex justify-center">
        <div className="pt-[33px] w-[768px]">
          <div className="pb-6">
            <h1 className="text-[18px] font-medium">Personal information</h1>
            <p className="text-[14px] font-light text-[#6B7280]">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
          <FormHomePage
            formInput={formInput}
            userInput={userInput}
            addUserSubmit={(e) => addUserSubmit(e)}
            cancelUserInput={(e) => cancelUserInput(e)}
            userInputHandleChange={(e) => userInputHandleChange(e)}
            autoGenerateSubmit={(e) => autoGenerateSubmit(e)}
          />
        </div>
      </section>
      <section className="px-[32px] w-full">
        <div className="py-[48px] w-full flex justify-center items-center">
          <hr className="w-full border-[1px] border-[#979797]" />
          <button
            type="button"
            className={`w-full max-w-[180px] ${usersState.data.length !== 0 ? "text-[#E54B41]" : "text-[#979797]"}`}
            onClick={delAllUserSubmit}
          >
            Clear All List User
          </button>
          <hr className="w-full border-[1px] border-[#979797]" />
        </div>
        <input
          className="py-[9px] px-[13px] border-[1px] rounded-[6px]"
          type="search"
          onChange={searchHandleChange}
          placeholder="Search Anything"
          value={searchInput}
        />
        {usersState.data.length !== 0 ? (
          <div className="py-[48px] grid gap-[24px] over:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {usersState?.data
              ?.filter((user) => {
                if (searchInput === "") {
                  return user;
                } else if (
                  user.fullName
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
                  ||                   user.email
                  .toLowerCase()
                  .includes(searchInput.toLowerCase())
                  ||                   user.phone
                  .toLowerCase()
                  .includes(searchInput.toLowerCase())
                ) {
                  return user;
                }
              })
              .map((user, index) => {
                return <CardCore key={index} userData={user} />;
              })}
          </div>
        ) : (
          <div className="py-[48px] w-full flex flex-col items-center justify-center">
            <img src="/images/no_content.svg" alt="" width={300} height={300} />
            <h1 className="text-[24px] text-[#667085] font-medium">
              No List User
            </h1>
          </div>
        )}
      </section>
    </main>
  );
};

export default HomePage;
