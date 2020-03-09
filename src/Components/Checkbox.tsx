import React, { useState } from "react";

interface CheckboxProps {
  categories: {
    _id: string;
    name: string;
  }[];
  filteringHandler: (f: string[]) => void;
}

const Checkbox = ({ categories, filteringHandler }: CheckboxProps) => {
  const [check, setCheck] = useState<string[]>([]);

  const checkboxHandler = (id: string) => {
    const allCategory: string[] = [...check];

    const findIndex = allCategory.findIndex(c => c === id);
    if (findIndex !== -1) {
      allCategory.splice(findIndex, 1);
    } else {
      allCategory.push(id);
    }
    setCheck(allCategory);
    filteringHandler(allCategory);
  };

  return (
    <>
      {categories.map((c, i) => (
        <span key={i}>
          <label>
            <input type="checkbox" onChange={() => checkboxHandler(c._id)} />
            {c.name}
          </label>
        </span>
      ))}
    </>
  );
};

export default Checkbox;
