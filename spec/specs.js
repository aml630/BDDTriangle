describe ('triangleShape', function () {
  it("is not a triangle if 2 sides are too small", function () {
    expect(triangleShape(4).to.equal("none"))
  });


}
