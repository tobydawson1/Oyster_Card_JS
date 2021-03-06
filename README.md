## Makers Academy - Week 5 

# Oystercard Challenge - JavaScript Edition

[Task](#Task) | [Jasmine Testing](#Testing) | [Functions and Methods](#Methods) |[User Stories](#Stories) |

## Task

The taks is to create an Oyster Card clone. The programme must be able to calulate fare cost, knows if you are touching in and out and to be tested fully.

## Testing

![Testing](screenshots/testing.png)

## <a name="Methods">Functions and Methods</a>

| Object:          | oysterCard                                            | 
| ---------------- | -------------------------------------------------- | 
| **Properties:**  | balance                                 |
| **Function:**    | payment                                    |
| **Function:**    | Deposit                                            |  
| **Function:**    | touchIn                                         |  
| **Function:**    | touchOut                                         | 


| Object:          | journey                                          | 
| ---------------- | -------------------------------------------------- | 
| **Properties:**  | History                                             |
| **Function:**    | setHistory                                  |
| **Function:**    | calculatePrice                                           |  
| **Function:**    | setExitStation                                         | 
| **Function:**    | setEntryStation                                         |  

## <a name="Stories">User Stories</a>

Here are the user stories you will be working on for this project:

```
In order to use public transport
As a customer
I want money on my card

In order to keep using public transport
As a customer
I want to add money to my card

In order to protect my money
As a customer
I don't want to put too much money on my card

In order to pay for my journey
As a customer
I need my fare deducted from my card

In order to get through the barriers
As a customer
I need to touch in and out

In order to pay for my journey
As a customer
I need to have the minimum amount for a single journey

In order to pay for my journey
As a customer
I need to pay for my journey when it's complete

In order to pay for my journey
As a customer
I need to know where I've travelled from

In order to know where I have been
As a customer
I want to see to all my previous trips

In order to know how far I have travelled
As a customer
I want to know what zone a station is in

In order to be charged correctly
As a customer
I need a penalty charge deducted if I fail to touch in or out

In order to be charged the correct amount
As a customer
I need to have the correct fare calculated
```