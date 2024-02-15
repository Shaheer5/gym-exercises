import { Box } from '@mui/material';
import { BodyPart } from './BodyPart';

export const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <div>
      {data.map(item =>
        <Box key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}>
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>)}
    </div>
  )
}
