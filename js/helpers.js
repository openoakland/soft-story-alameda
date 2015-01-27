function getStatus(description) {
  if(description === "SOFT STORY BUILDING") {
    return 'Soft Story';
  }
  else if(description.match('POTENTIAL SOFT STORY BUILDING')) {
    return 'Potential Soft Story';
  }
  else if(description.match(/NOT SOFT STORY/)) {
    return 'Not Soft Story';
  }
  else if(description.match(/NOT A SOFT STORY/)) {
    return 'Not Soft Story';
  }
  else if(description.match(/REMOVED FROM/)) {
    return 'Not Soft Story';
  }
  else if(description.match(/REHABILITATION/)) {
    return 'Retrofitted';
  }
  else if(description.match(/RETROFIT/)) {
    return 'Retrofitted';
  }
  else {
    return undefined;
  }
}
