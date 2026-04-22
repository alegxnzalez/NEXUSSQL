// RATE_SERVICE_TYPE.js

window.RATE_SERVICE_TYPE = {
  "tables": {
    "RATE_SERVICE_TYPE": {
      "description": "A list of values for unique rate service types.  A service type determines how a rate service is calculated.  Example of service type:   LOOKUP.  This means that the rate service is determined by looking up a value in a table.  Example 2:  DAYDURATION.  This means that the delivery is needed within a particular number of business days, and the calculation will include a lookup within a calendar to calculate expected delivery date.",
      "columns": {
        "RATE_SERVICE_TY": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "key_value": true
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
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE",
          "info": "OTM Release ID"
}
      },
      "fk_tables": [
        "RATE_SERVICE"
]
    }
  }
};