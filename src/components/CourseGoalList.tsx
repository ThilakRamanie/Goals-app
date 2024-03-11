import CourseGoal from "./CourseGoal"
import { type CourseGoal as CGoal } from "../App"

type CourseGoals = {
    goals: CGoal[],
    onDelete: (id:number) => void
}


const CourseGoalList = ({ goals, onDelete }: CourseGoals) => {
    return (
        <ul>
            {goals.map((goal) => (
                <li>
                    <CourseGoal onDelete={onDelete} id={goal.id} key={goal.id} title={goal.title}><p>{goal.description}</p></CourseGoal>
                </li>
            ))}
        </ul>
    )
}

export default CourseGoalList
