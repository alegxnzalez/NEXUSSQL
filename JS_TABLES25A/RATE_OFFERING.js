// RATE_OFFERING.js

window.RATE_OFFERING = {
  "tables": {
    "RATE_OFFERING": {
      "columns": {
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the rate offering. "
        },
        "RATE_OFFERING_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the rate offering. "
        },
        "RATE_OFFERING_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "RATE_OFFERING_TYPE",
          "info": "The GID for the rate offering type. "
        },
        "RATE_OFFERING_DESC": {
          "type": "VARCHAR2(255)",
          "nullable": true,
          "info": "Stores descriptive information about the rate offering. "
        },
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV",
          "info": "The GID for the service provider. "
        },
        "RATE_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GROUP",
          "info": "The GID for the rate group. "
        },
        "CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "The GID for the currency. "
        },
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "TRANSPORT_MODE",
          "info": "The GID for the transport mode. "
        },
        "USER_CLASSIFICATION1": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The user classification fields are provided to capture information about the rate offering's usage. VARCHAR2(30) "
        },
        "USER_CLASSIFICATION2": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The user classification fields are provided to capture information about the rate offering's usage. VARCHAR2(30) "
        },
        "USER_CLASSIFICATION3": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The user classification fields are provided to capture information about the rate offering's usage. VARCHAR2(30) "
        },
        "USER_CLASSIFICATION4": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The user classification fields are provided to capture information about the rate offering's usage. VARCHAR2(30) "
        },
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE",
          "info": "The GID for the equipment group profile. "
        },
        "RATE_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_SERVICE",
          "info": "The GID for the rate service. "
        },
        "RATE_VERSION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "RATE_VERSION",
          "info": "The GID for the rate version. "
        },
        "MAX_DISTANCE_CONSTRAINT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum distance field is intended to be used to match the rate offering with shipments. The system calculates the distance between the source and destination address of the shipment being considered, then compares that calculated distance to the maximum Distance field value to see if the rate offering matches or is below the maximum distance constraint. "
        },
        "MAX_DIST_CONSTRAINT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the maximum distance. Usually MI or KM. "
        },
        "MAX_DIST_CONSTRAINT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum distance constraint value in base units. "
        },
        "MIN_WEIGHT_CONSTRAINT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The minimum weight constraint is used when matching rate offerings with shipments. If a shipment's weight is less than the minimum value, then this rate offering does not qualify for the shipment in question. "
        },
        "MIN_WEIGHT_CONSTRAINT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the minimum weight constraint. "
        },
        "MIN_WEIGHT_CONSTRAINT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The minimum weight constraint in base units. "
        },
        "MAX_WEIGHT_CONSTRAINT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum weight constraint is used when matching rate offerings with shipments. If a shipment's weight is greater than the maximum value, then this rate offering does not qualify for the shipment in question. "
        },
        "MAX_WEIGHT_CONSTRAINT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the maximum weight constraint. "
        },
        "MAX_WEIGHT_CONSTRAINT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum weight constrain in base units. "
        },
        "MIN_VOLUME_CONSTRAINT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The minimum volume constraint is used when matching rate offerings with shipments. If a shipment's volume is less than the minimum value, then this rate offering does not qualify for the shipment in question. "
        },
        "MIN_VOLUME_CONSTRAINT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the maximum volume constraint. "
        },
        "MIN_VOLUME_CONSTRAINT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The minimum volume constraint in base units. "
        },
        "MAX_VOLUME_CONSTRAINT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum volume constraint is used when matching rate offerings with shipments. If a shipment's volume is greater than the maximum value, then this rate offering does not qualify for the shipment in question. "
        },
        "MAX_VOLUME_CONSTRAINT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the maximum volume constraint. "
        },
        "MAX_VOLUME_CONSTRAINT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The unit of measure for the maximum weight constraint. "
        },
        "MAX_SHIP_UNIT_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum ship unit weight constraint is used when matching rate offerings with shipments. If any ship unit on the shipment exceeds the maximum ship unit weight, this rate offering does not qualify for the shipment in question. "
        },
        "MAX_SHIP_UNIT_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the maximum ship unit weight constraint. "
        },
        "MAX_SHIP_UNIT_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum ship unit weight in base units. "
        },
        "TARIFF_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "The Tariff Name fields allows you to put the name of the tariff that the rate offering is related to. For example, if this is a base rate offering you can put the name of the tariff that the rate offering is based on/is using. "
        },
        "MIN_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The Minimum Cost field stores the absolute minimum charge that applies for the rate offering. "
        },
        "MIN_COST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for minimum cost. "
        },
        "MIN_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The minimum cost in base units. "
        },
        "RATE_DISTANCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_DISTANCE",
          "info": "The GID for rate distance. "
        },
        "RATE_QUALITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_QUALITY",
          "info": "The GID for rate quantity. "
        },
        "RATE_CLASSIFICATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_CLASSIFICATION",
          "info": "The GID for rate classification. "
        },
        "EXTERNAL_RATING_ENGINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXTERNAL_RATING_ENGINE",
          "info": "The GID for the external rating engine. "
        },
        "CIRCUITY_ALLOWANCE_PERCENT": {
          "type": "NUMBER(5,2)",
          "nullable": true,
          "info": "Circuity Allowance Percent indicates the allowed amount of out of route distance (as a percent of the direct source to final destination distance) that is free/ before Circuitous Distance Cost are charged. \nCircuity Allowance Percent = (t/d-1)*100 where:\nt is the allowed total distance traveled between the first and last stop of the shipment.\nd is the shortest distance between the first and last stop of the shipment.\nIf the allowed total distance is 1500 miles and the distance between the first and last stop is 1300 miles, Circuity Allowance Percent = (1500/1300-1)*100 = (1.15-1)*100 = 15%. The lower the percentage, the more in line the route must be. "
        },
        "TOTAL_STOPS_CONSTRAINT": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "For rate offerings where the service provider will provide multi-stop coverage, the total stops constraints sets a constraint on the total number of stops (pickup and delivery) that the rate can be used for. "
        },
        "PICKUP_STOPS_CONSTRAINT": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "For rate offerings where the service provider will provide multi-stop coverage, the total pickup stops constraints sets a constraint on the total number of pickup stops that the rate can be used for. "
        },
        "DELIVERY_STOPS_CONSTRAINT": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "For rate offerings where the service provider will provide multi-stop coverage, the total delivery stops constraints sets a constraint on the total number of delivery stops that the rate can be used for. "
        },
        "CIRCUITY_DISTANCE_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Circuity Distance Cost is the per distance unit charge for each unit over the included/free amount. "
        },
        "CIRCUITY_DISTANCE_COST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the circuity distance cost. "
        },
        "CIRCUITY_DISTANCE_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The circuity distance cost in base units. "
        },
        "MAX_CIRCUITY_PERCENT": {
          "type": "NUMBER(5,2)",
          "nullable": true,
          "info": "The rate offering constraint that defines the maximum circuity percent for the rate offering. If this value is exceeded, the rate offering cannot be applied to the shipment. To use this field, you must have a value in the Circuity Distance Cost field. If there is no additional cost applicable, then enter a cost of 0.00. "
        },
        "MAX_CIRCUITY_DISTANCE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The rate offering constraint that defines the maximum circuity distance for the rate offering. If this value is exceeded, the rate offering cannot be applied to the shipment. To use this field, you must have a value in the Circuity Distance Cost field. If there is no additional cost applicable, then enter a cost of 0.00. "
        },
        "MAX_CIRCUITY_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Defines the distance unit of measure for calculating out of route percent or distance and related charges. "
        },
        "MAX_CIRCUITY_DISTANCE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum circuity distance in base units. "
        },
        "STOPS_INCLUDED_IN_RATE": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "The Stops Included in Rate field indicates the number of free stops included in the rate offering before stop-off charges apply. The source and destination locations count as stops so, typically, the minimum number of stops included in the rate is 2. Additional charges apply for all stops not included in the rate. "
        },
        "FLEX_COMMODITY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "FLEX_COMMODITY_PROFILE",
          "info": "The GID for the flex commodity profile. "
        },
        "SHIPPER_MIN_VALUE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "HIDE "
        },
        "SHIPPER_MIN_VALUE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the shipper minimum value. "
        },
        "SHIPPER_MIN_VALUE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The shipper minimum value in base units. "
        },
        "EXCHANGE_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "EXCHANGE_RATE",
          "info": "The GID for the exchange rate. "
        },
        "COMMODITY_USAGE": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "F",
            "C"
          ],
          "info": "Indicates if the rate offering is or is not a commodity based rate offering i.e., are rates based on the classification of the freight. Values (F/C). "
        },
        "FAK_RATE_AS": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Freight all kinds rate as commodity. Values (Y/N). "
        },
        "FAK_FLEX_COMMODITY_VALUE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Freight all kinds rate as commodity value. "
        },
        "RM_ABSOLUTE_MIN_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The Absolute Minimum Base Charge field determines the minimum charge that applies regardless of discounted savings. "
        },
        "RM_ABSOLUTE_MIN_COST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the absolute minimum base charge. "
        },
        "RM_ABSOLUTE_MIN_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The absolute minimum base charge in base units. "
        },
        "MAX_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The absolute maximum cost that applies, regardless of actual rated cost to ship. "
        },
        "MAX_COST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the maximum cost. "
        },
        "MAX_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum cost in base units. "
        },
        "MIN_STOPS": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "The absolute minimum number of stops allowed for shipments using this rate. "
        },
        "SHORT_LINE_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "HIDE "
        },
        "SHORT_LINE_COST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the short line cost. "
        },
        "SHORT_LINE_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The short line cost in base units. "
        },
        "MIN_LENGTH_CONSTRAINT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The minimum length constraint is used when matching the rate offering to a shipment. If a ship unit's length is less than the minimum, the rate offering does not qualify. "
        },
        "MIN_LENGTH_CONSTRAINT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the minimum length constraint. "
        },
        "MIN_LENGTH_CONSTRAINT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The minimum length constraint in base units. "
        },
        "MAX_LENGTH_CONSTRAINT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum length constraint is used when matching the rate offering to a shipment. If a ship unit's length requirements is greater than the maximum length constraint, the rate offering does not qualify. "
        },
        "MAX_LENGTH_CONSTRAINT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the maximum length constraint. "
        },
        "MAX_LENGTH_CONSTRAINT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum length constraint in base units. "
        },
        "MIN_WIDTH_CONSTRAINT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The minimum width constraint is used when matching the rate offering to a shipment. If a ship unit's width is less than the minimum, the rate offering does not qualify. "
        },
        "MIN_WIDTH_CONSTRAINT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the minimum width constraint. "
        },
        "MIN_WIDTH_CONSTRAINT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The minimum width constraint in base units. "
        },
        "MAX_WIDTH_CONSTRAINT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum width constraint is used when matching the rate offering to a shipment. If a ship unit's length requirements is greater than the maximum width constraint, the rate offering does not qualify. "
        },
        "MAX_WIDTH_CONSTRAINT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the maximum width constraint. "
        },
        "MAX_WIDTH_CONSTRAINT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum width constraint in base units. "
        },
        "MIN_HEIGHT_CONSTRAINT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The minimum height constraint is used when matching the rate offering to a shipment. If a ship unit's height is less than the minimum, the rate offering does not qualify. "
        },
        "MIN_HEIGHT_CONSTRAINT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the minimum height constraint. "
        },
        "MIN_HEIGHT_CONSTRAINT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The minimum height constraint in base units. "
        },
        "MAX_HEIGHT_CONSTRAINT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum height constraint is used when matching the rate offering to a shipment. If a ship units' length requirements is greater than the maximum height constraint the rate offering does not qualify. "
        },
        "MAX_HEIGHT_CONSTRAINT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the maximum height constraint. "
        },
        "MAX_HEIGHT_CONSTRAINT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum height constraint in base units. "
        },
        "MIN_GIRTH_CONSTRAINT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The minimum girth constraint is used when matching the rate offering to a shipment. If a ship unit's girth is less than the minimum, the rate offering does not qualify. Note: Dimensional girth is calculated as length + (2xWidth + 2xHeight). "
        },
        "MIN_GIRTH_CONSTRAINT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the minimum girth constraint. "
        },
        "MIN_GIRTH_CONSTRAINT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The minimum girth constraint in base units. "
        },
        "MAX_GIRTH_CONSTRAINT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum girth constraint is used when matching the rate offering to a shipment. If a ship unit's length requirements is greater than the maximum girth constraint the rate offering does not qualify. Note: Dimensional girth is calculated as length + (2xWidth + 2xHeight). "
        },
        "MAX_GIRTH_CONSTRAINT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the maximum girth constraint. "
        },
        "MAX_GIRTH_CONSTRAINT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum girth constraint in base units. "
        },
        "WEIGHT_BREAK_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "WEIGHT_BREAK_PROFILE",
          "info": "The GID for the weight break profile. "
        },
        "MULTI_STOP_COST_METHOD": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "L",
            "F",
            "N"
          ],
          "info": "HIDE "
        },
        "WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for weight. "
        },
        "VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for volume. "
        },
        "DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for distance. "
        },
        "DIM_RATE_FACTOR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DIM_RATE_FACTOR",
          "info": "The GID for the DIM rate factor. "
        },
        "PERSPECTIVE": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "B",
            "S",
            "A"
          ],
          "info": "Indicates if the rate offering can be used for Buy shipment rating (B) or Sell shipment rating (S) or if the rate offering supports Both Buy and Sell shipment rating (A). Values (B/S/A). "
        },
        "CORPORATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CORPORATION_PROFILE",
          "info": "The GID for the corporation profile. "
        },
        "CAPACITY_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CAPACITY_GROUP",
          "info": "The GID for the capacity group. "
        },
        "CM_MAX_NUM_SHIPMENTS": {
          "type": "NUMBER(5)",
          "nullable": true,
          "info": "The maximum shipments in a continuous move tour. "
        },
        "CM_IS_SAME_EQUIP": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "Indicates whether the shipments in the continuous move tour are restricted to utilize the same equipment type. "
        },
        "CM_PREV_SHIPMENT_PERCENT": {
          "type": "NUMBER(5,2)",
          "nullable": true,
          "info": "The percentage of the empty leg cost allocated to previous shipment. "
        },
        "CM_IS_PERCENT_OF_DISTANCE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "Indicates whether the percent of the total loaded distance is used to allocate the empty leg cost. "
        },
        "TARIFF_REFNUM_QUALIFIER": {
          "type": "VARCHAR2(3)",
          "nullable": true,
          "info": "Tariff Refnum Qualifier is an informational field that allows you to qualify the Tariff Ref Num field. For example you can qualify the Tariff Ref Num fields with the Tariff Refnum Qualifier fields using standard qualifier that describe the relationship of the shipper and service provider regarding the prices related to the rate offering. The property glog.shipment.tarifffields.active determines if tariff fields are automatically copied from a rate offering to a shipment. "
        },
        "TARIFF_REFNUM": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Tariff Refnum is an informational field that can be used to store the rate offerings related tariff number. The Tariff Refnum should be qualified by the Tariff Refnum Qualifier. "
        },
        "TARIFF_PUB_AUTHORITY": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "info": "Tariff Pub Authority is an informational field that can be used to store the rate offerings related tariff publication authority. "
        },
        "TARIFF_REG_AGENCY_CODE": {
          "type": "VARCHAR2(5)",
          "nullable": true,
          "info": "The Tariff Reg Agency Code is an informational field that is meant to store information about the regulatory agency that the rates are fled with. For example the STB (Surface Transportation Board) or ICC) Interstate Commerce Commission. "
        },
        "TARIFF_AGENCY_CODE": {
          "type": "VARCHAR2(4)",
          "nullable": true,
          "info": "Tariff Agency Code is an informational field that can be used to store the service provider SCAC or initials of the entity who owns the tariff such as the Railroad Publication Service. "
        },
        "TARIFF_ISSUING_CARRIER_ID": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "info": "The Tariff Issuing Carrier field is an informational field that is meant to store information from the service provider related to the tariff. Examples are C, JQ, SCQ, QTAMR, UPLQ, BNQ, X, BC, NSPQ. "
        },
        "TARIFF_REFNUM_SUFFIX": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "info": "Tariff Refnum Suffix is a suffix field for the tariff reference number. "
        },
        "TARIFF_SUPPLEMENT_ID": {
          "type": "VARCHAR2(4)",
          "nullable": true,
          "info": "The Tariff Supplement ID field is an informational field that is meant to provide information related to tariff amendments, revisions, or supplements of the rate authority. "
        },
        "TARIFF_EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The Tariff Effective Date is an informational field that stores the date when the tariff goes into effect or can be used. This is not the rate offering effective date. "
        },
        "ALLOW_UNCOSTED_LINE_ITEMS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Allow Uncosted Line Items (Y/N) is used when there are one or more ratable objects on the shipment which are not charged or considered for rating when rating a shipment using rate record.\nMarked: Some basis options within a shipment pass through the rating engine without a charge if other basis options qualify. For example, if a shipment contains four line items, and a rate is found that contains charges for 3 of those items, that rate qualifies for the shipment and the fourth line item ships for free. "
        },
        "RAIL_INTER_MODAL_PLAN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RAIL_INTER_MODAL_PLAN",
          "info": "The GID for the rail inter-modal plan.  I.e., Plan 20: door-to-door, Plan 25: ramp-to-ramp, etc. "
        },
        "CUSTOMER_RATE_CODE": {
          "type": "CHAR(1)",
          "nullable": true,
          "values": [
            "C",
            "S"
          ],
          "info": "This code signifies what rate is used on a leg; either 'C' for the Customer's rate, or 'S' for the Shipper's rate. "
        },
        "COFC_TOFC": {
          "type": "CHAR(1)",
          "nullable": true,
          "values": [
            "C",
            "T",
            "F"
          ],
          "info": "Container-On-Flat-Car Trailer-On-Flat-Car code used along with the Rail Inter Modal Plan to determine the rate. "
        },
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if the rate offering is active (Y) or inactive (N). If inactive (N) the rate offering will not be used in planning. Values (Y/N). "
        },
        "HANDLES_UNKNOWN_SHIPPER": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "HIDE "
        },
        "USES_TIME_BASED_RATES": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "HIDE "
        },
        "EXPIRE_MARK_ID": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Indicates that the rate has been marked for expiration. "
        },
        "MIN_DISTANCE_CONSTRAINT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The minimum distance required for this rate offering to be valid. "
        },
        "MIN_DISTANCE_CONSTRNT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure. "
        },
        "MIN_DISTANCE_CONSTRAINT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The minimum distance required for this rate offering to be valid, in base units. "
        },
        "REGION_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION_GROUP",
          "info": "The Region Group field is an informational region group that allows you to define a set of regions that represent the regions covered by the rate offering. "
        },
        "IS_DEPOT_APPLICABLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If the Depot Applicable option is selected, then the depot stops (source and/or destination locations) will be saved to the shipment. If it is not selected, the depot stops will not be saved to the shipment, but they will be charged and saved to the shipment financials if it is defined in the itinerary. Values (Y/N). "
        },
        "RECALCULATE_COST": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "For some time-based rates, the shipment cost calculated during bulk plan and build shipment process may need to be recalculated since it is time dependent. The Recalculate Cost option is used to force the recalculating of cost after a shipment is built. This option works in conjunction with the Rerate All Shipments After Bulk Plan parameter as follows. If the Recalculate Cost is set, planning logic will make sure to account for service time-based rating costs when making planning decisions, and that this has the potential for increasing run-time.\nIf Rerate All Shipments After Bulk Plan is TRUE, shipments will be re-rated regardless of the Recalculate Cost check box.\nIf Rerate All Shipments After Bulk Plan is FALSE and the Recalculate Cost check box is selected, then the system recalculates the shipment cost keeping the same service provider and equipment.\nIf Rerate All Shipments After Bulk Plan is FALSE and the Recalculate Cost option check box is cleared, then the shipment cost is not recalculated. "
        },
        "TRACK_CAPACITY_USAGE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "The Track Capacity Usage field when set to Y, and the Capacity Group field if provided, causes the system to track capacity usage during the planning process.\nIf the Track Capacity Usage is N or the Capacity Group field is blank, the system will not track capacity usage during the planning process. Values (Y/N). "
        },
        "ROUNDING_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "N",
            "I",
            "F",
            "C"
          ],
          "info": "The type of rounding that will occur during rating. Value are: N=no rounding, I=round to nearest interval, F=floor, and C=ceiling. "
        },
        "ROUNDING_INTERVAL": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Numbers will be rounded (or truncated) to the nearest increment of this value. "
        },
        "ROUNDING_FIELDS_LEVEL": {
          "type": "NUMBER(2)",
          "nullable": true,
          "info": "Determines which kinds of fields will be affected by the rounding settings during costing. Values are 0-7, where 0=all fields, 1=none, 2=numeric fields only, 3=unit fields (weight, etc.), 4=currency, 5=numeric and unit fields, 6=numeric and currency fields, and 7=unit and currency fields. "
        },
        "ROUNDING_APPLICATION": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "A",
            "N",
            "C",
            "O"
          ],
          "info": "Determines when to apply the rounding rules. Values are A/N/C/O where A=always, N=never, C=conditionals only, and O=cost calculations only. "
        },
        "DEFICIT_CALCULATIONS_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N",
            "P",
            "F",
            "R"
          ],
          "info": "When to apply deficit calculations. Values are Y/N/P where Y = Yes, N = No and P = Payant Pour "
        },
        "IS_CONTRACT_RATE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Informational indicator to identify rate offerings that are managed for a client in a 3rd party logistics provider setup. Values (Y/N). "
        },
        "USE_TACT_AS_DISPLAY_RATE_1": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, the build shipment logic will invoke the rating engine a second time, restricting it's search to TACT rates only, and apply the result to the shipment as a display rate. "
        },
        "IS_DIRECT_ONLY_RATE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, this rate will only be applicable to direct shipments. "
        },
        "HAZARDOUS_RATE_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "N",
            "A",
            "H"
          ],
          "info": "N - Applies to shipments with no hazardous items, H - Applies only to shipments with hazardous items, A - Applies to hazardous and non-hazardous shipments. "
        },
        "USE_TACT_AS_DISPLAY_RATE_2": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, the build shipment logic will invoke the rating engine a second time, restricting it's search to TACT rates only, and apply the result. "
        },
        "USE_TACT_AS_DISPLAY_RATE_3": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, the build shipment logic will invoke the rating engine a second time, restricting it's search to TACT rates only, and apply the result. "
        },
        "DOMAIN_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Providing a domain profile allows for the rate offering to be constrained to the domains in the domain profile and serves as a constraint on the rate offering.\nIf none of the rate offerings have a customer domain profile constraint, then all rate offerings are returned.\nIf some of the rate offerings have customer domain profiles, the rate offerings are grouped by service provider. For each service provider, only the offerings whose domain profile constraint is satisfied are returned. So, given two rate offerings, one with a constraint, and one without a constraint: if the order release domain list is compatible with the constraint, only the rate offering with the constraint is returned, otherwise, only the offering without the constraint is returned. "
        },
        "IS_ROUTE_EXECUTION_RATE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If 'Y', this rate offering is used for Route Execution only. For migration: old existing rate offerings migrated to the default value ('N'). "
        },
        "MIN_TENDER_LEAD_TIME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The lower bound of a tender lead time. That is, if tender lead time of a shipment is less than this lower bound, rate would be invalid. "
        },
        "MIN_TENDER_LEAD_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The minimum tender lead time unit of measure. Days, Hours, minutes. "
        },
        "MIN_TENDER_LEAD_TIME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Minimum tender lead time in base units of measure. "
        },
        "MAX_TENDER_LEAD_TIME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The upper bound of tender lead time. That is, if tender lead time of a shipment is bigger than this upper bound, rate would be invalid. "
        },
        "MAX_TENDER_LEAD_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The maximum tender lead time unit of measure. Days, Hours, minutes. "
        },
        "MAX_TENDER_LEAD_TIME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum tender lead time in base units of measure. "
        },
        "PACKAGE_WEIGHT_MIN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Not a constraint. Weight value used when calculating total shipment minimum package weight. During rating, it will be multiplied by the number of packages on the shipment, and accessed by the Minimum Package Weight RBI. "
        },
        "PACKAGE_WEIGHT_MIN_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Package weight minimum unit of measure. "
        },
        "PACKAGE_WEIGHT_MIN_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Package weight minimum in base unit of measure. "
        },
        "MAX_AVERAGE_PKG_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Constraint. If the total shipment weight/number of packages > this constraint, the rate will not be considered. "
        },
        "MAX_AVERAGE_PKG_WEIGH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the average package weight. "
        },
        "MAX_AVERAGE_PKG_WEIGH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Average package weight in base units of measure. "
        },
        "PACKAGE_COUNT_METHOD": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "L",
            "U"
          ],
          "info": "Determines how packages are counted when testing the Maximum Average Package Weight constraint. L - Use line item package count. U - Ship unit count. "
        },
        "MAX_SHIPUNIT_LINE_PKG_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The ship unit line weight maximum is used to match with ship unit lines. This field represents the maximum value allowed by this contract for the weight of a single package. "
        },
        "MAX_SHIPUNIT_LINE_PKG_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for ship unit line weight maximum. "
        },
        "MAX_SHIPUNIT_LINE_PKG_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum ship unit line package base unit of measure. "
        },
        "MAX_NUM_OF_SHIPMENT_SEGMENTS": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The Max Num of Shipment Segments field determines the maximum number of segments on a shipment. A segment is defined as starting when product is loaded on the equipment and ending when the equipment is completely emptied. "
        },
        "RO_TIME_PERIOD_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RO_TIME_PERIOD_DEF",
          "info": "The time period definition (if any) assigned to the rate offering for the purposes of tiered rating. "
        },
        "EXT_RE_FIELDSET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXT_RE_FIELDSET",
          "info": "Specifies the external rating engine fieldset to be used when invoking an external rating engine using our generic interface. "
        },
        "RATE_OFFERING_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "System generated unique identifier for a rate offering. Internal use only. "
        },
        "LOGIC_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOGIC_CONFIG",
          "info": "Specifies the logic config group ID used to look up any logic parameters specified as charge multipliers. "
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
        "IS_TEMPLATE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Used to identify rate offerings that will be used as a rate record template for Sourcing. Values (Y/N). "
        },
        "IS_SOURCING_RATE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates is the rate offering is a sourcing rate offering. Sourcing rates are view only within the system. Values (Y/N). "
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
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "FALLBACK_RATE_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_SERVICE",
          "info": "The fall back rate service will be used for driving the shipment if the regular rate service is unable to drive the shipment. For example, you may typically have voyage information for two months into the future. However, sometimes a possible order will come in for three months into the future. This works for all rate inquiry types. For example, this will enable you to run rate inquiry Network Rate and Route for this order information, using the same itineraries and rates, and get answers for rate and route even though you do not have voyage information that far in the future. The parameter FALLBACK RS NUM OF DAYS determines how many days into the future to allow use of the fallback rate offering. "
        },
        "PARENT_RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The Parent Rate Offering field is used with rate maintenance. The Parent Rate Offering ID provides a way to track different versions of the rates during the approval process. To compare rate versions, you must specify either a parent rate offering ID or parent rate record ID on any template rate offerings or rate records. "
        },
        "CALC_CHARGEABLE_WT_VOL_WITH": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "This field provides different options for calculating the shipments total weight and volume. \"Shipment Total Dimensional Weight/Volume\", the chargeable weight/volume will be calculated based on the Shipment Total Dimensional Weight/Volume. \"Sum of Individual Ship Unit Dimensional Weight/Volume\", the chargeable weight/volume will be calculated based on the Sum of Individual Ship Unit Dimensional Weight/Volume. "
        },
        "IS_DIGITAL_FREIGHT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If set to Y, then fetch rates from digital freight and use them only for tender. "
        },
        "MAX_DIGI_FRT_PCT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Define a percentage around how much higher the carrier rates are compared to the planned cost of the shipment when using rates from digital freight. "
        },
        "ABSOLUTE_COST_DF": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Absolute cost for digital freight rates. "
        },
        "ABSOLUTE_COST_DF_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Absolute cost in base units. "
        },
        "ABSOLUTE_COST_DF_CURR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The currency GID for the absolute cost. "
        },
        "IS_MARKET_RATE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y then this rate will be used to fetch market rates for the shipment."
        }
      },
      "fk_tables": [
        "ACTIVITY_TIME_DEF",
        "CAPACITY_COMMITMENT_ALLOC_D",
        "CM_ENDING_EXCLUSION_REGION",
        "CM_RULE",
        "COMMIT_ALLOC_USAGE_D",
        "DM_RULE",
        "DM_RULE_D",
        "DM_TRANSACTION_LINEITEM",
        "DRIVER",
        "DRIVER_TYPE",
        "LEG",
        "LOGISTICS_GUIDE_DETAIL",
        "OB_LEG_CONSTRAINT",
        "OB_ORDER_BASE",
        "ORDER_MOVEMENT",
        "ORDER_RELEASE",
        "ORDER_RELEASE_LEG_CONSTRAINT",
        "PLANNING_RATE_OFFERING",
        "P_PROJECT_RATE_OFFERING",
        "QUOTE_COST_OPTION_SHIPMENT",
        "RATE_BASE_DEF",
        "RATE_FACTOR_RULE_JOIN",
        "RATE_GEO",
        "RATE_LOAD_DATA",
        "RATE_LOAD_DEFINITION",
        "RATE_LOAD_RO_D",
        "RATE_LOAD_RR_D",
        "RATE_OFFERING_ACCESSORIAL",
        "RATE_OFFERING_COMMENT",
        "RATE_OFFERING_INV_PARTY",
        "RATE_OFFERING_REMARK",
        "RATE_OFFERING_STOPS",
        "RATE_PREFERENCE_DETAIL",
        "RATE_RULES_AND_TERMS",
        "RESOURCE_SCHEDULE",
        "RESOURCE_SCHEDULE_INSTANCE",
        "RO_LANE_SPECIAL_SERVICE",
        "RO_NMFC_CODE_SUBST",
        "RO_SPECIAL_SERVICE",
        "SC_RULE_CONTRACT",
        "SECONDARY_CHARGE_RULE",
        "SHIPMENT",
        "SHIP_COMMIT_ALLOC_JOIN",
        "SMC_DISCOUNT",
        "TENDER_SERVPROV_SPOT_RATE",
        "TEXT_TEMPLATE_PROFILE",
        "UDC_CLASSIFICATION_LIST_D"
      ]
    }
  }
};
