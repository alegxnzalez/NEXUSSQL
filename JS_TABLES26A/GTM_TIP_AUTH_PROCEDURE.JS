// GTM_TIP_AUTH_PROCEDURE.js

window.GTM_TIP_AUTH_PROCEDURE = {
  "tables": {
    "GTM_TIP_AUTH_PROCEDURE": {
      "columns": {
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
        "GTM_TIP_AUTHORIZATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TIP_AUTHORIZATION",
          "info": "Trade Incentive Program Authorization GID"
},
        "GTM_PROCEDURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_PROCEDURE",
          "info": "Procedure GID"
}
      },
      "fk_tables": []
    }
  }
};