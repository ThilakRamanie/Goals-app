import { type PropsWithChildren } from "react";

// interface CourseGoals {
//     title: string;
//     description: string;
// }

type CourseGoals = PropsWithChildren<{ id:number, title: string, onDelete: (id:number) => void }>

export default function CourseGoal({ id, onDelete, title, children }: CourseGoals) {
    return <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <button onClick={()=>onDelete(id)}>Delete</button>
    </article>
}   