// ACCESSORIAL_COST.js

window.ACCESSORIAL_COST = {
  "tables": {
    "ACCESSORIAL_COST": {
      "columns": {
        "ACCESSORIAL_COST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "ACCESSORIAL_COST_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true
},
        "LEFT_OPERAND1": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO_COST_OPERAND"
},
        "OPER1_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATABLE_OPERATOR"
},
        "LOW_VALUE1": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "HIGH_VALUE1": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "AND_OR1": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "A",
                    "O",
                    "S"
          ]
},
        "LEFT_OPERAND2": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO_COST_OPERAND"
},
        "OPER2_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATABLE_OPERATOR"
},
        "LOW_VALUE2": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "HIGH_VALUE2": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "AND_OR2": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "A",
                    "O",
                    "S"
          ]
},
        "LEFT_OPERAND3": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO_COST_OPERAND"
},
        "OPER3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATABLE_OPERATOR"
},
        "LOW_VALUE3": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "HIGH_VALUE3": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "AND_OR3": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "A",
                    "O",
                    "S"
          ]
},
        "LEFT_OPERAND4": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO_COST_OPERAND"
},
        "OPER4_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATABLE_OPERATOR"
},
        "LOW_VALUE4": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "HIGH_VALUE4": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "CHARGE_MULTIPLIER": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO_COST_OPERAND"
},
        "CHARGE_AMOUNT": {
          "type": "NUMBER",
          "nullable": true
},
        "CHARGE_AMOUNT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
},
        "CHARGE_AMOUNT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "CHARGE_UNIT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "CHARGE_UNIT_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true
},
        "CHARGE_MULTIPLIER_SCALAR": {
          "type": "NUMBER",
          "nullable": true
},
        "CHARGE_BREAK_COMPARATOR": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO_COST_OPERAND"
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
          ]
},
        "CHARGE_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "B",
                    "E"
          ]
},
        "CHARGE_MULTIPLIER2": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO_COST_OPERAND"
},
        "CHARGE_UNIT_COUNT2": {
          "type": "NUMBER(10)",
          "nullable": true
},
        "CHARGE_UNIT_UOM_CODE2": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "USE_DEFAULTS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "CHARGE_SEQUENCE": {
          "type": "NUMBER(10)",
          "nullable": true
},
        "CHARGE_GROUP": {
          "type": "VARCHAR2(20)",
          "nullable": true
},
        "CHARGE_MULTIPLIER_OPTION": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "A",
                    "L",
                    "S",
                    "G",
                    "E",
                    "I"
          ]
},
        "RATE_GEO_COST_OPERAND_SEQ": {
          "type": "NUMBER",
          "nullable": true,
          "foreign_key": "RATE_GEO_COST_OPERAND"
},
        "DIM_RATE_FACTOR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DIM_RATE_FACTOR"
},
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true
},
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true
},
        "CALENDAR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "NOTES": {
          "type": "VARCHAR2(120)",
          "nullable": true
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
          "info": "The type of rounding that will occur during rating.  Value are: N=no rounding,I=round to nearest interval,F=floor, and C=ceiling."
},
        "ROUNDING_INTERVAL": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Numbers will be rounded (or truncated) to the nearest increment of this value."
},
        "ROUNDING_FIELDS_LEVEL": {
          "type": "NUMBER(2)",
          "nullable": true,
          "info": "Determines which kinds of fields will be affected by the rounding settings during costing.  Values are 0-7, where 0=all fields, 1=none, 2=numeric fields only, 3=unit fields (weight, etc.), 4=currency, 5=numeric and unit fields, 6=numeric and currency fields, and 7=unit and currency fields."
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
          "info": "Determines when to apply the rounding rules.  Values are A/N/C/O where A=always, N=never, C=conditionals only, and O=cost calculations only."
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
          "info": "When to apply deficit calculations. Values are Y/N/P where Y = Yes, N = No and P = Payant Pour"
},
        "MIN_COST": {
          "type": "NUMBER",
          "nullable": true
},
        "MIN_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
},
        "MIN_COST_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "MAX_COST": {
          "type": "NUMBER",
          "nullable": true
},
        "MAX_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
},
        "MAX_COST_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "PAYMENT_METHOD_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PAYMENT_METHOD_CODE",
          "info": "payment method to apply to the shipment cost when the shipment action to apply payment terms is executed"
},
        "IS_FILED_AS_TARIFF": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates if this accessorial cost has been filed as tariff.  This is set to 'N' for new spot rates.  Users may wish to set up a saved query to notify users if this rate is used."
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
          "info": "Designates the type of the cost.  C = Charge, D = Discount, P = Profile, E = External, L = Logic Parameter"
},
        "CALENDAR_ACTIVITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ACTIVITY",
          "info": "Allows the user to select a calendar activity for the calendar validation test"
},
        "RATE_UNIT_BREAK_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_UNIT_BREAK_PROFILE",
          "info": "The main rate unit break profile"
},
        "RATE_UNIT_BREAK_PROFILE2_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_UNIT_BREAK_PROFILE",
          "info": "The secondary rate unit break profile (cannot have a value if the main profile gid is null)"
},
        "CHARGE_BREAK_COMPARATOR2_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO_COST_OPERAND",
          "info": "The RBI used to lookup values in the secondary rate unit break profile"
},
        "EXTERNAL_RATING_ENGINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXTERNAL_RATING_ENGINE",
          "info": "For cost_type of E, specifies the external rating engine gid"
},
        "EXT_RE_FIELDSET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXT_RE_FIELDSET",
          "info": "For external rating engine gids of type GENERIC, this specifies the fieldset used to call out to the external engine"
},
        "COST_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ACCESSORIAL_CODE",
          "info": "Tags a cost with an accessorial code.  This does not indicate that the cost is an accessorial.  It is a way of identifying groups of costs."
},
        "LOGIC_PARAM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOGIC_PARAMETER_QUALIFIER",
          "info": "For cost_type of L, specifies the logic parameter qualifier (of type Currency) which contains the cost value used as the charge multiplier."
},
        "COST_CATEGORY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COST_CATEGORY"
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true
},
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "When 'N', indicates accessorial cost is inactive and should not be used."
},
        "OPERAND_QUALIFIER1": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Determines the attribute/qualifier of the object on which the condition is based. For example, if the condition is to check value for flex field attribute1 = TEST, this column will hold value as attribute1, the flex field column name. If the condition is on the reference number qualifier GLOG = ORDER_01 then this column will hold the value GLOG, the qualifier name."
},
        "OPERAND_QUALIFIER2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Determines the attribute/qualifier of the object on which the second condition is based. For example, if the condition is to check value for flex field attribute1 = TEST, this column will hold value as attribute1, the flex field column name. If condition is on the reference number qualifier GLOG = ORDER_01 then this column will hold the value GLOG, the qualifier name."
},
        "OPERAND_QUALIFIER3": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Determines the attribute/qualifier of the object on which the third condition is based. For example, if the condition is to check value for flex field attribute1 = TEST, this column will hold value as attribute1, the flex field column name. If the condition is on the reference number qualifier GLOG = ORDER_01 then this column will hold the value GLOG, the qualifier name."
},
        "OPERAND_QUALIFIER4": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Determines the attribute/qualifier of the object on which the condition is based. For example, if the condition is to check value for flex field attribute1 = TEST, this column will hold value as attribute1, the flex field column name. If the condition is on the reference number qualifier GLOG = ORDER_01 then this column will hold the value GLOG, the qualifier name."
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
          "info": "Determines the attribute/qualifier of the object based on which the charge using unit breaks is to be calculated. For example, if the rate break is based on flex field attribute1, this column will hold value as attribute1, the flex field column name. If the rate break is based on the reference number qualifier GLOG = ORDER_01 then this column will hold the value GLOG, the qualifier name."
}
      },
      "fk_tables": [
        "ACCESSORIAL_COST_UNIT_BREAK",
        "ACCESSORIAL_DEFAULT",
        "RATE_FACTOR_RULE",
        "RATE_GEO_ACCESSORIAL",
        "RATE_OFFERING_ACCESSORIAL",
        "RG_SPECIAL_SERVICE_ACCESSORIAL",
        "RO_SPECIAL_SERVICE_ACCESSORIAL",
        "SHIPMENT_COST",
        "SHIPMENT_INF_COST_D"
]
    }
  }
};