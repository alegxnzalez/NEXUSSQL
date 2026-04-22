// GTM_AUDIT_CONTROL_SERVICE.js

window.GTM_AUDIT_CONTROL_SERVICE = {
  "tables": {
    "GTM_AUDIT_CONTROL_SERVICE": {
      "description": "Specifies whether or not to audit a GTM service.",
      "columns": {
        "GTM_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_SERVICE"
},
        "AUDIT_DOMAIN": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "AUDIT_CONTROL"
},
        "IS_AUDIT_ON": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
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