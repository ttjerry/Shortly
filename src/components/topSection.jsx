import Button from './button';

const styles={
  fontFamily:'poppinsBold',
}

function TopSection() {
  return (
    <div className='flex md:flex-row md:justify-between flex-col-reverse gap-10 md:pl-20 md:py-12 md:w-12/12'>

      <div className='flex flex-col text-center items-center md:items-start md:text-left justify-center md:flex-col md:gap-6 gap-9 '>
        <h1 className='md:text-6xl text-4xl font-black w-11/12 md:leading-[75px] leading-10 overflow-hidden' style={styles}>More than just shorter links</h1>
        <h4 className='w-3/4 text-customGrey font-bold leading-6'>
          Build your brand"s recognition and get detailed insights on how your
          links are performing.
        </h4>
        <Button name="Get Started"/>
      </div>

      <img
        src="/images/illustration-working.svg"
        alt="illustration-working.svg"
        className='md:h-5/5 md:w-4/5'
      />
    </div>
  );
}

export default TopSection;
