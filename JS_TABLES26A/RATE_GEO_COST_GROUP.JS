// RATE_GEO_COST_GROUP.js

window.RATE_GEO_COST_GROUP = {
  "tables": {
    "RATE_GEO_COST_GROUP": {
      "columns": {
        "RATE_GEO_COST_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the rate cost group. Rate cost groups provide the ability to group separate costs together to produce a final rate."
},
        "RATE_GEO_COST_GROUP_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the rate cost group."
},
        "RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "RATE_GEO",
          "info": "The GID for the rate record related to the group."
},
        "RATE_GEO_COST_GROUP_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The sequence number used in the UI to display rate groups in order."
},
        "GROUP_NAME": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "The name used to identify the rate group."
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
          "info": "Defines the way the rating logic handles unit breaks. When there is a unit break defined for a rate, deficit calculations will make sure that the least expensive rate is selected. For example, if a rate break occurs at 1000 pounds, and an order weighs 999 pounds (with a rate of $15 per pound), then the system will look at the price of shipping at the next highest weight break (1001 pounds at $13 per pound) and apply the cheapest rate. In this example, the least expensive option is to use the 1001 pound rate even though only 999 pounds are being shipped. For details on the types, see rounding and deficit calculations."
},
        "MULTI_RATES_RULE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "A",
                    "M",
                    "X"
          ],
          "info": "Determine how costs within this group will be calculated."
},
        "RATE_GROUP_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "B",
                    "M"
          ],
          "info": "Set to Base to create a base cost or miscellaneous for all other cost types."
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
          "info": "Dictates how numbers are rounded. Select Ceiling to always round up, Floor to always round down, Nearest Interval to round up if it is 5 or greater and down if it is less than 5, or No Rounding to not round at all."
},
        "ROUNDING_INTERVAL": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Specifies what interval to round up or down to. For example, if you want to round up or down to the nearest 1, then you would enter 1 here. If you want to round up or down to the nearest tenth decimal place, then you would enter .1 here."
},
        "ROUNDING_FIELDS_LEVEL": {
          "type": "NUMBER(2)",
          "nullable": true,
          "info": "Specifies which fields in the rating process should be rounded. For example, you may only want currency fields rounded."
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
          "info": "Defines when rounding should take place. For example, you may only want rounding to be done on cost calculations."
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
      "fk_tables": [
        "RATE_GEO_COST"
]
    }
  }
};