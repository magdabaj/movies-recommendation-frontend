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
import {makeSelectHasSession} from "../../../DefaultContainer/session/selectors";
import {makeSelectMovies} from "../../../DefaultContainer/movies/selectors";
import {useDispatch, useSelector} from "react-redux";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {Rating} from "@material-ui/lab";
import {makeSelectIsLoading, makeSelectIsSending, makeSelectIsUpdating, makeSelectRating} from "../../selectors";
import {requestClearRating, requestGetRating, requestSendRating, requestUpdateRating} from "../../actions";
import {isNil} from "ramda";
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
    isSending: makeSelectIsSending(),
    isUpdating: makeSelectIsUpdating()
  })

const RateMovieCard = ({ movie, movieId }) => {
  const dispatch = useDispatch()
  const { rating, isLoading, isUpdating, isSending } = useSelector(makeStateSelector())
  console.log('isLoading ', isLoading)
  console.log('rating ', rating)

  const [value, setValue] = useState(0)

  const sendRating = useCallback(newValue => {
    setValue(newValue)

    if (!isLoading) {
      if (isNil(rating)) {
        dispatch(requestSendRating(newValue, movie.movieId))
        dispatch(requestGetRating(movie.movieId))
      }
      else dispatch(requestUpdateRating(newValue, movie.movieId))
    }
  }, [value])

  useEffect(()=>{
    dispatch(requestClearRating())
    dispatch(requestGetRating(movieId))
  }, [movieId])

  useEffect(() => {
    if (!isLoading) setValue(rating)
  }, [isLoading])

  return (
    isLoading ? <div>Loading...</div> :
      <StyledCard variant="outlined">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {movie.genres}
          </Typography>
          <StyledTitle variant="h5" component="h2">
            {movie.title}
          </StyledTitle>
        </CardContent>
        <CardActions>
          {isSending || isUpdating ? <h3>Loading...</h3> :
            <Rating
              name="half-rating"
              // defaultValue={0}
              precision={0.5}
              value={value}
              onChange={(event, newValue) =>
                sendRating(newValue)
              }
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
            />}
        </CardActions>
      </StyledCard>
  );
}

RateMovieCard.propTypes = {
  movie: moviePropType.isRequired
}

export default RateMovieCard
