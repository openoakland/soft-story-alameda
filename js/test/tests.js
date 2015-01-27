describe('getStatus()', function() {

  it('exists', function() {
    expect(getStatus).toBeDefined();
  });

  describe('Soft story descriptions', function() {

    it('include SOFT STORY BUILDING', function() {
      result = getStatus('SOFT STORY BUILDING');
      expect(result).toEqual('Soft Story');
    });

  });

  describe("Descriptions categorized as 'Retrofitted'", function(){

    retrofitted_statuses = [
      'SOFT STORY REHABILITATION PER ALAMEDA SOFT STORY ORDINANCE #2989',
      'SOFT STORY RETROFIT COMPLETED IN COMPLIANCE WITH ORDINANCE #2989'
    ];

    retrofitted_statuses.forEach(function(description_text) {
      it("include " + description_text, function() {
        result = getStatus(description_text);
        expect(result).toEqual('Retrofitted');
      });
    });

  });
});
