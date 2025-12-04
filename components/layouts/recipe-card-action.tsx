"use client";

import { IRecipe } from "@/types/recipe.type";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import EditRecipeForm from "./edit-recipe-form";

interface RecipeCardActionProps {
  recipe: IRecipe;
}

const RecipeCardAction = ({ recipe }: RecipeCardActionProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleEdit = async (id: number, updatedData: Omit<IRecipe, "id">) => {
    const editData = new Promise((resolve, reject) => {
      setIsEditing(true);

      setTimeout(() => {
        // Simulate success
        resolve(`Recipe with id ${id} updated successfully!`);
        setIsEditing(false);
        setEditModalOpen(false);
        console.log("Updated recipe:", { id, ...updatedData });
        toast.success("Recipe updated successfully!");

        // To simulate error:
        // reject(new Error("Failed to update recipe"));
      }, 1000);
    });

    return editData;
  };

  const handleDelete = async (id: number) => {
    const deleteData = new Promise((resolve, reject) => {
      setIsDeleting(true);
      setTimeout(() => {
        // Simulate success
        resolve(`Recipe with id ${id} deleted successfully!`);
        setIsDeleting(false);
        setDeleteModalOpen(false);
        console.log("Delete recipe with id:", id);
        toast.success("Deleted recipe successfully!");

        // To simulate error, you can use:
        // reject(new Error("Failed to delete recipe"));
      }, 1000);
    });
  };

  return (
    <div className="flex gap-4">
      {/* Edit Modal */}
      <Dialog open={editModalOpen} onOpenChange={setEditModalOpen}>
        <DialogTrigger asChild>
          <Button>Edit</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Recipe</DialogTitle>
            <DialogDescription>
              Update the details of your recipe below. Make sure to save changes
              when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <EditRecipeForm
            isEditing={isEditing}
            recipe={recipe}
            onEditSubmit={() => handleEdit(recipe.id, recipe)}
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Modal */}
      <Dialog open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
        <DialogTrigger asChild>
          <Button variant={"destructive"}>Delete</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this recipe? This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              variant={"destructive"}
              type="submit"
              onClick={() => handleDelete(recipe.id)}
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RecipeCardAction;
