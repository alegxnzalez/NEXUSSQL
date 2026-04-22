// CR_FORECAST_REFNUM.js

window.CR_FORECAST_REFNUM = {
  "tables": {
    "CR_FORECAST_REFNUM": {
      "description": "Reference Numbers for Lane Volume Forecasts",
      "columns": {
        "CR_FORECAST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CR_FORECAST"
},
        "CR_FORECAST_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CR_FORECAST_REFNUM_QUAL"
},
        "CR_FORECAST_REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": false
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
}
      },
      "fk_tables": []
    }
  }
};