function getStatus(description) {
  if(description.match(/REHABILITATION/)) {
    return 'Retrofitted';
  }
  else if(description.match(/RETROFIT COMPLETED/)) {
    return 'Retrofitted';
  }
  else if(description === "SOFT STORY BUILDING") {
    return 'Soft Story';
  }
  else {
    return undefined;
  }
}
