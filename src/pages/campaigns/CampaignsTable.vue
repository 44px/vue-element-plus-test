<script setup lang="ts">
import { Row } from "./tableData";

type Props = {
  data: Row[];
};

defineProps<Props>();

const numberFormatter = new Intl.NumberFormat();
const formatImpressions = (row: Row) => numberFormatter.format(row.impressions);
const formatClicks = (row: Row) => numberFormatter.format(row.clicks);
const formatCTR = (row: Row) => (row.ctr * 100).toFixed(2);
</script>

<template>
  <el-table
    :data="data"
    :default-sort="{ prop: 'impressions', order: 'ascending' }"
    row-key="name"
  >
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="status" label="Status">
      <template #default="scope">
        <el-tag
          :type="scope.row.status === 'active' ? 'success' : 'warning'"
          disable-transitions
          >{{ scope.row.status }}</el-tag
        >
      </template>
    </el-table-column>
    <el-table-column
      prop="impressions"
      label="Impressions"
      align="right"
      :sortable="true"
      :formatter="formatImpressions"
    />
    <el-table-column
      prop="clicks"
      label="Clicks"
      align="right"
      :sortable="true"
      :formatter="formatClicks"
    />
    <el-table-column
      prop="ctr"
      label="CTR"
      align="right"
      :sortable="true"
      :formatter="formatCTR"
    />
    <el-table-column prop="startDate" label="Start Date" :sortable="true" />
    <el-table-column prop="endDate" label="End Date" :sortable="true" />
  </el-table>
</template>
