Feature: jobs 
     Mange job that have internship in names 

      Scenario Outline: Gets the list of jobs
        Given a string <{string}>
        When I send a GET request to fetch jobs
        Then I should get <number> of jobs


    Examples:
        | {string}                                   | number              |
        | "Intern"                                   | 14                  |