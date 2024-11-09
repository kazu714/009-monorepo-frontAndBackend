import * as ApolloClient from "@apollo/client";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
const { gql, useQuery } = ApolloClient;

const getTodos = gql`
  query getTodos{
    todos {
        name
        id
    }
  }
`;

export const loader = () => {
    const { data, loading, error } = useQuery(getTodos);
    return json(data.todo);
};

export default function TodoList() {
    const todos = useLoaderData<typeof loader>();

    return (
        <div>
            <h1>Todo List</h1>

        </div>
    );
}