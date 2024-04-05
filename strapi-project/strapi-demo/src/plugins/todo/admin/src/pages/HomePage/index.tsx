/*
 *
 * HomePage
 *
 */

import React, { memo, useState } from "react";
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

const HomePage = () => {
  const [todoData, setTodoData]: any = useState([]);
  const [showModal, setShowModal] = useState(false);

  async function addTodo(data: any) {
    setTodoData([...todoData, { ...data, id: nanoid(), isDone: false }]);
  }

  async function toggleTodo(data: any) {
    alert("Add Toggle Todo in API");
  }

  async function deleteTodo(data: any) {
    alert("Add Delete Todo in API");
  }

  async function editTodo(id: any, data: any) {
    alert("Add Edit Todo in API");
  }

  return (
    <Layout>
      <BaseHeaderLayout
        title="Todo Plugin"
        subtitle="All your todos in one place."
        as="h2"
      />

      <ContentLayout>
        {todoData.length === 0 ? (
          <>
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
          <Select.Root multi>
      <Select.Trigger>
        <Select.Value placeholder="Select an option..." />
        <Select.Icon />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content position="popper" sideOffset={4}>
          <Select.Viewport>
            <Select.Item value="1">
              <Select.ItemText>Option 1</Select.ItemText>
              <Select.ItemIndicator>
                <Check />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item value="2">
              <Select.ItemText>Option 2</Select.ItemText>
              <Select.ItemIndicator>
                <Check />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item value="3">
              <Select.ItemText>Option 3</Select.ItemText>
              <Select.ItemIndicator>
                <Check />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item value="4">
              <Select.ItemText>Option 4</Select.ItemText>
              <Select.ItemIndicator>
                <Check />
              </Select.ItemIndicator>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
          </>
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