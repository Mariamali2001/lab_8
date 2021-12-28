Feature: Presidents
    Manages presidents information.

    Scenario Outline: Gets the list of presidents
        Given a character <character>
        When I send a GET request to fetch presidents
        Then I should get <number> of presidents


    Examples:
        | character | number |
        | A | 3 |
        |  | 46 |
