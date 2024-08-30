const styling = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "25px 80px",
    width: "85vw",
  },
  mobileContainer: {
    '@media screen and (maxWidth: 700px)': {
      flexDirection: "column"
    }
  },
  navigation: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "red",
  },
  navigationList: {
    listStyleType: "none",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    color: "black",
    // width: "90vw"
  },
  listItems: {
    padding: "10px",
    textDecoration: "none",
    color: "#9C9AA3",
    fontWeight: "700",
    fontSize: "15px"
  },
  signUp: {
    textDecoration: "none",
    backgroundColor: "#29D0D2",
    color: "white",
    borderRadius: "20px",
    padding: "10px 20px",
    width: "80px",
    textAlign: "center",
    borderWidth: "0",
  },
  listItem1: {
    display: "flex",
    gap: "30px",
  },
  listItem2: {
    marginLeft: "35vw",
    display: "flex",
    alignItems: "center",
    gap: "25px",
  },
}



const mergedStyles = { ...styling.listItems, ...styling.signUp };
const mergerStyles2 = {...styling.mobileContainer, ...styling.container}

function Nav() {
  return (
    <div className="container" style={mergerStyles2}>
      <img src="/images/logo.svg" alt="logo"/>
      <ul style={styling.navigationList}>
        <li style={styling.listItem1}>
          <a href="#" style={styling.listItems}>
            Features
          </a>
          <a href="#" style={styling.listItems}>
            Pricing
          </a>
          <a href="#" style={styling.listItems}>
            Resources
          </a>
        </li>
        <li style={styling.listItem2}>
          <a href="#" style={styling.listItems}>
            Login
          </a>
          <a href="#" style={mergedStyles}>
            Sign Up
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
