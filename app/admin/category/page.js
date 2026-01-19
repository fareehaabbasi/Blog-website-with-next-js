"use client";
import { useState } from "react";
import blogs from "@/data/blog";

export default function CategoriesPage() {
  // unique categories
  const initialCategories = [
    ...new Set(blogs.map(blog => blog.category))
  ];

  const [categories, setCategories] = useState(initialCategories);
  const [newCategory, setNewCategory] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  // ADD
  const addCategory = () => {
    if (!newCategory.trim()) return;
    setCategories([...categories, newCategory]);
    setNewCategory("");
  };

  // DELETE
  const deleteCategory = (index) => {
    const updated = categories.filter((_, i) => i !== index);
    setCategories(updated);
  };

  // EDIT SAVE
  const saveEdit = (index) => {
    const updated = [...categories];
    updated[index] = editValue;
    setCategories(updated);
    setEditIndex(null);
  };

  return (
    <div className="p-6 max-w-3xl">

      <h1 className="text-2xl font-bold mb-6">Categories</h1>

      {/* ADD CATEGORY */}
      <div className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="New category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          className="border px-4 py-2 rounded w-full"
        />
        <button
          onClick={addCategory}
          className="px-6 py-2 bg-[var(--eBoxColor)] text-white rounded"
        >
          Add
        </button>
      </div>

      {/* CATEGORY LIST */}
      <ul className="space-y-3">
        {categories.map((cat, index) => (
          <li
            key={index}
            className="p-4 bg-[var(--meltBorwn)] rounded-lg flex justify-between items-center"
          >
            {editIndex === index ? (
              <input
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                className="border px-3 py-1 rounded"
              />
            ) : (
              <span className="font-medium">{cat}</span>
            )}

            <div className="flex gap-3">
              {editIndex === index ? (
                <button
                  onClick={() => saveEdit(index)}
                  className="text-green-600"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEditIndex(index);
                    setEditValue(cat);
                  }}
                  className="text-blue-600"
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => deleteCategory(index)}
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
