import React, { useState } from 'react';
import MomentUtils from "@date-io/moment";
// import { MuiPickersUtilsProvider, DatePicker } from "material-ui-thai-datepickers";
import 'moment/locale/th';
import locale from 'antd/es/date-picker/locale/th_TH'
import { MaterialUiPickersDate } from 'material-ui-thai-datepickers/typings/date';
import Datepicker from "react-tailwindcss-datepicker";
import type { DatePickerProps } from 'antd';
import { ConfigProvider, DatePicker, Space } from 'antd';
import 'dayjs/locale/th'
import dayjs from 'dayjs';
const Star: React.FC = () => {
  const [value, onChange] = useState(new Date());

  const handleDateChange = (date: MaterialUiPickersDate): void => {
    // Do something with the selected date, e.g., update state
    console.log("Selected date:", date);
  };

  const Change: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

  return (
    <>
    <div>
      {/* <MuiPickersUtilsProvider utils={MomentUtils} locale={'th'}>
        <DatePicker
          label="with B.E. yearOffset"
          format="dd/MM/YYYY"
          pickerHeaderFormat="ddd D MMM"
          yearOffset={543}
          value={value} // You can provide a default date value here
          onChange={handleDateChange} // Assign the function to the onChange prop
        />
      </MuiPickersUtilsProvider> */}
    </div>

    <DatePicker onChange={Change} locale={locale} defaultValue={dayjs('2015-01-01', 'YYYY-MM-DD')}/>

    </>
    
    
  );
}

export default Star;
