import React from "react";
import submitBtn from "../../assets/icon-arrow.svg";

const Form = () => {
  return (
    <>
      <form
        action=''
        className='flex flex-col justify-center space-y-10 sm:space-y-0 mx-auto'
      >
        <div className='flex text-left gap-4 sm:gap-0 w-full sm:w-3/4'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='day' className='input-label text-sm'>
              DAY
            </label>
            <input
              type='text'
              name='day'
              id='day'
              placeholder='DD'
              className='py-2 pl-4 font-bold text-xl sm:text-2xl md:text-[32px] border border-Light-grey outline-none focus:border-Purple rounded-lg mx-auto md:mx-0 w-full lg:w-2/3'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='day' className='input-label text-sm'>
              MONTH
            </label>
            <input
              type='text'
              name='month'
              id='month'
              placeholder='MM'
              className='py-2 pl-4 font-bold text-xl sm:text-2xl md:text-[32px] border border-Light-grey outline-none focus:border-Purple rounded-lg mx-auto md:mx-0 w-full lg:w-2/3'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='day' className='input-label text-sm'>
              YEAR
            </label>
            <input
              type='text'
              name='year'
              id='year'
              placeholder='YYYY'
              className='py-2 pl-4 font-bold text-xl sm:text-2xl md:text-[32px] border border-Light-grey outline-none focus:border-Purple rounded-lg mx-auto md:mx-0 w-full lg:w-2/3'
            />
          </div>
        </div>

        <div className='relative flex items-center sm:w-[90%] sm:pr-4'>
          <div className='absolute w-full h-[1px] bg-Light-grey'></div>
          <button
            type='submit'
            className='relative mx-auto sm:left-full sm:mx-0 bg-Purple p-4 rounded-full cursor-pointer hover:bg-Off-black transition duration-300 ease-in-out'
          >
            <img src={submitBtn} alt='go' className='' />
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
