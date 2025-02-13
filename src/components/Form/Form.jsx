import React, { useState } from "react";
import submitBtn from "../../assets/icon-arrow.svg";

const Form = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState({ years: "--", months: "--", days: "--" }); // omg !!!
  const [error, setError] = useState({});

  const validInput = () => {
    const newErrors = {};

    // day
    if (!day) {
      newErrors.day = "This field is required";
    } else if (day < 1 || day > 31) {
      newErrors.day = "Must be a valid day";
    }

    // month
    if (!month) {
      newErrors.month = "This field is required";
    } else if (month < 1 || month > 12) {
      newErrors.month = "Must be a valid month";
    }

    // year
    if (!year) {
      newErrors.year = "This field is required";
    } else if (year < 1900 || year > new Date().getFullYear()) {
      newErrors.year = "Must be in the past";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const userAge = () => {
    if (!validInput()) return;

    const birthDate = new Date(`${year}-${month}-${day}`);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // adjust
    if (days < 0) {
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
      months--;
    }
    if (months < 0) {
      months += 12;
      years--;
    }

    setAge({ years, months, days });
  };

  // reset
  const resetForm = () => {
    setDay("");
    setMonth("");
    setYear("");
    setError({});
    setAge({ years: "--", months: "--", days: "--" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validInput();
    if (isValid) {
      console.log("Form is valid. Submitting...");
    } else {
      console.log("Error submitting.");
    }
    userAge();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col justify-center space-y-10 sm:space-y-0 mx-auto'
      >
        <div className='flex text-left gap-2 w-full sm:w-3/4'>
          <div className='flex flex-col gap-2'>
            <label
              htmlFor='day'
              className={`text-sm tracking-widest ${
                error.day ? "text-Light-red font-bold" : "text-inherit"
              }`}
            >
              DAY
            </label>
            <input
              type='text'
              name='day'
              id='day'
              placeholder='DD'
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className={`py-2 pl-2 font-bold text-xl sm:text-2xl md:text-[32px] border hover:cursor-pointer hover:border-Purple ${
                error.day ? "border-Light-red" : "border-Light-grey"
              } outline-none focus:border-Purple rounded-lg mx-auto md:mx-0 w-full lg:w-5/6`}
            />
            {error.day && (
              <span className='text-Light-red text-xs italic font-light'>
                {error.day}
              </span>
            )}
          </div>
          <div className='flex flex-col gap-2'>
            <label
              htmlFor='month'
              className={`text-sm tracking-widest ${
                error.month ? "text-Light-red font-bold" : "text-inherit"
              }`}
            >
              MONTH
            </label>
            <input
              type='text'
              name='month'
              id='month'
              placeholder='MM'
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className={`py-2 pl-2 font-bold text-xl sm:text-2xl md:text-[32px] border hover:cursor-pointer hover:border-Purple ${
                error.month ? "border-Light-red" : "border-Light-grey"
              } outline-none focus:border-Purple rounded-lg mx-auto md:mx-0 w-full lg:w-5/6`}
            />
            {error.month && (
              <span className='text-Light-red text-xs italic font-light'>
                {error.month}
              </span>
            )}
          </div>
          <div className='flex flex-col gap-2'>
            <label
              htmlFor='year'
              className={`text-sm tracking-widest ${
                error.year ? "text-Light-red font-bold" : "text-inherit"
              }`}
            >
              YEAR
            </label>
            <input
              type='text'
              name='year'
              id='year'
              placeholder='YYYY'
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className={`py-2 pl-2 font-bold text-xl sm:text-2xl md:text-[32px] border hover:cursor-pointer hover:border-Purple ${
                error.year ? "border-Light-red" : "border-Light-grey"
              } outline-none focus:border-Purple rounded-lg mx-auto md:mx-0 w-full lg:w-5/6`}
            />
            {error.year && (
              <span className='text-Light-red text-xs italic font-light'>
                {error.year}
              </span>
            )}
          </div>
        </div>

        <div className='relative flex items-center sm:w-[90%] sm:pr-4'>
          <div className='absolute w-full h-[1px] bg-Light-grey'></div>
          <button
            type='submit'
            className='relative mx-auto sm:left-full sm:mx-0 bg-Purple p-2 md:p-4 rounded-full cursor-pointer hover:bg-Off-black transition duration-300 ease-in-out'
          >
            <img src={submitBtn} alt='submit button, get age.' className='' />
          </button>
        </div>
      </form>

      <section>
        <div className='flex flex-col'>
          <p className='font-extrabold italic text-4xl sm:text-5xl lg:text-7xl'>
            <span className='text-Purple'>{age.years}</span> years
          </p>
          <p className='font-extrabold italic text-4xl sm:text-5xl lg:text-7xl'>
            <span className='text-Purple'>{age.months}</span> months
          </p>
          <p className='font-extrabold italic text-4xl sm:text-5xl lg:text-7xl'>
            <span className='text-Purple'>{age.days}</span> days
          </p>
        </div>
      </section>
      <button
        type='button'
        onClick={resetForm}
        className='w-min mx-auto py-2 px-4 text-Purple sm:text-White text-base cursor-pointer uppercase font-bold tracking-widest hover:text-Purple transition duration-300 ease-in-out'
      >
        reset
      </button>
    </>
  );
};

export default Form;
