// CUTOFF_RECOVERY_TIME.js

window.CUTOFF_RECOVERY_TIME = {
  "tables": {
    "CUTOFF_RECOVERY_TIME": {
      "columns": {
        "RATE_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Rate service."
},
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Service provider."
},
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Location."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
},
        "CUTOFF_TIME": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Duration the delivery must arrive  before service provider departs from origin"
},
        "CUTOFF_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "Unit of measure for cutoff_time."
},
        "CUTOFF_TIME_BASE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Comparison value"
},
        "RECOVERY_TIME": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Duration the delivery must wait after service provider arrives at destination"
},
        "RECOVERY_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "Unit of measure."
},
        "RECOVERY_TIME_BASE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Comparison value."
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
      "fk_tables": [
        "CUTOFF_RECOVERY_TIME_D"
]
    }
  }
};