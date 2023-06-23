import { Select } from '@chakra-ui/react';

const SelectWrapper = ({ filter, onChange }) => {
  return (
    <Select
      key={filter.options}
      placeholder={filter.placeholder}
      onChange={event => onChange(filter.type, event.target.value)}
    >
      {filter.options.map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};

export default SelectWrapper;
