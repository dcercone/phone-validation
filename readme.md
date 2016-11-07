# Phone Validation

This is a simple JavaScript app I threw together to play around with Google's [libphonenumber](https://github.com/googlei18n/libphonenumber) library.  

Most of the international phone numbers found in the **phoneNumbers.js** file were pulled from various online sites.  Found the various phone numbers using Google by searching for phrases like: "contact our Mexico office".

As for the countries and country codes found in **countries.js**, those were found using a Google search as well.

> NOTE: This is simply a tool to play around with the [libphonenumber](https://github.com/googlei18n/libphonenumber) library, and nothing else!

---

## Installation

> Prerequisite: [Node JS](https://nodejs.org/en/)

1. Clone\download the repo.
2. From the command-line or terminal navigate to the **phone-validation** directory.
3. Type: `npm install`, and press enter.
4. If there are no package errors, type: `node index.js` and press enter.

You should see output similar to:

```
Brazil:
        INTERNATIONAL   +55 11 3028-4102 => +55 11 3028-4102
        NATIONAL        +55 11 3028-4102 => (11) 3028-4102
        E164    +55 11 3028-4102 => +551130284102


China:
        INTERNATIONAL   +86 10 6619 0500 => +86 10 6619 0500
        NATIONAL        +86 10 6619 0500 => 010 6619 0500
        E164    +86 10 6619 0500 => +861066190500


Ireland:
        INTERNATIONAL   +353 1 246 7000 => +353 1 246 7000
        NATIONAL        +353 1 246 7000 => (01) 246 7000
        E164    +353 1 246 7000 => +35312467000


Mexico:
        INTERNATIONAL   (01) 55 1234 5678 => +52 55 1234 5678
        NATIONAL        (01) 55 1234 5678 => 01 55 1234 5678
        E164    (01) 55 1234 5678 => +525512345678

        INTERNATIONAL   (01 55) 1234 5678 => +52 55 1234 5678
        NATIONAL        (01 55) 1234 5678 => 01 55 1234 5678
        E164    (01 55) 1234 5678 => +525512345678

        INTERNATIONAL   +52 55 5241 4300 => +52 55 5241 4300
        NATIONAL        +52 55 5241 4300 => 01 55 5241 4300
        E164    +52 55 5241 4300 => +525552414300


Denmark:
        INTERNATIONAL   32-11-22-33 => +45 32 11 22 33
        NATIONAL        32-11-22-33 => 32 11 22 33
        E164    32-11-22-33 => +4532112233

        INTERNATIONAL   20-88-37-78 => +45 20 88 37 78
        NATIONAL        20-88-37-78 => 20 88 37 78
        E164    20-88-37-78 => +4520883778


France:
        INTERNATIONAL   0 590 91 55 72 => +33 5 90 91 55 72
        NATIONAL        0 590 91 55 72 => 05 90 91 55 72
        E164    0 590 91 55 72 => +33590915572

        INTERNATIONAL   +590 590 67 43 11 => +590 590 67-4311
        NATIONAL        +590 590 67 43 11 => 0590 67-4311
        E164    +590 590 67 43 11 => +590590674311


Spain:
        INTERNATIONAL   +34 917 88 94 00 => +34 917 88 94 00
        NATIONAL        +34 917 88 94 00 => 917 88 94 00
        E164    +34 917 88 94 00 => +34917889400


Korea:
#######################
Can't find country code
#######################

United Arab Emirates:
        INTERNATIONAL   +971 4 450 0700 => +971 4 450 0700
        NATIONAL        +971 4 450 0700 => 04 450 0700
        E164    +971 4 450 0700 => +97144500700


United States:
        INTERNATIONAL   800–692–7753 => +1 800-692-7753
        NATIONAL        800–692–7753 => (800) 692-7753
        E164    800–692–7753 => +18006927753

        INTERNATIONAL   1800–692–7753 => +1 800-692-7753
        NATIONAL        1800–692–7753 => (800) 692-7753
        E164    1800–692–7753 => +18006927753

        INTERNATIONAL   +1-800–692–7753 => +1 800-692-7753
        NATIONAL        +1-800–692–7753 => (800) 692-7753
        E164    +1-800–692–7753 => +18006927753

```