// SHIPMENT.js

window.SHIPMENT = {
  "tables": {
    "SHIPMENT": {
      "columns": {
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the shipment. "
        },
        "SHIPMENT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the shipment. "
        },
        "SHIPMENT_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "A descriptive name of the shipment. "
        },
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSPORT_MODE",
          "info": "A unique identifier to define the transportation modes. "
        },
        "IS_TEMPLATE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates whether a shipment is a template. "
        },
        "IS_PRIMARY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if the shipment is the primary shipment related to an order (bookings) path. "
        },
        "IS_SPOT_COSTED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Y/N based on whether the shipment cost is a spot cost specified by the service provider during a spot bid/broadcast tender. "
        },
        "IS_CREDIT_NOTE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Y/N based on an associated credit note. "
        },
        "CM_PREV_DEST_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The destination location of the previous shipment in the continuous move tour. "
        },
        "CM_NEXT_SOURCE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The source location of the next shipment in the continuous move tour. "
        },
        "TOTAL_ACTUAL_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total actual cost of the shipment. "
        },
        "TOTAL_ACTUAL_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total actual cost in the base unit of measure. "
        },
        "TOTAL_WEIGHTED_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total weighted cost of the shipment considering any additional preference weighting to influence selection positive or negative. "
        },
        "TOTAL_WEIGHTED_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total weighted cost in the base unit of measure. "
        },
        "T_ACTUAL_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "A unique identifier to the currency that the actual cost is specified in. "
        },
        "T_WEIGHTED_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "A unique identifier to the currency that the weighted actual cost is specified in. "
        },
        "TOTAL_TRANS_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total cost of the shipment. It represents the total transportation cost after applying the rebate. "
        },
        "TOTAL_TRANS_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The currency type for the total cost. "
        },
        "TOTAL_TRANS_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total cost of the shipment, in the base unit of measure. "
        },
        "LOADED_DISTANCE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total distance that the truck or the transportation mode will travel when the shipment is loaded. "
        },
        "LOADED_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The load distance unit of measure. "
        },
        "LOADED_DISTANCE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The loaded distance in the base unit of measure. "
        },
        "UNLOADED_DISTANCE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total distance that the truck or the transportation mode will travel when empty. "
        },
        "UNLOADED_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unloaded distance unit of measure. "
        },
        "UNLOADED_DISTANCE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The unloaded distance in the base unit of measure. "
        },
        "SOURCE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The GID of the source location of the shipment. "
        },
        "DEST_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The GID of the destination location of the shipment. "
        },
        "START_TIME": {
          "type": "DATE",
          "nullable": false,
          "info": "The actual shipment start time. Initially it is the system expected start time. It is updated once the carrier actually starts the shipment. "
        },
        "END_TIME": {
          "type": "DATE",
          "nullable": false,
          "info": "The time the shipment is delivered. Initially this is the system expected delivery time. It is updated with the actual delivery time when the shipment is delivered. "
        },
        "FREIGHT_TERMS": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The freight terms for the shipment, such as prepaid or collect. "
        },
        "PARENT_LEG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LEG",
          "info": "The parent leg associated with the itinerary that may have been used to plan the shipment. "
        },
        "VOYAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The voyage identifier associated with the shipment if this shipment is planned using a voyage that has been loaded into the voyage table. "
        },
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV",
          "info": "The service provider identifier associated with the shipment. "
        },
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_OFFERING",
          "info": "The rate offering (contract) identifier that is used by the service provider moving this shipment. "
        },
        "RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO",
          "info": "The detailed rate record (contract) identifier that is used by the service provider moving this shipment. "
        },
        "ORIGINAL_SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "If the shipment represents a secondary charge, this points back to the \"parent\" shipment for which the secondary shipment is a \"child\". "
        },
        "SHIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_GROUP",
          "info": "The shipment group identifier if this shipment is placed into a single group. "
        },
        "IS_AUTO_MERGE_CONSOLIDATE": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Y/N indicating if the auto merge consolidation rule was used from the itinerary when creating this shipment. (View Only) "
        },
        "PERSPECTIVE": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "B",
            "S"
          ],
          "info": "The indicates if the shipment is a buy or sell perspective. "
        },
        "FLIGHT_INSTANCE_ID": {
          "type": "NUMBER(10)",
          "nullable": true,
          "foreign_key": "FLIGHT_INSTANCE",
          "info": "The flight instance (date of flight) identifier associated with the shipment if this shipment is planned using a flight in the flight table. "
        },
        "TOTAL_WEIGHT": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The total weight of the shipment. "
        },
        "TOTAL_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "The total weight unit of measure. "
        },
        "TOTAL_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The total weight in the base unit of measure. "
        },
        "TOTAL_VOLUME": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The total volume of the shipment. "
        },
        "TOTAL_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "The total volume unit of measure. "
        },
        "TOTAL_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The total volume in the base unit of measure. "
        },
        "TOTAL_SHIP_UNIT_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The total ship unit count of the shipment. "
        },
        "TOTAL_PACKAGING_UNIT_COUNT": {
          "type": "NUMBER(15)",
          "nullable": false,
          "info": "The total packaging unit count of the shipment. "
        },
        "TOTAL_ITEM_PACKAGE_COUNT": {
          "type": "NUMBER(15)",
          "nullable": false,
          "info": "The total item package count of the shipment. "
        },
        "INTERMEDIARY_CORPORATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CORPORATION",
          "info": "The intermediary corporation identifier if this shipment is being managed by an additional party to the shipper and carrier relationship such as a 3PL corporation. "
        },
        "SHIPMENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIPMENT_TYPE",
          "info": "The shipment type associated with the shipment. This is a system value such as transport, secondary charge shipment, or non-freight related. "
        },
        "ROUTE_CODE_COMBINATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ROUTE_CODE_COMBINATION",
          "info": "The route code combination identifier of the shipment used for specifying rail shipments. "
        },
        "RAIL_INTER_MODAL_PLAN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RAIL_INTER_MODAL_PLAN",
          "info": "The rail intermodal plan identifier of the shipment used for intermodal rail shipments. "
        },
        "CUSTOMER_RATE_CODE": {
          "type": "CHAR(1)",
          "nullable": true,
          "values": [
            "C",
            "S"
          ],
          "info": "The customer rate identifier associated with the shipment if this shipment is planned using a customer. "
        },
        "COFC_TOFC": {
          "type": "CHAR(1)",
          "nullable": true,
          "values": [
            "C",
            "T",
            "F"
          ],
          "info": "The trailer or flat car or the container on flat car code for rail shipments. "
        },
        "RAIL_RETURN_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The rail return location identifier of the rail shipment. "
        },
        "RAIL_RETURN_ROUTE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ROUTE_CODE",
          "info": "The rail return route identifier of the rail shipment. "
        },
        "RULE_11_INDICATOR": {
          "type": "VARCHAR2(25)",
          "nullable": true,
          "values": [
            "TENDER",
            "NO_TENDER"
          ],
          "info": "The rule 11 indicator of the shipment used for managing rail. "
        },
        "CURRENT_STOP_NUM": {
          "type": "NUMBER(6)",
          "nullable": true,
          "info": "The stop number within the shipment. Stop number = 1 is the pickup stop, and the max (stop number) for a shipment is the delivery stop. "
        },
        "SHIPMENT_AS_WORK": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates the shipment as work. "
        },
        "SECONDARY_CHARGE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SECONDARY_CHARGE_RULE",
          "info": "The secondary charge rule identifier that was used to generate the shipment if this is a secondary charge shipment. "
        },
        "CHECK_TIME_CONSTRAINT": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "The indicator to check the time constraints associated with the shipment. "
        },
        "CHECK_COST_CONSTRAINT": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "The indicator to check cost constraints associated with the shipment "
        },
        "CHECK_CAPACITY_CONSTRAINT": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "The indicator to check the capacity constraints associated with the shipment. "
        },
        "CM_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The shipment GID of the first shipment in the tour. If the continuous move tour is received as input, this is the supplied tour ID. "
        },
        "CM_SEQUENCE_NUM": {
          "type": "NUMBER(5)",
          "nullable": true,
          "info": "Indicates the shipment's sequence in the continuous move tour. "
        },
        "CM_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The shipment cost when the shipment is part of a continuous move tour. "
        },
        "CM_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The currency identifier for the continuous move cost of the continuous move tour. "
        },
        "CM_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The continuous move cost in the base currency. "
        },
        "CM_EMPTY_DISTANCE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The empty leg distance between previous and this shipments. "
        },
        "CM_EMPTY_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The continuous move empty distance of the shipment unit of measure. "
        },
        "CM_EMPTY_DISTANCE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The continuous move empty distance of the shipment in the base unit of measure. "
        },
        "HAZMAT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSPORT_MODE",
          "info": "The hazmat mode identifier that is associated with the shipment. "
        },
        "HAZMAT_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION",
          "info": "The hazmat region identifier that is associated with the shipment. "
        },
        "WEIGH_CODE": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "A",
            "S",
            "N",
            "R",
            "D"
          ],
          "info": "The weigh code of the shipment that identifies the weight type. "
        },
        "RULE_7": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator from the shipper to the carrier that the shipper is not liable for freight charges. "
        },
        "SHIPMENT_RELEASED": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator used for rail shipments that indicate that the shipment is ready. "
        },
        "PROCESSING_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PROCESSING_CODE",
          "info": "The processing code GID. "
        },
        "AIR_RAIL_ROUTE_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ROUTE_CODE",
          "info": "A transportation mode code that is informational for the shipment. "
        },
        "PAYMENT_METHOD_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PAYMENT_METHOD_CODE",
          "info": "The payment method code identifier. "
        },
        "INCO_TERM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The Incoterm identifier associated with the shipment. "
        },
        "DIM_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The dimensional weight that was calculated for the shipment when using the dimensional rating (DIM) factor. "
        },
        "DIM_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The dimensional weight that was calculated for the shipment unit of measure. "
        },
        "DIM_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The dimensional weight in the base unit of measure. "
        },
        "PLANNED_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The cost when the original shipment was created. "
        },
        "PLANNED_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The planned cost in the base currency. "
        },
        "PLANNED_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The currency identifier for the planned cost of the shipment. "
        },
        "TERM_LOCATION_TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "The term location text that is informational for the shipment. "
        },
        "TARIFF_ORGANIZATION_NUMBER": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The tariff organization number, for informational purposes. "
        },
        "TARIFF_ORGANIZATION_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "The tariff organization name, for informational purposes. "
        },
        "TARIFF_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "The tariff name, for informational purposes. "
        },
        "TARIFF_NUMBER": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The tariff number, for informational purposes. "
        },
        "TARIFF_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The tariff date, for informational purposes. "
        },
        "IS_HAZARDOUS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator specifying that the shipment is identified as having hazardous material. "
        },
        "IS_TEMPERATURE_CONTROL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator specifying that the shipment is identified as needing temperature control. "
        },
        "IS_COST_FIXED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator that identifies the shipment having fixed cost that will not be recalculated if the shipment is modified. "
        },
        "IS_SERVICE_TIME_FIXED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator that identifies the shipment having fixed service time that will not be recalculated if the shipment is modified. "
        },
        "IS_RATE_GEO_FIXED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "info": "A Y/N indicator that the rate detail (rate geo) has been fixed by the user and will not be reassigned if the shipment is modified. "
        },
        "IS_RATE_OFFERING_FIXED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "info": "A Y/N indicator that the rate offering has been fixed by the user and will not be reassigned. "
        },
        "IS_SERVPROV_FIXED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "info": "A Y/N indicator that the service provider has been fixed by the user and will not be reassigned. "
        },
        "IS_PRELOAD": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator specifying that the shipment is pre-load prior to carrier arriving for transport. "
        },
        "IS_FIXED_TENDER_CONTACT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator that the tender contact individual has been fixed by the user and will not be reassigned. "
        },
        "IS_TO_BE_HELD": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator specifying that the shipment is to be held by the carrier. "
        },
        "IS_PREFERRED_CARRIER": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if the carrier selected for the shipment is preferred. "
        },
        "IS_EQUIPMENT_FIXED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Checks if a service provider can update the equipment number and equipment initials when accepting a tendered shipment. "
        },
        "IS_RECALC_TOTALS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Turns on/off totaling logic. "
        },
        "HAS_APPOINTMENTS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if any stops on the shipment have appointments. "
        },
        "INDICATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "A settable indicator for the shipment. "
        },
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONTACT",
          "info": "The contact identifier linking in the contact table information to the shipment. "
        },
        "BULK_PLAN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BULK_PLAN",
          "info": "If the shipment was planned via the bulk plan process, then this is the global identifier for the bulk plan. "
        },
        "TOTAL_NUM_REFERENCE_UNITS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total number of reference units of the shipment as defined by the equipment reference units. "
        },
        "ITINERARY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITINERARY",
          "info": "The itinerary identifier that was used to build the shipment if it was built with the planning logic. "
        },
        "FEASIBILITY_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "FEASIBILITY_CODE",
          "info": "The feasibility code associated with the shipment can identify shipment infeasibilities. "
        },
        "NUM_ORDER_RELEASES": {
          "type": "NUMBER(6)",
          "nullable": true,
          "info": "The number of order releases that are on this shipment. "
        },
        "NUM_STOPS": {
          "type": "NUMBER(6)",
          "nullable": true,
          "info": "The number of shipment stop records related to this shipment. "
        },
        "TOTAL_NET_WEIGHT": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The total net weight of all the freight on the shipment as summed with the shipment ship unit lines net weight. "
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
          "nullable": false,
          "info": "The total net volume of all the freight on the shipment as summed with the shipment ship unit lines net volume. "
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
        "EARLIEST_START_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "The earliest start time that will make this shipment feasible. "
        },
        "LATEST_START_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "The latest start time that will make this shipment feasible. "
        },
        "LAST_EVENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_EVENT_GROUP",
          "info": "The last event group identifier specifies the event group code of the last tracking event that was received against the shipment. "
        },
        "REPETITION_SCHEDULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REPETITION_SCHEDULE",
          "info": "The repetition schedule associated with the shipment if the shipment was built utilizing a repetition schedule. "
        },
        "IN_TRAILER_BUILD": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates that this shipment is in a trailer build shipment group. "
        },
        "FIRST_EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "A shipment can contain multiple equipment records. This value is associated to the first equipment group defined for the shipment. "
        },
        "BULK_CM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BULK_CM",
          "info": "The identifier for the bulk continuous move if the shipment was selected in the bulk continuous move process. "
        },
        "VESSEL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VESSEL",
          "info": "The vessel that the shipment is on. If populated, this actually overrides the value that is in the voyage table. "
        },
        "USER_DEFINED1_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "The GID for the user defined image/icon. Up to five user-defined image fields can be configured to appear on the Search and Results page that let you query and review the images that are assigned to a business object. Images can be assigned to business objects to visually emphasize certain characteristics such as shipments containing hazardous material, orders for hot commodities, or shipments with over dimensional freight. "
        },
        "USER_DEFINED2_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "The GID for the user defined image/icon. Up to five user-defined image fields can be configured to appear on the Search and Results page that let you query and review the images that are assigned to a business object. Images can be assigned to business objects to visually emphasize certain characteristics such as shipments containing hazardous material, orders for hot commodities, or shipments with over dimensional freight. "
        },
        "USER_DEFINED3_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "The GID for the user defined image/icon. Up to five user-defined image fields can be configured to appear on the Search and Results page that let you query and review the images that are assigned to a business object. Images can be assigned to business objects to visually emphasize certain characteristics such as shipments containing hazardous material, orders for hot commodities, or shipments with over dimensional freight. "
        },
        "USER_DEFINED4_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "The GID for the user defined image/icon. Up to five user-defined image fields can be configured to appear on the Search and Results page that let you query and review the images that are assigned to a business object. Images can be assigned to business objects to visually emphasize certain characteristics such as shipments containing hazardous material, orders for hot commodities, or shipments with over dimensional freight. "
        },
        "USER_DEFINED5_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "The GID for the user defined image/icon. Up to five user-defined image fields can be configured to appear on the Search and Results page that let you query and review the images that are assigned to a business object. Images can be assigned to business objects to visually emphasize certain characteristics such as shipments containing hazardous material, orders for hot commodities, or shipments with over dimensional freight. "
        },
        "SOURCE_LOCATION_OVERRIDE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_OVERRIDE",
          "info": "The location identifier that will override the source location that is defined for the shipment. "
        },
        "DEST_LOCATION_OVERRIDE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_OVERRIDE",
          "info": "The location identifier that will override the destination location that is defined for the shipment. "
        },
        "EQUIPMENT_REFERENCE_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_REFERENCE_UNIT",
          "info": "The equipment reference unit GID that is associated with the equipment reference unit utilization of the shipment. "
        },
        "SCHEDULE_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "values": [
            "DYNAMIC TRIP",
            "STATIC TRIP",
            "FLIGHT",
            "VESSEL",
            "GROUND SERVICE",
            "DETACHABLE TRIP"
          ],
          "info": "When the schedule type is populated, it is a consol. "
        },
        "WEIGHT_UTILIZATION": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The weight utilization of the shipment as defined by the weight of the freight and the maximum capacity of the equipment. "
        },
        "VOLUME_UTILIZATION": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The volume utilization of the shipment as defined by the volume of the freight and the maximum capacity of the equipment. "
        },
        "EQUIP_REF_UNIT_UTILIZATION": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The equipment reference utilization of the shipment as defined by the equipment reference unit amount of the freight and the maximum capacity of the equipment. "
        },
        "JOB_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "JOB",
          "info": "The job GID identifier of the shipment, if the shipment is assigned to a job. "
        },
        "PORT_OF_LOAD_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The location ID of the port of load for the primary leg carrier. "
        },
        "PORT_OF_LOAD_OVERRIDE_LOC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_OVERRIDE",
          "info": "The location override ID of the port of load for the primary leg carrier. "
        },
        "PORT_OF_DIS_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The location ID of the port of discharge for the primary leg carrier. "
        },
        "PORT_OF_DIS_OVERRIDE_LOC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_OVERRIDE",
          "info": "The location override ID of the port of discharge for the primary leg carrier. "
        },
        "INSURANCE_POLICY_NUMBER": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The insurance policy number that covers this shipment, for informational purposes. "
        },
        "INSURANCE_AMOUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The insurance amount of the shipment. "
        },
        "INSURANCE_AMOUNT_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The insurance amount currency GID of the shipment. "
        },
        "INSURANCE_AMOUNT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The insurance amount in the base currency. "
        },
        "INSURANCE_PREMIUM": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The insurance premium of the shipment, for informational purposes. "
        },
        "INSURANCE_PREMIUM_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The insurance premium currency GID of the shipment. "
        },
        "INSURANCE_PREMIUM_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The insurance premium in the base currency. "
        },
        "BOL_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "values": [
            "EXPRESS",
            "STANDARD"
          ],
          "info": "The bill of lading type defined for the shipment, used for report management. "
        },
        "BOL_ISSUANCE_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "values": [
            "ON BOARD VESSEL",
            "ON BOARD",
            "FEEDER",
            "RECEIVE FOR SHIPMENT"
          ],
          "info": "The bill of lading issuance type identifier. "
        },
        "CONSOL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONSOL",
          "info": "The consol identifier if the shipment has been built from a consol structure. "
        },
        "PLACE_RECEIPT_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The place receipt location identifier specifying the location where ownership of freight starts. "
        },
        "PLACE_DELIVER_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The place deliver location identifier specifying the location where ownership of freight ends with delivery. "
        },
        "SAIL_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The sail date of the shipment that is populated if the shipment utilizes the vessel schedules. "
        },
        "RAIL_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The rail date of the shipment that is populated if the shipment utilizes the rail schedules. "
        },
        "SAIL_CUTOFF_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The sail cutoff (date of sail) identifier associated with the shipment if this shipment is planned using a sail on the sail table. "
        },
        "PORT_DISCHARGE_ETA": {
          "type": "DATE",
          "nullable": true,
          "info": "The estimated port of discharge date associated with ocean-going shipments. "
        },
        "PORT_OF_EXIT_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The estimated port if exit (for international shipments) associated with ocean going shipments. "
        },
        "PORT_EXIT_LOC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The designated port the freight will be exiting the country for international shipments. "
        },
        "CONTAINER_DELIVERY_LOC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The container delivery location identifier establishing where the ocean going container will be delivered after unloading freight. "
        },
        "CONTAINER_PICKUP_LOC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The container pickup location identifier establishing where the ocean-going container will be picked up prior to loading with freight. "
        },
        "NFRC_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "NFRC_RULE",
          "info": "The NFRC (non freight related charge) rule that was used to generate the shipment if the shipment is a NFRC type of shipment. "
        },
        "IS_CPCTY_OVERRIDE_APPLICABLE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator specifying if the capacity override is applicable where capacity defines the resource a service provider has available for assignment. "
        },
        "PLANNED_RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_OFFERING",
          "info": "The initial planned rate offering ID. It is set when shipment initially gets planned. It will not be changed thereafter. "
        },
        "PLANNED_TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSPORT_MODE",
          "info": "The initial planned transport mode ID. It is set when shipment initially gets planned. It will not be changed thereafter. "
        },
        "PLANNED_SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV",
          "info": "The initial planned service provider ID. It is set when shipment initially gets planned. It will not be changed thereafter. "
        },
        "PLANNED_RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO",
          "info": "The initial planned rate record ID. It is set when shipment initially gets planned. It will not be changed thereafter. "
        },
        "IS_PERMANENT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Set this flag to 'Y' if the shipment should not be automatically deleted as a result of unassign/merge/split action. In this case, the shipment should be specifically deleted in \"delete shipment\" action. "
        },
        "IS_MEMO_BL": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicate how to handle B/L. Y: no bill of lading generated for this shipment. N: bill of lading generated for this shipment. "
        },
        "DUTY_PAID": {
          "type": "VARCHAR2(8)",
          "nullable": false,
          "values": [
            "YES",
            "NO",
            "NA"
          ],
          "info": "The duty paid of the shipment. "
        },
        "EXCHANGE_RATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Indicates the date to be used for any currency conversions; if null, the latest conversion should be used. "
        },
        "CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "Indicates the currency to be used for cost totals; if null, the first shipment cost of type base will dictate the currency. "
        },
        "EXCHANGE_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXCHANGE_RATE",
          "info": "Indicates the set of exchange rates to use for currency conversions; if null, the default set should be used. "
        },
        "TOT_MATCHED_INVOICE_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total matched invoice cost associated with the shipment after the match and pay process runs in freight payment. "
        },
        "TOT_MATCHED_INV_COST_CURR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The currency identifier for the total matched invoice cost. "
        },
        "TOT_MATCHED_INVOICE_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total matched invoice cost in the base currency. "
        },
        "ORIGINAL_INVOICE_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The original invoice cost at the point when the invoice was initially created or matched to the shipment. "
        },
        "ORIGINAL_INVOICE_COST_CURR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The currency identifier for the original invoice cost. "
        },
        "ORIGINAL_INVOICE_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The original invoice cost in the base currency. "
        },
        "TOTAL_APPROVED_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total approved cost associated with the shipment after the approval step in the freight payment process. "
        },
        "TOTAL_APPROVED_COST_CURR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The currency identifier for the total approved invoice cost. "
        },
        "TOTAL_APPROVED_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total approved cost in the base currency. "
        },
        "SOURCE_PIER_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The source operational location. "
        },
        "DEST_PIER_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The destination operational location. "
        },
        "PRIMARY_ORDER_BASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OB_ORDER_BASE",
          "info": "A shipment can contain multiple orders and these orders can refer to multiple order bases. The bill to party of an order base is carried forward to the shipment. This field reflects the order base identifier that was used to establish this value. "
        },
        "TOTAL_DECLARED_VALUE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total declared value of the goods on the shipment. This is the sum of the declared values of the shipment ship unit lines. "
        },
        "TOTAL_DECLARED_VALUE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The currency identifier for the total declared value. "
        },
        "TOTAL_DECLARED_VALUE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total declared value in the base currency. "
        },
        "IS_PROFIT_SPLIT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if the NFRC shipment will be profit split. "
        },
        "SHIPPING_AGENT_CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIPPING_AGENT_CONTACT",
          "info": "Indicate if this NFRC is created from the Assign Shipping Agent action on the job. "
        },
        "IS_ADVANCED_CHARGE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator specifying that this NFRC shipment is built as an advanced charge. "
        },
        "LOAD_CONFIG_ENGINE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOAD_CONFIG_ENGINE_TYPE",
          "info": "Null type means no load configuration is performed on the shipment. "
        },
        "APPOINTMENT_PRIORITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APPOINTMENT_PRIORITY",
          "info": "The appointment priority identifier associated with the shipment. "
        },
        "IS_FIXED_DISTANCE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Boolean, defaults to N. When set to Y, this flag indicates a user-entered value for the total loaded distance field. "
        },
        "DELIVERING_SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV",
          "info": "The service provider who is the delivering service provider for this shipment. "
        },
        "ORIGINATING_SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV",
          "info": "The service provider who is the originating service provider for this shipment. "
        },
        "CHARGEABLE_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The dimensional weight as determined by the rating process. "
        },
        "CHARGEABLE_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The chargeable weight unit of measure. "
        },
        "CHARGEABLE_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The chargeable weight (date of chargeable) identifier associated with the shipment if this shipment is planned using a chargeable on the chargeable table. "
        },
        "CM_COST_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The continuous move cost specified if the shipment is part of a continuous move tour. "
        },
        "CM_COST_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The currency identifier for the functional continuous move cost. "
        },
        "TOTAL_ACTUAL_C_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The functional currency amount for the total actual cost. "
        },
        "TOTAL_ACTUAL_C_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The currency identifier for the functional actual cost. "
        },
        "TOTAL_TRANS_C_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The functional currency amount for the functional continuous move cost. "
        },
        "TOTAL_TRANS_C_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The currency identifier for the functional continuous move cost. "
        },
        "TOTAL_WT_COST_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The functional currency amount for the total weighted cost. "
        },
        "TOTAL_WT_COST_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The currency identifier for the functional total weighted cost. "
        },
        "PLANNED_COST_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The functional currency amount for the planned cost. "
        },
        "PLANNED_COST_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The currency identifier for the functional planned cost. "
        },
        "INSURANCE_AMT_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The functional currency amount for the insurance amount. "
        },
        "INSURANCE_AMT_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The currency identifier for the insurance amount. "
        },
        "INSURANCE_PREM_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The functional currency amount for insurance premium. "
        },
        "INSURANCE_PREM_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The currency identifier for the functional insurance premium. "
        },
        "TOT_MATCH_INV_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The functional currency amount for total matched invoice cost. "
        },
        "TOT_MATCH_INV_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The currency identifier for the functional total matched invoice cost. "
        },
        "ORIGINAL_INV_C_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The functional currency amount for the functional original cost. "
        },
        "ORIGINAL_INV_C_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The currency identifier for the functional original cost. "
        },
        "TOTAL_APP_COST_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The functional currency amount for total approved cost. "
        },
        "TOTAL_APP_COST_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The currency identifier for the functional total approved cost. "
        },
        "FIXED_SERVICE_DAYS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The fixed number of service days, if returned by the rating engine. "
        },
        "SIGHTING_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The location where the shipment was last sighted. "
        },
        "SIGHTING_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The date and time when the shipment was last sighted at the sighting location. "
        },
        "PREV_SIGHTING_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The location identifier for the previous sighting location used for rail shipment and tracking events. "
        },
        "PREV_SIGHTING_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The date associated with the previous sighting location and in the tracking event. "
        },
        "DRIVER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DRIVER",
          "info": "The driver or primary team driver assigned to the shipment. "
        },
        "SECONDARY_DRIVER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DRIVER",
          "info": "The secondary team driver assigned to the shipment. "
        },
        "POWER_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "POWER_UNIT",
          "info": "The power unit assigned to the shipment. "
        },
        "MARKED_FOR_PURGE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Boolean field. When it is set to \"Y\", this row and its child data will be purged. "
        },
        "DRIVER_ASSIGN_BULK_PLAN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "FLEET_BULK_PLAN",
          "info": "Fleet bulk plan ID for driver assignment. "
        },
        "EQUIPMENT_ASSIGN_BULK_PLAN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "FLEET_BULK_PLAN",
          "info": "Fleet bulk plan ID for equipment assignment. "
        },
        "PREV_DROP_INVENTORY_PROCESSED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates fleet equipment inventory processing for driver's previous shipment's equipment. "
        },
        "PICK_INVENTORY_PROCESSED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates fleet equipment inventory processing for picking an empty equipment before freight. "
        },
        "DROP_INVENTORY_PROCESSED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates fleet equipment inventory processing for dropping an empty equipment after freight. "
        },
        "DIM_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The dimensional volume. Mathematical weight equivalence according to specified dim rate factor. "
        },
        "DIM_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The dimensional volume unit of measure. "
        },
        "DIM_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The dimensional volume in the base unit of measure. "
        },
        "CHARGEABLE_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The actual volume used in calculating the cost of the shipment. "
        },
        "CHARGEABLE_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The chargeable volume unit of measure. "
        },
        "CHARGEABLE_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The chargeable volume in the base unit of measure. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "The date and time of data insert. "
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
        "PLANNING_PARAMETER_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PLANNING_PARAMETER_SET",
          "info": "The parameter set GID which is used in building this shipment. "
        },
        "NUM_EQUIPMENT_ORDERED": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The number of equipment ordered. This is manually set by the user and can be rated on. "
        },
        "EM_PHONE_NUMBER": {
          "type": "VARCHAR2(15)",
          "nullable": true,
          "info": "The emergency phone number when shipping hazardous materials. The 24 hours contact for the shipment. "
        },
        "PARCEL_ZONE": {
          "type": "VARCHAR2(16)",
          "nullable": true,
          "info": "The ship to mail zone. A price key used for parcel rate calculations. "
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
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
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
        "COMBINATION_EQUIP_GRP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP",
          "info": "The equipment group associated with the shipment if the shipment contains combination trailers or combination compartments. "
        },
        "SI_CUTOFF_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The shippers instruction cutoff date associated with the shipment. "
        },
        "CFS_CUTOFF_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The container freight station cutoff date associated with the shipment. "
        },
        "SRC_ARB_LEVEL_OF_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LEVEL_OF_SERVICE",
          "info": "The source arbitrary level of service identifier if the shipment is built using a rate that has arbitrary values. In this case the shipment will identify the rate service used for the main leg and this will be the service of the source arbitrary part. "
        },
        "DEST_ARB_LEVEL_OF_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LEVEL_OF_SERVICE",
          "info": "The destination arbitrary level of service identifier if the shipment is built using a rate that has arbitrary values. In this case the shipment will identify the rate service used for the main leg and this will be the service of the destination arbitrary part. "
        },
        "CFS_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The location identifier for the container freight station. "
        },
        "IS_FIXED_VOYAGE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator specifying if the voyage part of the shipment is to remain fixed on updates. "
        },
        "WORK_ASSIGNMENT_BULK_PLAN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "WORK_ASSIGNMENT_BULK_PLAN",
          "info": "Work assignment bulk plan ID which is generated during work assignment bulk plan process. "
        },
        "AHEAD_LATE_TIME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "shipment status "
        },
        "AHEAD_LATE_TIME_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "AHEAD_LATE_TIME_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "AHEAD_OR_LATE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "A - Ahead of Schedule O - On Time L - Late T - Tardy - This can mean a degree of lateness depending on the user.  B - Bad Order H - Held N - No Bill Y - Constructive Placed Z - Actual Placed "
        },
        "ETA_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Estimated time of arrival "
        },
        "FIRST_EQUIPMENT_INITIAL": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "first equipment intial "
        },
        "FIRST_EQUIPMENT_NUMBER": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "first equipment number "
        },
        "SOLE_PACKAGED_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PACKAGED_ITEM",
          "info": "only one equipment and with only one item "
        },
        "REPORTED_BS_STATUS_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_CODE",
          "info": "latest reported event for shipment "
        },
        "REPORTING_SCAC": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "reporting scac "
        },
        "EQUIPMENT_DESTINATION": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "equipment destination "
        },
        "PREV_REPORTED_BS_STATUS_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_CODE",
          "info": "previous reported event for shipment "
        },
        "PREV_REPORTING_SCAC": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "previous reporting scac "
        },
        "PREV_EQUIPMENT_DESTINATION": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "previous equipment destination"
        }
      },
      "fk_tables": [
        "ALLOCATION",
        "ALLOCATION_BASE",
        "ALLOCATION_D",
        "ALLOCATION_OB_LINE",
        "CLAIM",
        "CONTAINER_GROUP",
        "DM_TRANSACTION",
        "DM_TRANSACTION_LINEITEM",
        "DRIVER_ASSIGNMENT",
        "GROUND_SCHED_GEN_D",
        "HOS_DAILY_SUMMARY",
        "INVOICE_SHIPMENT",
        "ORDER_MOVEMENT",
        "RATE_GEO_TIME_PERIOD_D",
        "ROUTE_INSTANCE_LEG",
        "SHIPMENT_ACCESSORIAL",
        "SHIPMENT_ACTIONS",
        "SHIPMENT_AGENT_RSP",
        "SHIPMENT_BILL",
        "SHIPMENT_COST",
        "SHIPMENT_COST_REF",
        "SHIPMENT_INFEASIBILITY",
        "SHIPMENT_INF_COST",
        "SHIPMENT_INVOLVED_PARTY",
        "SHIPMENT_ORDER_RELEASE_JOIN",
        "SHIPMENT_REFNUM",
        "SHIPMENT_REMARK",
        "SHIPMENT_REQDOC",
        "SHIPMENT_SPECIAL_SERVICE",
        "SHIPMENT_STATUS",
        "SHIPMENT_STOP",
        "SHIPMENT_S_EQUIPMENT_JOIN",
        "SHIPMENT_TEXT",
        "SHIPMENT_TR_EVENT_CONTACT",
        "SHIP_COMMIT_ALLOC_JOIN",
        "SHIP_COMMIT_COUNT_JOIN",
        "SHIP_DOC_PRINT_LOG",
        "SHIP_GROUP_D",
        "SHIP_GROUP_D_OR",
        "SHIP_SPEC_SVC_SEC_CHARGE_JOIN",
        "SS_STATUS_HISTORY",
        "TENDER_COLLABORATION",
        "WORK_ASSIGNMENT_D",
        "WORK_INVOICE_SHIPMENT_JOIN"
      ]
    }
  }
};
