// import { useState } from 'react'

// const WorkoutForm = () => {
//     const [title, setTitle] = useState('');
//     const [load, setLoad] = useState('');
//     const [reps, setReps] = useState('');
//     const [error, setError] = useState(null)
//     const handleSubmit = async (e) => {
//         // reach out to api so async 
//         e.preventDefault() // dont want to refresh the page
//         const workout = { title, load, reps }

//         // fetch request to post the data
//         const response = await fetch('/api/workouts', {
//             method: 'POST',
//             body: JSON.stringify(workout),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         // reponse you get back. you get a success json info or erro message fromt he controller file 
//         const json = await response.json()
//         if (!response.okay) {

//             setError(json.error) // you created a error property in the contoller file 
//         }
//         if (response.okay) {
//             setTitle('')
//             setLoad('')
//             setReps('')
//             setError(null) // incase it was not null before
//             console.log('new workout added', json)
//         }
//     }
//     return (
//         <form className="create" onSubmit={handleSubmit}>
//             <h3> Add a new workout </h3>
//             <label> Exercise Title:</label>
//             {/* if someting changes outside the form, this change will be reflected here too */}
//             <input type='text'
//                 onChange={(e) => { setTitle(e.target.value) }}
//                 value={title}
//             ></input>
//             <label> Load (in kg): </label>
//             <input type='number'
//                 onChange={(e) => { setLoad(e.target.value) }}
//                 value={load}
//             ></input>
//             <label> Reps: </label>
//             <input type='number'
//                 onChange={(e) => { setReps(e.target.value) }}
//                 value={reps}
//             ></input>
//             <button>Add Workout</button>
//             {error && <div className="error">{error}</div>}
//         </form>
//     )
// }


// export default WorkoutForm
// import { useState } from 'react'
// import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

// const WorkoutForm = () => {
//     const { dispatch } = useWorkoutsContext()

//     const [title, setTitle] = useState('')
//     const [load, setLoad] = useState('')
//     const [reps, setReps] = useState('')
//     const [error, setError] = useState(null)
//     const [emptyFields, setEmptyFields] = useState([])

//     const handleSubmit = async (e) => {
//         e.preventDefault()

//         const workout = { title, load, reps }

//         const response = await fetch('/api/workouts', {
//             method: 'POST',
//             body: JSON.stringify(workout),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         const json = await response.json()

//         if (!response.ok) {
//             setError(json.error)
//             setEmptyFields(json.emptyFields || []) // Ensure it is set as an array

//         }
//         // Inside handleSubmit function in WorkoutForm component
//         if (response.ok) {
//             dispatch({ type: 'CREATE_WORKOUT', payload: json });
//             setTitle('');
//             setLoad('');
//             setReps('');
//             setError(null);
//             setEmptyFields([]) // dont want to see all these on the page after sent to database
//         }


//     }


//     return (
//         <form className="create" onSubmit={handleSubmit}>
//             <h3>Add a New Workout</h3>

//             <label>Excersize Title:</label>
//             <input
//                 type="text"
//                 onChange={(e) => setTitle(e.target.value)}
//                 value={title}

//                 // if title is there, apply a class to it else just empty string
//                 // if true, then class is equal to error else its empty string 
//                 className={Array.isArray(emptyFields) && emptyFields.includes('title') ? 'error' : ''}

//             />

//             <label>Load (in kg):</label>
//             <input
//                 type="number"
//                 onChange={(e) => setLoad(e.target.value)}
//                 value={load}
//                 // className={emptyFields.includes('load') ? 'error' : ''}
//                 className={Array.isArray(emptyFields) && emptyFields.includes('load') ? 'error' : ''}

//             />

//             <label>Number of Reps:</label>
//             <input
//                 type="number"
//                 onChange={(e) => setReps(e.target.value)}
//                 value={reps}
//                 // className={emptyFields.includes('reps') ? 'error' : ''}
//                 className={Array.isArray(emptyFields) && emptyFields.includes('reps') ? 'error' : ''}
//             />

//             <button>Add Workout</button>
//             {error && <div className="error">{error}</div>}
//         </form>
//     )
// }

// export default WorkoutForm

import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext()

    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = { title, load, reps }

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        console.log('Response JSON:', json); // Check the structure of json in console

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)

        }
        if (response.ok) {
            setEmptyFields([])
            setError(null)
            setTitle('')
            setLoad('')
            setReps('')
            dispatch({ type: 'CREATE_WORKOUT', payload: json })
        }

    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Excersize Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes('title') ? 'error' : ''}
            />

            <label>Load (in kg):</label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
                className={emptyFields.includes('load') ? 'error' : ''}
            />

            <label>Number of Reps:</label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                className={emptyFields.includes('reps') ? 'error' : ''}
            />

            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm