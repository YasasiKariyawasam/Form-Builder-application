import React, { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const FormEditor = () => {
  const [fields, setFields] = useState([]);

  const addField = () => {
    const newField = {
      id: Date.now(),
      label: "New Field",
      type: "text",
      options: [],
    };
    setFields([...fields, newField]);
  };

  const updateField = (id, key, value) => {
    setFields(fields.map((f) => (f.id === id ? { ...f, [key]: value } : f)));
  };

  const deleteField = (id) => {
    setFields(fields.filter((f) => f.id !== id));
  };

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6">
      {/* 🧱 Form Builder */}
      <Card className="shadow-lg rounded-2xl border border-gray-200">
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="text-2xl font-semibold">Form Editor</CardTitle>
          <Button onClick={addField} className="flex items-center gap-2">
            <Plus size={18} /> Add Field
          </Button>
        </CardHeader>

        <CardContent>
          {fields.length === 0 && (
            <p className="text-gray-500 text-center py-8">
              No fields added yet.
            </p>
          )}

          {fields.map((field) => (
            <div
              key={field.id}
              className="flex items-center gap-4 mb-4 p-4 border rounded-xl bg-gray-50"
            >
              <Input
                type="text"
                value={field.label}
                onChange={(e) => updateField(field.id, "label", e.target.value)}
                placeholder="Field Label"
                className="flex-1"
              />

              <Select
                value={field.type}
                onValueChange={(value) => updateField(field.id, "type", value)}
              >
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="text">Text</SelectItem>
                  <SelectItem value="number">Number</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="date">Date</SelectItem>
                  <SelectItem value="dropdown">Dropdown</SelectItem>
                  <SelectItem value="checkbox">Checkbox</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="destructive"
                onClick={() => deleteField(field.id)}
                className="p-2"
              >
                <Trash2 size={18} />
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* 🌿 Form Preview */}
      {fields.length > 0 && (
        <Card className="shadow-lg rounded-2xl border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Form Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form submitted successfully!");
              }}
            >
              {fields.map((field) => (
                <div key={field.id} className="mb-4">
                  <label className="block font-medium mb-1">{field.label}</label>

                  {field.type === "text" && (
                    <Input type="text" placeholder={field.label} />
                  )}
                  {field.type === "number" && (
                    <Input type="number" placeholder={field.label} />
                  )}
                  {field.type === "email" && (
                    <Input type="email" placeholder="Enter your email" />
                  )}
                  {field.type === "date" && <Input type="date" />}
                  {field.type === "dropdown" && (
                    <select className="border rounded-md p-2 w-full">
                      <option>Option 1</option>
                      <option>Option 2</option>
                    </select>
                  )}
                  {field.type === "checkbox" && (
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id={field.id} />
                      <label htmlFor={field.id}>{field.label}</label>
                    </div>
                  )}
                </div>
              ))}

              {/* ✅ Submit Button */}
              <div className="flex justify-center mt-6">
                <Button
                  type="submit"
                  className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-xl"
                >
                  Submit
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default FormEditor;

