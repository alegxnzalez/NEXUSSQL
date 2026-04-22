// RATE_GEO_TIME_PERIOD_D.js

window.RATE_GEO_TIME_PERIOD_D = {
  "tables": {
    "RATE_GEO_TIME_PERIOD_D": {
      "description": "This is an association between the shipment and the time period.",
      "columns": {
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT"
},
        "RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_GEO_TIME_PERIOD"
},
        "RATE_GEO_TIME_PERIOD_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_GEO_TIME_PERIOD"
},
        "ASSIGN_DATE": {
          "type": "DATE",
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