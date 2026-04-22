// AF_COST_VS_REVENUE.js

window.AF_COST_VS_REVENUE = {
  "tables": {
    "AF_COST_VS_REVENUE": {
      "columns": {
        "YEAR": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
},
        "MONTH_ID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
},
        "TOTAL_TRANSPORTATION_COST": {
          "type": "NUMBER",
          "nullable": true
},
        "REVENUE": {
          "type": "NUMBER",
          "nullable": true
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
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
}
      },
      "fk_tables": []
    }
  }
};