import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem({ text, id, onDeleteItem }) {
  return (
    <View style={styles.goalItem}>
      <Pressable 
      // ripple effect
      android_ripple={{ color: "#210644" }}
      // anothe way of binding a funtion
      onPress={onDeleteItem.bind(this, id)}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  goalText: {
    padding: 10,
    color: "white",
  },
});

export default GoalItem;