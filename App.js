import { useState } from 'react';
import { Button, FlatList, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  // opening and closing of modal
  const modalHnadler = () => {
    setModalIsVisible(!modalIsVisible);
  }

  const addGoalHandler = (enteredGoalText) => {
    // currentGoals == goals. 
    // Autometically provieded by react
    setGoals((currentGoals) => 
    [
      ...currentGoals, 
      {text: enteredGoalText, id: Math.random().toString()}
    ]);

    modalHnadler();
  };

  const deleteGoalHangler = (id) => {
    setGoals(currentGoals => {
      // filter out the item that has the same id as the item's id that is pressed
      return currentGoals.filter((goal) => goal.id !== id);
    })
    // console.log('Delete Working!!!');
  }


  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.addButtonContainer}>
          <Button
            title="Add New Goal"
            color={"#5e0acc"}
            onPress={modalHnadler}
          />
        </View>
        <GoalInput
          onAddGoal={addGoalHandler}
          isVisible={modalIsVisible}
          modalHnadler={modalHnadler}
        />

        {/* <View style={styles.goalContainer}>
        <ScrollView alwaysBounceVertical={false}>
          {goals.map((goal) => (
            <GoalItem
              key={goal.key}
              text={goal.text}
              id={goal.id}
              onDeleteItem={deleteGoalHangler}
            />
          ))}
        </ScrollView>
      </View> */}

        <View style={styles.goalContainer}>
          <FlatList
            data={goals} // here we provide the list of data
            // no nedd to provide key if key property is there in the data.
            // key is automatically set from list item's key property
            // itemData.index gives index

            // if key property doesn't there in the data then this is the way....
            keyExtractor={(item, index) => {
              return item.id;
            }}
            // what needs to be renderd goes here
            renderItem={(itemData) => {
              return (
                // render item
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHangler}
                />
              );
            }}
            // stop from vertical bouncing
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  addButtonContainer: {
    marginBottom: 20,
  },
  goalContainer: {
    flex: 5,
  },
});
