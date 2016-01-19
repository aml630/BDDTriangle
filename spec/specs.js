 describe ('triangleShape', function () {

  it("is a triangle unless sides are too small", function () {
    expect(triangleShape(2,3,9)).to.equal("notTriangle")
  });

  it("is an equalateral if all sides are equal", function () {
    expect(triangleShape(4,4,4)).to.equal("equilateral")
  });

  it("is an isosceles triangle if two sides are equal", function () {
  expect(triangleShape(4,4,6)).to.equal("isosceles")
  });

  it("is a scalene triang if no sides are equal", function () {
    expect(triangleShape(2,3,4)).to.equal("scalene")
  });


  });
