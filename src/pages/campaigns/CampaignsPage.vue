<script lang="ts">
import { defineComponent } from "vue";
import { generateTableData, type Row } from "@/pages/campaigns/tableData";
import CampaignsTable from "@/pages/campaigns/CampaignsTable.vue";
import CampaignsFilters, {
  type Filters,
} from "@/pages/campaigns/CampaignsFilters.vue";

type Data = {
  tableData: Row[];
  filters: Filters;
};

export default defineComponent({
  components: {
    CampaignsTable,
    CampaignsFilters,
  },
  data(): Data {
    return {
      tableData: generateTableData(50),
      filters: {
        statuses: [],
        dates: [],
      },
    };
  },
  computed: {
    filteredTableData() {
      let result = this.tableData;

      if (this.filters.statuses.length) {
        result = result.filter((row) =>
          this.filters.statuses.includes(row.status)
        );
      }

      if (this.filters.dates?.length) {
        const startRange = this.filters.dates[0].toISOString().split("T")[0];
        const endRange = this.filters.dates[1].toISOString().split("T")[0];
        result = result.filter((row) => {
          return row.startDate >= startRange && row.endDate <= endRange;
        });
      }

      return result;
    },
  },
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
