import React from 'react'
import MeetupItem from './MeetupItem'
import classes from './MeetupList.module.css'

const MeetupList = (props) => {
  return <ul className={classes.list}>
            {props.meetups.map(meetup => 
                    <MeetupItem 
                        Key={meetup.id} 
                        id={meetup.id} 
                        title={meetup.title} 
                        image={meetup.image} 
                        address={meetup.address} 
                        description={meetup.description} 
                    />
                )}
        </ul>
}

export default MeetupList;