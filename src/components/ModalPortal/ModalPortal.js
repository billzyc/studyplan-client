import React from 'react';
import PropTypes from 'prop-types';
import checkProps from '@jam3/react-check-extra-props';
import classnames from 'classnames';
import { useSelector } from 'react-redux';

import styles from './ModalPortal.module.scss';

import NewSemesterModal from '../NewSemesterModal/NewSemesterModal';
import NewCourseModal from '../NewCourseModal/NewCourseModal';
import { MODAL_KEYS } from '../../data/consts';

// import useLayout from '../../utils/hooks/use-layout';

function ModalPortal() {
  const { modal } = useSelector(state => state);

  const renderModal = () => {
    switch (modal) {
      case MODAL_KEYS.NEW_SEMESTER:
        return <NewSemesterModal />;
      case MODAL_KEYS.NEW_COURSE:
        return <NewSemesterModal />;
      default:
        return null;
    }
  };

  return <section section={classnames(styles.modalPortal)}>{renderModal()}</section>;
}

ModalPortal.propTypes = checkProps({});

ModalPortal.defaultProps = {};

export default ModalPortal;
