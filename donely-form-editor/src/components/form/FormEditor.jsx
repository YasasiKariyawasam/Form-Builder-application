import React, { useState } from "react";
import { Plus, Trash2, X } from "lucide-react";
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
      required: false,
    };
    setFields([...fields, newField]);
  };

  const updateField = (id, key, value) => {
    setFields(fields.map((f) => (f.id === id ? { ...f, [key]: value } : f)));
  };

  const deleteField = (id) => {
    setFields(fields.filter((f) => f.id !== id));
  };

  const addOption = (fieldId) => {
    setFields(
      fields.map((f) =>
        f.id === fieldId
          ? { ...f, options: [...f.options, `Option ${f.options.length + 1}`] }
          : f
      )
    );
  };

  const updateOption = (fieldId, optionIndex, value) => {
    setFields(
      fields.map((f) =>
        f.id === fieldId
          ? {
              ...f,
              options: f.options.map((opt, idx) =>
                idx === optionIndex ? value : opt
              ),
            }
          : f
      )
    );
  };

  const deleteOption = (fieldId, optionIndex) => {
    setFields(
      fields.map((f) =>
        f.id === fieldId
          ? { ...f, options: f.options.filter((_, idx) => idx !== optionIndex) }
          : f
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-6">
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
              className="mb-6 p-4 border rounded-xl bg-gray-50"
            >
              <div className="flex items-center gap-4 mb-3">
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
                    <SelectItem value="checklist">Checklist</SelectItem>
                    <SelectItem value="radio">Radio Buttons</SelectItem>
                  </SelectContent>
                </Select>

                <label className="flex items-center gap-2 whitespace-nowrap text-sm">
                  <input
                    type="checkbox"
                    checked={field.required}
                    onChange={(e) =>
                      updateField(field.id, "required", e.target.checked)
                    }
                    className="w-4 h-4"
                  />
                  Required
                </label>

                <Button
                  variant="destructive"
                  onClick={() => deleteField(field.id)}
                  className="p-2"
                >
                  <Trash2 size={18} />
                </Button>
              </div>

              {/* Options Editor for dropdown, checklist, and radio */}
              {(field.type === "dropdown" ||
                field.type === "checklist" ||
                field.type === "radio") && (
                <div className="mt-3 pl-4 border-l-2 border-gray-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Options:
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => addOption(field.id)}
                      className="text-xs flex items-center gap-1"
                    >
                      <Plus size={14} /> Add Option
                    </Button>
                  </div>

                  {field.options.length === 0 && (
                    <p className="text-xs text-gray-500 italic mb-2">
                      No options added yet
                    </p>
                  )}

                  {field.options.map((option, idx) => (
                    <div key={idx} className="flex items-center gap-2 mb-2">
                      <Input
                        type="text"
                        value={option}
                        onChange={(e) =>
                          updateOption(field.id, idx, e.target.value)
                        }
                        placeholder={`Option ${idx + 1}`}
                        className="flex-1 text-sm"
                      />
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => deleteOption(field.id, idx)}
                        className="p-1 h-8 w-8"
                      >
                        <X size={16} />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
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
            <div>
              {fields.map((field) => (
                <div key={field.id} className="mb-5">
                  <label className="block font-medium mb-2">
                    {field.label}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                  </label>

                  {field.type === "text" && (
                    <Input
                      type="text"
                      placeholder={field.label}
                    />
                  )}

                  {field.type === "number" && (
                    <Input
                      type="number"
                      placeholder={field.label}
                    />
                  )}

                  {field.type === "email" && (
                    <Input
                      type="email"
                      placeholder="Enter your email"
                    />
                  )}

                  {field.type === "date" && (
                    <Input type="date" />
                  )}

                  {field.type === "dropdown" && (
                    <select className="border rounded-md p-2 w-full">
                      <option value="">Select an option</option>
                      {field.options.map((opt, idx) => (
                        <option key={idx} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  )}

                  {field.type === "checkbox" && (
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={`checkbox-${field.id}`}
                      />
                      <label htmlFor={`checkbox-${field.id}`}>{field.label}</label>
                    </div>
                  )}

                  {field.type === "checklist" && (
                    <div className="space-y-2 pl-2">
                      {field.options.length === 0 ? (
                        <p className="text-sm text-gray-500 italic">
                          No options available
                        </p>
                      ) : (
                        field.options.map((opt, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id={`checklist-${field.id}-${idx}`}
                              name={`checklist-${field.id}`}
                            />
                            <label htmlFor={`checklist-${field.id}-${idx}`}>
                              {opt}
                            </label>
                          </div>
                        ))
                      )}
                    </div>
                  )}

                  {field.type === "radio" && (
                    <div className="space-y-2 pl-2">
                      {field.options.length === 0 ? (
                        <p className="text-sm text-gray-500 italic">
                          No options available
                        </p>
                      ) : (
                        field.options.map((opt, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id={`radio-${field.id}-${idx}`}
                              name={`radio-${field.id}`}
                              value={opt}
                            />
                            <label htmlFor={`radio-${field.id}-${idx}`}>
                              {opt}
                            </label>
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* ✅ Submit Button */}
              <div className="flex justify-center mt-6">
                <Button
                  onClick={handleSubmit}
                  className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-xl"
                >
                  Submit
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default FormEditor;