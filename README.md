# employees-fe

An application for viewing all of tretton37's employees. You can filter, sort and change the view of the employees to be one of grid or row.

## How to get up and running

1. Add the build variables VITE_EMPLOYEES_BASE_URL & VITE_API_KEY. Vite uses dotenv so if you use any local .env file, you won't have to change the config in any way that is traced.
2. Change the directory to /employees-fe/.
3. Install the packages using `npm i`.
4. To start the local server, use `npm run dev`.
5. To build, use `npm run build`.
6. To start storybook locally, use `npm run storybook`.
7. To perform the unit tests, use `npm run test`.

## Thought of the design behind the code

The application is small so I haven't had any reason to segregate the applications part in any business area. All components (outside of the root src/App.tsx) are found in src/components. All things related to a component are collected in an "owned" directory. E.g. `src/components/MyComponent/` may contain the following: `MyComponent.tsx` the component to be consumed, and an `MyComponent.stories.tsx` or `MyComponent.module.scss` should the component have Storybook stories or css style.

DTOS are segregated from other types in order to prevent the introduction of breaking changes by mistaking them for the applications own types. Found in `src/dtos` & `src/types`.

All hooks are found in `src/hooks`.

All style that isn't component specific can be found in `src/styles`

In order to discourage the "avid" use of and long-term maintenance of a `src/util` directory or equivalent. Code that has no proper place in the midst of early phase development are placed in the `src/homeless` directory.

API calls are collected in the `src/api` directory.

Any directory beginning and ending with `__` are collections of items for development and are never bundled into the applications build. Example being `src/__fixtures__` that contain fake business data. Other files may be omitted from the application build by their file name. E.g. `src/**/*.test.*` & `src/components/**/*.stories.tsx`.

## Motivation behind installed packages

I used Vite with React, TypeScript & SWC since it's simple, modern and faaast <3.

I used very few dependencies. Outside of `react` & `react-dom` the only other dependencies are `sass` CSS pre-proccessing, giving support to shared variables & mixins. And `clsx` that is a light-weight util package that simplifies the construction of class names conditionally.

Noteworthy dev dependencies outside of `vite` and `typescript` are `storybook` and `@testing-library/react`. I consider all other packages related to any aforementioned and therefore not noteworthy. `storybook` is used to develop components in isolation from each other and from the context in which they may exist in. `@testing-library/react` allows for unit testing of React hooks, making them and therefore all things React able to be developed in isolation.

## Story list

| Design/a11y                                                                | Y/N | Functionality                                                    | Y/N | Testing/QA                                                  | Y/N |
| :------------------------------------------------------------------------- | --- | :--------------------------------------------------------------- | --- | :---------------------------------------------------------- | --- |
| Support for color blindness (document what you’ve done)                    | Yes | Sort by name and office                                          | Yes | Use Typescript (or similar, no any’s!)                      | Yes |
| Responsive design, works on mobile and tablets                             | Yes | Filter by name and office                                        | Yes | Integration tests of components                             | No  |
| Screen reader functionality                                                | Yes | Enable switch between a grid and a different view (such as list) | Yes | End-to-end testing (with an existing framework)             | No  |
| Use modern CSS throughout the application (css-grid, variables, clamp etc) | Yes | Available on a free public url (such as Azure, Heroku)           | No  | Unit tests for existing functionality (reasonable coverage) | Yes |
|                                                                            | N/A | CI/CD pipeline from your repo (e.g. Travis, GitLab, Azure)       | No  |                                                             | N/A |

### Motivation

I would've done everything in Design/a11y anyway since that is what I'm used to. The only exception being the responsiveness to mobile/desktop. I also implemented the responsiveness since I imagined the app would be used also on mobile had it been a real application.

Regarding the functionalities, I implemented sort & filter since I noticed there are many employees in the API response. The application would've been difficult to be used without them. I implemented both the grid & row items because I imagined there being different users with different needs. Either you know an employee mostly by image. In which case the grid view will help you. Or you want to see more Employees at one time in the view in which case the rows will help you. I didn't do the other two stories in response to time, but puplishing it on a public page would've been my first choice. Since the application is small I didn't feel as big a need for a CI/CD pipeline and more readily show-casing my work would've taken priority over that.

Finally in terms of the Testing/QA. I'm an adapt user of TypeScript and I find it easier to use than plain JavaScript. I can have an approach where I develop features without depending on any BE environment. When I can I prefer to do things in this manner. This is why I did the unit tests of the useEmployees hook and used Storybook for my components. You'll find in the Git history that everything comes together after these things are done. Given this approach, end-2-end tesing would therefore happen after the application is done and makes much less sence. In terms of integration testing of the components, Storybook argually handles that but manually.
