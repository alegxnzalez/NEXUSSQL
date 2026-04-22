// GTM_TIP_AUTH_REGISTRATION.js

window.GTM_TIP_AUTH_REGISTRATION = {
  "tables": {
    "GTM_TIP_AUTH_REGISTRATION": {
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
        "GTM_REGISTRATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_REGISTRATION",
          "info": "Registration GID associated with Trade Incentive Program Authorization"
}
      },
      "fk_tables": []
    }
  }
};