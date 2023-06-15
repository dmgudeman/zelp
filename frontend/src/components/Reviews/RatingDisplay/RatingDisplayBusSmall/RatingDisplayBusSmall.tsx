import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


interface IRatingDisplayBusinessProps {
    rating: number;
}


const RatingDisplayBusSmall: React.FC<IRatingDisplayBusinessProps> = ({rating}) => {
    console.log('Rating', rating)
    return (
        <Stack spacing={1}>
          <Rating 
          name="half-rating-read" 
          value= {rating} 
          defaultValue={2.5} 
          precision={0.1} 
          readOnly 
          size="large" 
          sx={{
            fontSize: '1.3rem',
            '& .MuiRating-iconFilled': {
                color: '#506CAF',
            },
        }}
          />
        </Stack>
      );
}

export default RatingDisplayBusSmall;
