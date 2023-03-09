<template>
  <div id="app">
    <v-container>
      <v-row>
        <v-col cols="12" xs="12" md="9">
          <booking-calendar
            :selected-dates="selectedDates"
            :booked-periods="bookedPeriods"
            @selected-dates="updateDate"
          />
        </v-col>
        <v-col cols="12" xs="12" md="3">
          <booking-form
            :selected-dates="selectedDates"
            @submit-booking="(bookdePeriod) => submitBooking(bookdePeriod)"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { Booking, Selection } from "../entity/booking";

const bookedPeriods = ref<Booking[]>([]);

const selectedDates = ref<Selection>({
  selectionStart: new Date(),
  selectionEnd: new Date(),
});

function updateDate(dates: Selection): void {
  selectedDates.value = dates;
}

function submitBooking(bookedPeriod: Booking) {
  bookedPeriods.value?.push(bookedPeriod);
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  height: 67vh;
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
}

/* For long calendars, ensure each week gets sufficient height. The body of the calendar will scroll if needed */
.cv-wrapper.period-month.periodCount-2 .cv-week,
.cv-wrapper.period-month.periodCount-3 .cv-week,
.cv-wrapper.period-year .cv-week {
  min-height: 15rem;
}
.calendar-controls {
  margin-right: 1rem;
  min-width: 14rem;
  max-width: 14rem;
}
.calendar-parent {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: hidden;
  max-height: 80vh;
  background-color: white;
}

.form-date__input[type="date"] {
  appearance: none;
  color: #1d1d1d;
  font-family: "Helvetica", arial, sans-serif;
  font-size: 18px;
  line-height: 24px;
  border: 1px solid #ecf0f1;
  background: #f5f6f7;
  display: inline-block;
  visibility: visible;
  width: 140px;
  padding: 4px;
  position: relative;
  border-bottom: solid #a8afb7 1px;
  color: #7c8792;
  border-radius: 5px 5px 0 0px;
  height: 56px;
  width: 100%;
}
</style>
