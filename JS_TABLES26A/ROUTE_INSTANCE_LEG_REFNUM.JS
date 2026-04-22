// ROUTE_INSTANCE_LEG_REFNUM.js

window.ROUTE_INSTANCE_LEG_REFNUM = {
  "tables": {
    "ROUTE_INSTANCE_LEG_REFNUM": {
      "columns": {
        "ROUTE_INSTANCE_LEG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ROUTE_INSTANCE_LEG",
          "info": "Part of PK.  FK for Route Instance Leg."
},
        "ROUTE_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ROUTE_REFNUM_QUAL",
          "info": "Part of PK.  FK for Route Refnum Qual."
},
        "ROUTE_REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
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
}
      },
      "fk_tables": []
    }
  }
};