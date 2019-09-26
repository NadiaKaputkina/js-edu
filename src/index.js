/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
    const NUMBER_OF_HOURS_IF_KNOW_PROGRAMMING = 800;
    const NUMBER_OF_HOURS_IF_DO_NOT_KNOW_PROGRAMMING = 500;

    if (!knowsProgramming) {
        return Math.ceil((NUMBER_OF_HOURS_IF_KNOW_PROGRAMMING + NUMBER_OF_HOURS_IF_DO_NOT_KNOW_PROGRAMMING ) / config[focus] );
    }

    return Math.ceil(NUMBER_OF_HOURS_IF_KNOW_PROGRAMMING / config[focus] );
  };
  