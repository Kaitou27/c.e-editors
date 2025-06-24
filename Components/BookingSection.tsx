"use client";
import React, { useState } from 'react';
import './BookingSection.css';

const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const timeSlots = ['10:00am', '11:00am', '1:00pm', '2:30pm', '4:00pm'];

const BookingSection = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(new Date(today.getFullYear(), today.getMonth(), today.getDate()));
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };
  const handleDateClick = (day: number) => {
    setSelectedDate(new Date(currentYear, currentMonth, day));
    setSelectedTime(null);
    setConfirmed(false);
  };
  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
    setConfirmed(false);
  };
  const handleConfirm = () => {
    setConfirmed(true);
  };

  const isSelectedDay = (day: number) => {
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth &&
      selectedDate.getFullYear() === currentYear
    );
  };

  return (
    <section className="booking-section">
      <div className="booking-header" data-aos="fade-up" data-aos-duration="900">
        <h2 className="booking-main-title">Book Your Session</h2>
        <p className="booking-tagline">Reserve your spot with our easy online booking system.</p>
      </div>
      <div className="booking-container" data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">
        <div className="calendar-panel">
          <h3 className="booking-title">Select a Date & Time</h3>
          <div className="calendar-header">
            <button className="calendar-nav" onClick={handlePrevMonth}>&lt;</button>
            <span className="calendar-month">{new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
            <button className="calendar-nav" onClick={handleNextMonth}>&gt;</button>
          </div>
          <div className="calendar-grid">
            {weekdays.map((d) => (
              <div key={d} className="calendar-weekday">{d}</div>
            ))}
            {Array(firstDay).fill(null).map((_, i) => (
              <div key={i} className="calendar-empty" />
            ))}
            {Array(daysInMonth).fill(null).map((_, i) => {
              const day = i + 1;
              return (
                <button
                  key={day}
                  className={`calendar-day${isSelectedDay(day) ? ' selected' : ''}`}
                  onClick={() => handleDateClick(day)}
                >
                  {day}
                </button>
              );
            })}
          </div>
          <div className="calendar-tz">Time zone<br /><span>Eastern time - US & Canada</span></div>
        </div>
        <div className="times-panel">
          <div className="times-date">{selectedDate.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}</div>
          <div className="times-list">
            {timeSlots.map((slot) => (
              <div key={slot} className="time-row">
                <button
                  className={`time-btn${selectedTime === slot ? ' selected' : ''}`}
                  onClick={() => handleTimeClick(slot)}
                  disabled={confirmed}
                >
                  {slot}
                </button>
                {selectedTime === slot && !confirmed && (
                  <button className="confirm-btn" onClick={handleConfirm}>Confirm</button>
                )}
                {selectedTime === slot && confirmed && (
                  <span className="confirmed-msg">Confirmed!</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection; 