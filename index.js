function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation >= 42) {
      return pickupLocation - 42;
    } else {
      return 42 - pickupLocation;
    }
  }

  function distanceFromHqInFeet(pickupLocation) {
    let blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    let blocks = Math.abs(destination - start);
    return blocks * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  