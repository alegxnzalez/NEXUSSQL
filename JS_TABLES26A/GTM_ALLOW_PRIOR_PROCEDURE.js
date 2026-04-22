// GTM_ALLOW_PRIOR_PROCEDURE.js

window.GTM_ALLOW_PRIOR_PROCEDURE = {
  "tables": {
    "GTM_ALLOW_PRIOR_PROCEDURE": {
      "description": "Associate a Customs Procedure and all allowed Prior Procedures",
      "columns": {
        "GTM_PROCEDURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_PROCEDURE",
          "info": "Current Procedure ID"
},
        "GTM_PRIOR_PROCEDURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_PROCEDURE",
          "info": "Prior Procedure ID"
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