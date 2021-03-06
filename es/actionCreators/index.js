import { INITIATE_FORM_STATE, CLEAR_FORM_STATE, FORM_ERROR, FIELD_ERROR, FORM_SUBMIT, SET_DATABASE_VALUES, UPDATE_VALUE, TOGGLE_MULTI_SELECT, NEXT_FIELD, NEXT_SECTION, REVERT_ACTIVE_FIELD } from '../constants/actionTypes';

export function initiateFormState(savedValues) {
  return {
    type: INITIATE_FORM_STATE,
    payload: {
      savedValues: savedValues
    }
  };
}

export function clearFormState() {
  return {
    type: CLEAR_FORM_STATE
  };
}

export function formSubmit(title, payload) {
  return {
    type: FORM_SUBMIT,
    title: title,
    payload: payload
  };
}

export function formError(errorMessage) {
  return {
    type: FORM_ERROR,
    payload: {
      errorMessage: errorMessage
    }
  };
}

export function setDatabaseValues(values) {
  return {
    type: SET_DATABASE_VALUES,
    values: values
  };
}

export function updateValue(name, value) {
  return {
    type: UPDATE_VALUE,
    payload: {
      name: name,
      value: value
    }
  };
}

export function toggleMultiSelect(name, option) {
  return {
    type: TOGGLE_MULTI_SELECT,
    payload: {
      name: name,
      option: option
    }
  };
}

export function nextField(currentIndex) {
  return {
    type: NEXT_FIELD,
    currentIndex: currentIndex

  };
}

export function revertActiveField() {
  return {
    type: REVERT_ACTIVE_FIELD
  };
}

export function nextSection() {
  return {
    type: NEXT_SECTION
  };
}

export function fieldError(fieldName, errorText) {
  return {
    type: FIELD_ERROR,
    payload: {
      fieldName: fieldName,
      errorText: errorText
    }
  };
}