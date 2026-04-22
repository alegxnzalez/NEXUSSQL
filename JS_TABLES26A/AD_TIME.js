// AD_TIME.js

window.AD_TIME = {
  "tables": {
    "AD_TIME": {
      "columns": {
        "DW_DATE": {
          "type": "DATE",
          "nullable": false,
          "key_value": true
},
        "YEAR": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "QUARTER_ID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "MONTH_ID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "WEEK_ID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DAY_OF_WEEK_ID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DAY_OF_MONTH": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DAY_OF_YEAR": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "MONTH": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DAY_OF_WEEK": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "QUARTER": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "WEEK": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "WEEKDAY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "HOLIDAY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "FISCAL_PERIOD": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "SEASON": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "EVENT": {
          "type": "VARCHAR2(50)",
          "nullable": true
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
        "FISCAL_YEAR": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "FISCAL_QUARTER_ID": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "FISCAL_MONTH_ID": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "FISCAL_WEEK_ID": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "FISCAL_DAY": {
          "type": "VARCHAR2(50)",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};