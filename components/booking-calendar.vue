<template>
  <calendar-view
    :items="bookedPeriods"
    :show-date="showDate"
    :enable-drag-drop="false"
    :enable-date-selection="true"
    :selection-start="selectedDates.selectionStart"
    :selection-end="selectedDates.selectionEnd"
    class="theme-default holiday-us-traditional holiday-us-official"
    @date-selection-start="setSelection"
    @date-selection="setSelection"
    @date-selection-finish="finishSelection"
    @drop-on-date="onDrop"
    @click-date="onClickDay"
  >
    <template #header="{ headerProps }">
      <calendar-view-header :header-props="headerProps" @input="setShowDate" />
    </template>
  </calendar-view>
</template>

<script lang="ts" setup>
import {
  CalendarMath,
  CalendarView,
  CalendarViewHeader,
} from "vue-simple-calendar";
import { PropType, ref } from "vue";
import "../node_modules/vue-simple-calendar/dist/style.css";
import "../node_modules/vue-simple-calendar/dist/css/default.css";

import { INormalizedCalendarItem } from "vue-simple-calendar/dist/src/ICalendarItem";
import { Item, Selection } from "../entity/booking";

const showDate = ref<Date>(new Date());

const props = defineProps({
  selectedDates: { type: Object as PropType<Selection>, required: true },
  bookedPeriods: { type: Object as PropType<Item[]>, required: true },
});

const { selectedDates, bookedPeriods } = toRefs(props);

function setShowDate(d: Date) {
  showDate.value = d;
}

function onClickDay(d: Date) {
  selectedDates.value.selectionStart = d;
  selectedDates.value.selectionEnd = d;
}

function setSelection(dateRange: Date[]) {
  selectedDates.value.selectionStart = dateRange[0];
  selectedDates.value.selectionEnd = dateRange[1];
}

function finishSelection(dateRange: Date[]) {
  setSelection(dateRange);
}

function onDrop(item: INormalizedCalendarItem, date: Date) {
  const eLength = CalendarMath.dayDiff(item.startDate, date);
  item.originalItem.startDate = CalendarMath.addDays(item.startDate, eLength);
  item.originalItem.endDate = CalendarMath.addDays(item.endDate, eLength);
}
</script>
<style></style>
