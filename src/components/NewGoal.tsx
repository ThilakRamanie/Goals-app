import { FormEvent, useRef } from "react";

type NewGoalProp = {
    onAddGoal: (goal: string, summary: string) => void
}

const NewGoal = ({ onAddGoal }: NewGoalProp) => {
    const goalName = useRef<HTMLInputElement>(null);
    const goalSummary = useRef<HTMLInputElement>(null);
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const enteredGoal = goalName.current!.value;
        const summaryValue = goalSummary.current!.value;
        event.currentTarget.reset();
        onAddGoal(enteredGoal, summaryValue);
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your goal</label>
                <input type="text" id="goal" name="goal_name" ref={goalName} />
            </p>
            <p>
                <label htmlFor="summary">Mini summary</label>
                <input type="summary" name="goal_summary" id="goal" ref={goalSummary} />
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    )
}
export default NewGoal;
