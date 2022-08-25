import { Box } from "components/Box"
import propTypes from "prop-types"

export const Statistics = ({good, neutral,bad,total,positivePercentage}) => {
    return(
        <Box as="ul" >
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positivePercentage}%</li> 

        </Box>
    )
}

Statistics.prototype = {
    good: propTypes.number.isRequired,
    neutral:propTypes.number.isRequired,
    bad:propTypes.number.isRequired,
    total:propTypes.number.isRequired,
    positivePercentage:propTypes.number.isRequired,
}