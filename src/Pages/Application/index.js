import React from 'react';
import PageWithSteps from './_components/PageWithSteps';
import applicationFlow from './flow';

export default applicationFlow.reduce((pages, page, i, a) => {
  pages.push({
    path: page.url,
    component: (props) => {
      const prevPage = a[i - 1];
      const staticPrevUrl = page.prevUrl || (prevPage ? prevPage.url : undefined);

      return (
        <PageWithSteps
          {...page}
          {...props}
          staticPrevUrl={staticPrevUrl}
          index={i}
        >
          <page.component {...page} {...props} />
        </PageWithSteps>
      );
    },
  });
  
  return pages;
}, []);