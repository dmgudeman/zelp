import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


interface IRatingDisplayBusinessProps {
    rating: number;
}


const RatingDisplayBusiness: React.FC<IRatingDisplayBusinessProps> = ({rating}) => {
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
            fontSize: '4rem',
            '& .MuiRating-iconFilled': {
                color: '#506CAF',
            },
        }}
          />
        </Stack>
      );
}

export default RatingDisplayBusiness;
