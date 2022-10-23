<script setup lang="ts">
import { computed, ref } from "vue";
import { type Filters, generateTableData } from "@/pages/campaigns/tableData";
import CampaignsTable from "@/pages/campaigns/CampaignsTable.vue";
import CampaignsFilters from "@/pages/campaigns/CampaignsFilters.vue";

const tableData = ref(generateTableData(50));
const filters = ref<Filters>({
  statuses: [],
  dates: [],
});

const filteredTableData = computed(() => {
  let result = tableData.value;
  const { statuses, dates } = filters.value;

  if (statuses.length) {
    result = result.filter((row) => statuses.includes(row.status));
  }

  if (dates?.length) {
    const startRange = dates[0].toISOString().split("T")[0];
    const endRange = dates[1].toISOString().split("T")[0];
    result = result.filter((row) => {
      return row.startDate >= startRange && row.endDate <= endRange;
    });
  }

  return result;
});
</script>

<template>
  <div>
    <h1>Campaigns</h1>

    <div class="filters">
      <campaigns-filters v-model="filters" />
    </div>

    <campaigns-table :data="filteredTableData" />
  </div>
</template>

<style scoped>
.filters {
  margin-bottom: 12px;
}
</style>
