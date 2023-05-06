import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import App from './App';
import './index.css';
import routes from './routing/routes';
import { RouterProvider } from 'react-router-dom';

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: 3,
//       cacheTime: 300_000,   // 5 minutes
//       staleTime: 10 * 1000, // 10 seconds
//       refetchOnWindowFocus: true,
//       refetchOnReconnect: true,
//       refetchOnMount: true,
//     }
//   }
// });

const queryClient = new QueryClient();

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
      {/* <App /> */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
