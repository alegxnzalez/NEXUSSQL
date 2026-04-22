// ORDER_RELEASE.js

window.ORDER_RELEASE = {
  "tables": {
    "ORDER_RELEASE": {
      "columns": {
        "ORDER_RELEASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the order release. "
        },
        "ORDER_RELEASE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the order release. "
        },
        "ORDER_RELEASE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "An open field for you to enter another identifier (name) for the order release. "
        },
        "ORDER_RELEASE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ORDER_RELEASE_TYPE",
          "info": "A GID to define the type of the order release. For example: Customer order, Distribution order, Manufacturing order, Purchase order, etc. "
        },
        "IS_TEMPLATE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "info": "A Y/N indicator specifying this order release as a template if the value is Y. "
        },
        "ORDER_BASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OB_ORDER_BASE",
          "info": "The GID for the order base associated with the order release if this order release was generated from an order base. "
        },
        "SOURCE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_LOAD_UNLOAD_POINT",
          "info": "The source location GID. "
        },
        "DEST_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_LOAD_UNLOAD_POINT",
          "info": "The destination location GID. "
        },
        "EARLY_PICKUP_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The early pickup date and time defined for the order release; can be null. "
        },
        "LATE_PICKUP_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The latest pickup date and time defined for the order release; can be null. "
        },
        "EARLY_DELIVERY_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The early delivery date and time defined for the order release; can be null. "
        },
        "LATE_DELIVERY_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The late delivery date and time defined for the order release; can be null. "
        },
        "FIXED_ITINERARY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITINERARY",
          "info": "The fixed buy side itinerary can be defined to force the order release to be schedule with a constrained itinerary. "
        },
        "ASSIGNED_ITINERARY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITINERARY",
          "info": "The buy side itinerary that was selected when planning the order release. "
        },
        "FIXED_SELL_ITINERARY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITINERARY",
          "info": "The fixed sell side itinerary can be defined to force the order release to be schedule with a constrained itinerary. "
        },
        "SHIP_UNIT_ORIGIN": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "values": [
            "BS",
            "BL",
            "RS",
            "RL"
          ],
          "info": "Indicates how the ship units were created (BL=order base by line, BS=order base by ship unit, RL=order release by line, RS=order release by ship unit).  If this field is not 'RS' (formerly 'U'), the system deletes all existing order ship unit for the given order release, before calling new releasing logic to generate ship unit. "
        },
        "TOTAL_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total weight calculated from the order release lines. "
        },
        "TOTAL_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The total weight unit of measure. "
        },
        "TOTAL_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total weight in the base unit of measure. "
        },
        "TOTAL_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total volume calculated from the order release lines. "
        },
        "TOTAL_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The total volume unit of measure. "
        },
        "TOTAL_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total volume in the base unit of measure. "
        },
        "TOTAL_PACKAGING_UNIT_COUNT": {
          "type": "NUMBER(15)",
          "nullable": true,
          "info": "The total packaging unit count calculated from the order release lines "
        },
        "TOTAL_ITEM_PACKAGE_COUNT": {
          "type": "NUMBER(15)",
          "nullable": true,
          "info": "The total item package count calculated from the order release lines. "
        },
        "MAX_LENGTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The max length calculated from the order release lines. "
        },
        "MAX_LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The max length unit of measure. "
        },
        "MAX_LENGTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The max length in the base unit of measure. "
        },
        "MAX_WIDTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum width calculated from the order release lines. "
        },
        "MAX_WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The maximum width unit of measure. "
        },
        "MAX_WIDTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum width in the base unit of measure. "
        },
        "MAX_HEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum height calculated from the order release lines. "
        },
        "MAX_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The maximum height unit of measure. "
        },
        "MAX_HEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum height in the base unit of measure. "
        },
        "PLAN_FROM_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The plan from location GID. This value can be a different location from the actual source location defined on the order release. The plan from location is where the system will start to plan the shipments for the order release. "
        },
        "PLAN_TO_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_LOAD_UNLOAD_POINT",
          "info": "Must be Y or N. Y indicates that the order should not be bundled with any others. Order releasing logic will copy this value from the order base when the order is released. "
        },
        "ASSIGNED_SELL_ITINERARY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITINERARY",
          "info": "The sell side itinerary that was selected when planning the order release. "
        },
        "INDICATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "An indicator field that can be set to display important information about the order release. "
        },
        "BULK_PLAN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BULK_PLAN",
          "info": "If the order was planned onto a buy shipment via the bulk plan process, then the global identifier for the bulk plan. "
        },
        "BEST_DIRECT_COST_BUY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The buy side best direct cost that was calculated if the order travels from the plan from to the plan to as a single direct order. "
        },
        "BEST_DIRCOST_BUY_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The best buy direct cost currency. "
        },
        "BEST_DIRECT_COST_BUY_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The best buy direct cost in the base currency. "
        },
        "BEST_DIRECT_COST_SELL": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The sell side best direct cost that was calculated if the order travels from the plan from to the plan to as a single direct order. "
        },
        "BEST_DIRCOST_SELL_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The best sell direct cost currency. "
        },
        "BEST_DIRECT_COST_SELL_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The best sell direct cost in the base currency. "
        },
        "BEST_DIRECT_RATEOFFER_GID_BUY": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_OFFERING",
          "info": "The buy side rate offering used to calculate the best buy direct cost. "
        },
        "BEST_DIRECT_RATEOFFER_GID_SELL": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_OFFERING",
          "info": "The buy side rate offering used to calculate the best buy direct cost. "
        },
        "BUY_GENERAL_LEDGER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GENERAL_LEDGER_CODE",
          "info": "The buy general ledger GID to be used for the order release costs. "
        },
        "SELL_GENERAL_LEDGER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GENERAL_LEDGER_CODE",
          "info": "The sell general ledger GID to be used for the order release revenue. "
        },
        "TOTAL_NET_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total net weight calculated from the order release lines. "
        },
        "TOTAL_NET_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The total net weight unit of measure. "
        },
        "TOTAL_NET_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total net weight in the base unit of measure. "
        },
        "TOTAL_NET_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total net volume calculated from the order release lines. "
        },
        "TOTAL_NET_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The total net volume unit of measure. "
        },
        "TOTAL_NET_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total net volume in the base unit of measure. "
        },
        "SELL_BULK_PLAN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BULK_PLAN",
          "info": "If the order was planned onto a sell shipment via the bulk plan process, then the global identifier for the bulk plan. "
        },
        "TOTAL_SHIP_UNIT_COUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total number of ship units calculated from the order release ship units. "
        },
        "LOAD_POINT": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "foreign_key": "LOCATION_LOAD_UNLOAD_POINT",
          "info": "The source load point for loading of the equipment if required. "
        },
        "UNLOAD_POINT": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "foreign_key": "LOCATION_LOAD_UNLOAD_POINT",
          "info": "The destination unload point for the unloading of the equipment if required. "
        },
        "PICKUP_IS_APPT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator for whether the early/late pickup times are appointment times "
        },
        "DELIVERY_IS_APPT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator for whether the early/late delivery times are appointment times. "
        },
        "PLAN_FROM_LOAD_POINT": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "foreign_key": "LOCATION_LOAD_UNLOAD_POINT",
          "info": "The load point associated with plan from location. "
        },
        "PLAN_TO_UNLOAD_POINT": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "foreign_key": "LOCATION_LOAD_UNLOAD_POINT",
          "info": "The unload point associated with plan to location. "
        },
        "USER_DEFINED1_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes of the order release. "
        },
        "USER_DEFINED2_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes of the order release. "
        },
        "USER_DEFINED3_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes of the order release. "
        },
        "USER_DEFINED4_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes of the order release. "
        },
        "USER_DEFINED5_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes of the order release. "
        },
        "EXTERNAL_SYSTEM_ID": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The external system ID used for the source of the order release. "
        },
        "PAYMENT_METHOD_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PAYMENT_METHOD_CODE",
          "info": "The payment method GID. "
        },
        "INCO_TERM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INCO_TERM",
          "info": "The INCO terms GID. "
        },
        "TERM_LOCATION_TEXT": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Location text that can be entered. "
        },
        "PLANNING_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PLANNING_GROUP",
          "info": "The planning group GID to use when segmenting a large number of order releases into multiple smaller bulk planning runs. "
        },
        "TIME_WINDOW_EMPHASIS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TIME_WINDOW_EMPHASIS",
          "info": "The time window emphasis to be used when calculating the best start times for shipment, it can emphasize the pickup or delivery windows. "
        },
        "IS_KNOWN_SHIPPER": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator for whether the shipper involved party is a known shipper for air travel. "
        },
        "DIM_RATE_FACTOR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DIM_RATE_FACTOR",
          "info": "The dim factor GID to be used when calculating dimensional rates. "
        },
        "RELEASE_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RELEASE_METHOD",
          "info": "The release method GID is the order configuration rule and this drives the configuration of the order such as ship unit or line as well as various calculations. "
        },
        "FINAL_INCO_TERM": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INCO_TERM",
          "info": "The final INCO term associated with the order release. "
        },
        "FINAL_TEXT_LOCATION": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The final text location for the INCO terms. "
        },
        "INSPECTION_NUMBER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "An inspection number for the order release for informational purposes. "
        },
        "INSPECTION_SCHEDULE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The inspection scheduled date associated with the inspection number. "
        },
        "INSPECTION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The inspection actual date associated with the inspection number. "
        },
        "SURVEY_LAY_CAN_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The  survey lay can date for the order release. "
        },
        "LOC_NUMBER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The letter of credit number. "
        },
        "LOC_ISSUE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The letter of credit issue date. "
        },
        "LOC_RECEIVED_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The letter of credit received date. "
        },
        "LOC_LATEST_SHIPPING_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The letter of credit latest shipping date. "
        },
        "LOC_NEGOTIATED_DAYS": {
          "type": "NUMBER(8)",
          "nullable": true,
          "info": "The letter of credit negotiated days. "
        },
        "LOC_AMOUNT": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The letter of credit amount. "
        },
        "LOC_AMOUNT_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "The letter of credit amount currency identifier. "
        },
        "LOC_AMOUNT_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The letter of credit amount in the base currency. "
        },
        "LOC_ADVISING_NUMBER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The letter of credit advising number. "
        },
        "LOC_CONFIRMING_NUMBER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The letter of credit confirming number. "
        },
        "SRC_LOCATION_OVERRIDE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_OVERRIDE",
          "info": "The source location override GID used to define a new source location scheduling the order while still retaining the original source location. "
        },
        "DEST_LOCATION_OVERRIDE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_OVERRIDE",
          "info": "The destination location override GID used to define a new destination location scheduling the order while still retaining the original destination location. "
        },
        "PLAN_FROM_LOC_OVERRIDE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_OVERRIDE",
          "info": "The plan from location override GID used to define a new plan from location scheduling the order while still retaining the original plan from location. "
        },
        "PLAN_TO_LOC_OVERRIDE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_OVERRIDE",
          "info": "The plan to location override GID used to define a new plan to location scheduling the order while still retaining the original plan to location. "
        },
        "SECONDARY_T_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The secondary total weight for the order that sums up  secondary weight values from the order release line. "
        },
        "SECONDARY_T_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The secondary total weight unit of measure. "
        },
        "SECONDARY_T_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The secondary total weight in the base unit of measure. "
        },
        "SECONDARY_T_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The secondary total volume for the order that sums up the secondary weight values from the order release lines. "
        },
        "SECONDARY_T_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The secondary total volume unit of measure. "
        },
        "SECONDARY_T_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The secondary total volume in the base unit of measure. "
        },
        "RATE_SERVICE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_SERVICE_PROFILE",
          "info": "The buy rate service profile GID to be used as a constraint while planning the order release onto shipments. "
        },
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV",
          "info": "The buy service provider GID to be used as a constraint while planning the order release onto shipments. "
        },
        "SERVPROV_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV_PROFILE",
          "info": "The buy service provider profile GID to be used as a constraint while planning the order release onto shipments. "
        },
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSPORT_MODE",
          "info": "The buy transport mode GID to be used as a constraint while planning the order release onto shipments. "
        },
        "MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MODE_PROFILE",
          "info": "The buy mode profile GID to be used as a constraint while planning the order release onto shipments. "
        },
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP",
          "info": "The buy equipment group GID to be used as a constraint while planning the order release onto shipments. "
        },
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE",
          "info": "The buy equipment group profile GID to be used as a constraint while planning the order release onto shipments. "
        },
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_OFFERING",
          "info": "The buy rate offering GID to be used as a constraint while planning the order release onto shipments. "
        },
        "RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO",
          "info": "The buy rate detail GID to be used as a constraint while planning the order release onto shipments. "
        },
        "SELL_RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_OFFERING",
          "info": "The sell rate offering GID to be used as a constraint while planning the order release onto shipments. "
        },
        "SELL_RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO",
          "info": "The sell rate detail GID to be used as a constraint while planning the order release onto shipments. "
        },
        "MUST_SHIP_DIRECT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator for whether this order release must ship direct. "
        },
        "MUST_SHIP_THRU_X_DOCK": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator for whether this order release must ship through cross dock. "
        },
        "MUST_SHIP_THRU_POOL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator for whether this order release must ship through pool. "
        },
        "SHIP_WITH_GROUP": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Ship with group tags orders that need to be placed on a shipment together. "
        },
        "PRIMARY_LEG_SOURCE_LOC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Location GID of source for primary leg shipment "
        },
        "PRIM_LEG_SRC_LOC_OVERRIDE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_OVERRIDE",
          "info": "Location override GID of source for primary leg shipment "
        },
        "PORT_OF_LOAD_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Location GID of the port of load for the primary leg carrier. "
        },
        "PORT_OF_LOAD_LOC_OVERRIDE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_OVERRIDE",
          "info": "Location override GID of the port of load for the primary leg carrier. "
        },
        "PORT_OF_DIS_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Location GID of the port of discharge for primary leg carrier. "
        },
        "PORT_OF_DIS_LOC_OVERRIDE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_OVERRIDE",
          "info": "Location override GID of the port of discharge for primary leg carrier. "
        },
        "PRIMARY_LEG_DEST_LOC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Location GID of destination for primary leg shipment. "
        },
        "PRIM_LEG_DEST_OVERRIDE_LOC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_OVERRIDE",
          "info": "Location override GID of destination for primary leg shipment. "
        },
        "IMPORT_LICENSE_REQUIRED": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
            "REQUIRED",
            "NOT REQUIRED",
            "MAY BE REQUIRED"
          ],
          "info": "A Y/N indicator for whether this order requires an import license. "
        },
        "IMPORT_LICENSE_ISSUE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The import license issue date. "
        },
        "IMPORT_LICENSE_RECEIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The import license received date. "
        },
        "IMPORT_LICENSE_EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The date the import license will expire. "
        },
        "IMPORT_LICENSE_NUMBER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The import license number. "
        },
        "LOC_EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The letter of credit expiration date. "
        },
        "IS_LOC_REQUIRED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N field indicating whether a letter of credit is required for the order release. "
        },
        "INSPECTION_REQUIRED": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
            "REQUIRED",
            "NOT REQUIRED",
            "MAY BE REQUIRED"
          ],
          "info": "A Y/N indicator for whether an inspection is required. "
        },
        "UNITIZATION_CONDITION_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The unitization (loading of equipment) condition name value. "
        },
        "STUFF_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The location for stuffing (loading) the container prior to shipping. "
        },
        "DESTUFF_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The location for destuffing (unloading) the container after the ocean move. "
        },
        "CUSTOMER_UNITIZATION_REQUEST": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "The customer's request for unitization location. "
        },
        "DEFAULT_STOWAGE_MODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "STOWAGE_MODE",
          "info": "The default stowage mode to use for this order when loading onto stowage consol shipments. "
        },
        "CONSOLIDATION_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONSOLIDATION_TYPE",
          "info": "The type of consol (charter, vessel) to be used when assigning this order to the consol. "
        },
        "MOVE_PERSPECTIVE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MOVE_PERSPECTIVE",
          "info": "The mode perspective GID for the order release. "
        },
        "QUOTE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "QUOTE",
          "info": "The quote GID generated if this order release went through the quoting process. "
        },
        "COMMERCIAL_PAYMENT_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PAYMENT_METHOD_CODE",
          "info": "The commercial payment terms for the goods on the order release. "
        },
        "IS_LOC_STALE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N field indicating whether the letter of credit is stale or expired. "
        },
        "ULT_DEST_COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "The ultimate destination country code for this order release. It may be beyond the plan to or destination location defined on the order release. "
        },
        "TEMPLATE_TYPE": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "values": [
            "Customer",
            "Standard",
            "Buyer",
            "Service",
            "Domain",
            "Schedule"
          ],
          "info": "Hide template created for customer from other order UI. \"Customer\" is for customer template. "
        },
        "BUNDLING_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
            "AUTOMATIC",
            "MANUAL ONLY",
            "DO NOT BUNDLE"
          ],
          "info": "AUTOMATIC or MANUAL ONLY allow bundling; they are distinguished only by user defined queries. DO NOT BUNDLE means order will never be bundled with other orders. "
        },
        "IS_CONSOLIDATE_OR_EQUIPMENT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Whether to consolidate order release equipment when bundling. "
        },
        "DUTY_PAID": {
          "type": "VARCHAR2(8)",
          "nullable": false,
          "values": [
            "YES",
            "NO",
            "NA"
          ],
          "info": "Indicating if duty is to be paid for the order release. "
        },
        "QUOTE_OPTION_NUMBER": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The quote option number for the order release. Informational. "
        },
        "PARTITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PLAN_PARTITION",
          "info": "The partition GID used as according to this name, bulk plan partition orders to be planned together in one partition. "
        },
        "TOTAL_DECLARED_VALUE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total declared value calculated from the order release lines. "
        },
        "TOTAL_DECLARED_VALUE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The total declared value currency identifier. "
        },
        "TOTAL_DECLARED_VALUE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total declared value in the base currency. "
        },
        "BUY_ITINERARY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITINERARY_PROFILE",
          "info": "The buy itinerary profile GID to be used as a constraint while planning the order release onto shipments. "
        },
        "SELL_ITINERARY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITINERARY_PROFILE",
          "info": "The sell itinerary profile GID to be used as a constraint while planning the order release onto shipments. "
        },
        "BUFFER_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "values": [
            "DELIVERY LINE",
            "BUFFER"
          ],
          "info": "Defines the buffer type if this order release is a buffer order that utilizes the buffer locations as points where the order will accumulate prior to moving on. "
        },
        "SELL_SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV",
          "info": "The sell service provider GID to be used as a constraint while planning the order release onto shipments. "
        },
        "SELL_SERVPROV_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV_PROFILE",
          "info": "The sell service provider GID to be used as a constraint while planning the order release onto shipments. "
        },
        "IS_IGNORE_LOCATION_CALENDAR": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N field indicating whether the location calendar should be ignored when planning shipments for the order. If NULL, treat it as N. "
        },
        "RATE_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_SERVICE",
          "info": "The buy rate service GID to be used as a constraint while planning the order release onto shipments. "
        },
        "SHIP_UNIT_WIDTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The width of the ship unit. This will show a value only if the order release has one ship unit. "
        },
        "SHIP_UNIT_WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The ship unit width unit of measure. "
        },
        "SHIP_UNIT_WIDTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The ship unit width in the base unit of measure. "
        },
        "SHIP_UNIT_LENGTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The length of the ship unit. This column will show value only if the order release has one ship unit. "
        },
        "SHIP_UNIT_LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The length of the ship unit unit of measure. "
        },
        "SHIP_UNIT_LENGTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The length of the ship unit in the base unit of measure. "
        },
        "SHIP_UNIT_HEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The height of the ship unit. This column will show value only if the order release has one ship unit. "
        },
        "SHIP_UNIT_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The height of the ship unit unit of measure. "
        },
        "SHIP_UNIT_HEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The height of the ship unit in the base unit of measure. "
        },
        "SHIP_UNIT_DIAMETER": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The diameter of the ship unit for cyclindrical objects. This column will show value only if the order release has one ship unit. "
        },
        "SHIP_UNIT_DIAMETER_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The diameter unit of measure. "
        },
        "SHIP_UNIT_DIAMETER_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The diameter in the base unit of measure. "
        },
        "TRANSPORT_HANDLING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "The transport handling unit associated with the ship unit dimension values. This columns will show value only if the order release has one ship unit. "
        },
        "ON_RT_EXECUTION": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N field indicating whether that a shipment built from this order release has been assigned to a route instance leg. For migration: old existing order releases migrated to the default value ('N'). "
        },
        "IS_SPLITTABLE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "A Y/N field that indicates whether the order release can be split when planning during container optimization. "
        },
        "PICKUP_ROUTING_SEQUENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ROUTING_SEQUENCE",
          "info": "The pickup location routing sequence that controls how the stops can be planned for pickup such as first, absolute first, last. "
        },
        "DROPOFF_ROUTING_SEQUENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ROUTING_SEQUENCE",
          "info": "The pickup location routing sequence that controls how the stops can be planned for pickup such as first, absolute first, last. "
        },
        "LATEST_EST_DELIVERY_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The latest estimate delivery date calculated from the last leg shipments. "
        },
        "OTM_VERSION": {
          "type": "VARCHAR2(15)",
          "nullable": true,
          "info": "The OTM version number used when order was created. "
        },
        "PRIORITY": {
          "type": "NUMBER(3)",
          "nullable": false,
          "info": "The priority associated with an order release. "
        },
        "LATEST_EST_PICKUP_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The latest estimated pickup date calculated from the first leg shipments. "
        },
        "MARKED_FOR_PURGE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N field indicating whether this order will be processed to purge, when it is set to \"Y\", this row and its child data will be purged. "
        },
        "PICKUP_RAIL_CARRIER": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SCAC",
          "info": "The pickup rail carrier used as identification on the shipment execution. "
        },
        "DELIVERY_RAIL_CARRIER": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SCAC",
          "info": "The delivery rail carrier used as identification on the shipment execution. "
        },
        "EQUIPMENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_TYPE",
          "info": "The buy equipment type GID to be used as a constraint while planning the order release onto shipments. "
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
        "RAIL_ROUTE_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ROUTE_CODE",
          "info": "The buy itinerary profile GID to be used as a constraint while planning the order release onto shipments. "
        },
        "EM_PHONE_NUMBER": {
          "type": "VARCHAR2(15)",
          "nullable": true,
          "info": "The emergency phone number when shipping hazardous materials. The 24 hours contact for the shipment. "
        },
        "LEG_CONSOLIDATION_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LEG_CONSOLIDATION_GROUP",
          "info": "The leg consolidation group set during planning. "
        },
        "IS_PRE_ENTERED_PU": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N field indicating whether the order release is a pre-entered pickup for customs processing. "
        },
        "ROUTING_CONSTRAINT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ROUTING_CONSTRAINT",
          "info": "The buy itinerary profile GID to be used as a constraint while planning the order release onto shipments. "
        },
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_CURRENCY1": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The attribute currency of the shipment. "
        },
        "ATTRIBUTE_CURRENCY1_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The attribute currency1 (date of attribute) identifier associated with the shipment if this shipment is planned using an attribute on the attribute table. "
        },
        "ATTRIBUTE_CURRENCY1_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The attribute currency1 (date of attribute) identifier associated with the shipment if this shipment is planned using an attribute on the attribute table. "
        },
        "ATTRIBUTE_CURRENCY2": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The attribute currency of the shipment. "
        },
        "ATTRIBUTE_CURRENCY2_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The attribute currency2 (date of attribute) identifier associated with the shipment if this shipment is planned using an attribute on the attribute table. "
        },
        "ATTRIBUTE_CURRENCY2_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The attribute currency2 (date of attribute) identifier associated with the shipment if this shipment is planned using an attribute on the attribute table. "
        },
        "ATTRIBUTE_CURRENCY3": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The attribute currency of the shipment. "
        },
        "ATTRIBUTE_CURRENCY3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The attribute currency3 (date of attribute) identifier associated with the shipment if this shipment is planned using an attribute on the attribute table. "
        },
        "ATTRIBUTE_CURRENCY3_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The attribute currency3 (date of attribute) identifier associated with the shipment if this shipment is planned using an attribute on the attribute table. "
        },
        "ALLOCATION_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ALLOCATION_GROUP",
          "info": "The allocation group that was calculated if the order travels from the plan from to the plan to as a single group order. "
        },
        "EARLIEST_EST_PICKUP_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The earliest estimated pickup that was calculated if the order travels from the plan from to the plan to as a single estimated order. "
        },
        "IS_TOPOFF": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "This field indicates whether the order is a topoff order or not. "
        },
        "ATTRIBUTE_NUMBER11": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER12": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER13": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER14": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER15": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER16": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER17": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER18": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER19": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER20": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_DATE11": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE12": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE13": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE14": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE15": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE16": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE17": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE18": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE19": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE20": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date"
        }
      },
      "fk_tables": [
        "ALLOCATION",
        "ALLOCATION_D",
        "ALLOCATION_ORDER_RELEASE_D",
        "BUYER_TEMPLATE",
        "CUSTOMER_SERVICE",
        "CUSTOMER_TEMPLATE",
        "JOB_ORDER_RELEASE_JOIN",
        "LOGISTICS_GUIDE_DETAIL",
        "LOGISTICS_GUIDE_ORDER_TEMPLATE",
        "OMR",
        "ORDER_MOVEMENT",
        "ORDER_RELEASE_ACCESSORIAL",
        "ORDER_RELEASE_ACCRUAL",
        "ORDER_RELEASE_BILL",
        "ORDER_RELEASE_INV_PARTY",
        "ORDER_RELEASE_LEG_CONSTRAINT",
        "ORDER_RELEASE_LINE",
        "ORDER_RELEASE_REFNUM",
        "ORDER_RELEASE_REMARK",
        "ORDER_RELEASE_SERVICE",
        "ORDER_RELEASE_SPECIAL_SERVICE",
        "ORDER_RELEASE_STATUS",
        "ORDER_RELEASE_STATUS_HISTORY",
        "ORDER_RELEASE_TEXT",
        "ORDER_RELEASE_TR_EVENT_CONTACT",
        "ORDER_SCHEDULE_D",
        "ORDER_SCHEDULE_OVERRIDE_D",
        "OR_EQUIPMENT",
        "OR_STATUS_HISTORY_EVENT_GROUP",
        "OR_STOP",
        "SHIPMENT_ORDER_RELEASE_JOIN",
        "SHIP_GROUP_D_OR",
        "SHIP_UNIT",
        "S_SHIP_UNIT_LINE"
      ]
    }
  }
};
