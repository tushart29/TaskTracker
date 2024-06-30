
import { Task } from './Tasks'

// add the type which is Task like a num. string
// this is an array so do below 
// if you dont have one field or you add 1 more extra, this will give error since we have an task interface
export const TASKS: Task[] = [
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'May 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'May 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'May 7th at 12:30pm',
        reminder: false,
    },
];