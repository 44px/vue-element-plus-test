<script setup lang="ts">
import { Row } from "./tableData";

type Props = {
  data: Row[];
};

defineProps<Props>();

const numberFormatter = new Intl.NumberFormat();
const formatNumber = (value: number) => numberFormatter.format(value);
const formatCTR = (value: number) => (value * 100).toFixed(2);
</script>

<template>
  <v-table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Status</th>
        <th class="text-right">Impressions</th>
        <th class="text-right">Clicks</th>
        <th class="text-right">CTR</th>
        <th>Start date</th>
        <th>End date</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="row in data" :key="row.name">
        <td>{{ row.name }}</td>
        <td>
          <v-chip :color="row.status === 'active' ? 'green' : 'yellow'">{{
            row.status
          }}</v-chip>
        </td>
        <td class="text-right">{{ formatNumber(row.impressions) }}</td>
        <td class="text-right">{{ formatNumber(row.clicks) }}</td>
        <td class="text-right">{{ formatCTR(row.ctr) }}</td>
        <td>{{ row.startDate }}</td>
        <td>{{ row.endDate }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
