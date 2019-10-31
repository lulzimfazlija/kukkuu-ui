import React, { Component } from 'react';

type SelectOption = {
  label: string;
  value: string | string[] | number;
};
type SelectOptions = SelectOption[];

type Props = {
  options: SelectOptions;
  name: string;
  id: string;
};

class SelectField extends Component<Props> {
  render() {
    const { options, name, id } = this.props;

    return (
      <select name={name} id={id}>
        {options.map(selectOption => (
          <option value={selectOption.value} key={selectOption.label}>
            {selectOption.label}
          </option>
        ))}
      </select>
    );
  }
}

export default SelectField;
