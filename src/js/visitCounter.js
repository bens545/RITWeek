
// Check for localStorage
function storageAvailable(type) {
  try {
    let storage = window[type],
      x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  }
  catch(e) {
    return false;
  }
}

// Gets and update the counter in localStorage.
// Returns the count.
function updateLocalStorageAndGetTimes(week)
{
    let times = 1; // Initial

    // Update localStorage
    if (localStorage["HowManyTimesHaveYouCheckedThisWeek"] && localStorage["currentWeek"])
    {
        var oldWeek = parseInt(localStorage["currentWeek"], 10)
        // Only use the localStorage times if it's the same week
        if (oldWeek === week)
        {
            times = parseInt(localStorage["HowManyTimesHaveYouCheckedThisWeek"], 10) + 1;
        }
    }

    localStorage["HowManyTimesHaveYouCheckedThisWeek"] = times;
    localStorage["currentWeek"] = week;

    return times;
}


export {
    storageAvailable,
    updateLocalStorageAndGetTimes
}