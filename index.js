/**
 * @format
 */
import App from "./App";
import WelcomeScreen from "./src/components/WelcomeScreen";
import SearchBar from "./src/components/SearchBar";
import { Navigation } from "react-native-navigation";

Navigation.registerComponent("SearchBar", () => SearchBar);
Navigation.registerComponent("WelcomeScreen", () => WelcomeScreen);
Navigation.registerComponent("App", () => App);

Navigation.events().registerAppLaunchedListener(() => {
	Navigation.setRoot({
		root: {
			sideMenu: {
				left: {
					component: {
						name: "WelcomeScreen"
					}
				},
				center: {
					stack: [
						{
							component: {
								name: "SearchBar"
							},
							options: {
								topBar: {
									title: {
										text: "Pushed screen title"
									}
								}
							}
						},
						{
							component: {
								name: "WelcomeScreen"
							}
						},
						{
							component: {
								name: "App"
							}
						}
					]
				}
			}
		}
	});
});
