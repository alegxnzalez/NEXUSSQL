// RATE_GEO.js

window.RATE_GEO = {
  "tables": {
    "RATE_GEO": {
      "columns": {
        "RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the rate geo. "
        },
        "RATE_GEO_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the rate geo. "
        },
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "RATE_OFFERING",
          "info": "Indicates the rate offering to which this rate reo record is linked. "
        },
        "X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "X_LANE",
          "info": "Indicates the lane definition (the from and to geo hierarchies) that this rate geo record will cover. "
        },
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE",
          "info": "Links the rate geo record to an equipment group profile that, if provided, will constrain the rate to only use equipment groups identified as compatible based on the defined equipment group profile. "
        },
        "RATE_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_SERVICE",
          "info": "Links to the rate service record which, based on the related rate service type, determines how to calculate the timing for a shipment. "
        },
        "MIN_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The minimum charge for a shipment. The minimum charge is absolute minimum charge that applies, so the calculated cost of a shipment will be compared to the minimum charge and the cost will always be greater than or equal to the minimum charge. "
        },
        "MIN_COST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The minimum charge currency code. "
        },
        "MIN_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The minimum charge in the base currency. "
        },
        "TOTAL_STOPS_CONSTRAINT": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "Constraint value for the total number of stops (pickup and delivery) that this rate can be used for. "
        },
        "PICKUP_STOPS_CONSTRAINT": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "Constraint value for the number of pickup stops that this rate can be used for. "
        },
        "DELIVERY_STOPS_CONSTRAINT": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "Constraint value for the number of delivery stops that this rate can be used for. "
        },
        "CIRCUITY_ALLOWANCE_PERCENT": {
          "type": "NUMBER(5,2)",
          "nullable": true,
          "info": "The allowed amount of out of route distance (as a percent of the direct source to final destination distance) that is free before circuitous distance cost are charged. \nCircuity Allowance Percent = (t/d-1)*100 where:\nt is the allowed total distance traveled between the first and last stop of the shipment.\nd is the shortest distance between the first and last stop of the shipment.\nIf the allowed total distance is 1500 miles and the distance between the first and last stop is 1300 miles, Circuity Allowance Percent = (1500/1300-1)*100 = (1.15-1)*100 = 15%. The lower the percentage, the more in line the route must be. "
        },
        "CIRCUITY_DISTANCE_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The per distance unit charge for each unit over the included/free amount. "
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
          "info": "The rate constraint that defines the maximum circuity percent for the rate. If this value is exceeded, the rate cannot be applied to the shipment. To use this field, you must have a value in the Circuity Distance Cost field. If there is no additional cost applicable, then enter a cost of 0.00. "
        },
        "MAX_CIRCUITY_DISTANCE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The rate constraint that defines the maximum circuity distance for the rate. If this value is exceeded, the rate cannot be applied to the shipment. To use this field, you must have a value in the Circuity Distance Cost field. If there is no additional cost applicable, then enter a cost of 0.00. "
        },
        "MAX_CIRCUITY_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The distance unit of measure for calculating out of route percent or distance and related charges. "
        },
        "MAX_CIRCUITY_DISTANCE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The max circuity distance in base units. "
        },
        "STOPS_INCLUDED_RATE": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "The Stops Included Rate field indicates the number of free stops included in the rate before stop-off charges apply. The source and destination locations count as stops so, typically, the minimum number of stops included in the rate is 2. Additional charges apply for all stops not included in the rate. "
        },
        "FLEX_COMMODITY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "FLEX_COMMODITY_PROFILE",
          "info": "The GID for the flex commodity profile. "
        },
        "RATE_QUALITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_QUALITY",
          "info": "The GID for rate quality. "
        },
        "SHIPPER_MIN_VALUE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "HIDE "
        },
        "MIN_STOPS": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "Value for the minimum number of stops required for this rate to apply. "
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
          "info": "HIDE "
        },
        "RATE_ZONE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_ZONE_PROFILE",
          "info": "The GID for the rate zone profile. "
        },
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The GID for the location. "
        },
        "ROUTE_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ROUTE_CODE",
          "info": "The GID for the route code. "
        },
        "DIM_RATE_FACTOR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DIM_RATE_FACTOR",
          "info": "The GID for the dim rate factor. "
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date the rate is effective from. "
        },
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date the rate expires, and should no longer be considered for planning. "
        },
        "ALLOW_UNCOSTED_LINE_ITEMS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Allow Uncosted Line Items (Y/N) is used when there are one or more ratable objects on the shipment which are not charged or considered for rating when rating a shipment using rate record.\nSelected: Some basis options within a shipment pass through the rating engine without a charge if other basis options qualify. For example, if a shipment contains four line items, and a rate is found that contains charges for 3 of those items, that rate qualifies for the shipment and the fourth line item ships for free. If there is a conditional charge and a minimum charge, and the conditional charge does not apply, the minimum charge will always be applied. Cleared: This rate only qualifies if all basis options can be charged. "
        },
        "SHIPPER_MIN_VALUE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the shipper minimum value. "
        },
        "MULTI_BASE_GROUPS_RULE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "A",
            "M",
            "X"
          ],
          "info": "The multi base group rule determines how the results from multiple rate cost groups are evaluated. Values A/M/X. Options are:\nAdd the Cost,\nSelect the Least Cost,\nSelect the Greatest Cost. \nRate Cost Groups allow you to group rate costs together. \nNote: To use Rate Cost Groups, you must have rate groups active within your user preferences. "
        },
        "RAIL_INTER_MODAL_PLAN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RAIL_INTER_MODAL_PLAN",
          "info": "The rail inter-modal plan GID.  i.e. Plan 20 - door-to-door, Plan 25 - ramp-to-ramp, etc. "
        },
        "CUSTOMER_RATE_CODE": {
          "type": "CHAR(1)",
          "nullable": true,
          "values": [
            "C",
            "S"
          ],
          "info": "This code signifies what rate is used on a Leg; either \"C\" for the Customer's rate, or \"S\" for the Shipper's rate. "
        },
        "COFC_TOFC": {
          "type": "CHAR(1)",
          "nullable": true,
          "values": [
            "C",
            "T",
            "F"
          ],
          "info": "The Container-On-Flat-Car/Trailer-On-Flat-Car code used along with the Rail Inter Modal Plan GID  to determine the  rate. "
        },
        "EXPIRE_MARK_ID": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Used to indicate that the rate has been marked for expiration. "
        },
        "VIA_SRC_LOC_PROF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_PROFILE",
          "info": "VIA Locations are used when rating and routing international shipments. Rates are valid when the data specified here matches the VIA Locations set up on an itinerary. This field provides the profile GID for the profile/list of source via locations. "
        },
        "VIA_DEST_LOC_PROF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_PROFILE",
          "info": "VIA Locations are used when rating and routing international shipments. Rates are valid when the data specified here matches the VIA Locations set up on an itinerary. This field provides the profile GID for the profile/list of destination via locations. "
        },
        "VIA_SRC_LOC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "A VIA Locations is used when rating and routing international shipments. Rates are valid when the data specified here matches the VIA Location set up on an itinerary. This field provides the location GID for a single source via location. "
        },
        "VIA_DEST_LOC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "A VIA Locations is used when rating and routing international shipments. Rates are valid when the data specified here matches the VIA Location set up on an itinerary. This field provides the location GID for a single destination via location. "
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
          "info": "The type of rounding that will occur during rating.  Value are: N=no rounding, I=round to nearest interval, F=floor, and C=ceiling. "
        },
        "ROUNDING_INTERVAL": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Numbers will be rounded (or truncated) to the nearest increment of this value. "
        },
        "ROUNDING_FIELDS_LEVEL": {
          "type": "NUMBER(2)",
          "nullable": true,
          "info": "Determines which kinds of fields will be affected by the rounding settings during costing.  Values are 0-7, where 0=all fields, 1=none, 2=numeric fields only, 3=unit fields (weight, etc.), 4=currency, 5=numeric and unit fields, 6=numeric and currency fields, and 7=unit and currency fields. "
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
          "info": "Determines when to apply the rounding rules.  Values are A/N/C/O where A=always, N=never, C=conditionals only, and O=cost calculations only. "
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
          "info": "When to apply deficit calculations. Values are Y/N/P where Y = Yes, N = No and P = Payant Pour. "
        },
        "BUY_SERVPROV_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV_PROFILE",
          "info": "The ID of the service provider profile to be used when building buy shipments. "
        },
        "BUY_RATE_GEO_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO_PROFILE",
          "info": "The ID of the rate geo profile to be used when building buy shipments. "
        },
        "PAYMENT_METHOD_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PAYMENT_METHOD_CODE",
          "info": "Optional payment method for the rate record "
        },
        "IS_MASTER_OVERRIDES_BASE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, the BASE rate will not be evaluated and applied for this rate geo. "
        },
        "HAZARDOUS_RATE_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "N",
            "A",
            "H"
          ],
          "info": "Qualifies how the rate should be used for shipments with hazardous materials. The Hazardous Rate Type has three options which can be used to indicate whether the rate can be used for shipments with or without hazardous materials. The options are:\nAllows Hazardous Materials\nHazardous Materials Only\nNon-Hazardous Materials Only "
        },
        "IS_QUOTE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Most commonly applicable to spot rates; indicates if this rate is to be found by rate finding logic. During RIQ, if the attached rate offering is a spot rate, the rate geo can only be used if quote is checked. "
        },
        "DOMAIN_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DOMAIN_PROFILE",
          "info": "Allows you to assign a domain profile ID which defines the compatible or incompatible domains for rate. "
        },
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "TRUE FALSE flag indicating if the rate is active or not. "
        },
        "RO_TIME_PERIOD_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RO_TIME_PERIOD_DEF",
          "info": "The global ID for the rate offering time period definition which is used to define the time periods for tiered rates. "
        },
        "RATE_GEO_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "System generated unique identifier for a rate geo. For internal use only. "
        },
        "LOGIC_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOGIC_CONFIG",
          "info": "Specifies the logic configuration group ID used to look up any logic parameters specified as charge multipliers on costs.  If not null, overrides value specified on the owning rate offering. "
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
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "RATE_GEO_DESC": {
          "type": "VARCHAR2(255)",
          "nullable": true,
          "info": "The rate geo description. "
        },
        "IS_FOR_BEYOND": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "The From Beyond and For Beyond check boxes allow the existence of two rates with the same geography, such as SPLC to SPLC, to exist with one being allowable for use with Rule 11 and the other one not. Since you cannot have the same GID, this allows you to have the flexibility. The For Beyond check box is for a leg going into a junction as defined on Rule 11 Route Code. The From Beyond check box is for a leg going from a junction. Select both check boxes for a leg going from a junction to a junction. "
        },
        "IS_FROM_BEYOND": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "The From Beyond and For Beyond check boxes allow the existence of two rates with the same geography, such as SPLC to SPLC, to exist with one being allowable for use with Rule 11 and the other one not. Since you cannot have the same GID, this allows you to have the flexibility. The For Beyond check box is for a leg going into a junction as defined on Rule 11 Route Code. The From Beyond check box is for a leg going from a junction. Select both check boxes for a leg going from a junction to a junction. "
        },
        "CORPORATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CORPORATION_PROFILE",
          "info": "Allows you to constrain the usage of the rate during the planning based the compatibility definition provided by the assigned corporation profile. "
        },
        "PARENT_RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Used for rate maintenance and is provided so you can track the different versions of your rates during the approval process. "
        },
        "IS_SOURCING_RATE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "This column is named as IS_SOURCING_RATE to maintain consistency with RATE_OFFERING table but used to serve the purpose of IS_READ_ONLY in the UI. "
        },
        "CALC_CHARGEABLE_WT_VOL_WITH": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "Calculate Chargeable Weight/Volume Using provides you with options for calculating the chargeable weight. If you select this field value as \"Shipment Total Dimensional Weight/Volume\", chargeable weight/volume will be calculated based on the Shipment Total Dimensional Weight/Volume. If you select this field value as \"Sum of Individual Ship Unit Dimensional Weight/Volume\", chargeable weight/volume will be calculated based on the Sum of Individual Ship Unit Dimensional Weight/Volume."
        }
      },
      "fk_tables": [
        "DM_RULE",
        "DM_RULE_D",
        "DM_TRANSACTION_LINEITEM",
        "LEG",
        "LOGISTICS_GUIDE_DETAIL",
        "NFRC_RULE",
        "OB_LEG_CONSTRAINT",
        "OB_ORDER_BASE",
        "ORDER_MOVEMENT",
        "ORDER_RELEASE",
        "ORDER_RELEASE_LEG_CONSTRAINT",
        "P_BID",
        "P_PROJECT",
        "QUOTE_COST_OPTION_SHIPMENT",
        "RATE_FACTOR_RULE_JOIN",
        "RATE_GEO_ACCESSORIAL",
        "RATE_GEO_COST_GROUP",
        "RATE_GEO_PROFILE_D",
        "RATE_GEO_REFNUM",
        "RATE_GEO_REMARK",
        "RATE_GEO_STOPS",
        "RATE_GEO_TIME_PERIOD",
        "RATE_LOAD_CONFIG",
        "RATE_LOAD_DATA",
        "RATE_LOAD_RR_D",
        "RATE_LOAD_TAB_DEFINITION",
        "RG_SPECIAL_SERVICE",
        "RO_NMFC_CODE_SUBST",
        "SC_RULE_CONTRACT",
        "SECONDARY_CHARGE_RULE",
        "SHIPMENT",
        "SMC_DISCOUNT",
        "TENDER_COLLABORATION",
        "TENDER_COLLAB_SERVPROV",
        "TEXT_TEMPLATE_PROFILE"
      ]
    }
  }
};
