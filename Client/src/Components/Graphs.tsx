import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';
import { platforms } from '../graphs';

const palette = ['green', 'red'];

const colorPerItem = [
  { ...platforms[0], color: 'orange' },
  { ...platforms[1], color: 'gray' },
];

export default function PieColor() {
  return (
    <Stack direction="row" width="100%" textAlign="center" spacing={2}>
      <Box flexGrow={1}>
        <Typography>אירועי טרור לפי ארגון</Typography>
        <PieChart
          series={[
            {
              data: platforms,
            },
          ]}
          {...pieParams}
        />
      </Box>
      <Box flexGrow={1}>
        <Typography>אירועי טרור לפי סוג תקיפה</Typography>
        <PieChart
          colors={palette}
          series={[
            {
              data: platforms,
            },
          ]}
          {...pieParams}
        />
      </Box>
      <Box flexGrow={1}>
        <Typography>ארועי טרור לפי מדינות</Typography>
        <PieChart
          series={[
            {
              data: colorPerItem,
            },
          ]}
          {...pieParams}
        />
      </Box>
    </Stack>
  );
}

const pieParams = {
  height: 200,
  margin: { right: 5 },
  slotProps: { legend: { hidden: true } },
};
