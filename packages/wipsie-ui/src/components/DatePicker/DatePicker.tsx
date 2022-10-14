import React, { useState, useEffect } from "react";
import { Container } from "../Container";
import { Typography } from "../Typography";
import { Popover } from "../Popover";
import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { Grid } from "../Grid";
import { Flex } from "../Flex";
import { Input } from "../Input";

import { DatePickerProps } from "./DatePicker.types";

export function DatePicker({
  onSelectADate = () => {},
  onCancel = () => {},
  position = "bottom right",
  size = "small",
  inputSize = "medium",
  leftIcon,
  rightIcon,
  gridSpacing = 1,
  width,
  color = "primary",
  backgroundColor = "background",
  inputColor = "basic",
  maxYears = 200,
  inputProps = {},
  wrapperProps,
  disabled,
  endAdornment,
  error,
  fullWidth,
  helperText,
  label,
  name,
  placeholder,
  required,
  startAdornment,
  value,
  onChange,
  onBlur,
  monthLabels,
  weekDayLabels,
  backdrop = true,
  backdropProps,
  onBackdropClick = () => {},
}: DatePickerProps) {
  const [referenceCalendar, setReferenceCalendar] = useState<any>(null);
  const currentDate = new Date();
  const [dateCalendar, setDateCalendar] = useState({
    year: currentDate.getFullYear(),
    month: currentDate.getMonth() + 1,
  });

  // modal handling
  const [open, setOpen] = useState(false);

  const today = currentDate.getDate();
  const todayMonth = currentDate.getMonth();
  const todayYear = currentDate.getFullYear();
  const months = monthLabels || [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekDays = weekDayLabels || [
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT",
  ];

  const maxDays = new Date(dateCalendar.year, dateCalendar.month, 0).getDate();

  const weekStart = new Date(
    dateCalendar.year,
    dateCalendar.month,
    -(maxDays - 1)
  ).getDay();
  const weekEnd = new Date(dateCalendar.year, dateCalendar.month, 0).getDay();

  let calendarDays: any[] = [];
  // Caso a semana não comece no domingo, exibir dias anterioes como -1
  for (let i = 0; i < weekStart; i++) {
    calendarDays.push(-1);
  }

  // Exibir dias do mês
  for (let i = 0; i < maxDays; i++) {
    calendarDays.push(i + 1);
  }

  // Caso a semana não termine no sabado, exibir dias restantes como -1
  for (let i = 0; i < 6 - weekEnd; i++) {
    calendarDays.push(-1);
  }

  // Voltar mês
  function handleMonthBack() {
    let _clone = JSON.parse(JSON.stringify(dateCalendar));

    if (_clone.month - 1 > 0) {
      _clone.month -= 1;
    } else {
      _clone.month = 12;
      _clone.year -= 1;
    }

    setDateCalendar(_clone);
  }

  // Avançar mês
  function handleMonthForward() {
    let _clone = JSON.parse(JSON.stringify(dateCalendar));

    if (_clone.month + 1 <= 12) {
      _clone.month += 1;
    } else {
      _clone.month = 1;
      _clone.year += 1;
    }
    setDateCalendar(_clone);
  }

  // Voltar ano
  // function handleYearBack() {
  //   let _clone = JSON.parse(JSON.stringify(dateCalendar));
  //   _clone.year -= 1;
  //   setDateCalendar(_clone);
  // }

  // Escolher ano
  function handleSetYear(value) {
    let _clone = JSON.parse(JSON.stringify(dateCalendar));
    _clone.year = Number.parseInt(value);
    setDateCalendar(_clone);
  }

  // Escolher mês
  function handleSetMonth(value) {
    let _clone = JSON.parse(JSON.stringify(dateCalendar));
    _clone.month = Number.parseInt(value);
    setDateCalendar(_clone);
  }

  // Converter data de 24052022 para 24/05/2022
  // function handleDateSelect(value) {
  //   let t = "";
  //   if (value && value != "") {
  //     for (let char of value.toString()) {
  //       if (Number.isInteger(Number.parseInt(char))) {
  //         if (t.length == 2 || t.length == 5) {
  //           t += "/";
  //         }
  //         t += char;
  //         if (t.length == 10) {
  //           break;
  //         }
  //       }
  //     }
  //   } else {
  //     t = "--/--/--";
  //   }
  //   return t;
  // }

  // Dividir dias do mês em linhas com 7 dias
  function divideDate(days) {
    let response: any[] = [];
    let current = 0;

    for (let day of days) {
      if (response[current] == null) {
        response.push([]);
      }

      if (response[current].length > 6) {
        response.push([]);
        current += 1;
      }

      response[current].push(day);
    }

    return response;
  }

  // useEffect(() => {
  //   if (ref) {

  //   }
  // }, [ref]);

  useEffect(() => {
    function onclick(event) {
      if (referenceCalendar && referenceCalendar.current) {
        if (!referenceCalendar.current.contains(event.target)) {
          onCancel();
        }
      }
    }

    window.addEventListener("click", onclick);

    return () => window.removeEventListener("click", onclick);
  }, [referenceCalendar]);

  const [yearEditable, setYearEditable] = useState(false);
  const handleToggleYearEditable = () => {
    setYearEditable(!yearEditable);
  };
  const [monthEditable, setMonthEditable] = useState(false);
  const handleToggleMonthEditable = () => {
    setMonthEditable(!monthEditable);
  };

  const [selectedComponentDate, setSelectedComponentDate] = useState<any>(null);
  const [componentDate, setComponentDate] = useState(
    value || new Date(todayYear - 10, 0, 1)
  );

  const handleTogglePopover = () => {
    setOpen(!open);
    setYearEditable(false);
    setMonthEditable(false);
  };

  const handleSelectDate = (selectedDate: any) => {
    const { year, month, day } = selectedDate;

    const toDate = new Date(year, month - 1, day);

    setComponentDate(toDate);
    onSelectADate(selectedDate);
    setSelectedComponentDate(selectedDate);
    handleTogglePopover();
  };

  return (
    <>
      <Popover
        arrow
        backgroundColor={backgroundColor}
        visible={open}
        position={position}
        backdrop={backdrop}
        onBackdropClick={(e: any) => {
          handleTogglePopover();
          onBackdropClick && onBackdropClick(e);
        }}
        backdropProps={backdropProps}
        width={width}
        style={{
          ...wrapperProps?.style,
        }}
        {...wrapperProps}
        content={
          <Container
            ref={(el) => setReferenceCalendar(el)}
            backgroundColor={backgroundColor}
          >
            {/* Calendário */}
            <div>
              <Flex
                direction="row"
                align="center"
                justify="between"
                wrap="nowrap"
              >
                <IconButton
                  size={size}
                  onClick={() => handleMonthBack()}
                  backgroundColor={color}
                >
                  {leftIcon || <>&lt;</>}
                </IconButton>
                <Flex>
                  <Popover
                    visible={monthEditable}
                    backdrop
                    arrow
                    spacing={1}
                    onBackdropClick={() => handleToggleMonthEditable()}
                    backdropProps={{
                      noPortal: true,
                      color: "transparent",
                      style: {
                        zIndex: 1,
                      },
                    }}
                    width={"100%"}
                    content={
                      <Flex style={{ overflow: "auto", maxHeight: "150px" }}>
                        {months.map((month, index) => (
                          <Button
                            key={index}
                            size="small"
                            fullWidth
                            shape="rounded"
                            variant="ghost"
                            backgroundColor={color}
                            onClick={() => {
                              handleSetMonth(index + 1);
                              handleToggleMonthEditable();
                            }}
                          >
                            {month}
                          </Button>
                        ))}
                      </Flex>
                    }
                  >
                    {/* month selector */}
                    <Button
                      shape="square"
                      variant="contained"
                      size={size}
                      style={{
                        zIndex: 1,
                      }}
                      backgroundColor={color}
                      onClick={() => {
                        handleToggleMonthEditable();
                      }}
                    >
                      {months[dateCalendar.month - 1]} {"▾"}
                    </Button>
                  </Popover>

                  <Popover
                    visible={yearEditable}
                    backdrop
                    arrow
                    spacing={1}
                    onBackdropClick={() => handleToggleYearEditable()}
                    backdropProps={{
                      noPortal: true,
                      color: "transparent",
                      style: {
                        zIndex: 1,
                      },
                    }}
                    width={"100%"}
                    content={
                      <Flex style={{ overflow: "auto", maxHeight: "150px" }}>
                        {Array.from({ length: maxYears })
                          .map((_, index) => (
                            <Button
                              key={index.toString()}
                              size="small"
                              fullWidth
                              shape="rounded"
                              variant="ghost"
                              backgroundColor={color}
                              onClick={() => {
                                handleSetYear(
                                  index + todayYear - (maxYears - 1)
                                );
                                handleToggleYearEditable();
                              }}
                            >
                              {todayYear + index - (maxYears - 1)}
                            </Button>
                          ))
                          .reverse()}
                      </Flex>
                    }
                  >
                    {/* year selector */}
                    <Button
                      shape="square"
                      variant="contained"
                      size={size}
                      backgroundColor={color}
                      style={{ marginLeft: 5 }}
                      onClick={() => {
                        handleToggleYearEditable();
                      }}
                    >
                      {dateCalendar.year} {"▾"}
                    </Button>
                  </Popover>
                </Flex>
                <IconButton
                  size={size}
                  onClick={() => handleMonthForward()}
                  backgroundColor={color}
                >
                  {rightIcon || <>&gt;</>}
                </IconButton>
              </Flex>
              <Grid
                container
                spacing={gridSpacing}
                style={{
                  marginTop: "0.5rem",
                  marginBottom: "0.5rem",
                }}
              >
                <Grid item xs={1.71}>
                  <Typography variant="label" align="center" component="div">
                    {weekDays[0] || "SUN"}
                  </Typography>
                </Grid>
                <Grid item xs={1.71}>
                  <Typography variant="label" align="center" component="div">
                    {weekDays[1] || "MON"}
                  </Typography>
                </Grid>
                <Grid item xs={1.71}>
                  <Typography variant="label" align="center" component="div">
                    {weekDays[2] || "TUE"}
                  </Typography>
                </Grid>
                <Grid item xs={1.71}>
                  <Typography variant="label" align="center" component="div">
                    {weekDays[3] || "WED"}
                  </Typography>
                </Grid>
                <Grid item xs={1.71}>
                  <Typography variant="label" align="center" component="div">
                    {weekDays[4] || "THU"}
                  </Typography>
                </Grid>
                <Grid item xs={1.71}>
                  <Typography variant="label" align="center" component="div">
                    {weekDays[5] || "FRI"}
                  </Typography>
                </Grid>
                <Grid item xs={1.71}>
                  <Typography variant="label" align="center" component="div">
                    {weekDays[6] || "SAT"}
                  </Typography>
                </Grid>
              </Grid>
              <div>
                {/* Exibir semanas */}
                {divideDate(calendarDays).map((value, indexDivide) => {
                  return (
                    <Grid container key={indexDivide} spacing={gridSpacing}>
                      {/* Exibir dias */}
                      {value.map((day, indexDay) => {
                        if (day == -1) {
                          return (
                            <Grid item xs={1.71} key={indexDay + "day"}></Grid>
                          );
                        }
                        return (
                          <Grid
                            item
                            xs={1.71}
                            key={indexDay + "day"}
                            style={{ marginBottom: "0.5rem" }}
                          >
                            <Button
                              size={size}
                              fullWidth
                              onClick={() => {
                                const selectedDate = {
                                  year: dateCalendar.year,
                                  month: dateCalendar.month,
                                  day: day,
                                };
                                handleSelectDate(selectedDate);
                              }}
                              backgroundColor={color}
                              variant={
                                // if its selected
                                selectedComponentDate &&
                                selectedComponentDate.year ===
                                  dateCalendar.year &&
                                selectedComponentDate.month - 1 ===
                                  dateCalendar.month - 1 &&
                                selectedComponentDate.day == day
                                  ? "contained"
                                  : // if its today
                                  dateCalendar.year === todayYear &&
                                    dateCalendar.month - 1 === todayMonth &&
                                    day === today
                                  ? "outlined"
                                  : "ghost"
                              }
                            >
                              {day}
                            </Button>
                          </Grid>
                        );
                      })}
                    </Grid>
                  );
                })}
              </div>
            </div>
          </Container>
        }
      >
        <Input
          type="date"
          size={inputSize}
          color={inputColor}
          value={componentDate.toISOString().split("T")[0]}
          name={name}
          placeholder={placeholder}
          label={label}
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          disabled={disabled}
          error={error}
          helperText={helperText}
          required={required}
          fullWidth={fullWidth}
          onChange={onChange}
          onBlur={onBlur}
          onClick={(e) => {
            e.preventDefault();
            handleTogglePopover();
          }}
          onKeyDown={(e) => {
            e.preventDefault();
            if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
              handleTogglePopover();
            }
          }}
          {...inputProps}
        />
      </Popover>
    </>
  );
}
