const CardCore = ({ userData }) => {
  return (
    <div className="w-full h-[322px] bg-secondary flex flex-col justify-between rounded-[8px] shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_rgba(0,0,0,0.06)]">
      <div className="h-full flex flex-col justify-center items-center space-y-6">
        {userData.picture !== "" ? (
          <img className="rounded-full" src={userData.picture} alt="" width={100} height={100} />
        ) : (
          <div className="bg-card w-[100px] h-[100px] flex justify-center items-center rounded-full">
            <h1 className="font-bold text-secondary text-[32px]">
              {userData?.fullName.slice(0, 1)}
            </h1>
          </div>
        )}
        <div className="text-center leading-tight">
          <p className="text-[14px] text-[#6B7280] font-light">
            Hi, My name is
          </p>
          <h1 className="text-[20px] font-medium">{userData?.fullName}</h1>
        </div>
      </div>
      <div className="px-3 py-4 flex justify-between border-t-[1px] border-[#E5E7EB]">
        <img
          className="cursor-pointer"
          src="/images/icons/user-tag.svg"
          alt=""
          width={24}
          height={24}
        />
        <img
          className="cursor-pointer"
          src="/images/icons/sms.svg"
          alt=""
          width={24}
          height={24}
        />
        <img
          className="cursor-pointer"
          src="/images/icons/calendar.svg"
          alt=""
          width={24}
          height={24}
        />
        <img
          className="cursor-pointer"
          src="/images/icons/map.svg"
          alt=""
          width={24}
          height={24}
        />
        <img
          className="cursor-pointer"
          src="/images/icons/mobile.svg"
          alt=""
          width={24}
          height={24}
        />
        <img
          className="cursor-pointer"
          src="/images/icons/lock.svg"
          alt=""
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default CardCore;
