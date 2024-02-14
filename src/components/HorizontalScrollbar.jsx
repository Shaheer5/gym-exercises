import { Box } from '@mui/material';
import { BodyPart } from './BodyPart';

export const HorizontalScrollbar = ({ data }) => {
  return (
    <div>
    {data.map(item =>
    <Box key={item.id || item}
    itemID={item.id || item}
    title={item.id || item}>
      {item}
    </Box>)}
    </div>
  )
}
