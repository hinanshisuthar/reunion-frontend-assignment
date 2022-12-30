export const Dropdown = ({ options, title }) => {
  return (
    <>
      {options.map((opt, i) => (
        <option className="p-sm" value={opt} selected={i === 0} key={title + i}>
          {opt}
        </option>
      ))}
    </>
  );
};
