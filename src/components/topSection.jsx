// import '../App.css';
import Button from './button';

const styling = {
  fonts: {
    color: "#35313D",
    fontFamily: "poppinsBold",
    fontSize: "65px",
    fontWeight: "800",
    width: "500px",
    lineHeight: "70px",
    overflowY: "hidden", 
    margin: "0"
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "sapce-between",
    padding: "20px 0px 20px 80px",
  },
  leftSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: "110px",
    gap: "10px"
  },
  leftSectionText:{
    fontSize: "16px",
    width: "380px",
    color: "#A0A0A6",
    marginTop: "0",
    fontWeight: "300"
  },
  button: {
    padding: "10px 20px",
    textAlign: "center",
    textDecoration: "none",
    width: "100px",
    border: "none",
    background: "#2DD0D3",
    borderRadius: "20px",
     color: "white"
  }
};

function TopSection() {
  return (
    <div style={styling.container}>
      <div style={styling.leftSection}>
        <h1 style={styling.fonts}>More than just shorter links</h1>
        <h4 style={styling.leftSectionText} className='bg-red-300'>
          Build your brand"s recognition and get detailed insights on how your
          links are performing.
        </h4>
        <Button name="Get Started" style={styling.button}/>
      </div>
      <img
        src="/images/illustration-working.svg"
        alt="illustration-working.svg"
        style={{ position: "relative", left: "100px" }}
      />
    </div>
  );
}

export default TopSection;
