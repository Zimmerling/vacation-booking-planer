<template>
  <v-form>
    <v-container>
      <v-row>
        <v-text-field v-model="preName" label="Vorname"></v-text-field>
      </v-row>
      <v-row>
        <v-text-field v-model="lastName" label="Nachname"></v-text-field>
      </v-row>
      <v-row>
        <label>Start: </label>
        <input v-model="startDate" class="form-date__input" type="date" />
      </v-row>
      <v-row>
        <label>Ende: </label>
        <input v-model="endDate" class="form-date__input" type="date" />
      </v-row>
      <v-row>
        <v-col cols="6" class="pl-0">
          <label>Pro Tag:</label>
          <v-text-field
            v-model="costPerDay"
            hide-details
            single-line
            label="Pro Nacht"
            type="number"
          />
        </v-col>
        <v-col cols="6" class="pr-0">
          <label>Gesamt:</label>
          <v-text-field
            v-model="totalCosts"
            hide-details
            single-line
            type="number"
            label="Gesamt"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-btn block class="mt-2" @click="bookPeriod">Buchen</v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts" setup>
import { PropType, computed } from "vue";
import { v4 as uuidv4 } from "uuid";
import { Booking, Selection } from "../entity/booking";
import { dateDiff } from "~~/util/utilDate";

const props = defineProps({
  selectedDates: { type: Object as PropType<Selection>, required: true },
});

const emit = defineEmits<{
  (e: "submit-booking", bookedPeriod: Booking): void;
}>();

const { selectedDates } = toRefs(props);

const daysBooked = computed((): number =>
  dateDiff(selectedDates.value.selectionStart, selectedDates.value.selectionEnd)
);

const costPerDay = ref<number>(0);
const totalCosts = computed({
  get(): number {
    return costPerDay.value * daysBooked.value;
  },
  set(val: number) {
    costPerDay.value = val / daysBooked.value;
  },
});

const startDate = computed({
  get(): any {
    return selectedDates.value?.selectionStart.toISOString().slice(0, 10);
  },
  set(val: string) {
    selectedDates.value.selectionStart = new Date(val);
  },
});

const endDate = computed({
  get(): any {
    return selectedDates?.value.selectionEnd.toISOString().slice(0, 10);
  },
  set(val: string) {
    selectedDates.value.selectionEnd = new Date(val);
  },
});

const preName = ref<string>("");
const lastName = ref<string>("");

function bookPeriod() {
  const booking: Booking = {
    id: uuidv4(),
    startDate: selectedDates.value.selectionStart,
    endDate: selectedDates.value.selectionEnd,
    totalCosts: totalCosts.value,
    title: `${preName.value} ${lastName.value}`,
  };
  emit("submit-booking", booking);
}
</script>

<style></style>
