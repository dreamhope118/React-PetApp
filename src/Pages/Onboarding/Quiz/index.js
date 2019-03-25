import React from 'react';
import PageComponents from '../../../Components/Page';
import Logo from '../../../Components/LogoPanel';
import Header from '../_components/Header';
import QuizList from './QuizList';
import quizFlow from './flow';

const DEF_SUB_TEXT = '(check all that apply)';

export default quizFlow.reduce((pages, page, i, a) => {
  pages.push({
    path: page.id,
    component: () => {
      const prevUrl = a[i - 1] ? a[i - 1].id : undefined;
      const nextUrl = (page.next) || (a[i + 1] ? a[i + 1].id : undefined);

      return (
        <PageComponents.Page logo={<Logo staticPrevUrl={prevUrl} />}>
          <Header text={page.header} subText={page.subheader ? DEF_SUB_TEXT : ''} />
          <QuizList {...page} nextUrl={`/welcome/${nextUrl}`} />
        </PageComponents.Page>
      );
    },
  });
  
  return pages;
}, []);


