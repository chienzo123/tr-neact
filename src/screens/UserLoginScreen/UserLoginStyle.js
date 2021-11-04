const UserLoginStyle = {
	form: {
		width: "400px",
		height: "335px",
		backgroundColor: "white",
		margin: "auto",
		marginTop: "50px",
		borderRadius: "25px"
	  },
	  form__heading: {
		fontSize: "30px",
		fontWeight: 700,
		width: "100%",
		height: "20%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	  },
	  form__btn: {
		width: "100%",
		height: "20%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	  },
	  form__btnItem: {
		width: "100%",
		height: "40px",
		color: "black",
		fontWeight: "bold",
		borderRadius: "10px",
		border: "none",
		backgroundColor: "lightseagreen", 
		cursor: "pointer"
	  },
	 
	  register: {
		width: "100%",
		height: "50px",
		display: "flex",
		justifyContent: "center"
	  },
	  register__button: {
		cursor: "pointer",
		width: "400px",
		height: "40px",
		backgroundColor: "green",
		color: "black",
		fontWeight: "bold",
		borderRadius: "10px",
		border: "none"
	  },
	  overlay: {
		position: "fixed",
		top: "0",
		right: "0",
		bottom: "0",
		left: "0",
		backgroundColor: "rgba(0, 0, 0, 0.3)",
		animation: "inshow linear 0.2s",
		zIndex: 3,
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	  },
	  modalResult: {
		position: "absolute",
		backgroundColor: "white",
		animationName: `$identifier`,
		animationDuration: "2s",
		height: "450px",
		width: "800px"
	  },
	  "@keyframes identifier": {
		"0%": { top: "0", opacity: 0 },
		"100%": { top: "100px", opacity: 1 }
	  },
	  modalResult__close: {
		width: "100%",
		height: "15%",
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center"
	  },
	  modalResult__closeIcon: {
		margin: "10px",
		cursor: "pointer",
		fontSize: "40px !important"
	  },
	  modalResult__content: {
		width: "100%",
		height: "60%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column"
	  }
}
export default UserLoginStyle