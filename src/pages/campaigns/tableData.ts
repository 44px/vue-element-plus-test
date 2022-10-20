export type Status = "active" | "paused";

export const statuses: Status[] = ["active", "paused"];

export type Row = {
  name: string;
  impressions: number;
  clicks: number;
  ctr: number;
  startDate: string;
  endDate: string;
  status: Status;
};

export const generateTableData = (size: number): Row[] => {
  return new Array(size).fill(0).map((_, index) => {
    const isNonPerforming = index % 3 === 0;
    const impressions = (index + 1) * (15000 - index * 50);
    const clicks = (index + 1) * (isNonPerforming ? 317 : 701);
    const ctr = clicks / impressions;

    return {
      name: `Campaign #${index + 1}`,
      impressions,
      clicks,
      ctr,
      startDate: `2022-10-0${(index % 9) + 1}`,
      endDate: `2022-11-2${index % 9}`,
      status: isNonPerforming ? "paused" : "active",
    };
  });
};
