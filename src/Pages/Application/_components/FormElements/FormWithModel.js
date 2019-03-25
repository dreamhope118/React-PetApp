import React from 'react';
import { Form } from 'react-redux-form';
import PropTypes from 'prop-types';

const nextUrls = {
  you(v) {
    switch (v.haveCoAdopter) {
      case 'yes':
        return 'co-adopter';
      case 'no':
        return 'family';
      default:
        return undefined;
    }
  },
  'co-adopter': 'family',
  'family': 'home',
  'home': 'lifestyle',
  'lifestyle': 'agreements',
  'agreements': 'reference',
  'reference': 'success',
  'success': '#',
};

const makeGetPushParams = (pageUrl, v) => {
  const next = nextUrls[pageUrl];
  return {
    path: typeof next === 'function' ? next(v) : next,
    state: { prevUrl: pageUrl }
  };
};

const onSubmit = (pageUrl, history) => (v) => {
  const { path, state } = makeGetPushParams(pageUrl, v);

  if (!path) return;

  history.push(`/application/${path}`, state);
}

const FormWithModel = ({
  model,
  children,
  history,
  pageUrl,
  ...rest
}) => (
  <Form {...rest} model={`appForms.application.${model}`} onSubmit={onSubmit(pageUrl, history)}>
    { children }
  </Form>
);

FormWithModel.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
  pageUrl: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
};

export default FormWithModel;