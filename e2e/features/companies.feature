Feature: companies
    Manages companies information.

    Scenario Outline: Gets the list of companies
        Given a location <string>
        When I send a GET request to fetch companies
        Then I should get <{}> of companies


    Examples:
        | location                     | {}                                          |
        | New Cairo, Cairo, Egypt      | AIC - Al Maalim International Co. -         |
