// RATE_GEO_COST.js

window.RATE_GEO_COST = {
  "tables": {
    "RATE_GEO_COST": {
      "description": "Contains the cost information for transporting goods in a particular geo, and the number of units included per cost.  For example, the cost could be $10 per unit, or could indicate $100 per 50 units.",
      "columns": {
        "RATE_GEO_COST_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_GEO_COST_GROUP",
          "info": "The GID for the rate geo cost group."
},
        "RATE_GEO_COST_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "An internal sequencing number for costs defined on a rate."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Records additional information about the rate cost. This description will appear as the shipment cost type on the Financial tab of the Shipment Manager when this rate cost is applied to a shipment. If this field is left blank, a default shipment cost type appears such as Base or Discount."
},
        "TARIFF_ITEM_NUMBER": {
          "type": "VARCHAR2(16)",
          "nullable": true,
          "info": "The Tariff fields are a set of informational field that let the service provider know the rate being used. The tariff item number can be used for all types of prices. If the service provider assigns an item number or a numeric extension for the authority number in the reference number to the price, then this field can be used to capture that information. The tariff item number is the next step below the tariff section."
},
        "TARIFF_SECTION": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "info": "The tariff section is the first division of granularity of a tariff and describes where the rate can be found. An informational field."
},
        "TARIFF_ITEM_NUMBER_SUFFIX": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "info": "The tariff item number suffix, if you have a suffix with your tariff item number. The tariff item number suffix works with the tariff item number. An informational field."
},
        "TARIFF_ITEM_PART": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "info": "The item part is a subdivision of an item. The item part is like the house number on a street (tariff item number) in a city (tariff section) in a state (tariff reference number)."
},
        "TARIFF_FREIGHT_CLASS_CODE": {
          "type": "VARCHAR2(5)",
          "nullable": true,
          "info": "The tariff freight class code specifies the freight classification associated with this tariff. Tariff freight class code references a system where the motor carrier industry has classified 'goods' by their shipping density instead of their composition or use. An informational field."
},
        "EX_PARTE": {
          "type": "VARCHAR2(4)",
          "nullable": true,
          "info": "Stores information related to the authority/government agency that relates to this rate."
},
        "RATE_BASIS_NUMBER": {
          "type": "VARCHAR2(6)",
          "nullable": true,
          "info": "The mileage factor published for rating purposes. This number is qualified by the rate basis qualifier. An informational field."
},
        "TARIFF_COLUMN": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "info": "A commodity classification that is used, as a means of control, for grouping of commodities in tariff applications."
},
        "TARIFF_DISTANCE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The distance on which the rate is based."
},
        "TARIFF_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Identifies the distance unit. Select a distance qualifier."
},
        "TARIFF_DISTANCE_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The tariff distance in base units."
},
        "DISTANCE_QUALIFIER": {
          "type": "CHAR(1)",
          "nullable": true,
          "values": [
                    "A",
                    "B",
                    "D",
                    "F",
                    "K",
                    "L",
                    "M",
                    "T",
                    "X"
          ],
          "info": "Identifies the distance unit for the tariff. Informational. Values ( A/B/D/F/K/L/M/T/X)."
},
        "RATE_BASIS_QUALIFIER": {
          "type": "CHAR(1)",
          "nullable": true,
          "values": [
                    "A",
                    "B",
                    "C",
                    "D",
                    "E",
                    "F",
                    "H",
                    "M",
                    "T",
                    "X",
                    "Y"
          ],
          "info": "Provides context for the rate basis number. Informational. For example, if the rate basis number is '83' as defined by the household goods miles definition which would explain the geography for the rate basis number. Values (A/B/C/D/E/F/H/M/T/X/Y)."
},
        "RATE_GEO_COST_OPERAND_SEQ": {
          "type": "NUMBER",
          "nullable": true,
          "foreign_key": "RATE_GEO_COST_OPERAND",
          "values": [
                    "NULL"
          ],
          "info": "Internal sequencing number for costs operand."
},
        "OPER1_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATABLE_OPERATOR",
          "info": "The GID for the operator."
},
        "LEFT_OPERAND1": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO_COST_OPERAND",
          "info": "The operator for the conditional. For example, <=: Less than or equal to, >: Greater than, <: Less than, >=: Greater than or equal to, =: Equal to etc."
},
        "LOW_VALUE1": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Operand value or low value if the operand requires low/high values. For example where the operator is between: value1 < Basis <= value2."
},
        "HIGH_VALUE1": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Operand value high value if the operand requires low/high values. For example where the operator is between: value1 < Basis <= value2."
},
        "AND_OR1": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "O",
                    "A",
                    "S"
          ],
          "info": "Used to combine conditional rules with values of SELECTED, AND, or OR. If you choose SELECTED, the system first finds matches for the first conditional rule, and then passes only those matches on to the next conditional rule, etc.."
},
        "OPER2_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATABLE_OPERATOR",
          "info": "The GID for the operator."
},
        "LEFT_OPERAND2": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO_COST_OPERAND",
          "info": "The operator for the conditional. For example, <=: Less than or equal to, >: Greater than, <: Less than, >=: Greater than or equal to, =: Equal to etc."
},
        "LOW_VALUE2": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Operand value or low value if the operand requires low/high values. For example where the operator is between: value1 < Basis <= value2."
},
        "HIGH_VALUE2": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Operand value high value if the operand requires low/high values. For example where the operator is between: value1 < Basis <= value2."
},
        "AND_OR2": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "Used to combine conditional rules with values of SELECTED, AND, or OR. If you choose SELECTED, the system first finds matches for the first conditional rule, and then passes only those matches on to the next conditional rule, etc.."
},
        "OPER3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATABLE_OPERATOR",
          "info": "The GID for the operator."
},
        "LEFT_OPERAND3": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO_COST_OPERAND",
          "info": "The operator for the conditional. For example, <=: Less than or equal to, >: Greater than, <: Less than, >=: Greater than or equal to, =: Equal to etc."
},
        "LOW_VALUE3": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Operand value or low value if the operand requires low/high values. For example where the operator is between: value1 < Basis <= value2."
},
        "HIGH_VALUE3": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Operand value high value if the operand requires low/high values. For example where the operator is between: value1 < Basis <= value2."
},
        "AND_OR3": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "O",
                    "A",
                    "S"
          ],
          "info": "Used to combine conditional rules with values of SELECTED, AND, or OR. If you choose SELECTED, the system first finds matches for the first conditional rule, and then passes only those matches on to the next conditional rule, etc.."
},
        "OPER4_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATABLE_OPERATOR",
          "info": "The GID for the operator."
},
        "LEFT_OPERAND4": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO_COST_OPERAND",
          "info": "The operator for the conditional. For example, <=: Less than or equal to, >: Greater than, <: Less than, >=: Greater than or equal to, =: Equal to etc."
},
        "LOW_VALUE4": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Operand value or low value if the operand requires low/high values. For example where the operator is between: value1 < Basis <= value2."
},
        "HIGH_VALUE4": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Operand value high value if the operand requires low/high values. For example where the operator is between: value1 < Basis <= value2."
},
        "CHARGE_AMOUNT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Amount to be charged per unit code and unit count. For example, the amount to be charge is 1 USD for every 3 pounds."
},
        "CHARGE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The currency code related to the charge amount."
},
        "CHARGE_AMOUNT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The charge amount in base units."
},
        "CHARGE_UNIT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The charge per unit of measure. For example, the amount to be charged is 1 USD for every 3 pounds. In this example pounds is the charge unit of measure code."
},
        "CHARGE_UNIT_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The charge unit count indicates the per amount for the charge. For example, the amount to be charged is 1 USD for every 3 pounds. In this example 3 is the charge unit count - 1 USD is charged for every 3 pounds."
},
        "CHARGE_MULTIPLIER": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO_COST_OPERAND",
          "info": "This is the basis option for which the cost accrues from the Basis field. Values (A/L/S/G/E/I)."
},
        "CHARGE_MULTIPLIER_SCALAR": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Enter the number of basis options that go with each amount in the Unit field."
},
        "CHARGE_ACTION": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "A",
                    "M",
                    "X",
                    "D",
                    "W"
          ],
          "info": "Charge action to be applied. Values (A/M/X/D/W)."
},
        "CHARGE_BREAK_COMPARATOR": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO_COST_OPERAND",
          "info": "Comparator between charges."
},
        "CHARGE_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "B",
                    "E"
          ],
          "info": "There are the following cost types: Charge Discount External Profile"
},
        "CHARGE_MULTIPLIER_OPTION": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "A",
                    "L",
                    "S",
                    "G",
                    "E",
                    "I"
          ],
          "info": "Controls how charge multipliers are applied against the specified cost. Values (A/L/S/G/E/I). There are a set of options:  Add individual multiplier values Greatest individual cost Choose lowest individual cost Collect costs separately"
},
        "CHARGE_MULTIPLIER2": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The basis option for which the cost accrues from the Basis field."
},
        "CHARGE_UNIT_COUNT2": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The number of basis options that go with each amount in the Unit field."
},
        "CHARGE_UNIT_UOM_CODE2": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The charge per unit of measure. For example, the amount to be charged is 1 USD for every 3 pounds. In this example pounds is the charge unit of measure code."
},
        "CHARGE_SEQUENCE": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "Charge sequence controls, in the order that the costs are calculated. Charge Sequence 1 is calculated before Charge Sequence 2."
},
        "DIM_RATE_FACTOR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DIM_RATE_FACTOR",
          "info": "The Dimensional (Dim) Rate Factor ID links to the definition of the dim rate factor. The dim rate factor calculates the dimensional weight of a shipment, typically for goods shipped via air or sea. The weight is calculated as: Volume of the shipment/Dimensional rate factor. The system uses the greater of dimensional weight and actual weight which is called the chargeable weight. This chargeable weight is used while rating the shipment."
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
          "info": "The type of rounding that will occur during rating. Value are: N=no rounding, I=round to nearest interval, F=floor, and C=ceiling."
},
        "ROUNDING_INTERVAL": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Numbers will be rounded (or truncated) to the nearest increment of this value."
},
        "ROUNDING_FIELDS_LEVEL": {
          "type": "NUMBER(2)",
          "nullable": true,
          "info": "Determines which kinds of fields will be affected by the rounding settings during costing. Values are 0-7, where 0=all fields, 1=none, 2=numeric fields only, 3=unit fields (weight, etc.), 4=currency, 5=numeric and unit fields, 6=numeric and currency fields, and 7=unit and currency fields."
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
          "info": "Determines when to apply the rounding rules. Values are A/N/C/O where A=always, N=never, C=conditionals only, and O=cost calculations only."
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
          "info": "When to apply deficit calculations. Values are Y/N/P where Y = Yes, N = No, and P = Payant Pour"
},
        "MIN_COST": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The minimum charge for a shipment. The minimum charge is absolute minimum charge that applies; so the calculated cost of a shipment will be compared to the minimum charge and the cost will always be greater than or equal to the minimum charge."
},
        "MIN_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The minimum charge currency code."
},
        "MIN_COST_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The minimum charge in the base currency."
},
        "MAX_COST": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The maximum cost is the absolute maximum rate that can be charged. The calculated rate cost is comparted to the maximum cost and the lower of the two values is what is charged."
},
        "MAX_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The maximum cost currency code."
},
        "MAX_COST_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The maximum cost in the base currency."
},
        "PAYMENT_METHOD_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PAYMENT_METHOD_CODE",
          "info": "The minimum charge in the base currency."
},
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date the rate is effective from."
},
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date the rate expires, and should no longer be considered for planning."
},
        "CALENDAR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CALENDAR",
          "info": "If the costs being defined is to be based on a calendar provide the Calendar ID."
},
        "IS_FILED_AS_TARIFF": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates if this rate cost has been filed as tariff. This is set to 'N' for new spot rates. Users may wish to set up a saved query to notify users if this rate is used."
},
        "TIER": {
          "type": "NUMBER",
          "nullable": true,
          "info": "If using tiered rating, assigning a number to this field allows RIQ to query tiered rates by simply specifying a tier number."
},
        "COST_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "C",
                    "D",
                    "P",
                    "E",
                    "L"
          ],
          "info": "Designates the type of the cost. C = Charge, D = Discount, P = Profile, E = External."
},
        "CALENDAR_ACTIVITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ACTIVITY",
          "info": "Allows the user to select a calendar activity for the calendar validation test."
},
        "RATE_UNIT_BREAK_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_UNIT_BREAK_PROFILE",
          "info": "The main rate unit break profile."
},
        "RATE_UNIT_BREAK_PROFILE2_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_UNIT_BREAK_PROFILE",
          "info": "The secondary rate unit break profile. It cannot have a value if the main profile GID is NULL."
},
        "CHARGE_BREAK_COMPARATOR2_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO_COST_OPERAND",
          "info": "The RBI used to lookup values in the secondary rate unit break profile."
},
        "EXTERNAL_RATING_ENGINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXTERNAL_RATING_ENGINE",
          "info": "For a cost type of E, specifies the external rating engine GID."
},
        "EXT_RE_FIELDSET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXT_RE_FIELDSET",
          "info": "For external rating engine GIDs of type GENERIC, this specifies the fieldset used to call out to the external engine."
},
        "COST_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ACCESSORIAL_CODE",
          "info": "Tags a cost with an accessorial code. This does not indicate that the cost is an accessorial. It is a way of identifying groups of costs."
},
        "LOGIC_PARAM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOGIC_PARAMETER_QUALIFIER",
          "info": "For a cost type of L, specifies the logic parameter qualifier (of type Currency) which contains the cost value used as the charge multiplier."
},
        "COST_CATEGORY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COST_CATEGORY",
          "info": "The cost category can be assigned to one or more rate costs in a rate record. The cost category can then be grouped into cost category sets which can then be used during the driver assignment process. During the rating process, only rate costs whose categories are contained in the specified set will be evaluated. The results will be sorted based on total weighted cost and the best option assigned."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
},
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ALLOW_ZERO_RBI_VALUE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "CALC_CHARGEABLE_WT_VOL_WITH": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "Calculate Chargeable Weight/Volume Using provides you with options for calculating the chargeable weight. If you select this field value as 'Shipment Total Dimensional Weight/Volume', chargeable weight/volume will be calculated based on the Shipment Total Dimensional Weight/Volume. If you select this field value as 'Sum of Individual Ship Unit Dimensional Weight/Volume', chargeable weight/volume will be calculated based on the Sum of Individual Ship Unit Dimensional Weight/Volume."
},
        "OPERAND_QUALIFIER1": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Determines the attribute/qualifier of the object on which the condition is based. For example, if the condition checks the value for flex field attribute1 = TEST, this column will hold value as attribute1, the flex field column name. If condition is on the reference number qualifier GLOG = ORDER_01 then this column will hold the value GLOG, the qualifier name."
},
        "OPERAND_QUALIFIER2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Determines the attribute/qualifier of the object on which the second condition is based. For example, if the condition checks the value for flex field attribute1 = TEST, this column will hold value as attribute1, the flex field column name. If condition is on the reference number qualifier GLOG = ORDER_01 then this column will hold the value GLOG, the qualifier name."
},
        "OPERAND_QUALIFIER3": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Determines the attribute/qualifier of the object on which the third condition is based. For example, if the condition checks the value for flex field attribute1 = TEST, this column will hold value as attribute1, the flex field column name. If the condition is on the reference number qualifier GLOG = ORDER_01 then this column will hold the value GLOG, the qualifier name."
},
        "OPERAND_QUALIFIER4": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Determines the attribute/qualifier of the object on which the condition is based. For example, if the condition checks the value for flex field attribute1 = TEST, this column will hold value as attribute1, the flex field column name. If the condition is on the reference number qualifier GLOG = ORDER_01 then this column will hold the value GLOG, the qualifier name."
},
        "CHARGE_QUALIFIER1": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Determines the attribute/qualifier of the object based on which the charge is to be calculated. For example, if the charge is based on some flex field attribute1, this column will hold value as attribute1, the flex field column name. If the charge is based on the reference number qualifier GLOG = ORDER_01 then this column will hold the value GLOG, the qualifier name."
},
        "CHARGE_QUALIFIER2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Determines the attribute/qualifier of the object based on which the charge is to be calculated. For example, if the charge is based on some flex field attribute1, this column will hold value as attribute1, the flex field column name. If the charge is based on the reference number qualifier GLOG = ORDER_01 then this column will hold the value GLOG, the qualifier name."
},
        "CHARGE_BREAK_COMP_QUALIFIER1": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Determines the attribute/qualifier of the object based on which the charge using unit breaks is to be calculated. For example, if the rate break is based on flex field attribute1, this column will hold value as attribute1, the flex field column name. If the rate break is based on the reference number qualifier GLOG = ORDER_01 then this column will hold the value GLOG, the qualifier name."
},
        "CHARGE_BREAK_COMP_QUALIFIER2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Determines the attribute/qualifier of the object based on which the charge using unit breaks is to be calculated. For example, if rate break is based on flex field attribute1, this column will hold value as attribute1, the flex field column name. If rate break is based on the reference number qualifier GLOG = ORDER_01 then this column will hold the value GLOG, the qualifier name."
}
      },
      "fk_tables": [
        "RATE_GEO_COST_UNIT_BREAK",
        "RATE_GEO_COST_WEIGHT_BREAK"
]
    }
  }
};