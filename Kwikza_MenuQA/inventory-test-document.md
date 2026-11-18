# Inventory Test Document

> **QA Reference Document**  
> This document contains the test cases for Inventory / Menu features and is intended to be used as a reference for QA testing and regression testing.

---

## Feature Coverage

| # | Feature |
|---:|---|
| 1 | Menu / Inventory landing page |
| 2 | Category listing |
| 3 | Item listing |
| 4 | Item Variants |
| 5 | Add Variant |
| 6 | Add Category |
| 7 | Search and Filter |
| 8 | Grid / List view |
| 9 | Stock availability |
| 10 | Floating Add action |

---

# 1. Menu / Inventory Page

---

## TC-01 — Verify Menu Page Loads Successfully

### Why this matters

This verifies that the vendor can open the Menu page and that all primary controls and information are displayed correctly.

### Steps

1. Log in to the Vendor application.
2. Navigate to **Menu**.
3. Observe the Menu page.

### Expected / Pass Criteria

- Menu page should load successfully without errors.
- Page title should display **Menu**.
- Total item count should be displayed.
- Category cards should be visible.
- **Search items** field should be available.
- **Markup** and **Apply Discount** buttons should be visible.
- **Grid View** and **List View** controls should be available.
- Floating **+** button should be displayed.

---

## TC-02 — Search Dish and Navigate to Item Details

### Why this matters

This verifies that the vendor can search for an existing dish using its correct spelling and navigate to the corresponding Item Details page.

### Steps

1. Open the Vendor application.
2. Click **Menu** to open the Menu page.
3. Enter the name of an existing dish in the **Search items** field using the correct spelling.
4. Observe the search results.
5. Verify that the searched dish is displayed.
6. Click the searched dish.

### Expected / Pass Criteria

- Search results should display the dish matching the entered search term.
- Clicking the dish should navigate to the corresponding **Item Details** page.
- The Item Details page should display the correct dish information.

---

## TC-03 — Verify Category Markup

### Why this matters

This verifies that the vendor can apply markup to a selected category and that the updated pricing is calculated and retained correctly.

### Steps

1. Open the Vendor application.
2. Click **Menu**.
3. Click **Markup**.
4. Select the required category.
5. Select **Percentage** as the markup type.
6. Enter a valid markup value.
7. Verify the **Price Preview**.
8. Click **Apply**.
9. Reopen the **Markup** section and verify the applied markup.

### Expected / Pass Criteria

- Selected category should be updated with the entered markup.
- **Price Preview** should display the correctly calculated updated price.
- Applied markup should remain correctly reflected after reopening the Markup section.

> **Note:**  
> Repeat the same test using **Flat Amount** markup and verify that the markup is applied and calculated correctly.

---

## TC-04 — Verify Category Discount

### Why this matters

This verifies that the vendor can apply a discount to a selected category and that the discount is calculated and retained correctly.

### Steps

1. Open the Vendor application.
2. Click **Menu**.
3. Click **Apply Discount**.
4. Select the required category.
5. Select **Percentage** as the discount type.
6. Enter a valid discount value.
7. Enter a label, if required.
8. Verify the discount details.
9. Click **Apply**.
10. Reopen the **Apply Discount** section.

### Expected / Pass Criteria

- Selected category should be updated with the entered discount.
- Discount should be calculated correctly.
- Applied discount should remain correctly reflected after reopening the Apply Discount section.

> **Note:**  
> Repeat the same test using **Flat Amount** discount and verify that the discount is applied and calculated correctly.

---

## TC-05 — Verify Markup and Discount Across Menu, Customer and Quick Sale

### Why this matters

This verifies that category-level markup and discount changes are consistently reflected in all applicable areas.

### Steps

1. Apply a **Markup** to a selected category from **Menu**.
2. Verify the updated price in the Vendor Menu.
3. Open the **Customer** side and verify the markup in the applicable item price.
4. Apply a **Discount** to a selected category from **Menu**.
5. Verify the discounted price in the Vendor Menu.
6. Open the **Customer** side and verify the discount.
7. Open **Quick Sale** and verify that the same discount is applied correctly.

### Expected / Pass Criteria

- Applied **Markup** should be correctly reflected in the Vendor Menu and Customer side.
- Applied **Discount** should be correctly reflected in the Vendor Menu, Customer side, and Quick Sale.

---

## TC-06 — Verify Grid View and List View

### Why this matters

This verifies that the vendor can switch between Grid View and List View and that item information remains consistent in both views.

### Steps

1. Open the Vendor application.
2. Click **Menu**.
3. Verify that items are displayed in **Grid View**.
4. Verify the item name, image, price, and other available details.
5. Switch to **List View**.
6. Verify that the same menu items are displayed.
7. Compare item details between Grid View and List View.

### Expected / Pass Criteria

- All applicable menu items should be displayed correctly in both **Grid View** and **List View**.
- Item information should remain consistent between both views.
- There should be no layout, clipping, or visibility issues.

---

# 2. Category and Item Management

---

## TC-07 — Verify Add Category

### Why this matters

This verifies that the vendor can create a new category from the Menu.

### Steps

1. Open **Menu**.
2. Click **+** and select **Add Category**.
3. Enter a valid category name and add an image.
4. Click **Add Category**.
5. Verify the new category on the Menu page.

### Expected / Pass Criteria

- Category should be created successfully.
- Newly created category should be displayed correctly on the Menu page.

---

## TC-08 — Verify Item Category Change

### Why this matters

This verifies that an existing item is moved to the newly selected category after its category is changed during editing.

### Steps

1. Open **Menu**.
2. Open the **Starter** category.
3. Open an existing item and click **Edit**.
4. Change the **Category** to **Mains**.
5. Click **Save**.
6. Check both **Starter** and **Mains** categories.

### Expected / Pass Criteria

- Item should be removed from **Starter**.
- Item should appear under **Mains** after saving.

---

## TC-09 — Verify Add Item from Main Menu

### Why this matters

This verifies that an item added directly from the main Menu / Inventory page is assigned to the category selected during item creation.

### Steps

1. Open the main **Menu** page.
2. Click **Add Item**.
- Item should appear under **Mains** after saving.
3. Select **Mains** in the **Category** field.
4. Enter the required item details and click **Save**.
5. Open the **Mains** category.

### Expected / Pass Criteria

- Newly created item should appear under the selected **Mains** category.

---

# 3. Item Variants

---

## TC-10 — Verify Variant Image Upload

### Why this matters

This verifies that the vendor can upload a variant image using the available upload option.

### Steps

1. Open **Add Variant**.
2. Click **Click to upload or drag and drop**.
3. Select a valid image file.
4. Verify the uploaded image.

### Expected / Pass Criteria

- Selected image should be uploaded successfully.
- Uploaded image should be displayed correctly in the **Variant Images** section.

> **Note:**  
> Also verify the **Take photo** option. On a supported device, the device camera should open. Capture a photo and verify that the photo is uploaded and displayed in the **Variant Images** section.

---

## TC-11 — Verify Veg / Non-Veg Selection

### Why this matters

This verifies that the selected food type is saved correctly and clearly displayed on the Customer side.

### Steps

1. Open **Add Variant**.
2. Select **Veg** or **Non-veg**.
3. Save the variant.
4. Open the same dish on the **Customer** side.
5. Verify the food type indicator.

### Expected / Pass Criteria

- Selected food type should be displayed correctly on the Customer side.
- **Veg** should have the appropriate green indicator.
- **Non-veg** should have the appropriate red indicator.

---

## TC-12 — Verify Veg / Egg / Non-Veg Mandatory Validation

### Why this matters

This verifies that a food type must be selected before a variant can be added.

### Steps

1. Open **Add Variant**.
2. Leave **Veg / Egg / Non-veg** unselected.
3. Fill in the required variant details.
4. Click **Add Variant**.
5. Verify the validation message and mandatory-field indicator.

### Expected / Pass Criteria

- Variant should not be added.
- Validation message **"Choose Veg, Egg or Non-veg"** should be displayed.
- A **\*** should be displayed next to **Veg / Egg / Non-veg** to indicate that the field is mandatory.

---

## TC-13 — Verify SKU Validations

### Why this matters

This verifies that the SKU field accepts valid values and correctly handles invalid, empty, and duplicate values.

### Steps

1. Open **Add Variant** and verify the **SKU** field.
2. Enter values covering:
   - Spaces
   - Special characters
   - Alphabets with numbers
   - Duplicate SKU values
3. Leave the SKU field empty and verify the validation.
4. Use the **Auto** option and verify the generated SKU.

### Expected / Pass Criteria

- Valid SKU values should be accepted.
- Invalid SKU values should be rejected with appropriate validation.
- Duplicate SKU values should be handled with appropriate validation.
- Empty SKU should be handled according to the field requirement.
- **Auto** should generate a valid SKU.

---

## TC-14 — Verify Track Quantity

### Why this matters

This verifies that the **Track quantity** option works correctly in both OFF and ON states.

### Steps

1. Open **Add Variant**.
2. Keep **Track quantity OFF** and verify the displayed message and availability controls.
3. Turn **Track quantity ON**.
4. Verify the stock-related fields and message.
5. Perform a sale and verify the stock quantity behavior.

### Expected / Pass Criteria

#### Track Quantity — OFF

- Message should display:
  
  **"Off: no count to keep. You choose Available or Out of stock."**

- Vendor should be able to manually select **Available** or **Out of stock**.

#### Track Quantity — ON

- Message should display:
  
  **"On: each sale reduces the count. At 0 it shows Out of stock."**

- **Stock Quantity** field should be displayed.
- After a sale, the stock quantity should reduce correctly.
- When stock reaches 0, the item should show **Out of stock**.

---
## TC-15 — Verify Unmarked Item Count

### Why this matters

This verifies that unmarked Veg / Egg / Non-Veg items are identified correctly.

### Steps

1. Open **Menu**.
2. Check the unmarked item notification.
3. Compare the displayed count with the actual unmarked items.

### Expected / Pass Criteria

- Notification should display the correct count of unmarked items.
- Count should update after items are marked.

---
## TC-16 — Verify Mark Them Option

### Why this matters

This verifies that the vendor can mark unmarked items from a category.

### Steps

1. Open a category with unmarked items.
2. Click **Mark them**.
3. Verify the popup options.

### Expected / Pass Criteria

- **Mark them** button should be displayed.
- Popup should provide **Veg, Egg, and Non-Veg** options.

---
## TC-17 — Verify Exception Items

### Why this matters

This verifies that items containing Egg, Meat, or Fish in their name are not incorrectly marked as Veg.

### Steps

1. Open a category containing an item such as **Egg Curry**.
2. Click **Mark them**.
3. Select **Veg**.
4. Verify the exception item.

### Expected / Pass Criteria

- Items containing **Egg, Meat, or Fish** should not be marked as Veg.
- Such items should remain unmarked.
- Vendor should be able to mark them individually from their item form.

---
## TC-18 — Verify Unmarked Count After Marking

### Why this matters

This verifies that the unmarked item count is updated after marking.

### Steps

1. Note the unmarked item count.
2. Mark eligible items.
3. Return to the **Menu** page.
4. Verify the count.

### Expected / Pass Criteria

- Count should decrease based on successfully marked items.
- Remaining unmarked exception items should still be included in the count.

---
## TC-19 — Verify Customer-Side Food Type

### Why this matters

This verifies that the vendor-selected food type is reflected on the Customer side.

### Steps

1. Mark an item as **Veg / Egg / Non-Veg**.
2. Open the Customer side.
3. Check the same item.

### Expected / Pass Criteria

- The correct **Veg / Egg / Non-Veg** indicator should be displayed.
- Customer-side information should match the Vendor-side selection.

---
## TC-20 — Verify Category Filters

### Why this matters

This verifies that the vendor can filter Category items using the available Price, Stock Status, and Stock Quantity options.

### Steps

1. Open **Menu** and select a category.
2. Click the **Filter** icon.
3. Verify the available filter sections and options.
4. Apply each filter one by one.

### Expected / Pass Criteria

- **Price** should provide:
  - Default
  - Low to High
  - High to Low

- **Stock Status** should provide:
  - All items
  - Available
  - Out of stock

- **Stock Quantity** should provide the available quantity-based filter options.
- Selected filter should be highlighted.
- Menu items should update according to the selected filter.
- **Default** should reset the respective filter to its default state.

---
