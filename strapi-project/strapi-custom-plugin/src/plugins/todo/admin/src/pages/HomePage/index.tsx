/*
 *
 * HomePage
 *
 */

import React, { memo, useEffect, useState } from "react";
import { LoadingIndicatorPage } from "@strapi/helper-plugin";
import { nanoid } from "nanoid";
import {
  Layout,
  BaseHeaderLayout,
  ContentLayout,
} from "@strapi/design-system/Layout";

import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";
import { Button } from "@strapi/design-system/Button";
import Plus from "@strapi/icons/Plus";
import { Illo } from "../../components/Illo";
import { Select } from '@strapi/ui-primitives';
import TodoModal from "../../components/TodoModal";
import TodoCount from "../../components/TodoCount";
import TodoTable from "../../components/TodoTable";
import { Check } from "@strapi/icons";
import todoRequests from "../../api/todo";

const HomePage = () => {
  const [todoData, setTodoData]: any = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // fetch todos ---
  const fetchData = async () => {
    if (isLoading===false) setIsLoading(true);
    const todo = await todoRequests.getAllTodos();
    setTodoData(todo);
    setIsLoading(false);
  }

  useEffect(async () => {
    await fetchData();
  }, []);

  async function addTodo(data: any) {
    await todoRequests.addTodo(data);
    await fetchData();
  }

  async function toggleTodo(data: any) {
    await todoRequests.toggleTodo(data.id);
    await fetchData();
    // alert("Add Toggle Todo in API");
  }

  async function deleteTodo(data: any) {
    await todoRequests.deleteTodo(data.id);
    await fetchData();
    // alert("Add Delete Todo in API");
  }

  async function editTodo(id: any, data: any) {
    await todoRequests.editTodo(id, data);
    await fetchData();
    // alert("Add Edit Todo in API");
  }

  if (isLoading) return <LoadingIndicatorPage />;

  return (
    <Layout>
      <BaseHeaderLayout
        title="Todo Plugin"
        subtitle="All your todos in one place."
        as="h2"
      />

      <ContentLayout>
        {todoData.length === 0 ? (
          <EmptyStateLayout
            icon={<Illo />}
            content="You don't have any todos yet..."
            action={
              <Button
                onClick={() => setShowModal(true)}
                variant="secondary"
                startIcon={<Plus />}
              >
                Add your first todo
              </Button>
            }
          />          
        ) : (
          <>
            <TodoCount count={todoData.length} />
            <TodoTable
              todoData={todoData}
              setShowModal={setShowModal}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          </>
        )}
      </ContentLayout>
      {showModal && <TodoModal setShowModal={setShowModal} addTodo={addTodo} />}
    </Layout>
  );
};

export default HomePage;