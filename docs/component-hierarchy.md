## Component Hierarchy

**SessionFormContainer**
 - SessionForm

**Header**

**HomeContainer**
- HomeIndex
    * HomeIndexItem

**BusinessIndexContainer**
- BusinessIndex
    * BusinessIndexItem
    * Map

**BusinessDetailContainer**
- BusinessDetail
  * ReviewList
    + ReviewListItem
    + ReviewForm

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "SessionFormContainer" |
| "/home" | "HomeContainer" |
| "/businesses-search" | "BusinessIndexContainer" |
| "/businesses/:businessId" | "BusinessDetailContainer" |
