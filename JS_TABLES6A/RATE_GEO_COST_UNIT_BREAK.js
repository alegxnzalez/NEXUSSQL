// RATE_GEO_COST_UNIT_BREAK.js

window.RATE_GEO_COST_UNIT_BREAK = {
  "tables": {
    "RATE_GEO_COST_UNIT_BREAK": {
      "columns": {
        "RATE_GEO_COST_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_GEO_COST",
          "info": "The GID for the rate geo cost group. "
        },
        "RATE_GEO_COST_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_GEO_COST",
          "info": "Sequence number for the rate geo cost. "
        },
        "RATE_UNIT_BREAK_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_UNIT_BREAK",
          "info": "The GID for the rate unit break. "
        },
        "RATE_UNIT_BREAK2_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_UNIT_BREAK",
          "info": "For rates using a 2-D profile, this will specify the second profile GID (the row). "
        },
        "CHARGE_AMOUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Amount to be charged per unit code and unit count. For example, the amount to be charge is 1 USD for every 3 pounds. "
        },
        "CHARGE_AMOUNT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The currency code related to the charge amount. "
        },
        "CHARGE_AMOUNT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Charge amount in base currency. "
        },
        "CHARGE_DISCOUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Discount on charge amount. "
        },
        "MIN_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The minimum charge. The minimum charge is absolute minimum charge that applies; the calculated cost is be compared to the minimum charge and the cost will always be greater than or equal to the minimum charge. "
        },
        "MIN_COST_CURRENCY_GID": {
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
        "MAX_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum cost is the absolute maximum rate that can be charged. The calculated rate cost is compared to the maximum cost and the lower of the two values is what is charged. "
        },
        "MAX_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The maximum cost currency code. "
        },
        "MAX_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum cost in the base currency. "
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
          "info": "Date and time of the most recent data update."
        }
      },
      "fk_tables": []
    }
  }
};
