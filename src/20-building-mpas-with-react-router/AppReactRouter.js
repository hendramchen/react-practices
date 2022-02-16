import { Routes, Route, Navigate } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';
import './AppReactRouter.css';

function AppReactRouter() {
  return (
    <Layout>
      <Routes>
        <Route path='app-react-router/' element={<Navigate to='/quotes' />} />
        <Route path='app-react-router/quotes' element={<AllQuotes />} />
        <Route path='app-react-router/quotes/:quoteId' element={<QuoteDetail />} />
        <Route path='app-react-router/new-quote' element={<NewQuote />} />
        <Route path='app-react-router/*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default AppReactRouter;