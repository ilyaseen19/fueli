import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function YearMonth() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          slotProps={{ textField: { size: "small" } }}
          sx={{ marginRight: 1 }}
          label={"Pick month and year"}
          views={["month", "year"]}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
