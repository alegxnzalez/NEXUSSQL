// GTM_CONTROL_TYPE.js

window.GTM_CONTROL_TYPE = {
  "tables": {
    "GTM_CONTROL_TYPE": {
      "columns": {
        "GTM_CONTROL_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "GTM_CONTROL_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "GTM_CONTROL_CATEGORY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_CONTROL_CATEGORY"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(2000)",
          "nullable": true
},
        "GTM_REGULATION_REFERENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_REGULATION_REFERENCE"
},
        "GTM_REGIME_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_REGIME"
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
        "GTM_CONTROL_CODE"
]
    }
  }
};