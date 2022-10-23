<script setup lang="ts">
import { Filters, statuses } from "@/pages/campaigns/tableData";
import { Status } from "@/pages/campaigns/tableData";

type Props = {
  modelValue: Filters;
};

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "update:modelValue", payload: Filters): void;
}>();

const onChangeStatuses = (statuses: Status[]) => {
  emit("update:modelValue", {
    ...props.modelValue,
    statuses,
  });
};

type DatepickerValue = [Date | null, Date | null] | null;

const isValidRange = (dates: DatepickerValue): dates is [Date, Date] | null => {
  return dates === null || (dates[0] !== null && dates[1] !== null);
};

const onChangeDates = (dates: [Date | null, Date | null] | null) => {
  if (!isValidRange(dates)) {
    return;
  }

  emit("update:modelValue", {
    ...props.modelValue,
    dates,
  });
};
</script>

<template>
  <div>
    <v-autocomplete
      :model-value="modelValue.statuses"
      @update:model-value="onChangeStatuses"
      label="Status"
      multiple
      chips
      clearable
      :items="statuses"
    >
      ></v-autocomplete
    >

    <!--    <el-date-picker-->
    <!--      :model-value="modelValue.dates"-->
    <!--      @calendar-change="onChangeDates"-->
    <!--      @change="onChangeDates"-->
    <!--      type="daterange"-->
    <!--      start-placeholder="Start date"-->
    <!--      end-placeholder="End date"-->
    <!--    />-->
  </div>
</template>
