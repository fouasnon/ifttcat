# ifttcat

# API Documentation

We provide API libraries for Cat++, Purrl, Catskell, Pascat, Objective Cat, and KittyScript.

Our RESTful architecture ensures all felids can nap without being restricted to a particular platform, scratching post, or bed.


### AUTHENTICATION

We use a proprietary OAuth implementation that ultimately rests on you being accepted by the particular cat object with which you wish to interact. We recommend not being too eager — make soft, gentle API calls until the cat trusts you. Completely ignoring the cat is the best way to ensure an valid HTTP response.


### HTTP Calls:

Fuck your standards, cats say. We've implemented a whole set of custom HTTP verbs designed to please our grimalkin overlords. For example:

- `PET /cat/:name?attempt_belly_rub=true&injury_waiver_token=ab53498eff90`
- `FEED /cat/:name?amount=as_much_as_she_wants`
- `LETOUT /cat:name?just_leave_the_door_open=true`

### Functional Implementation

Just for spite, the `Cat` data constructor implements `Monad`.

#### Feeding:

`Cat`s are extremely finicky eaters and will refuse to compile unless their type inference system (veterinarians call it the "nose") can determine what exactly it is you're trying to shove into their IO.
