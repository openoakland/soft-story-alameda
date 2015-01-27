describe('getStatus()', function() {

  it('exists', function() {
    expect(getStatus).toBeDefined();
  });

  describe("Descriptions categorized as 'Potential Soft Story'", function(){
    potential_descriptions = [
      'POTENTIAL SOFT STORY BUILDING',
      'POTENTIAL SOFT STORY BUILDING ***11/3/11-APPLICANT SUBMITTED ENGINEERS REPORT & DRAWINGS/WILL RETURN WITH PERMIT APPLICATION & ADDITIONAL COPIES OF PLANS TO SUBMIT FOR PERMIT',
      'POTENTIAL SOFT STORY BUILDING ***11/3/11-APPLICANT SUBMITTED ENGINEERS REPORT & DRAWINGS/WILL RETURN WITH PERMIT APPLICATION & ADDITIONAL COPIES OF PLANS TO SUBMIT FOR PERMIT'
    ];

    potential_descriptions.forEach(function(description_text) {
      it("include " + description_text, function() {
        result = getStatus(description_text);
        expect(result).toEqual('Potential Soft Story');
      });
    });
  });

  describe("Descriptions categorized as 'Not Soft Story'", function(){
    not_soft_descriptions = [
      'NOT SOFT STORY PER ORDIANCE #2989',
      'NOT SOFT STORY PER ORDINANCE #2989',
      'NOT A SOFT STORY PER ALAMEDA SOFT STORY ORDINANCE #2989',
      'NOT A SOFT STORY BUILDING PER ORDINANCE #2989',
      'NOT SOFT STORY ONLY 3 RESIDENTIAL UNITS',
      'NOT SOFT STORY PER ORDIANCE 2989',
      'NOT SOFT STORY PER ALAMEDA SOFT STORY ORDINANCE #2989',
      'NOT SOFT STORY BUILDING PER ORDINANCE #2989',
      'DETERMINED NOT A SOFT STORY STRUCTURE 10/22/11 --- ***9/22/11-SUBMITTED SOFT STORY REPORT FOR REVIEW',
      'REMOVED FROM SOFT STORY LIST BASED ON ENGINEERING EVALUATION DATED 4/18/2011 (G MCFANN)',
      'NOT A SOFT STORY BUILDING PER ORDIANCE #2989',
      'NOT A SOFT STORY PER ORDINACE #2989',
      'NOT A SOFT STORY BUILDING',
      'NOT A SOFT STORY BUILDING - SEISMIC RETROFIT COMPLETED IN 1986',
      'REMOVED FROM SOFT STORY LIST BASED ON ENGINEERING EVALUATION DATED 4/18/2011 (G MCFANN)',
      'SOFT STORY BUILDING - RETROFITTED UNDER PERMIT #B09-0486      NOT A SOFT STORY BUILDING PER ORDIANCE #2989'
    ];

    not_soft_descriptions.forEach(function(description_text) {
      it("include " + description_text, function() {
        result = getStatus(description_text);
        expect(result).toEqual('Not Soft Story');
      });
    });
  });

  describe("Descriptions categorized as 'Retrofitted'", function(){
    retrofitted_descriptions = [
      'SOFT STORY REHABILITATION PER ALAMEDA SOFT STORY ORDINANCE #2989',
      'SOFT STORY RETROFIT COMPLETED IN COMPLIANCE WITH ORDINANCE #2989',
      'SOFT STORY RETROFIT COMPLETE IN COMPLIANCE WITH ORDINANCE #2989',
      'SOFT STORY RETROFIT COMPLETED IN COMPLIANCE WITH ORDIANCE #2989 UNDER PERMIT #B10-0635. FINALED 09/21/2010.',
      'SOFT STORY RETROFIT COMPLETED IN COMPLIANCE WITH ORDIANCE #2989 UNDER PERMIT #B10-1174. FINALED 08/03/2010.',
      'SOFT STORY RETROFIT COMPLETED IN COMPLIANCE WITH ORDIANCE #2989 UNDER PERMIT #B10-1542. FINALED 12/07/2010.',
      'SOFT STORY RETROFIT IN COMPLIANCE WITH ORDINANCE #2989'
    ];

    retrofitted_descriptions.forEach(function(description_text) {
      it("include " + description_text, function() {
        result = getStatus(description_text);
        expect(result).toEqual('Retrofitted');
      });
    });
  });

  describe("Descriptions categorized as 'Soft Story'", function() {
    it('include SOFT STORY BUILDING', function() {
      result = getStatus('SOFT STORY BUILDING');
      expect(result).toEqual('Soft Story');
    });
  });
});
