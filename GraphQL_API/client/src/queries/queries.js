import {gql} from 'apollo-boost';

const getTasksQuery = gql
`
{
  tasks {
    id
    title
    description
  }
}`;

const getProjectsQuery = gql
`
{
  projects {
    id
    title
    description
  }
}`;

const addTaskMutation = gql
`
mutation($title: String!, $description: String!, $project: ID!) {
  addTask(title: $title, description: $description, project: $project) {
    id
    title
  }
}`;

const addProjectMutation = gql
`
mutation($title: String!, $description: String!) {
  addProject(title: $title, description: $description) {
    id
    title
  }
}`;

export {getTasksQuery, getProjectsQuery, addTaskMutation, addProjectMutation};