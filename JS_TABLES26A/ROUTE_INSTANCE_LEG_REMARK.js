// ROUTE_INSTANCE_LEG_REMARK.js

window.ROUTE_INSTANCE_LEG_REMARK = {
  "tables": {
    "ROUTE_INSTANCE_LEG_REMARK": {
      "columns": {
        "ROUTE_INSTANCE_LEG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ROUTE_INSTANCE_LEG",
          "info": "Part of PK.  FK for Route Instance Leg."
},
        "REMARK_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Part of PK."
},
        "REMARK_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REMARK_QUAL",
          "info": "FK for Remark Qual."
},
        "REMARK_TEXT": {
          "type": "VARCHAR2(4000)",
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
}
      },
      "fk_tables": []
    }
  }
};