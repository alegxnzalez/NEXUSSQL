// ORDER_RELEASE_LINE.js

window.ORDER_RELEASE_LINE = {
  "tables": {
    "ORDER_RELEASE_LINE": {
      "columns": {
        "ORDER_RELEASE_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the order base line. "
        },
        "ORDER_RELEASE_LINE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the order base line. "
        },
        "ORDER_RELEASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ORDER_RELEASE",
          "info": "A GID created by the system for the order release. "
        },
        "WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The weight of the item. "
        },
        "WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the weight. "
        },
        "WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The weight in base units. "
        },
        "VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The volume of the item. "
        },
        "VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the volume. "
        },
        "VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The volume in base units. "
        },
        "TAG1": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Additional information about the item. Like the color, size, or code. "
        },
        "TAG2": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Additional information about the item. Like the color, size, or code. "
        },
        "TAG3": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Additional information about the item. Like the color, size, or code. "
        },
        "TAG4": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Additional information about the item. Like the color, size, or code. "
        },
        "DECLARED_VALUE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The declared cost of the item. "
        },
        "DECLARED_VALUE_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The declared value in base units. "
        },
        "DECLARED_VALUE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "The declared value in the base currency. "
        },
        "INITIAL_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITEM",
          "info": "Can be used to define the substitution. "
        },
        "PACKAGING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "The packaging unit (considered an inner pack to the packaged item level) for this order release line. "
        },
        "ITEM_PACKAGE_COUNT": {
          "type": "NUMBER(10)",
          "nullable": false,
          "info": "The packaging unit count associated to the packaging unit for this order release line. "
        },
        "PACKAGED_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "PACKAGED_ITEM",
          "info": "The packaged item GID defining the item associated to this order release line. "
        },
        "BUY_GENERAL_LEDGER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GENERAL_LEDGER_CODE",
          "info": "The general ledger code for the order release line for the buy side (cost). "
        },
        "SELL_GENERAL_LEDGER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GENERAL_LEDGER_CODE",
          "info": "The general ledger code for the order release line for the sell side (revenue). "
        },
        "PACKAGING_UNIT_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The packaging unit count associated to the packaging unit for this order base line. "
        },
        "TRANSPORT_HANDLING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "The transport handling unit that is to be used when building the order release ship unit. If defined here it will take precedence to the data that is defined on the static packaged item table. "
        },
        "NUM_LAYERS_PER_SHIP_UNIT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The number of layers for the transportation handling unit defined here on the order base line. This allows the user to define the TiHi date used to build ship units on the order release per each transactional line passed in, instead of looking to the static TiHi data on the packaged item table. "
        },
        "QUANTITY_PER_LAYER": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The quantity per layer for the transportation handling unit defined here on the order base line. This allows the user to define the TiHi date used to build ship units on the order release per each transactional line passed in, instead of looking to the static TiHi data on the packaged item table. "
        },
        "FREE_ALONG_SIDE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Refers to the seller's price quote for the goods, including the charge for delivery of the goods alongside a vessel at the named port of export. "
        },
        "FREE_ALONG_SIDE_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The free alongside in the base currency. "
        },
        "FREE_ALONG_SIDE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "The free alongside currency GID. "
        },
        "IS_HAZARDOUS": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator defining if the order release line is a hazardous goods. This is a transactional setting instead of looking at the item master definitions. "
        },
        "COMMERCIAL_INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COMMERCIAL_INVOICE",
          "info": "The commercial invoice GID for the object that is associated with this order release line. "
        },
        "COMMERCIAL_INVOICE_DESCRIPTION": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "A description field for the commercial invoice. "
        },
        "SECONDARY_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The order release line can be specified in a secondary weight value for informational purposes. "
        },
        "SECONDARY_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The secondary weight unit of measure. "
        },
        "SECONDARY_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The secondary weight in the base unit of measure. "
        },
        "SECONDARY_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The order release line can be specified in a secondary volume value for informational purposes. "
        },
        "SECONDARY_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The secondary volume unit of measure. "
        },
        "SECONDARY_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The secondary volume in the base unit of measure. "
        },
        "HAZ_HAZMAT_GENERIC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "HAZMAT_GENERIC",
          "info": "The hazmat generic GID is the link between a hazardous material and a hazardous item. "
        },
        "HAZ_HAZMAT_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "HAZMAT_ITEM",
          "info": "The hazmat item GID defines the entry in the hazmat table that contains attributes associated to this order release line. "
        },
        "HAZ_IDENTIFICATION_NUMBER": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The hazardous classification ID is the numeric class of the hazardous material as specified by Department of Transportation regulations. Enter the hazard class in this field. "
        },
        "HAZ_PROPER_SHIPPING_NAME": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "The hazardous proper shipping name for the hazardous material is similar, but not identical to, the hazardous technical name of the material. "
        },
        "HAZ_PACKAGING_GROUP": {
          "type": "VARCHAR2(3)",
          "nullable": true,
          "values": [
            "I",
            "II",
            "III",
            "NA"
          ],
          "info": "The packaging group denotes the classification of hazardous packaging for this material based on the reportable quantity of the material. "
        },
        "HAZ_FLASH_POINT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The hazardous flash point for this material is the lowest temperature at which the vapor of the material (if it is a combustible liquid) can be made to ignite momentarily in air. Enter a numeric value if applicable and select K for Kelvin, F for Fahrenheit, or C for Centigrade as the temperature type. "
        },
        "HAZ_FLASH_POINT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The hazardous flash point temperature unit of measure. "
        },
        "HAZ_FLASH_POINT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The hazardous flash point temperature in the base unit of measure. "
        },
        "HAZ_EMERGENCY_TEMP": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The emergency temperature at which the product will begin the process of self-destructing or breaking down. "
        },
        "HAZ_EMERGENCY_TEMP_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The emergency temperature unit of measure. "
        },
        "HAZ_EMERGENCY_TEMP_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The emergency temperature in the base unit of measure. "
        },
        "HAZ_CONTROL_TEMP": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The hazardous control temperature to report for this order release line. "
        },
        "HAZ_CONTROL_TEMP_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The hazardous control temperature unit of measure. "
        },
        "HAZ_CONTROL_TEMP_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The hazardous control temperature in the base unit of measure. "
        },
        "HAZ_SUBSIDIARY_HAZARD": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The subsidiary hazard represents a Department of Transportation-specified code pertaining to the cleanup of a spill of a hazardous material. "
        },
        "HAZ_INHALATION_HAZARD_ZONE": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "values": [
            "ZONE A",
            "ZONE B",
            "ZONE C",
            "ZONE D"
          ],
          "info": "This zone indicates the area of a toxicity hazard based on the concentration of the hazardous material. "
        },
        "HAZ_EMERGENCY_RESPONSE_INFO": {
          "type": "VARCHAR2(25)",
          "nullable": true,
          "info": "The emergency response information is a number associated with the International Maritime Organization (IMO), which promulgates, encourages, and enforces the highest standards of marine safety in vessel transport. Enter an IMDG emergency response number for this hazardous material. "
        },
        "HAZ_NOS_TECHNICAL_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The Not Otherwise Specified (NOS) indicator if the material is composed of other chemicals not specified add the technical name. "
        },
        "HAZ_NET_EXPLOSV_CONTENT_WEIGHT": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The hazardous net explosive content weight is the net weight of the explosive contents of the order release line. "
        },
        "HAZ_NET_EXPL_CNTNT_WT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "The hazardous net explosive content unit of measure. "
        },
        "HAZ_NET_EXPL_CONTENT_WT_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The hazardous net explosive content in the base unit of measure. "
        },
        "HAZ_MP_TECHNICAL_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The marine pollutant technical name for this hazardous substance. "
        },
        "HAZ_IS_LIMITED_QUANTITY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator for the limited quantity residual amounts. "
        },
        "HAZ_PSA_SINGAPORE_GROUP": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "For the hazardous PSA Singapore Group enter a I, II, OR III. This regulates the cost of hazardous charge/cost at the Singapore destination. "
        },
        "HAZ_HAZARDOUS_DESCRIPTION": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "A hazardous description for documentation. "
        },
        "HAZ_IS_REPORTABLE_QUANTITY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator, the reportable quantity (RQ) indicator if the material is composed of quantities of other chemicals that are hazardous and must be reported by concentration percentage. RQs are the chemical components of a hazardous item that have reached a threshold in a shipping container that make them reportable as hazardous items. "
        },
        "HAZ_RQ_TECHNICAL_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The reportable quantity technical name. "
        },
        "HAZ_ACTIVITY": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The hazardous activity field indicates the level of radioactivity of the product. "
        },
        "HAZ_IS_TOXIC_INHALATION": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator defining the hazardous toxic inhalation value. "
        },
        "HAZ_IS_PASSENGER_AIRCRAFT_FORB": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator specifying the passenger aircraft forbidden indicator if the material cannot be transported on passenger aircraft. "
        },
        "HAZ_IS_COMMERCIAL_AIRCRAFT_FOR": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator specifying the commercial aircraft forbidden indicator if the material cannot be transported on passenger aircraft. "
        },
        "HAZ_IS_OIL_CONTAINED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator that the check hazardous is oil contained field if the material is an oil-based product. "
        },
        "HAZ_NOS_TECHNICAL_NAME_2": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The not otherwise specified (NOS) field if the material is composed of other chemicals not specified add the technical name. You can specify up to 2. "
        },
        "HAZ_RQ_TECHNICAL_NAME_2": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The reportable quantity technical name. You can specify up to 2. "
        },
        "HAZ_MP_TECHNICAL_NAME_2": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The marine pollutant technical name for this hazardous substance. You can specify up to 2. "
        },
        "HAZARDOUS_CLASSIFICATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "HAZARDOUS_CLASSIFICATION",
          "info": "The hazardous classification GID. "
        },
        "MANUFACTURED_COUNTRY_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "The country code GID where this order release line was manufactured. "
        },
        "IS_DRAWBACK": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator defining if this order release line is part of the duty drawback program. "
        },
        "BILLED_QUANTITY": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The billed quantity for order release line goods. "
        },
        "BILLED_QUANTITY_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The billed quantity unit of measure. "
        },
        "BILLED_QUANTITY_UOM_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The billed quantity unit of measure type. "
        },
        "PRICE_PER_UNIT": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The price per unit for the order release line to indicate the amount billed. "
        },
        "PRICE_PER_UNIT_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The price per unit in the base currency. "
        },
        "PRICE_PER_UNIT_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The price per unit currency GID. "
        },
        "TOTAL_BILLED_AMT": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The total billed amount to the customer for the line. It can contain handling and additional costs beyond goods. "
        },
        "TOTAL_BILLED_AMT_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The total billed amount in the base currency. "
        },
        "TOTAL_BILLED_AMT_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "The total billed amount currency GID. "
        },
        "BRAND_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The brand name. For informational purposes. "
        },
        "HAZ_IS_NOS": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator defining this order release line as a hazardous not otherwise specified. "
        },
        "HAZ_IS_MARINE_POLLUTANT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator defining this order as a marine pollutant. "
        },
        "HAZ_ERG": {
          "type": "VARCHAR2(25)",
          "nullable": true,
          "info": "The ERG (Emergency Response Guide) field. The page number is required for documentation purposes. "
        },
        "HAZ_ERG_AIR": {
          "type": "VARCHAR2(25)",
          "nullable": true,
          "info": "The ERG (Emergency Response Guide) field for air. The page number is required for documentation purposes. "
        },
        "HAZ_EMS": {
          "type": "VARCHAR2(25)",
          "nullable": true,
          "info": "The EMS (Emergency aboard Ship) field. The page number is required for documentation. "
        },
        "PRICE_PER_UNIT_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The unit of measurement this unit price is based on. "
        },
        "HAZ_COMPATIBILITY_GROUP": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "J",
            "K",
            "L",
            "N",
            "S"
          ],
          "info": "The hazardous material compatibility group associated to the order release line. "
        },
        "PACKAGE_LENGTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The package length for order release line; overrides length on packaged item. "
        },
        "PACKAGE_LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The package length unit of measure. "
        },
        "PACKAGE_LENGTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The package length in the base unit of measure. "
        },
        "PACKAGE_WIDTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The package width for order release line; overrides width on packaged item. "
        },
        "PACKAGE_WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The packaged width unit of measure. "
        },
        "PACKAGE_WIDTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The packaged width in the base unit of measure. "
        },
        "PACKAGE_HEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The package height for order release line; overrides height on packaged item. "
        },
        "PACKAGE_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The package height unit of measure. "
        },
        "PACKAGE_HEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The packaged height in the base unit of measure. "
        },
        "PACKAGE_DIAMETER": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The package diameter for order release line; overrides diameter on packaged item. "
        },
        "PACKAGE_DIAMETER_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The package diameter unit of measure. "
        },
        "PACKAGE_DIAMETER_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The package diameter in the base unit of measure. "
        },
        "PACKAGE_CORE_DIAMETER": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The package core diameter for order release line; overrides core diameter on packaged item. Used for products such as roll of paper that have different dimensions. "
        },
        "PACKAGE_CORE_DIAMETER_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The package core diameter unit of measure. "
        },
        "PACKAGE_CORE_DIAMETER_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The package core diameter in the base unit of measure. "
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
        "ORDER_BASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OB_ORDER_BASE",
          "info": "The order base from which this order release line was built. "
        },
        "OB_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OB_LINE",
          "info": "The order base line from which this order release line was built. "
        },
        "HAZ_ALL_PACKED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Flag to indicate the package is \"All packed in one\". "
        },
        "HAZ_AUTHORIZATION": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "The authorization for the dangerous goods shipment. The authorization field is only required to state special governmental authorizations that are required because of the provisions or packing materials shipped with. "
        },
        "HAZ_CHEMICAL_FORMULA": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "The basic chemical description of the substance. "
        },
        "HAZ_CONCENTRATION_PERCENT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Required if the dangerous goods UN number is 2031, 1796, 1826, or 1873. Enter the percentage of dangerous goods concentration if the above condition applies. "
        },
        "HAZ_CRIT_SAFETY_INDEX": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "A measurement for packages containing fissile material that is determined by dividing the number 50 by the smaller of the numbers determined using the rules in section 10.6.2.4.3 of the IATA Dangerous Goods Regulation Guide. "
        },
        "HAZ_APPROVAL_EXEMPTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "HAZMAT_APPROVAL_EXEMPTION",
          "info": "The hazardous approval exemption GID. "
        },
        "HAZ_IDG_ADD_DESC_INFO": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "The hazmat IDG additional description information. "
        },
        "HAZ_MAX_QUANTITY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum passenger volume or the maximum cargo volume for the item. Used in Q- Value calculation. "
        },
        "HAZ_OUTER_PACKAGING_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Outer packaging type if packing type = All packed in one. "
        },
        "HAZ_OUTER_PACKING_COUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The outer packing count. "
        },
        "HAZ_IS_OVERPACK": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Flag to indicate the package is an \"overpack\". "
        },
        "HAZ_PACKAGE_TYPE": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "The hazmat package type of the dangerous goods shipment. "
        },
        "HAZ_PACKING_COUNT": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The packing count (number of packaged units). "
        },
        "HAZ_PACKING_INSTRUCTIONS": {
          "type": "VARCHAR2(4)",
          "nullable": true,
          "info": "Required for dangerous goods shipments, unless the dangerous goods class is radioactive or not restricted. See Table 4.2 columns G, I, or K of the IATA Dangerous Goods Regulation Guide. "
        },
        "HAZ_PHYSICAL_FORM": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "P",
            "S",
            "L",
            "G"
          ],
          "info": "A description of the physical form of the radioactive substance: S(p)ecial, (S)olid, (L)iquid, (G)as. "
        },
        "HAZ_Q_VALUE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The ratio used to indicate that the combined quantities in \"all packed in one\" package are within the maximum allowable limits. "
        },
        "HAZ_QUANTITY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The hazmat item quantity. "
        },
        "HAZ_RADIOACTIVE_LABEL": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "1",
            "2",
            "3"
          ],
          "info": "The type of label on the shipment. W1 (White I), Y2 (Yellow II), Y3 (Yellow III). "
        },
        "HAZ_RAD_PACKAGING": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "1",
            "2",
            "3",
            "A",
            "B",
            "U",
            "C"
          ],
          "info": "A description of the type of packaging the substance is contained in. Acceptable package types are listed in section 10.5 of the dangerous goods regulations guide: Expected (Expected), Industrial ip1 (Industrial Type 1(IP-1)), Industrial ip2 (Industrial Type 2(IP-2)), Industrial ip3 (Industrial Type 3(IP-3)), Type a (Type A), Type b(m) ( Type B(M)), Type b(u) ( Type B(U)), Type c ( Type C ). "
        },
        "HAZ_RADIOACTIVITY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "A measurement of the activity of the shipment. For fissile material, the weight of the material in grams or kilograms may be substituted for the activity measurement. "
        },
        "HAZ_RADIOACTIVITY_UNITS": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "B",
            "K",
            "M",
            "G",
            "T",
            "P"
          ],
          "info": "The units that the activity were measured in. This must be in Becquerel units (or multiples thereof): Bq (Becquerel), kBq (kilobecquerel), MBq (megabecquerel), GBq (gigabecquerel), TBq (terabecquerel), PBq (petabecquerel). "
        },
        "HAZ_RADIONUCLIDE": {
          "type": "VARCHAR2(35)",
          "nullable": true,
          "info": "The radionuclide assigned to the substance being shipped. A table of basic radionuclides is available in the IATA Dangerous Goods Regulation Guide section 10.4.A.  For example, aluminum (13) has a radionuclide Al-26. "
        },
        "HAZ_SPECIAL_PROVISIONS": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Indicates dangerous goods (DG) are being shipped under one of the special provisions listed in the IATA Dangerous Goods Regulation Guide, section 4.4.  There appear to be 146 different provisions, and multiple provisions may apply to a single item in some cases. "
        },
        "HAZ_SUBSTANCE_NUMBER": {
          "type": "VARCHAR2(7)",
          "nullable": true,
          "info": "The hazardous materials substance number. "
        },
        "HAZ_SURFACE_READING": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The surface reading of the radiation exposure for the package. This reading must be measured in mrem/h. "
        },
        "HAZ_TRANSPORT_INDEX": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "A number based on the radiation exposure of a package. This is determined based on the maximum measurement of the radiation in mrem/h at a distance of 1 meter from the package surface. "
        },
        "HAZ_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "l",
            "e",
            "f"
          ],
          "info": "The hazardous materials type. Valid values are: l = Limited Quantities, e = 500 KG Exemption, f = Fully Regulated (Purolater). "
        },
        "HAZ_UNITS": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "L",
            "G",
            "K",
            "R"
          ],
          "info": "IATA units for non UPS shipments (L=>Liters g=>Grams kg=>Kilograms kg G=>Kilograms Gross). "
        },
        "HAZ_EXT_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The item hazmat code as configured in the TNT EM. (For carrier TNT). "
        },
        "THU_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC_PROFILE",
          "info": "The transport handling unit profile (list of valid THUs for this order line) that is to be used when building the order release ship unit. If defined here it will take precedence to the data that is defined on the static packaged item table. "
        },
        "OB_LINE_REL_INSTR_SEQ": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The order base line release instruction sequence number, carried over from column OB_RELEASE_INSTRUCTION_SEQ in table OB_RELEASE_INSTRUCTION when the order release line is created from an order base line. "
        },
        "IS_SPLIT_ALLOWED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if the order release ship units that are created can be split into multiple pieces of equipment. "
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
        "ATTRIBUTE_NUMBER11": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER12": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER13": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER14": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER15": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER16": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER17": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER18": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER19": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER20": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_DATE11": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE12": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE13": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE14": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE15": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE16": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE17": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE18": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE19": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE20": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "PACK_WITH_GROUP": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Lines with different Pack with Groups cannot be packed into the same ship unit."
        }
      },
      "fk_tables": [
        "ALLOCATION_D",
        "ALLOCATION_OR_LINE_D",
        "CLAIM_LINE_ITEM",
        "DVE_CALCULATION_LINE",
        "LD_SCREENING_LINE",
        "OBL_TO_AGGREGATED_ORL",
        "ORDER_RELEASE_LINE_ACCESSORIAL",
        "ORDER_RELEASE_LINE_ATTRIBUTE",
        "ORDER_RELEASE_LINE_INV_PARTY",
        "ORDER_RELEASE_LINE_PARENT",
        "ORDER_RELEASE_LINE_REFNUM",
        "ORDER_RELEASE_LINE_REMARK",
        "ORDER_RELEASE_LINE_TEXT",
        "ORL_EQUIP_REF_UNIT_JOIN",
        "ORL_SPECIAL_SERVICE",
        "OR_LINE_PRU_DETAIL",
        "SHIPMENT_STOP_DEBRIEF",
        "SHIP_GROUP_D_OR",
        "SHIP_UNIT_LINE",
        "S_SHIP_UNIT_LINE"
      ]
    }
  }
};
