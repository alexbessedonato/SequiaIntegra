import React from "react";
import { ScrollView, View, Text, Dimensions } from "react-native";
import { styles } from "./index/index_css"; // Import the JS-based styles

const { width, height } = Dimensions.get("window");

export default function MainScreen() {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={{ flex: 1 }}
    >
      {/* Main Screen */}
      <View style={[styles.page, { width, height }, styles.bgRed]}>
        <Text style={styles.text}>Home Screen</Text>
      </View>

      {/* Screen 1 */}
      <View style={[styles.page, { width, height }, styles.bgYellow]}>
        <Text style={styles.text}>Pluja</Text>
      </View>

      {/* Screen 2 */}
      <View style={[styles.page, { width, height }, styles.bgGreen]}>
        <Text style={styles.text}>Temp</Text>
      </View>

      {/* Screen 3 */}
      <View style={[styles.page, { width, height }, styles.bgBlue]}>
        <Text style={styles.text}>Vegetació</Text>
      </View>

      {/* Screen 4 */}
      <View style={[styles.page, { width, height }, styles.bgPurple]}>
        <Text style={styles.text}>Indice de Peligro</Text>
      </View>
    </ScrollView>
  );
}
