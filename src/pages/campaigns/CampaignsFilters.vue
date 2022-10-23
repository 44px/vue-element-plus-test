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
  <el-space size="large">
    <el-select
      :model-value="modelValue.statuses"
      @change="onChangeStatuses"
      multiple
      filterable
      :reserve-keyword="false"
      placeholder="Status"
      ><el-option v-for="status in statuses" :key="status" :value="status"
        ><el-tag
          :type="status === 'active' ? 'success' : 'warning'"
          disable-transitions
          >{{ status }}</el-tag
        ></el-option
      ></el-select
    >

    <el-date-picker
      :model-value="modelValue.dates"
      @calendar-change="onChangeDates"
      @change="onChangeDates"
      type="daterange"
      start-placeholder="Start date"
      end-placeholder="End date"
    />
  </el-space>
</template>
