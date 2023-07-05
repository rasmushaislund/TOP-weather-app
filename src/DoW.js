// START //

import { format } from 'date-fns';

export function formatDate(time) {
  const dateUpdated = time.substring(0, time.indexOf(' '));
  let dateArray = [];
  dateArray.push(dateUpdated.slice(0, 4));
  dateArray.push(dateUpdated.slice(5, 7));
  dateArray.push(dateUpdated.slice(8, 10));

  dateArray = dateArray.map(Number);

  const dayOfWeek = format(
    new Date(dateArray[0], `${dateArray[1] - 1}`, dateArray[2]),
    'EEEE'
  );
  return dayOfWeek;
}

// END //
