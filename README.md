# ifttcat

![cat](https://raw.githubusercontent.com/fouasnon/ifttcat/master/infinicat4-2_color.png)

# API Documentation

Our extensible API is designed for the internet of things, but only where things are cats. We provide a number of API endpoints to empower cats via connections to a variety of feline services.

We provide API libraries for:

 - Cat++
 - Purrl
 - Catskell
 - Pascat
 - Objective Cat
 - KittyScript


Our RESTful architecture ensures all felids can nap without being restricted to a particular platform, scratching post, or bed.


### AUTHENTICATION

We use a proprietary OAuth implementation that ultimately rests on you being accepted by the particular cat object with which you wish to interact. We recommend not being too eager — make soft, gentle API calls until the cat trusts you. Completely ignoring the cat is the best way to ensure an valid HTTP response.


### HTTP CALLS:

Fuck your standards, cats say. We've implemented a whole set of custom HTTP verbs designed to please our grimalkin overlords. For example:

- `PET /cat/:name?attempt_belly_rub=true&injury_waiver_token=ab53498eff90`
- `FEED /cat/:name?amount=as_much_as_she_wants`
- `LETOUT /cat:name?just_leave_the_door_open=true`

### FUNCTIONAL IMPLEMENTATION:

Just for spite, the `Cat` data constructor implements `Monad`.

### FEEDING:

Cats are extremely finicky eaters and will refuse to compile unless their type inference system (veterinarians call it the "nose") can determine what exactly it is you're trying to shove into their IO.

### PERSISTENCE:

##### Retrieval:

All cats are given the id of 1 by default, as none is willing to be anything other than first. It's your job as developers to figure out how to work around this.

`cat = Cat.find(1) #=> every cat ever`

##### Updates:

Cats can be updated or "saved" a total of 8 times. Saving a cat for the 9th time will kill it. You monster.

### MOOD STATE MACHINE

Cats can exist in the following states:

1. *content*: The cat has no complaints about its physical environment or wellbeing. This state automatically times out after 7 minutes, or upon any API request.
2. *indifferent*: The default state. The cat will not care about being pinged by your server, and will either ignore or murder your packet.
3. *pissed*: All API calls will incur an additional charge, which will be converted to paper currency for shredding.
4. *irate*: The cat will frame you for running the Silk Road and murder-for-hire.

### AVAILABLE CALLBACKS

- `on_purr`
- `on_scratch`
- `on_hate`
- `on_shit_in_a_box`

