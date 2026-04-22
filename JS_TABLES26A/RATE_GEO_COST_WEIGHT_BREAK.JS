// RATE_GEO_COST_WEIGHT_BREAK.js

window.RATE_GEO_COST_WEIGHT_BREAK = {
  "tables": {
    "RATE_GEO_COST_WEIGHT_BREAK": {
      "description": "Indicates the load level in which the carrier starts to offer a discount.  For example, 1000 lbs of coal might be charged as .25/lb but be .15/lb once the carrier is asked to ship 10,000 lbs.",
      "columns": {
        "RATE_GEO_COST_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_GEO_COST",
          "info": "The GID for the rate geo cost group."
},
        "RATE_GEO_COST_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_GEO_COST",
          "info": "Internal rate geo cost sequence."
},
        "WEIGHT_BREAK_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "WEIGHT_BREAK",
          "info": "The GID for the weight break."
},
        "RATE_DISCOUNT_VALUE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Discount value for this group record."
},
        "RATE_DISCOUNT_VALUE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the rate discount value."
},
        "RATE_DISCOUNT_VALUE_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The rate discount value in base units."
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
}
      },
      "fk_tables": []
    }
  }
};