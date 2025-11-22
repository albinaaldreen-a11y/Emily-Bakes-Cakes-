// Mock Business Data - 1 Year (2024)
// Emily Bakes Cakes - Complete Database

const mockData = {
  // ===== CUSTOMER STATUS TABLE =====
  customerStatus: [
    { cust_status_id: 1, cust_status_description: "Active" },
    { cust_status_id: 2, cust_status_description: "Inactive" },
    { cust_status_id: 3, cust_status_description: "VIP" },
    { cust_status_id: 4, cust_status_description: "Blacklisted" }
  ],

  // ===== CUSTOMER TYPE TABLE =====
  customerType: [
    { cust_type_id: 1, cust_type_description: "Retail" },
    { cust_type_id: 2, cust_type_description: "Corporate" }
  ],

  // ===== STATE/PROVINCE TABLE =====
  state: [
    { state_id: 1, state_abbreviation: "TX", state_name: "Texas", country_id: 1 },
    { state_id: 2, state_abbreviation: "LA", state_name: "Louisiana", country_id: 1 },
    { state_id: 3, state_abbreviation: "OK", state_name: "Oklahoma", country_id: 1 },
    { state_id: 4, state_abbreviation: "AR", state_name: "Arkansas", country_id: 1 },
    { state_id: 5, state_abbreviation: "MS", state_name: "Mississippi", country_id: 1 },
    { state_id: 6, state_abbreviation: "CA", state_name: "California", country_id: 1 },
    { state_id: 7, state_abbreviation: "NY", state_name: "New York", country_id: 1 },
    { state_id: 8, state_abbreviation: "FL", state_name: "Florida", country_id: 1 },
    { state_id: 9, state_abbreviation: "ON", state_name: "Ontario", country_id: 2 },
    { state_id: 10, state_abbreviation: "BC", state_name: "British Columbia", country_id: 2 }
  ],

  // ===== ORDER STATUS TABLE =====
  orderStatus: [
    { order_status_id: 1, status_description: "To Be Created" },
    { order_status_id: 2, status_description: "In Baking" },
    { order_status_id: 3, status_description: "Decorating" },
    { order_status_id: 4, status_description: "Ready for Pickup" },
    { order_status_id: 5, status_description: "Picked Up" },
    { order_status_id: 6, status_description: "Cancelled" }
  ],

  // ===== PRODUCT CATEGORY TABLE =====
  productCategory: [
    { category_id: 1, category_name: "Round Cakes" },
    { category_id: 2, category_name: "Sheet Cakes" },
    { category_id: 3, category_name: "Cupcakes" },
    { category_id: 4, category_name: "Specialty Cakes" },
    { category_id: 5, category_name: "Mini Cakes" }
  ],

  // ===== PRODUCT TABLE =====
  product: [
    { product_id: 101, product_name: "6-inch Round Single Layer", base_price: 25.00, serves_min: 4, serves_max: 8, category_id: 1 },
    { product_id: 102, product_name: "6-inch Round Double Layer", base_price: 35.00, serves_min: 6, serves_max: 12, category_id: 1 },
    { product_id: 103, product_name: "8-inch Round Single Layer", base_price: 35.00, serves_min: 8, serves_max: 16, category_id: 1 },
    { product_id: 104, product_name: "8-inch Round Double Layer", base_price: 50.00, serves_min: 12, serves_max: 24, category_id: 1 },
    { product_id: 105, product_name: "10-inch Round Double Layer", base_price: 65.00, serves_min: 20, serves_max: 40, category_id: 1 },
    { product_id: 106, product_name: "12-inch Round Double Layer", base_price: 85.00, serves_min: 30, serves_max: 60, category_id: 1 },
    { product_id: 107, product_name: "Quarter Sheet Cake", base_price: 40.00, serves_min: 12, serves_max: 20, category_id: 2 },
    { product_id: 108, product_name: "Half Sheet Cake", base_price: 65.00, serves_min: 24, serves_max: 40, category_id: 2 },
    { product_id: 109, product_name: "Full Sheet Cake", base_price: 110.00, serves_min: 50, serves_max: 100, category_id: 2 },
    { product_id: 110, product_name: "Dozen Cupcakes", base_price: 30.00, serves_min: 12, serves_max: 12, category_id: 3 },
    { product_id: 111, product_name: "Two Dozen Cupcakes", base_price: 55.00, serves_min: 24, serves_max: 24, category_id: 3 },
    { product_id: 112, product_name: "Heart Shaped Cake", base_price: 55.00, serves_min: 12, serves_max: 24, category_id: 4 },
    { product_id: 113, product_name: "Wedding Cake (3-tier)", base_price: 150.00, serves_min: 60, serves_max: 120, category_id: 4 },
    { product_id: 114, product_name: "Mini Cake (4-inch)", base_price: 15.00, serves_min: 2, serves_max: 4, category_id: 5 }
  ],

  // ===== PRODUCT OPTION TABLE =====
  productOption: [
    // Cake Flavors
    { option_id: 1001, option_name: "Vanilla", option_type: "Cake Flavor", extra_cost: 0.00, is_customizable: "Y" },
    { option_id: 1002, option_name: "Chocolate", option_type: "Cake Flavor", extra_cost: 0.00, is_customizable: "Y" },
    { option_id: 1003, option_name: "Red Velvet", option_type: "Cake Flavor", extra_cost: 2.00, is_customizable: "Y" },
    { option_id: 1004, option_name: "Carrot Cake", option_type: "Cake Flavor", extra_cost: 1.50, is_customizable: "Y" },
    { option_id: 1005, option_name: "Lemon", option_type: "Cake Flavor", extra_cost: 1.00, is_customizable: "Y" },
    { option_id: 1006, option_name: "Strawberry", option_type: "Cake Flavor", extra_cost: 2.50, is_customizable: "Y" },
    { option_id: 1007, option_name: "Almond", option_type: "Cake Flavor", extra_cost: 1.50, is_customizable: "Y" },
    { option_id: 1008, option_name: "Funfetti", option_type: "Cake Flavor", extra_cost: 0.00, is_customizable: "Y" },

    // Filling Flavors
    { option_id: 2001, option_name: "Vanilla Buttercream", option_type: "Filling Flavor", extra_cost: 0.00, is_customizable: "Y" },
    { option_id: 2002, option_name: "Chocolate Buttercream", option_type: "Filling Flavor", extra_cost: 0.00, is_customizable: "Y" },
    { option_id: 2003, option_name: "Cream Cheese", option_type: "Filling Flavor", extra_cost: 1.00, is_customizable: "Y" },
    { option_id: 2004, option_name: "Fruit Filling", option_type: "Filling Flavor", extra_cost: 1.50, is_customizable: "Y" },
    { option_id: 2005, option_name: "Chocolate Ganache", option_type: "Filling Flavor", extra_cost: 1.50, is_customizable: "Y" },

    // Icing Colors
    { option_id: 3001, option_name: "White", option_type: "Icing Color", extra_cost: 0.00, is_customizable: "Y" },
    { option_id: 3002, option_name: "Chocolate", option_type: "Icing Color", extra_cost: 0.00, is_customizable: "Y" },
    { option_id: 3003, option_name: "Pink", option_type: "Icing Color", extra_cost: 0.50, is_customizable: "Y" },
    { option_id: 3004, option_name: "Blue", option_type: "Icing Color", extra_cost: 0.50, is_customizable: "Y" },
    { option_id: 3005, option_name: "Red", option_type: "Icing Color", extra_cost: 0.50, is_customizable: "Y" },
    { option_id: 3006, option_name: "Gold", option_type: "Icing Color", extra_cost: 0.75, is_customizable: "Y" },
    { option_id: 3007, option_name: "Silver", option_type: "Icing Color", extra_cost: 0.75, is_customizable: "Y" },
    { option_id: 3008, option_name: "Purple", option_type: "Icing Color", extra_cost: 0.50, is_customizable: "Y" },
    { option_id: 3009, option_name: "Green", option_type: "Icing Color", extra_cost: 0.50, is_customizable: "Y" },

    // Decorations
    { option_id: 4001, option_name: "Fondant Flowers", option_type: "Decoration", extra_cost: 5.00, is_customizable: "Y" },
    { option_id: 4002, option_name: "Fresh Flowers", option_type: "Decoration", extra_cost: 8.00, is_customizable: "Y" },
    { option_id: 4003, option_name: "Gold Leaf", option_type: "Decoration", extra_cost: 3.00, is_customizable: "Y" },
    { option_id: 4004, option_name: "Edible Pearls", option_type: "Decoration", extra_cost: 2.50, is_customizable: "Y" },
    { option_id: 4005, option_name: "Piped Borders", option_type: "Decoration", extra_cost: 3.00, is_customizable: "Y" },
    { option_id: 4006, option_name: "Personalized Message", option_type: "Decoration", extra_cost: 2.00, is_customizable: "Y" },
    { option_id: 4007, option_name: "Sprinkles", option_type: "Decoration", extra_cost: 1.00, is_customizable: "Y" },
    { option_id: 4008, option_name: "Fondant Topper", option_type: "Decoration", extra_cost: 4.00, is_customizable: "Y" }
  ],

  // ===== CUSTOMER TABLE (50 customers) =====
  customer: [
    { cust_id: 1, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Sarah", cust_middle_init: "M", cust_last_name: "Johnson", cust_addr_line1: "123 Main St", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75001", cust_mobile_phone: "(469) 555-0101", work_phone: null, cust_home_phone: "(972) 555-0101", cust_email_addr: "sarah.johnson@email.com", comments: "Loves chocolate cakes", preferred_customer: "Y" },
    { cust_id: 2, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Michael", cust_middle_init: "J", cust_last_name: "Williams", cust_addr_line1: "456 Oak Ave", cust_addr_line2: "Apt 202", state_id: 1, country_id: 1, cust_zip_code: "75002", cust_mobile_phone: "(214) 555-0102", work_phone: "(214) 555-1234", cust_home_phone: null, cust_email_addr: "m.williams@email.com", comments: "Corporate events", preferred_customer: "N" },
    { cust_id: 3, cust_status_id: 3, cust_type_id: 1, company_name: null, cust_first_name: "Jennifer", cust_middle_init: "L", cust_last_name: "Brown", cust_addr_line1: "789 Pine Rd", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75003", cust_mobile_phone: "(469) 555-0103", work_phone: null, cust_home_phone: "(972) 555-0103", cust_email_addr: "jen.brown@email.com", comments: "VIP - Wedding cakes specialist", preferred_customer: "Y" },
    { cust_id: 4, cust_status_id: 1, cust_type_id: 2, company_name: "ABC Events Planning", cust_first_name: "David", cust_middle_init: "R", cust_last_name: "Miller", cust_addr_line1: "1001 Business Blvd", cust_addr_line2: "Suite 300", state_id: 1, country_id: 1, cust_zip_code: "75004", cust_mobile_phone: "(469) 555-0104", work_phone: "(469) 555-5000", cust_home_phone: null, cust_email_addr: "d.miller@abcevents.com", comments: "Large event coordinator", preferred_customer: "Y" },
    { cust_id: 5, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Emily", cust_middle_init: "K", cust_last_name: "Davis", cust_addr_line1: "321 Elm St", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75005", cust_mobile_phone: "(214) 555-0105", work_phone: null, cust_home_phone: "(972) 555-0105", cust_email_addr: "emily.davis@email.com", comments: "Regular customer", preferred_customer: "N" },
    { cust_id: 6, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Robert", cust_middle_init: "T", cust_last_name: "Garcia", cust_addr_line1: "654 Maple Dr", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75006", cust_mobile_phone: "(469) 555-0106", work_phone: "(469) 555-6000", cust_home_phone: null, cust_email_addr: "r.garcia@email.com", comments: "Birthday cakes only", preferred_customer: "N" },
    { cust_id: 7, cust_status_id: 3, cust_type_id: 1, company_name: null, cust_first_name: "Lisa", cust_middle_init: "A", cust_last_name: "Martinez", cust_addr_line1: "987 Cedar Ln", cust_addr_line2: "Apt 101", state_id: 1, country_id: 1, cust_zip_code: "75007", cust_mobile_phone: "(214) 555-0107", work_phone: null, cust_home_phone: "(972) 555-0107", cust_email_addr: "l.martinez@email.com", comments: "VIP - Wedding specialist", preferred_customer: "Y" },
    { cust_id: 8, cust_status_id: 1, cust_type_id: 2, company_name: "Corporate Catering Co", cust_first_name: "James", cust_middle_init: "M", cust_last_name: "Thompson", cust_addr_line1: "1500 Commerce Way", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75008", cust_mobile_phone: "(469) 555-0108", work_phone: "(469) 555-7000", cust_home_phone: null, cust_email_addr: "j.thompson@corporatecatering.com", comments: null, preferred_customer: "Y" },
    { cust_id: 9, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Patricia", cust_middle_init: "N", cust_last_name: "Anderson", cust_addr_line1: "147 Birch St", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75009", cust_mobile_phone: "(214) 555-0109", work_phone: null, cust_home_phone: "(972) 555-0109", cust_email_addr: "p.anderson@email.com", comments: "Red velvet lover", preferred_customer: "N" },
    { cust_id: 10, cust_status_id: 2, cust_type_id: 1, company_name: null, cust_first_name: "Christopher", cust_middle_init: "D", cust_last_name: "Taylor", cust_addr_line1: "258 Walnut Ave", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75010", cust_mobile_phone: "(469) 555-0110", work_phone: null, cust_home_phone: "(972) 555-0110", cust_email_addr: "c.taylor@email.com", comments: "Inactive - no orders in 6 months", preferred_customer: "N" },
    { cust_id: 11, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Nancy", cust_middle_init: "E", cust_last_name: "Jackson", cust_addr_line1: "369 Spruce Rd", cust_addr_line2: null, state_id: 2, country_id: 1, cust_zip_code: "70001", cust_mobile_phone: "(504) 555-0111", work_phone: null, cust_home_phone: "(504) 555-0111", cust_email_addr: "n.jackson@email.com", comments: null, preferred_customer: "N" },
    { cust_id: 12, cust_status_id: 1, cust_type_id: 2, company_name: "Tech Solutions Inc", cust_first_name: "Daniel", cust_middle_init: "H", cust_last_name: "White", cust_addr_line1: "2000 Tech Plaza", cust_addr_line2: "Bldg A", state_id: 1, country_id: 1, cust_zip_code: "75011", cust_mobile_phone: "(469) 555-0112", work_phone: "(469) 555-8000", cust_home_phone: null, cust_email_addr: "d.white@techsolutions.com", comments: "Holiday party orders", preferred_customer: "Y" },
    { cust_id: 13, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Karen", cust_middle_init: "G", cust_last_name: "Harris", cust_addr_line1: "480 Poplar Ct", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75012", cust_mobile_phone: "(214) 555-0113", work_phone: null, cust_home_phone: "(972) 555-0113", cust_email_addr: "k.harris@email.com", comments: "Loves custom designs", preferred_customer: "N" },
    { cust_id: 14, cust_status_id: 3, cust_type_id: 1, company_name: null, cust_first_name: "Barbara", cust_middle_init: "S", cust_last_name: "Martin", cust_addr_line1: "591 Ash Ln", cust_addr_line2: "Apt 305", state_id: 1, country_id: 1, cust_zip_code: "75013", cust_mobile_phone: "(469) 555-0114", work_phone: null, cust_home_phone: "(972) 555-0114", cust_email_addr: "b.martin@email.com", comments: "VIP - Monthly orders", preferred_customer: "Y" },
    { cust_id: 15, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Paul", cust_middle_init: "W", cust_last_name: "Thompson", cust_addr_line1: "702 Hickory St", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75014", cust_mobile_phone: "(214) 555-0115", work_phone: "(214) 555-9000", cust_home_phone: null, cust_email_addr: "p.thompson@email.com", comments: null, preferred_customer: "N" },
    { cust_id: 16, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Diane", cust_middle_init: "P", cust_last_name: "Lee", cust_addr_line1: "813 Cherry Ave", cust_addr_line2: null, state_id: 3, country_id: 1, cust_zip_code: "73001", cust_mobile_phone: "(405) 555-0116", work_phone: null, cust_home_phone: "(405) 555-0116", cust_email_addr: "d.lee@email.com", comments: null, preferred_customer: "N" },
    { cust_id: 17, cust_status_id: 1, cust_type_id: 2, company_name: "Wedding Dreams", cust_first_name: "Kevin", cust_middle_init: "B", cust_last_name: "Perez", cust_addr_line1: "3000 Wedding Way", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75015", cust_mobile_phone: "(469) 555-0117", work_phone: "(469) 555-9500", cust_home_phone: null, cust_email_addr: "k.perez@weddingdreams.com", comments: "Wedding specialist referrer", preferred_customer: "Y" },
    { cust_id: 18, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Susan", cust_middle_init: "C", cust_last_name: "Edwards", cust_addr_line1: "924 Sycamore Dr", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75016", cust_mobile_phone: "(214) 555-0118", work_phone: null, cust_home_phone: "(972) 555-0118", cust_email_addr: "s.edwards@email.com", comments: null, preferred_customer: "N" },
    { cust_id: 19, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Mark", cust_middle_init: "F", cust_last_name: "Collins", cust_addr_line1: "1035 Juniper St", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75017", cust_mobile_phone: "(469) 555-0119", work_phone: "(469) 555-0119", cust_home_phone: null, cust_email_addr: "m.collins@email.com", comments: "Corporate client", preferred_customer: "N" },
    { cust_id: 20, cust_status_id: 3, cust_type_id: 1, company_name: null, cust_first_name: "Jessica", cust_middle_init: "V", cust_last_name: "Stewart", cust_addr_line1: "1146 Oak Ridge Rd", cust_addr_line2: "Apt 202", state_id: 1, country_id: 1, cust_zip_code: "75018", cust_mobile_phone: "(214) 555-0120", work_phone: null, cust_home_phone: "(972) 555-0120", cust_email_addr: "j.stewart@email.com", comments: "VIP - Birthday specialist", preferred_customer: "Y" },
    { cust_id: 21, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Donald", cust_middle_init: "L", cust_last_name: "Morris", cust_addr_line1: "1257 Pinewood Ln", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75019", cust_mobile_phone: "(469) 555-0121", work_phone: null, cust_home_phone: "(972) 555-0121", cust_email_addr: "d.morris@email.com", comments: null, preferred_customer: "N" },
    { cust_id: 22, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Carol", cust_middle_init: "O", cust_last_name: "Rogers", cust_addr_line1: "1368 Laurel Ave", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75020", cust_mobile_phone: "(214) 555-0122", work_phone: null, cust_home_phone: "(972) 555-0122", cust_email_addr: "c.rogers@email.com", comments: null, preferred_customer: "N" },
    { cust_id: 23, cust_status_id: 1, cust_type_id: 2, company_name: "School District", cust_first_name: "Steven", cust_middle_init: "K", cust_last_name: "Reed", cust_addr_line1: "4000 School Way", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75021", cust_mobile_phone: "(469) 555-0123", work_phone: "(469) 555-4000", cust_home_phone: null, cust_email_addr: "s.reed@schooldistrict.edu", comments: "School events", preferred_customer: "Y" },
    { cust_id: 24, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Donna", cust_middle_init: "J", cust_last_name: "Cook", cust_addr_line1: "1479 Magnolia St", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75022", cust_mobile_phone: "(214) 555-0124", work_phone: null, cust_home_phone: "(972) 555-0124", cust_email_addr: "d.cook@email.com", comments: null, preferred_customer: "N" },
    { cust_id: 25, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Thomas", cust_middle_init: "Z", cust_last_name: "Morgan", cust_addr_line1: "1580 Willow Dr", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75023", cust_mobile_phone: "(469) 555-0125", work_phone: null, cust_home_phone: "(972) 555-0125", cust_email_addr: "t.morgan@email.com", comments: null, preferred_customer: "N" },
    { cust_id: 26, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Margaret", cust_middle_init: "U", cust_last_name: "Peterson", cust_addr_line1: "1691 Chestnut Ave", cust_addr_line2: "Apt 505", state_id: 1, country_id: 1, cust_zip_code: "75024", cust_mobile_phone: "(214) 555-0126", work_phone: null, cust_home_phone: "(972) 555-0126", cust_email_addr: "m.peterson@email.com", comments: null, preferred_customer: "N" },
    { cust_id: 27, cust_status_id: 3, cust_type_id: 2, company_name: "Luxury Hotels Group", cust_first_name: "Charles", cust_middle_init: "Q", cust_last_name: "Gray", cust_addr_line1: "5000 Luxury Lane", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75025", cust_mobile_phone: "(469) 555-0127", work_phone: "(469) 555-5000", cust_home_phone: null, cust_email_addr: "c.gray@luxuryhotels.com", comments: "VIP corporate - Monthly orders", preferred_customer: "Y" },
    { cust_id: 28, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Dorothy", cust_middle_init: "M", cust_last_name: "Ramirez", cust_addr_line1: "1802 Fir Ln", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75026", cust_mobile_phone: "(214) 555-0128", work_phone: null, cust_home_phone: "(972) 555-0128", cust_email_addr: "d.ramirez@email.com", comments: null, preferred_customer: "N" },
    { cust_id: 29, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Edward", cust_middle_init: "R", cust_last_name: "James", cust_addr_line1: "1913 Oak Forest Dr", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75027", cust_mobile_phone: "(469) 555-0129", work_phone: "(469) 555-0129", cust_home_phone: null, cust_email_addr: "e.james@email.com", comments: null, preferred_customer: "N" },
    { cust_id: 30, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Betty", cust_middle_init: "I", cust_last_name: "Watson", cust_addr_line1: "2024 Pine Valley St", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75028", cust_mobile_phone: "(214) 555-0130", work_phone: null, cust_home_phone: "(972) 555-0130", cust_email_addr: "b.watson@email.com", comments: null, preferred_customer: "N" },
    { cust_id: 31, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Ronald", cust_middle_init: "X", cust_last_name: "Brooks", cust_addr_line1: "2135 Boxwood Rd", cust_addr_line2: null, state_id: 4, country_id: 1, cust_zip_code: "72001", cust_mobile_phone: "(501) 555-0131", work_phone: null, cust_home_phone: "(501) 555-0131", cust_email_addr: "r.brooks@email.com", comments: null, preferred_customer: "N" },
    { cust_id: 32, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Sandra", cust_middle_init: "Y", cust_last_name: "Sullivan", cust_addr_line1: "2246 Dogwood Ave", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75029", cust_mobile_phone: "(469) 555-0132", work_phone: null, cust_home_phone: "(972) 555-0132", cust_email_addr: "s.sullivan@email.com", comments: null, preferred_customer: "N" },
    { cust_id: 33, cust_status_id: 1, cust_type_id: 2, company_name: "Fashion Boutique", cust_first_name: "Kenneth", cust_middle_init: "H", cust_last_name: "Bell", cust_addr_line1: "6000 Fashion Blvd", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75030", cust_mobile_phone: "(214) 555-0133", work_phone: "(214) 555-6000", cust_home_phone: null, cust_email_addr: "k.bell@fashionboutique.com", comments: "Special events", preferred_customer: "Y" },
    { cust_id: 34, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Ashley", cust_middle_init: "D", cust_last_name: "Simmons", cust_addr_line1: "2357 Linden Ln", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75031", cust_mobile_phone: "(214) 555-0134", work_phone: null, cust_home_phone: "(972) 555-0134", cust_email_addr: "a.simmons@email.com", comments: null, preferred_customer: "N" },
    { cust_id: 35, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Brian", cust_middle_init: "G", cust_last_name: "Bryant", cust_addr_line1: "2468 Tamarack St", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75032", cust_mobile_phone: "(469) 555-0135", work_phone: null, cust_home_phone: "(972) 555-0135", cust_email_addr: "b.bryant@email.com", comments: null, preferred_customer: "N" },
    { cust_id: 36, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Kathleen", cust_middle_init: "E", cust_last_name: "Alexander", cust_addr_line1: "2579 Sagebrush Ave", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75033", cust_mobile_phone: "(214) 555-0136", work_phone: null, cust_home_phone: "(972) 555-0136", cust_email_addr: "k.alexander@email.com", comments: null, preferred_customer: "N" },
    { cust_id: 37, cust_status_id: 3, cust_type_id: 1, company_name: null, cust_first_name: "George", cust_middle_init: "C", cust_last_name: "Russell", cust_addr_line1: "2680 Tansy Rd", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75034", cust_mobile_phone: "(469) 555-0137", work_phone: null, cust_home_phone: "(972) 555-0137", cust_email_addr: "g.russell@email.com", comments: "VIP - Wedding specialist", preferred_customer: "Y" },
    { cust_id: 38, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Elizabeth", cust_middle_init: "A", cust_last_name: "Griffin", cust_addr_line1: "2791 Verbena St", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75035", cust_mobile_phone: "(214) 555-0138", work_phone: null, cust_home_phone: "(972) 555-0138", cust_email_addr: "e.griffin@email.com", comments: null, preferred_customer: "N" },
    { cust_id: 39, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Richard", cust_middle_init: "S", cust_last_name: "Hayes", cust_addr_line1: "2902 Woodbine Ave", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75036", cust_mobile_phone: "(469) 555-0139", work_phone: "(469) 555-0139", cust_email_addr: "r.hayes@email.com", comments: null, preferred_customer: "N" },
    { cust_id: 40, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Deborah", cust_middle_init: "L", cust_last_name: "Myers", cust_addr_line1: "3013 Yarrow Ln", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75037", cust_mobile_phone: "(214) 555-0140", work_phone: null, cust_home_phone: "(972) 555-0140", cust_email_addr: "d.myers@email.com", comments: null, preferred_customer: "N" },
    { cust_id: 41, cust_status_id: 1, cust_type_id: 2, company_name: "Healthcare Solutions", cust_first_name: "Joseph", cust_middle_init: "N", cust_last_name: "Ford", cust_addr_line1: "7000 Medical Center", cust_addr_line2: "Bldg 2", state_id: 1, country_id: 1, cust_zip_code: "75038", cust_mobile_phone: "(469) 555-0141", work_phone: "(469) 555-7000", cust_home_phone: null, cust_email_addr: "j.ford@healthcaresolutions.com", comments: "Staff appreciation orders", preferred_customer: "Y" },
    { cust_id: 42, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Lisa", cust_middle_init: "P", cust_last_name: "Hamilton", cust_addr_line1: "3124 Zinnia St", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75039", cust_mobile_phone: "(214) 555-0142", work_phone: null, cust_home_phone: "(972) 555-0142", cust_email_addr: "l.hamilton@email.com", comments: null, preferred_customer: "N" },
    { cust_id: 43, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "William", cust_middle_init: "T", cust_last_name: "Graham", cust_addr_line1: "3235 Acacia Ave", cust_addr_line2: null, state_id: 5, country_id: 1, cust_zip_code: "39001", cust_mobile_phone: "(601) 555-0143", work_phone: null, cust_home_phone: "(601) 555-0143", cust_email_addr: "w.graham@email.com", comments: null, preferred_customer: "N" },
    { cust_id: 44, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Mary", cust_middle_init: "V", cust_last_name: "Sullivan", cust_addr_line1: "3346 Blossoms Dr", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75040", cust_mobile_phone: "(469) 555-0144", work_phone: null, cust_home_phone: "(972) 555-0144", cust_email_addr: "m.sullivan@email.com", comments: null, preferred_customer: "N" },
    { cust_id: 45, cust_status_id: 3, cust_type_id: 1, company_name: null, cust_first_name: "Steven", cust_middle_init: "W", cust_last_name: "Wallace", cust_addr_line1: "3457 Cherry Blossom Rd", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75041", cust_mobile_phone: "(214) 555-0145", work_phone: null, cust_home_phone: "(972) 555-0145", cust_email_addr: "s.wallace@email.com", comments: "VIP - Quarterly orders", preferred_customer: "Y" },
    { cust_id: 46, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Virginia", cust_middle_init: "B", cust_last_name: "Pena", cust_addr_line1: "3568 Daisy Lane", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75042", cust_mobile_phone: "(469) 555-0146", work_phone: null, cust_home_phone: "(972) 555-0146", cust_email_addr: "v.pena@email.com", comments: null, preferred_customer: "N" },
    { cust_id: 47, cust_status_id: 1, cust_type_id: 2, company_name: "Restaurant Group", cust_first_name: "Jason", cust_middle_init: "K", cust_last_name: "Norris", cust_addr_line1: "8000 Dining District", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75043", cust_mobile_phone: "(214) 555-0147", work_phone: "(214) 555-8000", cust_home_phone: null, cust_email_addr: "j.norris@restaurantgroup.com", comments: "Dessert special orders", preferred_customer: "Y" },
    { cust_id: 48, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Ruth", cust_middle_init: "J", cust_last_name: "Holloway", cust_addr_line1: "3679 Iris St", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75044", cust_mobile_phone: "(214) 555-0148", work_phone: null, cust_home_phone: "(972) 555-0148", cust_email_addr: "r.holloway@email.com", comments: null, preferred_customer: "N" },
    { cust_id: 49, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Matthew", cust_middle_init: "F", cust_last_name: "Benson", cust_addr_line1: "3780 Jasmine Ave", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75045", cust_mobile_phone: "(469) 555-0149", work_phone: null, cust_home_phone: "(972) 555-0149", cust_email_addr: "m.benson@email.com", comments: null, preferred_customer: "N" },
    { cust_id: 50, cust_status_id: 1, cust_type_id: 1, company_name: null, cust_first_name: "Anne", cust_middle_init: "H", cust_last_name: "Barrett", cust_addr_line1: "3891 Kingwood Ln", cust_addr_line2: null, state_id: 1, country_id: 1, cust_zip_code: "75046", cust_mobile_phone: "(214) 555-0150", work_phone: null, cust_home_phone: "(972) 555-0150", cust_email_addr: "a.barrett@email.com", comments: null, preferred_customer: "N" }
  ]
};

// Generate order and related data for full year (2024)
const generateYearOfOrders = () => {
  const orders = [];
  const orderDetails = [];
  const orderProductOptions = [];
  let orderId = 100001;
  let optionId = 1;

  const months = Array.from({ length: 12 }, (_, i) => new Date(2024, i, 1));
  const ordersPerMonth = 45; // ~45 orders per month = 540 total orders per year
  
  const paymentMethods = ["Cash", "Debit Card", "Credit Card", "Check"];
  const staffIds = [101, 102, 103, 104, 105]; // Sales staff IDs
  const employeeIds = [201, 202, 203, 204, 205]; // Baker/Decorator IDs
  const approverIds = [301, 302]; // Manager IDs (Emily, Manager)

  months.forEach(month => {
    for (let i = 0; i < ordersPerMonth; i++) {
      const orderDate = new Date(month.getFullYear(), month.getMonth(), Math.floor(Math.random() * 25) + 1);
      const pickupDate = new Date(orderDate);
      pickupDate.setDate(pickupDate.getDate() + Math.floor(Math.random() * 7) + 2); // 2-9 days later

      const customerId = Math.floor(Math.random() * 50) + 1;
      const productId = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114][Math.floor(Math.random() * 14)];
      const baseProduct = mockData.product.find(p => p.product_id === productId);
      
      const basePrice = baseProduct.base_price;
      const addOnCost = Math.floor(Math.random() * 50) + 10; // $10-60 in add-ons
      const totalPrice = basePrice + addOnCost;
      const depositAmount = totalPrice * (0.5 + Math.random() * 0.3); // 50-80% deposit

      const pickupTime = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'][Math.floor(Math.random() * 6)];
      const paymentMethod = paymentMethods[Math.floor(Math.random() * paymentMethods.length)];
      const salesStaffId = staffIds[Math.floor(Math.random() * staffIds.length)];
      const lastEmployeeId = employeeIds[Math.floor(Math.random() * employeeIds.length)];
      const orderStatusId = [1, 2, 3, 4, 5, 5, 5, 5][Math.floor(Math.random() * 8)]; // More completed/picked up
      const isCancelled = Math.random() < 0.05 ? 'Y' : 'N'; // 5% cancellation rate
      const finalApprovalId = orderStatusId === 5 ? approverIds[Math.floor(Math.random() * approverIds.length)] : null;

      const order = {
        order_id: orderId,
        cust_id: customerId,
        product_id: productId,
        order_date: orderDate.toISOString().split('T')[0],
        pickup_date: pickupDate.toISOString().split('T')[0],
        pickup_time: pickupTime,
        total_price: parseFloat(totalPrice.toFixed(2)),
        deposit_amount: parseFloat(depositAmount.toFixed(2)),
        payment_method: paymentMethod,
        sales_staff_id: salesStaffId,
        last_employee_id: lastEmployeeId,
        order_status_id: orderStatusId,
        is_cancelled: isCancelled,
        final_approval_id: finalApprovalId,
        notes_instructions: [
          "No nuts - severe allergy",
          "Extra vanilla flavor",
          "Fondant only, no buttercream",
          "Deliver to venue",
          "Keep refrigerated",
          "Allergies: strawberry",
          "Extra decorations requested",
          "Gluten-free cake",
          "Custom shape - see design",
          "Rush order - priority"
        ][Math.floor(Math.random() * 10)] || null
      };

      orders.push(order);

      // Add product options (2-5 options per order)
      const numOptions = Math.floor(Math.random() * 4) + 2;
      const selectedOptions = new Set();
      
      for (let j = 0; j < numOptions; j++) {
        let optionId_val = Math.floor(Math.random() * mockData.productOption.length);
        let selectedOption = mockData.productOption[optionId_val];
        
        if (!selectedOptions.has(selectedOption.option_id)) {
          selectedOptions.add(selectedOption.option_id);

          const layerNum = Math.floor(Math.random() * 3) + 1;
          const quantity = Math.floor(Math.random() * 3) + 1;
          
          orderProductOptions.push({
            order_id: orderId,
            option_id: selectedOption.option_id,
            layer_number: layerNum,
            quantity: quantity,
            decorator_notes: [
              "On top tier only",
              "All layers",
              "Piped edges",
              "Center decoration",
              "Custom pattern",
              null
            ][Math.floor(Math.random() * 6)]
          });
        }
      }

      orderId++;
    }
  });

  return { orders, orderProductOptions };
};

// Generate the year of data
const { orders: yearOrders, orderProductOptions: yearProductOptions } = generateYearOfOrders();

// Add to mock data
mockData.customOrder = yearOrders;
mockData.orderProductOption = yearProductOptions;

// Export for use in JavaScript files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = mockData;
}

// Console summary
console.log("✅ Mock Data Generated Successfully!");
console.log(`📊 Database Summary for 2024:`);
console.log(`   • Total Customers: ${mockData.customer.length}`);
console.log(`   • Total Orders: ${mockData.customOrder.length}`);
console.log(`   • Total Order-Product Options: ${mockData.orderProductOption.length}`);
console.log(`   • Avg Orders/Month: ${Math.floor(mockData.customOrder.length / 12)}`);
console.log(`   • Revenue Range: $${mockData.customOrder.reduce((min, o) => Math.min(min, o.total_price), Infinity).toFixed(2)} - $${mockData.customOrder.reduce((max, o) => Math.max(max, o.total_price), 0).toFixed(2)}`);
console.log(`   • Total Revenue: $${mockData.customOrder.reduce((sum, o) => sum + o.total_price, 0).toFixed(2)}`);
console.log(`   • Completed Orders: ${mockData.customOrder.filter(o => o.order_status_id === 5).length}`);
console.log(`   • Cancelled Orders: ${mockData.customOrder.filter(o => o.is_cancelled === 'Y').length}`);
console.log(`   • VIP Customers: ${mockData.customer.filter(c => c.preferred_customer === 'Y').length}`);
