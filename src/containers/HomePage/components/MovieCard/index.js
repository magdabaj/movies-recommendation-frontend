import React from 'react';
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
import {makeSelectHasSession} from "../../../DefaultContainer/selectors";
import {useSelector} from "react-redux";

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

const MovieCard = ({ movie, hasSession }) => {
  return (
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
        {hasSession ?
          <Link to={`/user/movie/${movie.movieId}/rate`}>
            <StyledButton size="small">Ocen film</StyledButton>
          </Link> :
          <Link to={`/sign-in`}>
            <StyledButton size="small">Zaloguj sie by ocenic film</StyledButton>
          </Link>
        }

      </CardActions>
    </StyledCard>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    movieId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
  }),
}

export default MovieCard
