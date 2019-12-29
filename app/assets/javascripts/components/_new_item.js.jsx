const NewTask = (props) => {  let formFields = {}

  return(
    <form onSubmit={ (e) => { props.handleFormSubmit(formFields.name.value, formFields.description.value, formFields.priority.value, formFields.deadline.value); e.target.reset();}
}>
    New Task
    <div>
     <input ref={input => formFields.name = input} placeholder='Enter the name of the task'/>
     </div>
     <div>

     <input ref={input => formFields.description = input} placeholder='Enter a description'/>
     </div>
     <div>

     <input ref={input => formFields.priority = input} placeholder='Enter the priority'/>
     </div>
     <div>

     <input ref={input => formFields.deadline = input} placeholder='Enter when the task is due'/>
     <button>Submit</button>
     </div>
    </form>
  )
}
