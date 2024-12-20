import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState, useEffect } from "react";
import { Employee } from "src/models/Employee";
import { useRequests } from "src/utils/requests";

type Props = {
  selectedEmployee: number | '';
  setSelectedEmployee: (employee_id: number) => void
}

const SelectEmployee = ({ selectedEmployee, setSelectedEmployee }: Props) => {
  const [employeesData, setEmployeesData] = useState<Employee[]>([]);

  const { getEmployees } = useRequests();

  const handleGetEmployees = async () => {
    const response = await getEmployees();

    if (!response.detail) setEmployeesData(response.data.employees);
  }

  useEffect(() => {
    handleGetEmployees();
  }, [])

  return (
    <FormControl fullWidth>
      <InputLabel>Selecione um funcionário</InputLabel>
      <Select
        value={selectedEmployee}
        label="Selecione um funcionário"
        onChange={(e) => setSelectedEmployee(+e.target.value)}
      >
        {employeesData.map((employee) => (
          <MenuItem key={employee.id} value={employee.id}> {employee.name} - {employee.email} </MenuItem>
        ))}

      </Select>
    </FormControl>
  )
}

export default SelectEmployee;