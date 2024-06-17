import AIChatView from 'Frontend/views/chat/AIChatView';
import MainLayout from 'Frontend/views/MainLayout.js';
import { lazy } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import StreamingChatView from "Frontend/views/streaming-chat/StreamingChatView";


export const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    handle: { title: 'Main' },
    children: [
      { path: '/', element: <AIChatView />, handle: { title: '占卜🔮' } },
      { path: '/streaming', element: <StreamingChatView />, handle: { title: 'AI即時聊天💗' } },
    ],
  },
];

export default createBrowserRouter(routes);
