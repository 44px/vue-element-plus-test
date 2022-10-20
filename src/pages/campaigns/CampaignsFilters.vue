<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { statuses } from "@/pages/campaigns/tableData";
import type { Status } from "@/pages/campaigns/tableData";

type Data = {
  statuses: Status[];
};

export type Filters = {
  statuses: Status[];
  dates: Date[] | null;
};

export default defineComponent({
  props: {
    modelValue: { type: Object as PropType<Filters>, required: true },
  },
  emits: {
    "update:modelValue"(payload: Filters) {
      return true; // no runtime validation
    },
  },
  data(): Data {
    return {
      statuses,
    };
  },
  methods: {
    onChangeStatuses(statuses: Status[]) {
      this.$emit("update:modelValue", {
        ...this.modelValue,
        statuses,
      });
    },
    onChangeDates(dates: Date[] | null) {
      if (dates !== null && (dates[0] === null || dates[1] === null)) {
        return;
      }

      this.$emit("update:modelValue", {
        ...this.modelValue,
        dates,
      });
    },
  },
});
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
