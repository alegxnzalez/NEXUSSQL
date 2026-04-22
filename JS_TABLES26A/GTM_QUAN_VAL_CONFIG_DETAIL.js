// GTM_QUAN_VAL_CONFIG_DETAIL.js

window.GTM_QUAN_VAL_CONFIG_DETAIL = {
  "tables": {
    "GTM_QUAN_VAL_CONFIG_DETAIL": {
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
        "GTM_QUAN_VAL_CONFIG_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "GTM_QUAN_VAL_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_QUAN_VAL_CONFIG"
},
        "CONFIG_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "CONFIG_VALUE1": {
          "type": "VARCHAR2(101)",
          "nullable": false
},
        "CONFIG_VALUE2": {
          "type": "VARCHAR2(101)",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};