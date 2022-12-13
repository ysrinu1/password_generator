# javascript_password_generator

## Description

This repo is an exercise in using our newly learned javascript skills, primarily focusing on the `script.js` file to create functionality that will fulfill the [Acceptance Criteria](#acceptance-criteria).

This is the resource used for the [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation. The `space` was removed from the character list I chose to use.

```
"!"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
```

To view the initial code, click [here](https://github.com/box-o-water/javascript_password_generator/tree/92ff796f3fae893a1b1adf8380cd876117fbb5a8).

To view the deployed website, click [here](https://box-o-water.github.io/javascript_password_generator/).

![Password Generator preview](/assets/images/password_generator_preview.png)

## Future Enhancements could include:

* Ensuring that inappropriate, repetative, or sequential combinations of characters will not be generated
* Use methods considered truly random and secure
* Define a default password length of x characters, if the user is fine with that

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password

WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria
THEN I select which criteria to include in the password

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## License

Licensed under the [MIT](/LICENSE) license.
