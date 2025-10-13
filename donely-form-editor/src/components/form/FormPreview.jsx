// Form Preview Component
const FormPreview = ({ fields, formSettings }) => {
  const [formData, setFormData] = useState({});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted! Check console for data.');
  };
  
  const handleChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };
  
  const renderField = (field) => {
    const baseClasses = "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100";
    
    switch (field.type) {
      case 'textarea':
        return (
          <textarea 
            className={baseClasses} 
            placeholder={field.placeholder} 
            rows="4"
            value={formData[field.name] || ''}
            onChange={(e) => handleChange(field.name, e.target.value)}
          />
        );
      
      case 'select':
        return (
          <select 
            className={baseClasses}
            value={formData[field.name] || ''}
            onChange={(e) => handleChange(field.name, e.target.value)}
          >
            <option value="">Select an option</option>
            {(field.options || []).map((opt, i) => (
              <option key={i} value={opt}>{opt}</option>
            ))}
          </select>
        );
      
      case 'radio':
        return (
          <div className="space-y-2">
            {(field.options || []).map((opt, i) => (
              <div key={i} className="flex items-center gap-2">
                <input 
                  type="radio" 
                  id={`${field.id}-${i}`} 
                  name={field.name} 
                  value={opt}
                  checked={formData[field.name] === opt}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className="w-4 h-4" 
                />
                <label htmlFor={`${field.id}-${i}`} className="text-gray-700 dark:text-gray-300">{opt}</label>
              </div>
            ))}
          </div>
        );
      
      case 'checkbox':
        return (
          <div className="space-y-2">
            {(field.options || []).map((opt, i) => (
              <div key={i} className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id={`${field.id}-${i}`}
                  checked={(formData[field.name] || []).includes(opt)}
                  onChange={(e) => {
                    const current = formData[field.name] || [];
                    const updated = e.target.checked 
                      ? [...current, opt]
                      : current.filter(v => v !== opt);
                    handleChange(field.name, updated);
                  }}
                  className="w-4 h-4 rounded" 
                />
                <label htmlFor={`${field.id}-${i}`} className="text-gray-700 dark:text-gray-300">{opt}</label>
              </div>
            ))}
          </div>
        );
      
      default:
        return (
          <input 
            type={field.type} 
            className={baseClasses} 
            placeholder={field.placeholder}
            value={formData[field.name] || ''}
            onChange={(e) => handleChange(field.name, e.target.value)}
         />
        );
    }
  };
  
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
        {formSettings.title || 'Untitled Form'}
      </h2>
      {formSettings.description && (
        <p className="text-gray-600 dark:text-gray-400 mb-6">{formSettings.description}</p>
      )}
      
      <div className="space-y-4">
        {fields.map((field) => (
          <div key={field.id}>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              {field.label}
              {field.required && <span className="text-red-600 ml-1">*</span>}
            </label>
            {renderField(field)}
          </div>
        ))}
        
        <Button type="button" className="w-full mt-6" onClick={handleSubmit}>
          {formSettings.submitText || 'Submit'}
        </Button>
      </div>
    </div>
  );
};