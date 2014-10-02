describe('day1', function ()
{
    var answer = window.day1;

    describe('getDescendingNumbers', function ()
    {
        it('should return string with numbers separated by spaces', function ()
        {
            expect(answer.getDescendingNumbers(15, 1)).toEqual("15 14 13 12 11 10 9 8 7 6 5 4 3 2 1");
        });
        it('should return false if start greater than stop', function ()
        {
            expect(answer.getDescendingNumbers(1, 15)).toBeFalsy();
        });
        it('should return false if start is String', function ()
        {
            expect(answer.getDescendingNumbers("asa", 1)).toBeFalsy();
        });
        it('should return false if stop is String', function ()
        {
            expect(answer.getDescendingNumbers(1, "asa")).toBeFalsy();
        });
        it('should return false if start is number but String', function ()
        {
            expect(answer.getDescendingNumbers("5", 1)).toBeFalsy();
        });
        it('should return false if start is NaN', function ()
        {
            expect(answer.getDescendingNumbers(NaN, 1)).toBeFalsy();
        });
    });

    describe('deleteStr', function ()
    {
        it('should delete string from list', function ()
        {
            expect(answer.deleteStr("Jan", ["Ala", "Michal", "Maciek", "Jan", "Andrzej"])).toEqual(["Ala", "Michal", "Maciek", "Andrzej"]);
        });
    });
});
