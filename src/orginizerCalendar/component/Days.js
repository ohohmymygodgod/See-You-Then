import React, { Component, useState, useEffect } from 'react'

const Month = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dayNum = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const Days = ({
    todayDate, currentDate,
    handleClickOnDay,
    ableDay
}) => {
    const currentMonth = Month.indexOf(currentDate.month);
    const firstDay = new Date(`${currentDate.year}-${currentDate.month}-1`).getDay();
    // push blank until the day(Mon to Sun) is the first day's day.
    const days = [];
    for (let i = 0; i < firstDay; i++) {
        days.push((<li key={-i} className="days__disabled" id={i}></li>));
    }
    for (let day = 1; day <= dayNum[currentMonth]; day++) {
        let date;
        if(day < 10) {
            date = `0${day}`
        } else {
            date =`${day}`
        }
        const id = `${currentDate.year} ${Month.indexOf(currentDate.month)} ${date}`
        days.push((
            <li key={day} className={(ableDay.includes(id))? "selectedDays"  : "days"} id={id} onClick={(day < parseInt(todayDate.toString().split(' ')[2]) && Month.indexOf(todayDate.toString().split(' ')[1]) == currentMonth) ?  () => {} : handleClickOnDay}>
                <p className={(day < parseInt(todayDate.toString().split(' ')[2]) && Month.indexOf(todayDate.toString().split(' ')[1]) == currentMonth) ? "disabled day" : "day"}>{day}</p>
            </li>
        ))
    }
    return (
        <ul className="calendar__days__day__container">
            {days.map(item => item)}
        </ul>
        
    )
}

export default Days