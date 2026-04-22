// GTM_QUAN_VAL_CONFIG.js

window.GTM_QUAN_VAL_CONFIG = {
  "tables": {
    "GTM_QUAN_VAL_CONFIG": {
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
        "GTM_QUAN_VAL_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "GTM_QUAN_VAL_CONFIG_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true
},
        "CONFIG_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false
}
      },
      "fk_tables": [
        "GTM_CONSOL_CRITERIA",
        "GTM_QUAN_VAL_CONFIG_DETAIL"
]
    }
  }
};