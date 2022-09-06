#What are props? 

#What is an arrow function? 

#What is JSX?

#What does this className formulation means? 
<li className={`todo-item ${todo.completed ? "completed": ""}`}> 

Based on a state of the boolean param "completed", which is inside the prop "todo", we ask the following question:
? --> If the Prop "todo" has the value "completed" being TRUE, then add the className --> "completed", which means "class" inside HTML 
: --> Else just add empty String "", which means nothing to the className