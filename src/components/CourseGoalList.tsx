import { type ReactNode } from "react"

import CourseGoal from "./CourseGoal"
import { type CourseGoal as CGoal } from "../App"
import InfoBox from "./InfoBox"

type CourseGoals = {
    goals: CGoal[],
    onDelete: (id: number) => void
}


const CourseGoalList = ({ goals, onDelete }: CourseGoals) => {
    if (goals.length === 0) {
        return (
            <InfoBox mode="hint">
                No goals yet? 😒 Start adding some.
            </InfoBox>
        );
    }
    let warningBox: ReactNode;
    if (goals.length >= 4) {
        warningBox = <InfoBox mode="warning" severity="high">Lot of goals 😲! Don't have too much on your plate</InfoBox>
    }
    return (
        <>
        {warningBox}
        <ul>
            {goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoal onDelete={onDelete} id={goal.id} title={goal.title}><p>{goal.description}</p></CourseGoal>
                </li>
            ))}
        </ul>
        </>
    )
}

export default CourseGoalList
