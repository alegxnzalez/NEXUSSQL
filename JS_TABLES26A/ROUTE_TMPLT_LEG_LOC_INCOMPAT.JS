// ROUTE_TMPLT_LEG_LOC_INCOMPAT.js

window.ROUTE_TMPLT_LEG_LOC_INCOMPAT = {
  "tables": {
    "ROUTE_TMPLT_LEG_LOC_INCOMPAT": {
      "columns": {
        "ROUTE_TEMPLATE_LEG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ROUTE_TEMPLATE_LEG",
          "info": "Part of PK.  FK for Route Template Leg."
},
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION",
          "info": "Part of PK.  FK for Location."
},
        "ACTIVITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ACTIVITY",
          "values": [
                    "LOAD",
                    "RECEIVE",
                    "ALL"
          ],
          "info": "FK for Activity."
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