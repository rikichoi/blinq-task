# Building & running the application

### Open up Terminal on Visual Studio Code
### `cd blinq-task`
### `npm i`
### `npm start`

# Test Cases

## Test #1
### Step 1: Click `Request an invite` button 
### Step 2: Insert `test test` into Full name field 
### Step 2.1: Insert `blinq@test.com` into Email field 
### Step 2.1: Insert `blinq@test.com` into Email field 
### Step 3: Click `Send` button 
### Confirmation window should open
### Click `OK` button

## Test #2
### Step 1: Click `Request an invite` button 
### Step 2: Keep Full name field empty
### Step 2.1: Keep Full name field empty 
### Step 2.1: Keep Full name field empty
### Step 3: Click `Send` button 
### Error messages requesting inputs will be shown under Full name & Email field

## Test #3
### Step 1.1: Insert `te` into Full name field 
### Step 1.1: Insert `blinq` into Email field 
### Step 1.1: Insert `blinq@test.com` into Email field 
### Step 3: Click `Send` button 
### ### Error messages requesting more than 3 chars for Full name, a valid Email, and matching Confirmation email will be shown
### Click `OK` button

## Test #4
### Step 1: Press f12 to open `console`
### Step 2: Click `Request an invite` button 
### Step 3.1: Insert `blinq test` into Full name field 
### Step 3.2: Insert `usedemail@blinq.app` into Email field 
### Step 3.3: Insert `usedemail@blinq.app` into Email field 
### Step 3: Click `Send` button 
### Error message received from API will show under `Send` button
### Click `OK` button