import React, { Component } from "react";
import { TextInput, View, StyleSheet, Keyboard } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: "",
			isFocus: false
		};

		this.handleBlur = this.handleBlur.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}
	componentDidMount() {
		this.keyboardDidHideListener = Keyboard.addListener(
			"keyboardDidHide",
			this.handleKeyboardHide
		);
    }
    
    handleKeyboardHide() {
        Keyboard.dismiss();
    }

	handleSearch(query) {
		this.setState({ search: query });
	}
	handleFocus() {
		this.setState({ isFocus: true });
	}
	handleBlur() {
		this.setState({ isFocus: false });
	}
	render() {
		let isFocus = this.state.isFocus;
		let searchBarStyles;
		if (isFocus) {
			searchBarStyles = Object.assign({}, styles.searchBar, styles.focus);
		} else {
			searchBarStyles = Object.assign({}, styles.searchBar, styles.blur);
		}
		return (
			<View style={styles.container}>
				<View style={searchBarStyles}>
					<Icon style={styles.searchIcon} name="ios-search" size={20} />
					<TextInput
						style={styles.searchInput}
						placeholder="Where do you want to go?"
						onChangeText={this.handleSearch}
						onFocus={this.handleFocus}
						onBlur={this.handleBlur}
						blurOnSubmit={true}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		paddingLeft: 15,
		paddingRight: 15,
		marginBottom: 40,
		width: "100%",
		height: 40
	},
	searchBar: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		borderTopLeftRadius: 3,
		borderTopRightRadius: 3,
		borderBottomRightRadius: 3,
		borderBottomLeftRadius: 3,
		borderWidth: 1,
		borderColor: "#EEE",
		backgroundColor: "#FFF"
	},
	blur: {
		elevation: 4
	},
	focus: {
		elevation: 16
	},
	searchInput: {
		flex: 1,
		fontSize: 14,
		color: "#DBDCE5",
		paddingLeft: 0
	},
	searchIcon: {
		paddingRight: 24,
		paddingTop: 10,
		paddingRight: 15,
		paddingBottom: 10,
		paddingLeft: 15,
		color: "#DBDCE5"
	}
});
