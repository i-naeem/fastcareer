import { Select } from '@chakra-ui/react';
const SelectWrapper = ({ placeholder, options }) => {
  return (
    <Select placeholder={placeholder} key={options}>
      {options.map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};

export default SelectWrapper;
