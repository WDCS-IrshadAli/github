import React, { useState } from "react";

import {
  ModalLayout,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Typography,
  Button,
  TextInput,
  Textarea
} from "@strapi/design-system";

export default function TodoModal({ setShowModal, addTodo }: { setShowModal: any, addTodo: any }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = async (e: any) => {
    // Prevent submitting parent form
    e.preventDefault();
    e.stopPropagation();

    try {
      await addTodo({ name: name, desc: desc });
      setShowModal(false);
    } catch (e) {
      console.log("error", e);
    }
  };

  const getError = () => {
    // Form validation error

    if (name.length > 40) {
      return "Content is too long";
    }

    return null;
  };

  return (
    <ModalLayout
      onClose={() => setShowModal(false)}
      labelledBy="title"
      as="form"
      onSubmit={handleSubmit}
      className="w-full"
    >
      <ModalHeader>
        <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
          Add todo
        </Typography>
      </ModalHeader>

      <ModalBody style={{ display: "flex", flexDirection: "column", gap: "10px"}}>
        <TextInput
          placeholder="Todo name..."
          label="Name"
          name="name"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) => setName(e.target.value)}
          value={name}
        />
        <Textarea
          placeholder="Todo description..."
          label="Description"
          name="desc"
          hint="Max 250 characters"
          error={getError()}
          onChange={(e: any) => setDesc(e.target.value)}
          value={desc}
        />
      </ModalBody>

      <ModalFooter
        startActions={
          <Button onClick={() => setShowModal(false)} variant="tertiary">
            Cancel
          </Button>
        }
        endActions={<Button type="submit">Add todo</Button>}
      />
    </ModalLayout>
  );
}