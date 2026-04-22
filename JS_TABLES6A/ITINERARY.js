// ITINERARY.js

window.ITINERARY = {
  "tables": {
    "ITINERARY": {
      "columns": {
        "ITINERARY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Contains the GID for the itinerary. "
        },
        "ITINERARY_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Contains the XID for the itinerary. "
        },
        "ITINERARY_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Contains the name for the itinerary. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Contains text describing the itinerary. "
        },
        "MIN_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Contains the minimum weight for the shipment on the itinerary. "
        },
        "MIN_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the minimum weight. "
        },
        "MIN_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The minimum weight in base units. "
        },
        "MAX_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Contains the maximum weight for the shipment on the itinerary. "
        },
        "MAX_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the maximum weight. "
        },
        "MAX_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Maximum weight in base units. "
        },
        "MIN_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Contains the minimum volume for the shipment on the itinerary. "
        },
        "MIN_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the minimum volume. "
        },
        "MIN_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Minimum volume in base units. "
        },
        "MAX_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Contains the maximum volume for the shipment on the itinerary. "
        },
        "MAX_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the maximum volume. "
        },
        "MAX_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Maximum volume in base units. "
        },
        "CORPORATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CORPORATION_PROFILE",
          "info": "Contains the GID for the corporation profile used for the itinerary. "
        },
        "CALENDAR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CALENDAR",
          "info": "Contains the GID for the calendar. "
        },
        "X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "X_LANE",
          "info": "Contains the GID for the entity. It is created by concatenating the Domain Name,\".\" and the XID. "
        },
        "IS_MULTI_STOP": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Describes whether the itinerary contains more than one stop. If so, this column contains a Y for yes; if not it contains an N for no. "
        },
        "PERSPECTIVE": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "B",
            "S",
            "A"
          ],
          "info": "The perspective determines whether the itinerary is used for buy or sell shipment services. Perspective options include All (used for Buy and Sell), Buy, Sell. "
        },
        "TOTAL_COST": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "N/A "
        },
        "TOTAL_COST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "N/A "
        },
        "TOTAL_COST_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "N/A "
        },
        "TOTAL_TRANSIT_TIME": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "N/A "
        },
        "TOTAL_TRANSIT_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "N/A "
        },
        "TOTAL_TRANSIT_TIME_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "N/A "
        },
        "USE_DECONSOLIDATION_POOL": {
          "type": "CHAR(1)",
          "nullable": true,
          "info": "Orders matched to this itinerary may use a deconsolidation pool on the destination. "
        },
        "USE_CONSOLIDATION_POOL": {
          "type": "CHAR(1)",
          "nullable": true,
          "info": "Orders matched to this itinerary may use a consolidation pool on the source. "
        },
        "MIN_STOPOFF_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Order bundles less than this weight will always go through a pool if the origin/destination of the order bundles fall into consolidation/deconsolidation pools. "
        },
        "MIN_STOPOFF_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the minimum stopoff weight. "
        },
        "MIN_STOPOFF_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Minimum stopoff weight in base units. "
        },
        "MAX_POOL_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The Maximum Pool Weight field identifies the highest weight for shipments that use the pool. If both of the max weight and volume fields are populated, the order needs to be less than these two values in order to be routed to a pool. If one field is populated, the order needs to be less than this value in order to be routed to a pool. If both are NULL, all orders qualify to be routed to a pool. "
        },
        "MAX_POOL_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Weight unit of measure for the maximum pool weight. "
        },
        "MAX_POOL_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Maximum pool weight in base units. "
        },
        "MAX_DIST_BTW_DELVS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum distance between deliveries is used to limit the distance between delivery stops. If the distance between two delivery stops exceed this value, orders are not paired. "
        },
        "MAX_DIST_BTW_DELVS_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the maximum distance constraint. "
        },
        "MAX_DIST_BTW_DELVS_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Maximum distance between deliveries in the base unit measure. "
        },
        "TOTAL_STOPS_CONSTRAINT": {
          "type": "NUMBER(8)",
          "nullable": true,
          "info": "Specifies the maximum number of stops on a multi-stop shipment derived from this itinerary. "
        },
        "MIN_TL_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "This is the minimum weight to make up a nice truckload. It is also used as the minimum weight to go through a pool. "
        },
        "MIN_TL_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The Unit of measure for the Minimum TL Weight. "
        },
        "MIN_TL_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The minimum TL weight in base units. "
        },
        "MIN_STOPOFF_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Order bundles less than this volume will always go through a pool if the origin/destination of the order bundles fall into consolidation/deconsolidation pools. When doing pool drop swapping, only pool drop shipments whose volume is bigger than this value are tried. "
        },
        "MIN_STOPOFF_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the Minimum Stopoff Volume. "
        },
        "MIN_STOPOFF_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The minimum stopoff volume in base units. "
        },
        "MAX_POOL_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum volume to go through a pool. "
        },
        "MAX_POOL_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the maximum pool volume. "
        },
        "MAX_POOL_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum volume to go through a pool in base units. "
        },
        "MAX_SMALL_DIRECT_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "After pool swapping, the system attempts to pull off the orders that are close to parcel weight and ship direct, if the overall solution is cheaper. This volume guides the algorithm to only pull of the one that is smaller than this volume. "
        },
        "MAX_SMALL_DIRECT_VOL_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the small direct volume. "
        },
        "MAX_SMALL_DIRECT_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The small direct volume in base units. "
        },
        "MAX_SMALL_DIRECT_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "After pool swapping, the system tries to pull off the orders that are close to parcel weight and ship direct, if the overall solution is cheaper. This weight guides the algorithm to only pull of the one that is smaller than this weight. "
        },
        "MAX_SMALL_DIRECT_WGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for small direct weight. "
        },
        "MAX_SMALL_DIRECT_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The small direct weight in base units. "
        },
        "MAX_XDOCK_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The Max Cross Dock Weight field identifies the highest weight for shipments that use the cross dock. If both of the max weight and volume fields are populated, the order needs to be less than these two values in order to be routed to a cross dock. If one field is populated, the order needs to be less than this value in order to be routed to a cross dock. If both are NULL, all orders qualify to be routed to a cross dock. "
        },
        "MAX_XDOCK_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the maximum cross dock weight constraint. "
        },
        "MAX_XDOCK_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum cross dock weight in the base unit measure. "
        },
        "MAX_XDOCK_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The Max Cross Dock Volume field identifies the highest volume for shipments that use the cross dock. "
        },
        "MAX_XDOCK_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the maximum cross dock volume constraint. "
        },
        "MAX_XDOCK_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Maximum cross dock volume in the base unit measure. "
        },
        "MIN_TL_USAGE_PERCENTAGE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The percentage of usage to be used to determine whether a TL is full in bulk plan. This will guide whether direct shipment be kept without routing to pool. It also determines whether pool shipments be kept without routing to xdock. "
        },
        "MIN_TL_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "This is the minimum volume to make up a nice truckload. It is also used as the minimum volume to go through a pool "
        },
        "MIN_TL_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for MIN_TL_VOLUME column. "
        },
        "MIN_TL_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "MIN_TL_VOLUME in base units. "
        },
        "IS_DEST_BUNDLE_PREFERED": {
          "type": "CHAR(1)",
          "nullable": false,
          "info": "If this is selected, when going through the deconsolidation pool process, if there is a cross dock on this itinerary, two or more order bundles have the same destination will not route to the deconsolidation pool. It will route to cross dock later for consolidation at the cross dock and directly go to the destination. "
        },
        "HAZMAT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSPORT_MODE",
          "info": "The GID for the hazardous transport mode. It can be used to differentiate between goods from different orders that can be consolidated into one shipment for one or more legs of the trip. "
        },
        "RANK": {
          "type": "NUMBER(3)",
          "nullable": false,
          "info": "N/A "
        },
        "ITINERARY_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "A",
            "I",
            "M"
          ],
          "info": "By default, the Itinerary Type field displays Active which means that the itinerary can be used in shipment planning. Choose Inactive if you do not want this itinerary to be considered when building shipments. You can also choose Manual which means the itinerary should not be considered when running the Create Shipment - Bulk Plan, Direct, or Calculate Best Direct Cost actions. However, the itinerary is considered when running the Direct - Show Routing Options action. "
        },
        "IS_RULE_11": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "info": "N/A "
        },
        "INCO_TERM_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INCO_TERM_PROFILE",
          "info": "The GID for the INCO Term profile. The Incoterm Profile can be used to constrain the itinerary as a valid choice for shipment planning for any order that has the same Incoterm attributes as the profile. Note: If you use this field, you can also specify a Payment Method code on each leg of the itinerary which is then copied to the shipment that is built for that leg (overriding any Payment Method code defined on the order base). "
        },
        "DEPOT_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DEPOT_PROFILE",
          "info": "The GID for the depot profile. The depot profile defines the lane and Source and/or Destination Depot Location that are considered during planning for service providers that start and end at depot locations. "
        },
        "PICKUP_STOPS_CONSTRAINTS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total number of pickup stops for a multistop shipment. It is usually set to be the max of Pickup Stops Constraints of all valid rate offering. This helps multistop performance. "
        },
        "DELIVERY_STOPS_CONSTRAINTS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total number of pickup stops for a multistop shipment. It is usually set to be the maximum of the Delivery Stops Constraints of all valid rate offering. This help multistop performance. "
        },
        "MAX_DIST_BTW_PICKUPS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "In some cases, it is more expensive to ship to a cross-dock than to ship direct because of the distance from the source to the cross-dock. To limit the distance you want shipments to travel to a cross-dock, enter a numeric value in the Maximum Distance between Pickups/Deliveries fields. If the distance between two pickup or delivery stops exceed this value, orders are not paired. "
        },
        "MAX_DIST_BTW_PICKUPS_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the maximum distance constraint. "
        },
        "MAX_DIST_BTW_PICKUPS_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Maximum distance between pickups in the base unit measure. "
        },
        "RADIUS_FOR_PICKUPS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The distance from any pickup stop to the root bundle's source location can not exceed this distance. "
        },
        "RADIUS_FOR_PICKUPS_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the radius for pickups distance constraint. "
        },
        "RADIUS_FOR_PICKUPS_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Radius distance for pickups in the base unit measure. "
        },
        "RADIUS_PERCENTAGE_FOR_PICKUPS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The distance from any pickup stop to the source location divided by the distance cannot exceed this percentage. "
        },
        "RADIUS_FOR_DELVS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum radial - straight line distance - from the source to each delivery stop location that can not be exceeded. "
        },
        "RADIUS_FOR_DELVS_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the radius for deliveries distance constraint. "
        },
        "RADIUS_FOR_DELVS_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Radius for deliveries distance constraint in the base unit of measure. "
        },
        "RADIUS_PERCENTAGE_FOR_DELVS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum radial percentage distance from the source to each delivery stop location that can not be exceeded. "
        },
        "IS_MATCH_DECONSOL_POOL_TO_DEST": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "The Match Deconsol Pool to Dest check box sets the pool logic so that it matches orders to deconsolidation pools based on order's destination locations. If this is not selected, Oracle Transportation Management matches orders to deconsolidation pools according to the order's source location. "
        },
        "IS_MATCH_CONSOL_POOL_TO_SRC": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "The Match Deconsol Pool to Src check box sets the pool logic so that it matches orders to deconsolidation pools based on order's source location. If it is selected pool logic matches orders to consolidation pools based on order's source locations. If the check box is cleared, Oracle Transportation Management matches orders to consolidation pools according to the order's destination locations. "
        },
        "PAYMENT_METHOD_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PAYMENT_METHOD_PROFILE",
          "info": "The list of compatible payment methods for the itinerary. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update. "
        },
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
        }
      },
      "fk_tables": [
        "ITINERARY_DETAIL",
        "ITINERARY_PROFILE_D",
        "LNM_PROJECT",
        "LNM_SCENARIO",
        "LOGISTICS_GUIDE_DETAIL",
        "OB_ORDER_BASE",
        "ORDER_RELEASE",
        "QUOTE_COST_OPTION",
        "SHIPMENT"
      ]
    }
  }
};
