// GTM_PROCEDURE_TYPE.js

window.GTM_PROCEDURE_TYPE = {
  "tables": {
    "GTM_PROCEDURE_TYPE": {
      "description": "The type of custom procedure applicable for the filing.",
      "columns": {
        "GTM_PROCEDURE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Gid"
},
        "GTM_PROCEDURE_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Procedure Type ID"
},
        "GTM_PROCEDURE_TYPE_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Procedure Type Name"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Procedure Type Description"
},
        "CODE": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Procedure Type Code"
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
      "fk_tables": [
        "GTM_PROCEDURE"
]
    }
  }
};