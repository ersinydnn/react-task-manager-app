import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home-page";
import { TasksPage, tasksPageLoader } from "../pages/tasks-page";
import { MainLayout } from "../layouts/main-layout";
import {
  CreateTaskPage,
  createTaskPageSubmitAction,
} from "../pages/create-task-page";
import {
  TaskPage,
  taskPageLoader,
  taskPageUpdateAction,
} from "../pages/task-page";
import {
  EditTaskPage,
  editTaskPageLoader,
  editTaskPagePutAction,
} from "../pages/edit-task-page";
import { NotFoundPage } from "../pages/not-found-page";
export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/tasks",
        element: <TasksPage />,
        loader: tasksPageLoader,
      },
      {
        path: "/tasks/create",
        element: <CreateTaskPage />,
        action: createTaskPageSubmitAction,
      },
      {
        path: "/tasks/:id",
        element: <TaskPage />,
        loader: taskPageLoader,
        action: taskPageUpdateAction,
      },
      {
        path: "/tasks/:id/edit",
        element: <EditTaskPage />,
        loader: editTaskPageLoader,
        action: editTaskPagePutAction,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
