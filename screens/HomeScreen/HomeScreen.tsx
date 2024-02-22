import { StatusBar } from "expo-status-bar";
import {
	Text,
	View,
	ImageBackground,
	Image,
	TouchableOpacity,
} from "react-native";
import {
	useFonts,
	Poppins_500Medium,
	Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./style";

export default function HomeScreen() {
	const [loaded, error] = useFonts({
		Poppins_500Medium,
		Poppins_700Bold,
	});

	if (error) {
		return <></>;
	}

	if (!loaded) {
		return <></>;
	}

	return (
		<ImageBackground
			style={styles.container}
			source={require("../../assets/images/home-page-background.png")}
			resizeMode="cover">
			<Text style={styles.screenTitle}>
				<Text style={styles.boldTitle}>Digital</Text>
				Gallery
			</Text>
			<View style={styles.imagesContainer}>
				<View style={styles.topContainer}>
					<Image
						style={styles.smallImage}
						source={require("../../assets/images/home-page-digital-art1.png")}
					/>
					<Image
						style={styles.smallImage}
						source={require("../../assets/images/home-page-digital-art2.png")}
					/>
				</View>
				<Image
					style={styles.bigImage}
					source={require("../../assets/images/home-page-digital-art3.png")}
				/>
			</View>
			<Text style={styles.introText}>Be an Artist & Collector</Text>
			<TouchableOpacity>
				<LinearGradient
					colors={["#B24E9D", "#7E3BA1"]}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 1 }}
					style={styles.loginButton}>
					<Text style={styles.loginText}>Log In</Text>
				</LinearGradient>
			</TouchableOpacity>
			<TouchableOpacity>
				<LinearGradient
					colors={["#7E3BA1", "#B24E9D"]}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 1 }}
					style={styles.loginButton}>
					<Text style={styles.loginText}>Create Account</Text>
				</LinearGradient>
			</TouchableOpacity>
			<StatusBar style="auto" />
		</ImageBackground>
	);
}
