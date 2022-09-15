import { Formik } from "formik";

const FormHomePage = ({
  formInput,
  userInput,
  addUserSubmit,
  cancelUserInput,
  userInputHandleChange,
  autoGenerateSubmit,
}) => {
  return (
    <Formik initialValues={{ fullName: "" }}>
      <form className="space-y-6" action="">
        {formInput.map((data, index) => {
          return (
            <div key={index} className="flex flex-col text-[14px] space-y-1">
              <label className="font-medium" htmlFor="">{data.label}</label>
              <input
                className="p-2 font-light border-[1px] border-[#D1D5DB] rounded-[6px]"
                type={data.type}
                name={data.name}
                placeholder={data.label}
                onChange={userInputHandleChange}
                value={userInput?.[data.name]}
              />
              {data.type === "password" && (
                <p className="text-[#6B7280]">
                  Minimum of 6 characters, with upper & lower case, a number and
                  a symbol.
                </p>
              )}
            </div>
          );
        })}
        <hr className="mt-[32px] mb-[20px]" />
        <div className="flex justify-between text-[16px] font-medium">
          <div className="flex space-x-3">
            <button
              type="button"
              className="py-[9px] px-[17px] bg-secondary border-[1px] rounded-[6px]"
              onClick={cancelUserInput}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-[9px] px-[17px] bg-[#4F46E5] border-[1px] text-[white] rounded-[6px]"
              onClick={addUserSubmit}
            >
              Submit
            </button>
          </div>
          <button
            type="button"
            className="py-[9px] px-[17px] bg-[#E0E7FF] border-[1px] border-[#4338CA] text-[#4338CA] rounded-[6px]"
            onClick={autoGenerateSubmit}
          >
            Auto Generate
          </button>
        </div>
      </form>
    </Formik>
  );
};

export default FormHomePage;
