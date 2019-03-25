import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form } from 'react-redux-form';
import NextLink from '../../../Components/NextLink';
import QuizListItem from './QuizListItem';

const List = styled.ul`
  padding: 0;
  margin: 0 0 25px;
  list-style: none;
`;
const ListItem = styled.li`
  :not(:last-child) {
    margin-bottom: 7px;
  }
`;

const QuizList = ({
  id,
  options,
  selectedOptions,
  nextUrl,
  multiple,
}) => {
  const nextEnabled = Object.values(selectedOptions).filter(v => v).length > 0;
  const formModel = multiple ? `.${id}` : '';
  return (
    <Form model={`appForms.quiz${formModel}`}>
      <List>
        { options.map(o => {
          const checked = multiple ? selectedOptions[o.value] : selectedOptions == o.value;

          return (
            <ListItem key={o.value}>
              <QuizListItem
                o={o}
                id={id}
                checked={Boolean(checked)}
                multiple={multiple}
              />
            </ListItem>
          );
        })}
      </List>
      { nextUrl && <NextLink to={nextUrl} enabled={nextEnabled} /> }
    </Form>
  );
};

QuizList.propTypes = {
  multiple: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    labelSlim: PropTypes.string,
  }),).isRequired,
  nextUrl: PropTypes.string,
  selectedOptions: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

const mapState = (state, ownProps) => ({
  selectedOptions: state.appForms.quiz[ownProps.id] || {}
})

export default connect(mapState)(QuizList);