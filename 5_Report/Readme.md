# 🛒 E-COMMERCE WEBSITE ->
## 🛍️ INTRODUCTION
#### The Website named "Sam-Shop" is just an online-shopping website i.e ( B -> C ) from which anyone can buy the products related to Home-Essentials, Clothing, Electronic items and so on.This online-hub can be useful for all those who loves to shop remotely and doesn't wants to go outside for purchasing as this online-shop gives the facility to get delivered the purchased product
## ✒️ Cost and Timeline
<img width="569" alt="Agingg" src="https://user-images.githubusercontent.com/94338447/146149112-42c4856e-b69f-4a53-9a89-5b0710ba0313.png">

## 🔎 Features
## The Sam-Shop contains all those features which is needed by user to shop as below :
## Home:
In Home page we have all the basic and trending products related detail for our customer mentioned as below:

       CLOTHING : All kind of clothes for Men,Women and Children
       ELECTRONICS : All kind of Gadgets available
       GROCERY : All Essential products available
       Header Part : Sponsorship,Offers or Special-discount available on Products
       Footer Part : All Social media handles

## Product:
In Product section we have all the products list and complete description of them:

       Product Name
       Product Image
       Product Detail
       Cost of Product
       Size of Product (S,M,L,XL,XXL)
       No of Units to Purchase
       Add to Cart
       Related Products Overview
       Customer Feedback

## About:
In about section we have all the basic details related to our company(Sam-Shop)

## Contact:
In Contact section customer can raise its query or complain regarding service and can send their suggestion to improve our service by filling details as below:
      
     -> To Connect through Mail-ID:
        1. Full Name
        2. Email Address
        3. Subject - User has to select exact problem he/she is facing
        4. Message - Customer can describe the issue in detail related to above selected Subject Title
        5. Send Message - After filling all the above details by clicking on the "Send Message" button user can easily send us message to contact
  
    -> To Connect directly: Phone number added
     
    -> To Connnect physically : Exact Address updated

## Account:
From Account Section user can register and login by uploading their basic details :

     -> To Register or SIGN UP :
        1. Unique username
        2. Valid Email-Id
        3. Valid Phone Number
        4. Creating New password
        5. Confirm Above password

     -> To Sign IN:
        1. Add Username
        2. Add password
        3. Forgot password option - In case user forgot his/her old password

## Search:
With SEARCH BAR you can search any product listed on our website

## Cart:
If any user selects Add to Cart from product section it can be seen on this CART section.

    1. User can remove the added product
    2. User can minimize or maximize the product quantity
    3. Place Order:User can Place all orders at one time whatever he/she has added into the cart section.
    
## SWOT ANALYSIS

<img width="397" alt="SWOT ANALYSIS" src="https://user-images.githubusercontent.com/90309557/146193107-71e10202-ec11-49c7-9d4b-96fa594f6bbb.png">

## 4W's and 1'H

## ⬇️ What: 
       Online shopping ecommerce website
## ➡️ When: 
       24*7 running and when you want to buy something online
## 🔃 Where: 
       Internet, From anywhere any time with internet
## ↗️ Why: 
       Buying products online, ease of access to customer
## ⤵️ How:   
           1. Registation
           2. Login 
           3. Choose the things you want to buy 
           4. Add to cart 
           5. Order placed
           
           ## Requirement Details:

### High Level Requirements:

| Number | Function name |    Status   |
|--------|---------------|-------------|
| HLR_1  | Cart option   | Implemented | 
| HLR_2  | Login page    | Implemented |
| HLR_3  | Registration  | Implemented |
| HLR_4  | Checkout info/ Payment method  | Future |
| HLR_5  | Search        | Future      |

### Low Level Requirements:

|              Number                |               Function name                    | Status        |
|------------------------------------|------------------------------------------------|-------------- |
| LLR_1_HLR_1                        |Adding products to cart                         | Implemented   |
| LLR_1_HLR_2                        |Username and password entered Successfully logged in   | Implemented   |
| LLR_1_HLR_3                        |Customer details information needed to log in   | Implemented   |
| LLR_1_HLR_4                        |Card details and delivery address information   | Future        |
| LLR_1_HLR_5                        |Filter and categories                           | Future        |



# UML DIAGRAMS #
----------------------------------------------------------

The elements are like components which can be associated in different ways to make a complete UML picture, which is known as diagram. Thus, it is very important to understand the different diagrams to implement the knowledge in real-life systems.

There are two broad categories of diagrams and they are again divided into subcategories −

- Structural Diagrams

- Behavioral Diagrams

## Structural Diagrams ##

The structural diagrams represent the static aspect of the system. These static aspects represent those parts of a diagram, which forms the main structure and are therefore stable.

### 1. Component Diagram ###

![COMPONENT DIAGRAM](https://user-images.githubusercontent.com/72429535/146153158-7f2f68b6-bcf0-4567-88dc-59c808f1dcdf.png)

### 2. Class Diagram ###

![CLASS DIAGRAM](https://user-images.githubusercontent.com/72429535/146138884-0122872a-38c5-4123-9d23-25b7cb69f646.png)

## Behavioral Diagrams ##

Behavioral diagrams basically capture the dynamic aspect of a system. Dynamic aspect can be further described as the changing/moving parts of a system.

### 1. Use Case Diagram ###
![USE CASE](https://user-images.githubusercontent.com/72429535/146138893-c4479056-c759-4efc-be95-bd1fa62815da.png)

### 2. Sequence Diagram ###

![SEQUENCE DIAGRAM](https://user-images.githubusercontent.com/72429535/146153221-e13dff86-7a4e-4a6f-989a-c1f0e1ca458e.png)


# Test Plan

---

## High Level Test Plan

---

| TestID | Description                                                                                                                                  | Exp I/P | Exp O/P                       | Actual O/P                    | Type of Test      |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ----------------------------- | ----------------------------- | ----------------- |
| H_01   | Testing Homepage of an Site                                                                                                                  | NA       |Pass   |Pass    | Requirement Based |
| H_02   | Testing the Master page of an Online Shopping Website                                                                                        | Clicking On Menu| Pass  | Pass                       | Requirement Based |
| H_03   | Testing the Search feature of an eCommerce Site                                                                                              | Type Item Name   | Pass  | Fail(No any support by bachend) |  Requirement Based    |
| H_03   | Testing the Checkout Flow of an eCommerce Site                                                                                               | Clicking On items   | Pass | Pass |  Requirement Based    |
| H_03   | Testing the Order Confirmation Page of an Online Shopping Portal                                                                             | Place order   | Pass  | Pass |  Requirement Based    |
| H_04   |Testing the Product Details Page (PDP) of an eCommerce Site                                                                                   | NA    | Pass        | Pass   | Reqiement Based    |


## Low Level Test Plan

| TestID | Description                                                                                                                                  | Exp I/P | Exp O/P      | Actual O/P                    | Type of Test      |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ----------------------------- | ----------------------------- | ----------------- |
| L_01   | Email formate verification(With Valid intput)            | Type Email          | Pass                  | Pass                     | Requirement Based |
| L_02   | Email formate verification(With Invalid intput)          | Type Email          | Fail                  | Fail                   | Requirement Based |
| L_03   | Mobile Digit Verification(10 Digit Only)                 | Type Number         | Pass                  | Pass                  | Requirement Based |
| L_04   | In mobile number section, Alphabet is not acceptable     | Type some thing    | Pass         | Pass         | Requirement Based |
| L_05   | All tthe pages are linked properly                       | Click on the menu.. | Pass | Pass | Scenario Based    |


# 🔅 IMAGES ->

## 1. Home Page
![HomePage](https://github.com/GENESIS2021Q1/Applied_SDLC-Dec_Team_45/blob/main/6_ImagesAndVideos/Outputs/Home%20Section%20part1.png)
![Cloths](https://user-images.githubusercontent.com/94335341/146330193-06789fab-516e-49ee-8364-3151c949140d.JPG)
![Electronics](https://user-images.githubusercontent.com/94335341/146330609-485b9c80-b555-4f08-8830-7c1507fbfe30.JPG)


![Grocery](https://user-images.githubusercontent.com/94335341/146331044-a20a8444-3814-49d1-925d-a8bfdae17a4e.JPG)

<img width="941" alt="Home Section part5" src="https://user-images.githubusercontent.com/90309557/146315866-c957d992-ce02-45a6-b37e-278c234bf860.png">

![Testimonial](https://user-images.githubusercontent.com/94335341/146356893-5b81690f-c2d0-49cb-b80b-637a852ecfcb.JPG)

<img width="947" alt="Home Section part7" src="https://user-images.githubusercontent.com/90309557/146315869-4d6ae564-6eab-4f21-89fd-d62132311621.png">

## 2. Product Section
<img width="936" alt="Product Section Page1" src="https://user-images.githubusercontent.com/90309557/146314236-c7deca88-e310-40cc-a7ea-34818faae7b1.png">
<img width="940" alt="Product Section Page2" src="https://user-images.githubusercontent.com/90309557/146314263-b4a3c6d8-8264-4b68-a9c2-3be8e1a33e9e.png">
<img width="936" alt="Product Section Page3" src="https://user-images.githubusercontent.com/90309557/146314298-b7b6d7e5-3ca3-4387-b722-55bd286d34f3.png">
<img width="937" alt="Product Section Page4" src="https://user-images.githubusercontent.com/90309557/146314319-793b89f6-d080-4880-905e-98ad297b0aec.png">

## 3. About Page
![About](https://user-images.githubusercontent.com/94335341/146332765-9bb7b7ad-4c2a-486e-a9ff-4ef8ec7f6611.JPG)

## 4. Contact Page
<img width="938" alt="Contact Section" src="https://user-images.githubusercontent.com/90309557/146314047-97165429-05d7-4c95-9527-0297625ff5ea.png">

## 5. Account Page
<img width="948" alt="Account Section" src="https://user-images.githubusercontent.com/90309557/146314070-1fd859da-f001-445f-8dea-6bde8c8d022e.png">

## 6. Product Description Page
<img width="472" alt="Product Description" src="https://user-images.githubusercontent.com/90309557/146314122-596c0201-fe9a-4b1c-9c68-6e300f7550a9.png">

## 7. Cart Page
![Cart](https://user-images.githubusercontent.com/94335341/146357423-99b261aa-f5e0-454d-978b-42185b8b1caa.JPG)

## 8. Order Placed Page

![OrderPlacedPage](https://github.com/GENESIS2021Q1/Applied_SDLC-Dec_Team_45/blob/main/6_ImagesAndVideos/Outputs/Order%20Placed%20Section.png)



