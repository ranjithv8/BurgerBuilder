import React from 'react';
import styles from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import BackDrop from '../BackDrop/BackDrop';

const Modal = (props) => {
  return(
    <Aux>
      <BackDrop show={props.show} clicked={props.modalClosed}></BackDrop>
      <div className={styles.Modal}
        style={{
          transform: props.show ? 'translateY(0)':'translateY(-100vh)',
          opacity: props.show ? 1 : 0
        }}
      >
        {props.children}
      </div>
    </Aux>
  )
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.show === nextProps.show;
}


export default React.memo(Modal,areEqual);
