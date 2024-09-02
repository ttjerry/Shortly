import Button from './button';

const styles={
  fontFamily:'poppinsBold',
  lineHeight: '75px',
}

function TopSection() {
  return (
    <div className='flex flex-row relative z-10 justify-between px-20 py-12 w-12/12'>
      <div className='flex justify-center flex-col gap-6 '>
        <h1 className='text-6xl font-black w-11/12 leading-20 overflow-hidden' style={styles}>More than just shorter links</h1>
        <h4 className='w-3/4 text-customGrey font-bold leading-6'>
          Build your brand"s recognition and get detailed insights on how your
          links are performing.
        </h4>
        <Button name="Get Started"/>
      </div>
      <img
        src="/images/illustration-working.svg"
        alt="illustration-working.svg"
        className='relative left-40 h-5/5 w-4/5'
      />
    </div>
  );
}

export default TopSection;
