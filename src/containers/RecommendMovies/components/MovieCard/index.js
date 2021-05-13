import React, {useCallback, useEffect, useState} from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {themeSpacing} from "../../../../themes/fromTheme";
import {getColor} from "../../../../themes/color/getColor";
import Color from "../../../../themes/color/constants";
import Link from "../../../../components/Link";
import {createStructuredSelector} from "reselect";
import {useDispatch, useSelector} from "react-redux";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {Rating} from "@material-ui/lab";
import {makeSelectIsLoading, makeSelectRating} from "../../selectors";
import {moviePropType} from "../../../../utils/propTypes/moviePropType";

const StyledCard = styled(Card)`
  &.MuiCard-root {
    min-width: ${themeSpacing(34)};
    background-color: ${getColor(Color.token.backgroundSecondary)};
  }
`

const StyledTitle = styled(Typography)`
  color: ${getColor(Color.token.text02)};
  font-size: ${themeSpacing(1.75)};
`

const StyledButton = styled(Button)`
  &.MuiButton-root {
    color: ${getColor(Color.token.button01)};
  }
  &:hover {
    color: ${getColor(Color.token.textSecondary)};
  }
`

const makeStateSelector = () =>
  createStructuredSelector({
    rating: makeSelectRating(),
    isLoading: makeSelectIsLoading(),
  })

const MovieCard = ({ movie, rating }) => {
  const dispatch = useDispatch()
  // const { isLoading } = useSelector(makeStateSelector())
  // console.log('isLoading ', isLoading)
  console.log('rating ', rating)

  const [value, setValue] = useState(rating ? rating : 0)

  const sendRating = useCallback(newValue => {
    setValue(newValue)

    // if (!isLoading) {
    //   if (isNil(rating)) {
    //     dispatch(requestSendRating(newValue, movie.movieId))
    //     dispatch(requestGetRating(movie.movieId))
    //   }
    //   else dispatch(requestUpdateRating(newValue, movie.movieId))
    // }
  }, [value])

  // useEffect(()=>{
  //   dispatch(requestClearRating())
  //   dispatch(requestGetRating(movie.movieId))
  // }, [movie.movieId])

  // useEffect(() => {
  //   if (rating) setValue(rating)
  // }, [rating])

  return (
    <StyledCard variant="outlined">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {movie.genres}
        </Typography>
        <Link to={`/user/movie/${movie.movieId}/rate`}>
          <StyledTitle variant="h5" component="h2">
            {movie.title}
          </StyledTitle>
        </Link>
      </CardContent>
      <CardActions>
        <Rating
          name="read-only"
          precision={0.5}
          value={value}
          // onChange={(event, newValue) =>
          //   sendRating(newValue)
          // }
          readOnly
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />
      </CardActions>
    </StyledCard>
  );
}

MovieCard.propTypes = {
  movie: moviePropType.isRequired,
  rating: PropTypes.number.isRequired
}

export default MovieCard
