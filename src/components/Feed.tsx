// import Rating from '@mui/material/Rating';
import Tooltip from '@mui/material/Tooltip';
import { FeedProps } from '../types';
import { StarFilledIcon } from '@radix-ui/react-icons';

const Feed = ({game}: FeedProps) => {

  return (
    <div className='game'>
      <div className='cover-container'>
        <img className='cover' src={`https:${game.cover.url}`} alt='cover' />
      </div>
      <div className='info-container'>
        <Tooltip enterDelay={300} title={game.name} placement='top-start'>
          <h3>{game.name}</h3>
        </Tooltip>
        <Tooltip enterDelay={300} title='Avg. User Rating' placement='right'>
          <div className='average-rating'>
            <p className='number'>7</p>
            <StarFilledIcon className='star' />
          </div>
        </Tooltip>
        {/* <Rating
          sx={{'& .MuiRating-iconEmpty': {fill: 'transparent', color: 'grey' }}}
          name="read-only"
          value={0}
          max={10}
        /> */}
      </div>
    </div>
  );

};
 
export default Feed;