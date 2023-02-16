import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

const NewMeetup = () => {
  const addMeetupHandler = (meeupData) => {
    console.log(meeupData);
    fetch(
      'https://react-memory-app-default-rtdb.asia-southeast1.firebasedatabase.app/meeetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meeupData),
        headers:{
          'Content-Type': 'application/json'
        }
      }
    );

  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetups={addMeetupHandler} />
    </section>
  )
}

export default NewMeetup