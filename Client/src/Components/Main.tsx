import { Box } from '@mui/material'
import PieColor from './Graphs'
import Map from './Map'

export default function Main() {
  return (
    <div>
    <Box
      sx={{
          py: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 4,
        }}
        >
        <Map />
        <PieColor />
    </Box>
    </div>
  )
}
