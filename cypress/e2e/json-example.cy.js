describe('JSON Object', () => {
    it('Json Object Examples', () => {
        const exampleObject = {"key": "Tim", "key2": "Jones"};
        const exampleArrayOfValues = ["Sophie", "John", "Jane"];
        const exampleArrayOfObjects = [{"key": "Luke"}, {"key2": "Martha"}, {"key3": "Emily"}];

        const user = {
            "firstName": "Tim",
            "lastName": "Jones",
            "age": 30,
            "Students": [
                {
                    "firstName": "Laurence",
                    "lastName": "Sans",
                },
                {
                    "firstName": "Sophie",
                    "lastName": "Jones",
                }
            ]
        }

        cy.log(exampleObject["key"]);
        cy.log(exampleObject["key2"]);
        cy.log(exampleArrayOfValues.key2);

        cy.log(exampleArrayOfValues[0]);
        cy.log(exampleArrayOfValues[1]);

        cy.log(user.firstName);
        cy.log(user.Students[1].lastName);

        cy.log(exampleArrayOfObjects[0].key);
        cy.log(exampleArrayOfObjects[1].key2);
        cy.log(exampleArrayOfObjects[2].key3);
  })
})