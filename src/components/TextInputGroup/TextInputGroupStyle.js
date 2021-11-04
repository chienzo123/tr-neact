const TextInputGroupStyle = {
    inputItem: {
		width: "100%",
		height: "100px",
		justifyContent: "center",
		alignItems: "center",
        flexDecoration: "column"
	  },
	  inputItem__heading: {
		fontWeight: "bold",
		fontSize: "20px",
		width: "100%",
        height:"20%"
	  },
	  inputItem__input: {
		width: "100%",
		height: "50px",
		borderRadius: "10px",
		fontSize: "25px",
		border: "1px solid black",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginTop: "5px"
	  },
	  
	  inputItem__error: { color: "red", marginTop: "2px", marginBottom: "2px" },
	  inputItem__rule: {
		marginTop: "2px",
		marginBottom: "2px",
		color: "gray",
		fontSize: "12px"
	  },
	  inputItem__inputIcon: {
		width: "15%",
		display: "flex",
		justifyContent: "center"
	  },
	  inputItem__inputInput: {
		border: "none",
		width: "85%",
		height: "96%",
		outline: "none",
		borderRadius: "10px",
		paddingRight: "5px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		fontSize: "17px"
	  }
}
export default TextInputGroupStyle;