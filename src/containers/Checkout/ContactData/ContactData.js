import React, {useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';

const ContactData = () => {
  const [state, setstate] = useState({
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    }
  });

  const contactSubmissionHandler = (e) => {
    e.preventDefault();
    
  }

  return (
    <div className={styles.ContactData}>
      <form>
        <input className={styles.Input} name='name' placeholder='Name'/>
        <input className={styles.Input} type='email' placeholder='Email' name='email'/>
        <input className={styles.Input} name='street' placeholder='Street'/>
        <input className={styles.Input} name='postal' placeholder='Postal'/>
        <Button clicked={contactSubmissionHandler} buttonType='Success'> CONTINUE</Button>
      </form>
    </div>
  )
};

ContactData.propTypes = {};

ContactData.defaultProps = {};

export default ContactData;
