function enough(cap, on, wait) {
    if (cap == on + wait) {
      return 0
    } else {
        return on+wait - cap
  }
}

function enough1(cap, on, wait) { 
    return on + wait == cap ? 0 : on + wait - cap;
}




console.log(enough1(100 , 60, 50));