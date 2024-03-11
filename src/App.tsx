import { useState } from "react";

import CourseGoalList from "./components/CourseGoalList.tsx";
import Header from "./components/Header.tsx";

import goalsImg from '../src/assets/goals.jpg';
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<Array<CourseGoal>>([]);
  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary
      }
      return [...prevGoals, newGoal]
    })
  }
  function handleDelete(id: number) {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id));
  }
  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDelete={handleDelete} />

    </main>
  )
}
