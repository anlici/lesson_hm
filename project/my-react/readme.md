## 后台通用
- react-router-dom
  npm i react-router-dom
  配置路由 
  const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/about',
                element: <About />
            },

        ]
    }
])
- <RouterProvider router={router} />
  添加前缀 basename 
  <RouterProvider router={router} basename="/admin" />

- hash