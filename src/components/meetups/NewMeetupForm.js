import React, { useRef } from 'react';
import Cards from '../ui/cards';
import classes from './NewMeetupForm.module.css';

const NewMeetupForm = (props) => {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
        title: enteredTitle,
        image: enteredImage,
        address: enteredAddress,
        description: enteredDescription,
    }

   props.onAddMeetups(meetupData); 
}
  return (<Cards>
            <form className={classes.form} onSubmit={onSubmitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type="text" required id="title" ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Image</label>
                    <input type="url" required id="image" ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type="text" required id="address" ref={addressInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea rows="5" required id="description" ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button >Add Meetup</button>
                </div>
            </form>
        </Cards>
  )
}

export default NewMeetupForm