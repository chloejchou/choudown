## Component Hierarchy

**SessionFormContainer**
 - SessionForm

**HeaderContainer**
- Header
  * SearchBar

**HomeContainer**
- Home
  * HomeIndex
    - HomeIndexItem

**ProfileContainer**
- Profile
  * FeaturedBusiness

**ProfileBookmarksContainer**
- ProfileBookmarks
  * ProfileBookmarkItem

**ProfileReviewsContainer**
- ProfileReviews
  * ProfileReviewItem

**BusinessIndexContainer**
- BusinessIndex
  * BusinessIndexItem
  * Filters
  * Map
  * NoResults
  * Arrows

**BusinessDetailContainer**
- BusinessDetail
  * ReviewIndexContainer
  * ReviewForm

**ReviewIndexContainer**
- ReviewIndex
  * ReviewIndexItem
    - PhotoIndexItem

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "SessionFormContainer" |
| "/home" | "HomeContainer" |
| "/profile/:userId" | "ProfileContainer" |
| "/profile/:userId/bookmarks" | "ProfileBookmarksContainer" |
| "/profile/:userId/reviews" | "ProfileReviewsContainer" |
| "/businesses-search" | "BusinessIndexContainer" |
| "/businesses/:businessId" | "BusinessDetailContainer" |
